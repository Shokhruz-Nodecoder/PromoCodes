import {IsString, IsNotEmpty, Max} from "class-validator"
import { ObjectId } from "mongoose";

export class CreatePromocodeDto {
    @IsString()
    @IsNotEmpty()
    @Max(16)
    promo : string;

    @IsString()
    @IsNotEmpty()
    companyId : ObjectId
    
    @IsString()
    @IsNotEmpty()
    userId : ObjectId
}
