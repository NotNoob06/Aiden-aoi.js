module.exports = {
  name: "unban", 
  type: 'interactionCommand', 
  code: `
$sendDM[$findUser[$message[1]];{author:Hello!:$serverIcon}{description:*You got unban from __$serverName__.*}{field:server link: ||$getServerInvite||}{color:$getServerVar[safe]}{thumbnail:$userAvatar[$findUser[$message[1]]]}{timestamp}]
$onlyIf[$isUserDMEnabled[$findUser[$message[1]]]!=false;Couldn't send the reason via DM, their DM closed.]

$unban[$findUser[$message[1]];$messageSlice[1]]

$interactionReply[{author:unbanned successfully:$authorAvatar}{field:𓂃unbanned user: $userTag[$findUser[$message[1]]]}{field:𓂃unbanned by: $userTag[$authorID]}{color:$getServerVar[dang]}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Reason, $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No Reason Given];false;$messageSlice[1]]}{timestamp}]

$onlyBotPerms[ban;You don't have \`BAN_MEMBERS\` permission.]
$onlyPerms[ban;You don't have \`BAN_MEMBERS\` permission.]
`
}
