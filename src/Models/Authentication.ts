import type { user_data } from "./user_data";

export class Authentication {
  access_token?: string;
  token_type?: string;
  refresh_token?: string;
  expires_in?: number;
  user?: user_data;

  constructor(init?: Partial<Authentication>) {
    Object.assign(this, init);
  }
}