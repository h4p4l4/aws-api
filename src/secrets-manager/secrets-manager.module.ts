import { Module } from '@nestjs/common';
import { SecretsManagerController } from './secrets-manager.controller';
import { SecretsManagerService } from './secrets-manager.service';

@Module({
  controllers: [SecretsManagerController],
  providers: [SecretsManagerService],
})
export class SecretsManagerModule {}
