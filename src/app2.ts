import express from "express";
import routerImages from "./routes";

const app=express();

app.use(express.json());
app.use(routerImages)
app.use(express.urlencoded({extended:true}));

export default app;