import { Controller, Get, Param } from '@nestjs/common';
import { SecretsManagerService } from './secrets-manager.service';

@Controller('secrets-manager')
export class SecretsManagerController {
  constructor(private readonly secretsManagerService: SecretsManagerService) {}

  @Get()
  async getSecretsList() {
    return await this.secretsManagerService.getSecretList();
  }

  @Get('/:secretName')
  async getSecret(@Param('secretName') secretName: string) {
    return await this.secretsManagerService.getSecret(secretName);
  }
}
