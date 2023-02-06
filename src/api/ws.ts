import { getToken } from "@/utils/auth";

const WS_log = new WebSocket('ws://'
    + location.host
    + '/api/ws'
    + '/log/');

const WS_chat = new WebSocket('ws://'
    + location.host
    + '/api/ws'
    + '/chat/'
    + "?token="
    + getToken());

export { WS_log, WS_chat };