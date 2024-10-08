import {Prop, raw, Schema, SchemaFactory} from "@nestjs/mongoose"
import { Date, HydratedDocument, Schema as MongooseSchema } from "mongoose"

export type TimbreDocument = HydratedDocument<Timbre>

@Schema()
export class Timbre {
    @Prop({required: true})
    id: string
    @Prop({required: true})
    author: string;

    @Prop({required: true})
    title: string;

    @Prop({type: Date, required: true})
    createdAt: Date;

    @Prop({type: Date, required: true})
    updatedAt: Date;

    @Prop(raw({
        model: {type: String, required: true},
        brand: {type: String, required: true},
        type:  {type: String, required: true},
        description:  {type: String},

    }))
    setup: Record<string, any>;

    @Prop({type: MongooseSchema.Types.Mixed, required: true})//usado para quando não se sabe a quantidade de props de um objeto
    configs: Record<string, number>
}

export const TimbreSchema = SchemaFactory.createForClass(Timbre)
