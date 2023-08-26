import { Injectable } from '@nestjs/common';
import { CreatePromocodeDto } from './dto/create-promocode.dto';
import { UpdatePromocodeDto } from './dto/update-promocode.dto';
import {InjectModel} from "@nestjs/mongoose"
import {Model} from "mongoose"
@Injectable()
export class PromocodesService {
  constructor(@InjectModel("Codes") private readonly promos : Model<any>  ) {}; 
  async create({promo, companyId, userId}: CreatePromocodeDto) {
    const data = await this.promos.create({promo, companyId, userId})
    return {message : "Successfully created", data}
  }

  findAll() {
    return `This action returns all promocodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promocode`;
  }

  update(id: number, updatePromocodeDto: UpdatePromocodeDto) {
    return `This action updates a #${id} promocode`;
  }

  remove(id: number) {
    return `This action removes a #${id} promocode`;
  }
}
