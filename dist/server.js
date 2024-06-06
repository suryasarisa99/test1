"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
(0, config_1.default)(app);
// initDatebase();
app.get("/", (req, res) => {
    res.send("Hello World new 000");
});
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=server.js.map