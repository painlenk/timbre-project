import { Injectable } from "@nestjs/common";

@Injectable()
export class TimbreRepository {
    constructor(){}

    getAllTimbres() {
        //@TODO - create logic getAllTimbres in DB
        const timbres = [
                {
                title: 'slash timbre',
                author: 'jhon doe',
                createAt:String(new Date('2011-10-10T14:48:00')),
                updatedAt: String(new Date(Date.now())),
                setup: {
                model: 'ix-558',
                brand: 'meteor',
                type: 'amplifier',
                configs: {
                    gain: 9,
                    drive: false,
                    bass: 6,
                    middle: 6
                }
                }
            }
        ]

        return timbres
    }
}