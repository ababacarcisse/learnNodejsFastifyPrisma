"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)({
    logger: true
});
app.listen({
    port: 3100
}, function () { return console.log("server connecté"); });
