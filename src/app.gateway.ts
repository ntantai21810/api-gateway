import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway(3001, { cors: true })
export class SocketGateWay implements OnGatewayConnection {
  handleConnection() {
    console.log('client connected');
  }

  @SubscribeMessage('message')
  handleMessageEvent() {
    console.log('message event received');
  }
}
