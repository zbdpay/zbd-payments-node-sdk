// ZBD Payments Node SDK

import type { ZbdPayments } from '../client';

export abstract class APIResource {
  protected _client: ZbdPayments;

  constructor(client: ZbdPayments) {
    this._client = client;
  }
}
