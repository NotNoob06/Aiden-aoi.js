module.exports = (bot) => {
bot.loadCommands(`./commands/`)
bot.onMessage()
bot.onInteractionCreate()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onBanAdd()
bot.onJoined()
bot.onLeave()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onMessageDelete()
bot.onMessageUpdate()
}
