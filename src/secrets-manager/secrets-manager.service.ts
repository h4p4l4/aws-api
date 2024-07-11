import { Injectable } from '@nestjs/common';
import { SecretsManager } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { Constants } from '../common/Constants';
import { GetSecretValueResponse } from 'aws-sdk/clients/secretsmanager';

@Injectable()
export class SecretsManagerService {
  private readonly secretsManager: SecretsManager;

  constructor(private readonly configService: ConfigService) {
    const AWS_REGION: string = this.configService.get<string>(
      Constants.ENV.AWS_REGION,
    );

    this.secretsManager = new SecretsManager({ region: AWS_REGION });
  }

  async getSecretList() {
    const response = this.secretsManager.listSecrets({});

    console.log('--->response<---', response);

    return response;
  }

  //TODO fix any
  async getSecret(secretName: string): Promise<any> {
    const response: GetSecretValueResponse = await this.secretsManager
      .getSecretValue({
        SecretId: secretName,
      })
      .promise();

    if (response.SecretString) {
      return JSON.parse(response.SecretString);
    }

    return null;
  }
}
