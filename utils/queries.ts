import { tokens } from '../static/constants';
import { getData } from './localStorage';

interface ErrorResponse {
  status: number;
  message: string;
}

const handleResponse = async <T>(response: Response): Promise<T | null> => {
  if (response.ok) {
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  }
  const errorResponse: ErrorResponse = await response.json();
  throw new Error(errorResponse.message || 'Request failed');
};

const makeRequest = async <T>(
  url: string,
  method: string,
  headers: Record<string, string>,
  body?: object
): Promise<T> => {
  const isFormData = body instanceof FormData;

  const request: RequestInit = {
    method,
    headers: isFormData
      ? { 'Content-Type': 'multipart/form-data', ...headers }
      : { 'Content-Type': 'application/json', ...headers },
    body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
  };

  const response = await fetch(url, request);

  return (await handleResponse<T>(response)) as T;
};

export const authorizedRequest = async <T>(
  url: string,
  method: string,
  tokenType = tokens.access_token,
  body?: object
): Promise<T> => {
  const token = await getData(tokenType);

  if (!token) {
    throw new Error('Token is expired');
  }

  const headers = { Authorization: `Bearer ${token}` };
  const response = await makeRequest<T>(url, method, headers, body);
  return response;
};

export const unauthorizedRequest = async <T>(
  url: string,
  method: string,
  body?: object
): Promise<T> => {
  const response = await makeRequest<T>(url, method, {}, body);

  return response;
};
