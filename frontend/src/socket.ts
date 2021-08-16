import { io } from "socket.io-client";
export const URL_BACKEND = "http://localhost:2021";

const socket = io(URL_BACKEND);

export default socket;
