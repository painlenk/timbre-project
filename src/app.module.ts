import { Module } from '@nestjs/common';
import { TimbreService } from './services/timbre.service';
import { TimbreController } from 'src/controllers/timbres.controller';
import { TimbreRepository } from './repositories/TimbreRepository';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Timbre, TimbreSchema } from './schemas/timbre.schema';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    MongooseModule.forFeature([{ name: Timbre.name, schema: TimbreSchema }])
  ],
    
  controllers: [TimbreController],
  providers: [TimbreService, TimbreRepository],
})
export class AppModule {}
