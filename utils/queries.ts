import AsyncStorage from '@react-native-async-storage/async-storage';
import { tokens } from '../static/constants';

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
  const request: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
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
  const token = await AsyncStorage.getItem(tokenType);
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
