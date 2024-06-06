import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const origins = [];

const corsOptions = {
  allowedHeaders: "Content-Type",
  methods: "GET, POST, PUT, PATCH, DELETE",
  origin: "*",
  //   origin: origins,
  //   credentials: true,
};

export default function (app: express.Application) {
  //   app.set("set engine", "pug");
  //   app.use(express.static("./public"));
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  //   app.options("*", cors()); // include before other routes (for preflight checks)
}
