module.exports = [{
	name: "mute",
	type: 'interactionCommand', 
	code: `
$channelSendMessage[879963537345224715;{author:Mute:$userAvatar[$clientID]}{field:𓂃mute duration:$message[2]]}
{field:𓂃muted user:$userTag[$findUser[$message[1]]]}
{field:𓂃muted by:$userTag[$authorID]}{field:𓂃reason: $replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;no reason given];false;$messageSlice[2]]}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:$getServerVar[idle]}{timestamp}]

$setTimeout[$message[2];
guildID: $guildID
userID: $findUser[$message[1]]]

$giveRoles[$findMember[$message[1]];722823063573626940]

$interactionReply[{author:muted successfully:$authorAvatar}{field:𓂃muted user: $userTag[$findUser[$message[1]]]}{field:𓂃muted by: $userTag[$authorID]}{color:$getServerVar[safe]}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Reason, $replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;No Reason Given];false;$messageSlice[2]]}{timestamp}]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:That user has higher role position than me.}{color:$getServerVar[dang]}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:That user has higher role position than you.}{color:$getServerVar[dang]}]
$onlyIf[$findMember[$message[1]]!=$authorID;{description:You can't mute yourself; but instead of that, you can just shit up ;D}{color:$getServerVar[idle]}]
$onlyIf[$findMember[$message[1]]!=$clientID;{description:So, you want I mute myself..? No, thanks.}{color:$getServerVar[idle]}]

$onlyPerms[manageroles;You don't have \`MANAGE_ROLES\` permission.]
$onlyBotPerms[manageroles;I need \`MANAGE_ROLES\` permission.]
`
},  {
code: `$sendDM[$timeoutData[userID];{title:Hello!}{description: Your mute time has finished in $serverName[$timeoutData[guildID]]}{color:$getServerVar[idle]}]
$takeRoles[$timeoutData[userID];$getServerVar[mute_role];$timeoutData[guildID]]`,
type: 'timeoutCommand'
}]
