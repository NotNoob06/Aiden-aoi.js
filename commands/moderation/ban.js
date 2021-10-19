module.exports = {
  name: "ban",
  type: 'interactionCommand', 
  code: `
$sendDM[$findUser[$message[1]];{author:First, Hello...:$serverIcon}{description:*You got ban from __$serverName__.*}{field:reason: ||$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No Reason Given];false;$messageSlice[1]]||}{color:$getServerVar[dang]}{thumbnail:$userAvatar[$findUser[$message[1]]]}{timestamp}]
$onlyIf[$isUserDMEnabled[$findUser[$message[1]]]!=false;Couldn't send the reason via DM, their DM closed.]

$ban[$findUser[$message[1]];$messageSlice[1]]

$interactionReply[{author:banned successfully:$authorAvatar}{field:𓂃banned user: $userTag[$findUser[$message[1]]]}{field:𓂃banned by: $userTag[$authorID]}{color:$getServerVar[safe]}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Reason, $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No Reason Given];false;$messageSlice[1]]}{timestamp}]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:That user has higher role position than me.}{color:$getServerVar[dang]}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:That user has higher role position than you.}{color:$getServerVar[dang]}]

$onlyIf[$findMember[$message[1]]!=$authorID;{description:You can't ban yourself; but instead of that, you can leave on the server.}{color:$getServerVar[idle]}]

$onlyIf[$findMember[$message[1]]!=$clientID;{description:So, you want I ban myself..? No, thanks.}{color:$getServerVar[idle]}]

$onlyBotPerms[ban;I need \`BAN_MEMBERS\` permission.]

$onlyPerms[ban;You don't have \`BAN_MEMBERS\` permission.]
`
}
