import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  companyId: ObjectId;
}
