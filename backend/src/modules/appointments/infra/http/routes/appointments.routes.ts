import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppoitmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmenstController = new AppoitmentsController();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (req, res) => {
//   const appointments = await appointmentsRepository.find();

//   return res.json(appointments);
// });

appointmentsRouter.post('/', appointmenstController.create);

export default appointmentsRouter;
