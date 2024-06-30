import { type ChatCompletion } from './../../static/types/openAiTypes/types';
import { openAiChat } from '../../utils/network';
import { OPEN_AI_API_KEY } from '@env'
import { tokens } from '../../static/constants';
import { authorizedRequest } from '../../utils/queries';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class OpenAIService {
  private static readonly API_KEY = OPEN_AI_API_KEY;

  static async getDescriptionByImage (image: string): Promise<ChatCompletion> {
    const payload = {
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: 'What’s in this image?' },
            {
              type: 'image_url',
              image_url: {
                url: image,
              },
            },
          ],
        },

      ],
      max_tokens: 300,
    };

    return await authorizedRequest(openAiChat, 'POST', tokens.access_token, payload, this.API_KEY);
  }
}
