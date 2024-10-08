import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Timbre } from "src/schemas/timbre.schema";

@Injectable()
export class TimbreRepository {
    constructor(@InjectModel(Timbre.name) private timbreModel: Model<Timbre>){}

    async getAllTimbres(): Promise<Timbre[]> {
        return  await this.timbreModel.find().exec()
    }
       
}