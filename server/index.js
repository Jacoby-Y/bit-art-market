//#region | Import Stuff
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { config } from "dotenv";
config();

import express from "express";
import http from "http";
import path from "path";
import cors from "cors";
import cookieParser from 'cookie-parser';

//#endregion

//#region | Middleware Moment
const app = express();

import userRoutes from "./routes/user.js";
import artRoutes from "./routes/art.js";
import followRoutes from "./routes/follow.js";
import paletteRoutes from "./routes/palette.js";

app.use(cors({ origin: ["http://10.65.1.237:5173", "http://localhost:5173"], credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/user", userRoutes);
app.use("/api/art", artRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/palette", paletteRoutes);

//#endregion

//#region | Final steps
app.get("*", cors(), (_, res)=>{
    res.sendFile(path.join(__dirname, "public"));
});

app.get("/api/*", cors(), (_, res)=>{
    res.sendStatus(404);
})

http.createServer(app).listen(process.env.PORT ?? 8080);
//#endregion
