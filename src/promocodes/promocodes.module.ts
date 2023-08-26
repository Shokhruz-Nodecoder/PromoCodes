import { Module } from '@nestjs/common';
import { PromocodesService } from './promocodes.service';
import { PromocodesController } from './promocodes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PromoSchema } from './models/promos.model';
import { UsersModule } from 'src/users/users.module';
import { CompaniesModule } from 'src/companies/companies.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ schema: PromoSchema, name: 'Codes' }]),
    UsersModule,
    CompaniesModule,
  ],
  controllers: [PromocodesController],
  providers: [PromocodesService],
})
export class PromocodesModule {}
