class user_data {
  email?: string;

  constructor(init: Partial<user_data>) {
    Object.assign(this, init);
  }
}

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