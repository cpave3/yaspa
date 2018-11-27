// Define the setings for the socket connection
const local = true;
export const HOST = local
  ? "ws://127.0.0.1"
  : "https://fast-ocean-32109.herokuapp.com";
export const PORT = local ? 3001 : 443;
