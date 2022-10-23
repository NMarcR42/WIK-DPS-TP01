"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let env = ['PING_LISTEN_PORT'];
const port = 3000;


app.get('/ping', (req, res) => {
    res.send(JSON.parse(req));
});
// app.get('/ping', (req, res) => {
//     res.send(JSON.parse(req));
// });

app.get('*', (req, res)=>{
    res.send('404 NOT FOUND!');
  });

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
