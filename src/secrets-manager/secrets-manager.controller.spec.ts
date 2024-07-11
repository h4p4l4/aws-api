import { Test, TestingModule } from '@nestjs/testing';
import { SecretsManagerController } from './secrets-manager.controller';

describe('SecretsManagerController', () => {
  let controller: SecretsManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecretsManagerController],
    }).compile();

    controller = module.get<SecretsManagerController>(SecretsManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
