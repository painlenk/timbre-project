import { Test, TestingModule } from '@nestjs/testing';
import {TimbreService } from '../services/timbre.service';
import { TimbreController } from './timbres.controller';
import { mock } from 'node:test';

describe('AppController', () => {
  let timbreController: TimbreController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TimbreController],
      providers: [TimbreService],
    }).compile();

    timbreController = app.get<TimbreController>(TimbreController);
  });

  describe('root', () => {
    const timbreMock = {
      title: 'slash timbre',
      author: 'jhon doe',
      createAt:String(new Date('2011-10-10T14:48:00')),
      updatedAt: String(new Date(Date.now())),
      setup: {
        model: 'ix-558',
        brand: 'meteor',
        type: 'amplifier',
        configs: {
          gain: 9,
          drive: false,
          bass: 6,
          middle: 6
        }
      }
    }

    it('should return a config timbre"', () => {
      expect(TimbreController).toBe(timbreMock);
    });
  });
});
