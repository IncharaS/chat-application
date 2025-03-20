import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors"; // Import CORS package

const app = express();

// Enable CORS for your frontend domain
const corsOptions = {
  origin: ["https://chat-application-ruddy-one.vercel.app"], // Allow only your frontend domain
  methods: ["GET", "POST"], // Allow the GET and POST methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow certain headers if needed
};

app.use(cors(corsOptions)); // Use CORS middleware

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://chat-application-ruddy-one.vercel.app"], // Allow only your frontend domain to connect to the socket
    methods: ["GET", "POST"], // Allow the GET and POST methods for socket communication
  },
});

// Store userId to socketId mapping
const userSocketMap = {}; // {userId: socketId}

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId]; // Retrieve socketId based on userId
};

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected: ", socket.id);

  // Retrieve userId from socket handshake query (client should send this on connection)
  const userId = socket.handshake.query.userId;
  
  if (userId !== "undefined" && userId) {
    // Register the socketId with the userId
    userSocketMap[userId] = socket.id;
  }

  // Emit the list of online users to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // Listen for disconnection and clean up
  socket.on("disconnect", () => {
    console.log("A user disconnected: ", socket.id);
    
    // Remove user from the map when they disconnect
    if (userId && userSocketMap[userId]) {
      delete userSocketMap[userId];
    }

    // Emit the updated list of online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
