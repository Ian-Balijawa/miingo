import { io } from "socket.io-client";
import config from './utils/envConfig';

export const socketUrl = config.WS_URL;

export const createSocket = ({ url, state, actions }) => {
    console.log('creating socket with access token', state.accessToken);
    const socket = io(socketUrl, { auth: { token: state.accessToken }, transports: ['websocket', 'polling'] });
    
    socket.on('connect', () => {
        console.log('Connected with id', socket.id, 'and user', state.me.name);
    })

    return socket;
}