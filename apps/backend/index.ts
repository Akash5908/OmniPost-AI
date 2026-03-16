import { connectDB } from "./configs/db.js";

function startServer() {
  connectDB();
}

startServer();
