import { Module } from '@nestjs/common';
import { TimbreService } from './services/timbre.service';
import { TimbreController } from 'src/controllers/timbres.controller';

@Module({
  imports: [],
  controllers: [TimbreController],
  providers: [TimbreService],
})
export class AppModule {}
