import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose"
@Injectable()
export class ProductsService {
   constructor(@InjectModel("Products") private readonly  products : Model<any>) {}

 async  create({name, companyId, price}: CreateProductDto) {
    const data = await this.products.create({name, companyId, price})
    return {message : "Successfully created", data}
  }

  async findAll() {
    return await this.products.find()
  }

 async  findOne(id: string) {
   const data = await this.products.findById(id);
    return {message : "success", data} 
  }

  async update(id: string, {name, price}: UpdateProductDto) {
   const data =  await this.products.findByIdAndUpdate(id,{name, price});
    return {message : "Successfully updated", data}
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
