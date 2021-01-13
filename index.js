const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const express = require("express")
const app = express()

app.get("/", (req, res) => res.sendStatus(200))

app.listen(process.env.PORT)

client.on("ready", ()=>console.log("READY"));

const jointocreate = require("./jointocreate");
jointocreate(client);


client.login(process.env.TOKEN);