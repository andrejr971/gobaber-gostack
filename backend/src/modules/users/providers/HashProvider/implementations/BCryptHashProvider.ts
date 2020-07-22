import iHashProvider from '../models/iHashProvider';
import { hash, compare } from 'bcryptjs';

class BCryptHashProvider implements iHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BCryptHashProvider;
