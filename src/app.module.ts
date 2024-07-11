import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SecretsManagerModule } from './secrets-manager/secrets-manager.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    SecretsManagerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
