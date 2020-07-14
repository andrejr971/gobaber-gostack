import User from '../infra/typeorm/entities/User';

import ICreateUsersDTO from '../dtos/iCreateUsersDTO';

export default interface iUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUsersDTO): Promise<User>;
  save(user: User): Promise<User>;
}
