const keepAlive = require('./server.js') //This is for making the bot alive 7/24 on repl.it
const Aoijs = require('aoi.js')
const bot = new Aoijs.Bot({
  token: process.env.TOKEN, //Token part
  prefix: "/", //I recommend "/" since all commands slash.
  fetchInvites: true 
})

require('./callbacks')(bot)

bot.variables({
  safe: "B2FFB2",
  idle: "FFE2CB",
  dang: "FEB2B2",
  streak: "0",
  cd: "0",
  invite: "0",
  point: "0"
})

bot.status(require('./status.js'))
const status = require("./status.js")

bot.command({ //For activating all slash commands
  name: "slash", 
  code: `
$createSlashCommand[$guildID;avatar;Check mentioned user's avatar.;user:Please mention an user:true:6]

`
}) 
keepAlive() 
