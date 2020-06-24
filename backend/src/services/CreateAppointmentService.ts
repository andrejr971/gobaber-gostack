import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmenstsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ provider_id, date }: Request): Promise<Appointment> {
    const appointmenstsRepository = getCustomRepository(AppointmentRepository);
    const appointmenstDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmenstsRepository.findByDate(
      appointmenstDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = appointmenstsRepository.create({
      provider_id,
      date: appointmenstDate,
    });

    await appointmenstsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
