import { container } from 'tsyringe';

import iHashProvider from '../providers/HashProvider/models/iHashProvider';
import BCryptHashProvider from '../providers/HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<iHashProvider>('HashProvider', BCryptHashProvider);
