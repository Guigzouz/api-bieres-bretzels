import { Test, TestingModule } from '@nestjs/testing';
import { BieresController } from './bieres.controller';
import { BieresService } from './bieres.service';

describe('BieresController', () => {
  let controller: BieresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BieresController],
      providers: [BieresService],
    }).compile();

    controller = module.get<BieresController>(BieresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
