module.exports = {
	name: "help",
	type: 'interactionCommand', 
	code: `
$interactionReply[{title:𓂃Aiden︱Help Panel}{description:*Here is the informations about commands. my prefix is \`/(slash commands)\`*}
{field:𓂃moderator:ban, unban, kick, mute, role, tt}
{field:𓂃general commands:avatar, rank, leaderboard, set-nick, ping, suggest, help, userinfo, gbi}
{field:𓂃music commands:play, spotify, now-playing, stop, skip, volume, queue, loop, lyrics}{color:$getServerVar[idle]}{footer:all information gives on commands when typed them.:$userAvatar[$clientID]}]
`
} 
