import { Test, TestingModule } from '@nestjs/testing';
import { BieresService } from './bieres.service';

describe('BieresService', () => {
  let service: BieresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BieresService],
    }).compile();

    service = module.get<BieresService>(BieresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
