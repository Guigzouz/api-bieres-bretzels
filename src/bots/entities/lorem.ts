import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";


@Injectable()

export class Lorem{
    public constructor(private http: HttpService){}

    public async hello(){
        const response = await this.http.axiosRef.get("https://api.chucknorris.io/jokes/random");
        const result = response.data;
        const joke = result.value;
        return joke
    }   

    public react(message: string):string{
        if(message.includes('Chuck'))return "c'est monsieur Norris pour toi"
        return''
    }
}