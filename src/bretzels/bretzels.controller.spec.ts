import { Test, TestingModule } from '@nestjs/testing';
import { BretzelsController } from './bretzels.controller';
import { BretzelsService } from './bretzels.service';

describe('BretzelsController', () => {
  let controller: BretzelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BretzelsController],
      providers: [BretzelsService],
    }).compile();

    controller = module.get<BretzelsController>(BretzelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
