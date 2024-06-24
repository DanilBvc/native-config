import { tokens } from '../../static/constants';
import { type Order } from '../../static/types/orderTypes/types';
import { basePaymentUrl, paymentCreateSlot } from '../../utils/network';
import { authorizedRequest } from '../../utils/queries';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PaymentService {
  static async createPayload (order: Order): Promise<{ url: string }> {
    return await authorizedRequest(basePaymentUrl, 'POST', tokens.access_token, order)
  }

  static async createPayloadSlot (incomingData: undefined): Promise<unknown> {
    return await authorizedRequest(paymentCreateSlot, 'POST', tokens.access_token, incomingData)
  }
}
