import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Socket } from "socket.io";
import { User } from "src/bots/entities/user";

@Injectable()

export class WhoIs {
    private users: {[ip: string]:User} = {};

    public constructor(private http: HttpService){}

    public async get(socket: Socket): Promise<User>{
        const ip = socket.client.conn.remoteAddress;
        if(!(ip in this.users))
        {
            const response = await this.http.axiosRef.get("https://randomuser.me/api");
            const profil = response.data.results[0];
            const name = profil.name.first;
            const user = new User(ip, socket.id, name);
            this.users[ip] = user
        }
        return this.users[ip]
    }
}
