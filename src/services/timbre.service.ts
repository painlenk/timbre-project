import { Injectable } from '@nestjs/common';
import { TimbreRepository } from 'src/repositories/TimbreRepository';


@Injectable()
export class TimbreService {
  constructor(private readonly timbreRepository: TimbreRepository){}

  getTimbre() {
    return this.timbreRepository.getAllTimbres()
  }
}
