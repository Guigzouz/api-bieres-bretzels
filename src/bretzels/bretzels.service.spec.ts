import { Test, TestingModule } from '@nestjs/testing';
import { BretzelsService } from './bretzels.service';

describe('BretzelsService', () => {
  let service: BretzelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BretzelsService],
    }).compile();

    service = module.get<BretzelsService>(BretzelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
