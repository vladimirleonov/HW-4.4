import { INestApplication } from '@nestjs/common';
import { RegistrationModel } from '../../../../src/features/auth/auth/api/models/input/registration.input.model';
import request from 'supertest';

export class AuthTestManager {
  constructor(protected readonly app: INestApplication) {}

  async registration(
    registrationModel: RegistrationModel,
    statusCode: number = 204,
  ) {
    return request(this.app.getHttpServer())
      .post('/api/auth/registration')
      .send(registrationModel)
      .expect(statusCode);
  }
}
