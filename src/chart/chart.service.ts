import { Injectable } from '@nestjs/common';
import { BieresService } from 'src/bieres/bieres.service';

@Injectable()
export class ChartService {
constructor(private BieresService:BieresService){};

    async findAll(){
        const beers = await this.BieresService.findAll();
        const blondes = beers.filter(blonde => blonde.type == 'BLO');
        const brunes = beers.filter(brune => brune.type == 'BRU');
        const blanches = beers.filter(blanche => blanche.type == 'BLA');

        const data = [blondes.length, brunes.length, blanches.length];
        return data
    }
}

