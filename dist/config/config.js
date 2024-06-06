"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const origins = [];
const corsOptions = {
    allowedHeaders: "Content-Type",
    methods: "GET, POST, PUT, PATCH, DELETE",
    origin: "*",
    //   origin: origins,
    //   credentials: true,
};
function default_1(app) {
    //   app.set("set engine", "pug");
    //   app.use(express.static("./public"));
    app.use((0, cors_1.default)(corsOptions));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cookie_parser_1.default)());
    //   app.options("*", cors()); // include before other routes (for preflight checks)
}
exports.default = default_1;
//# sourceMappingURL=config.js.map