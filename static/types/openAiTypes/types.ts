export interface ChatCompletion {
  choices: Array<{
    finish_reason: string;
    index: number;
    logprobs: string;
    message: string;
  }>;
  created: number;
  id: string;
  model: string;
  object: string;
  system_fingerprint: string;
  usage: {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
  };
}
