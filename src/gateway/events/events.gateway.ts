import { Logger } from '@nestjs/common';
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Groom } from '../../bots/entities/groom';
import { WhoIs } from '../../bots/entities/who-is';
import { Lorem } from 'src/bots/entities/lorem';
import { BotsModule } from 'src/bots/bots.module';


@WebSocketGateway()
export class EventsGateway 
  implements
    OnGatewayConnection<Socket>,
    OnGatewayDisconnect<Socket>
{

  private static LOGGER :Logger = new Logger('Gateway');
  private static CHANNEL = "message";

  constructor(private whoIs: WhoIs, private lorem: Lorem) {}

  @WebSocketServer()
  private server: Server;

  async handleConnection(socket: Socket, ...args: any[]){
    const user = await this.whoIs.get(socket);
    const lorem = await this.lorem.hello();
    socket.emit(EventsGateway.CHANNEL, Groom.INSTANCE.hello())
    EventsGateway.LOGGER.log(`Connexion de : ${user.name} ip = ${user.ip}`);
    this.server.emit(EventsGateway.CHANNEL, `Welcome @${user.name} on @${user.ip} !`)
    this.server.emit(EventsGateway.CHANNEL, `${lorem}`)
  }

  @SubscribeMessage(EventsGateway.CHANNEL)
  handleMessage(@ConnectedSocket() socket: Socket, @MessageBody() message: string){
    EventsGateway.LOGGER.log(`Gateway <- ${socket.id} : ${message}`);
    socket.broadcast.emit(EventsGateway.CHANNEL, `@${socket.id} ${message}`);
  }

  async handleDisconnect(socket: Socket) {
    const user = await this.whoIs.get(socket);
    EventsGateway.LOGGER.log(`Déconnexion de : ${user.name} ip = ${user.ip}`);
    this.server.emit(EventsGateway.CHANNEL, `Goodbye @${user.name} on @${user.ip} !`)
  }
}
