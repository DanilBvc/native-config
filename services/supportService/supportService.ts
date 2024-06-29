import { tokens } from '../../static/constants';
import { type TContactForm } from '../../static/types/userTypes/types';
import { supportUrl } from '../../utils/network';
import { authorizedRequest } from '../../utils/queries';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SupportService {
  static async sendSupportLetter (letter: TContactForm): Promise<void> {
    await authorizedRequest(supportUrl, 'POST', tokens.access_token, letter);
  }
}
