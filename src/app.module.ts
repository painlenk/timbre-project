import { Module } from '@nestjs/common';
import { TimbreService } from './services/timbre.service';
import { TimbreController } from 'src/controllers/timbres.controller';
import { TimbreRepository } from './repositories/TimbreRepository';

@Module({
  imports: [],
  controllers: [TimbreController],
  providers: [TimbreService, TimbreRepository],
})
export class AppModule {}
