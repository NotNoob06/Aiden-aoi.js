module.exports = {
	name: "kick",
	type: 'interactionCommand', 
	code: `
$sendDM[$findUser[$message[1]];{author:First, Hello...:$serverIcon}{description:*You got kick from __$serverName__.*}{field:reason: ||$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No Reason Given];false;$messageSlice[1]]||}
{field:invite link:||$getServerInvite||}{color:$getServerVar[idle]}{thumbnail:$userAvatar[$findUser[$message[1]]]}{timestamp}]
$onlyIf[$isUserDMEnabled[$findUser[$message[1]]]!=false;Couldn't send the reason via DM, their DM closed.]

$kick[$findUser[$message[1]];$messageSlice[1]]

$interactionReply[{author:kicked successfully:$authorAvatar}{field:𓂃kicked user: $userTag[$findUser[$message[1]]]}{field:𓂃kicked by: $userTag[$authorID]}{color:$getServerVar[safe]}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Reason, $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No Reason Given];false;$messageSlice[1]]}{timestamp}]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:That user has higher role position than me.}{color:$getServerVar[dang]}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:That user has higher role position than you.}{color:$getServerVar[dang]}]

$onlyIf[$findMember[$message[1]]!=$authorID;{description:You can't kick yourself; but instead of that, you can leave on the server.}{color:$getServerVar[idle]}]

$onlyIf[$findMember[$message[1]]!=$clientID;{description:So, you want I kick myself..? No, thanks.}{color:$getServerVar[idle]}]

$onlyBotPerms[kick;I need \`KICK_MEMBERS\` permission.]

$onlyPerms[kick;You don't have \`KICK_MEMBERS\` permission.]
`
}
