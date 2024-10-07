import { Controller, Get } from '@nestjs/common';
import { TimbreService } from '../services/timbre.service';

@Controller('timbres')
export class TimbreController {
  constructor(private readonly timbreService: TimbreService) {}

  @Get('/')
  getTimbres() {
    return this.timbreService.getTimbre()
  }
}
