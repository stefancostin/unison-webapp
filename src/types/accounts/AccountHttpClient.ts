import { AuthResponse } from './AuthResponse';
import { AuthRequest } from './AuthRequest';

export interface AccountHttpClient {
  authenticate: (credentials: AuthRequest) => Promise<AuthResponse>;
}
