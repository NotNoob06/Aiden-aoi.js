module.exports = {
  name: "role",
  type: 'interactionCommand', 
  code:`
$if[$checkCondition[$message[1]==give]$checkCondition[$message[1]==take]==falsefalse]
You need to use \`GIVE\` or \`TAKE\` on message field. 
$endif

$if[$message[1]==give]
{thumbnail:$serverIcon}
$giveRole[$findUser[$message[2]];$findRole[$message[3]]]
$interactionReply[{author:𓂃role given:$userAvatar[$findUser[$message[2]]]}
{field:𓂃role:$roleName[$findRole[$message[3]]]}
{field:𓂃user:$userTag[$findUser[$message[2]]]}{color:$getServerVar[safe]}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[2]]]];{description:That user has higher role position than me.}{color:$getServerVar[dang]}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[2]]]];{description:That user has higher role position than you.}{color:$getServerVar[dang]}]

$onlyPerms[manageroles;You don't have one of \`MANAGE_ROLES\` role.]
$endif

$if[$message[1]==take]
$takeRole[$findUser[$message[2]];$findRole[$message[3]]]
$interactionReply[{author:𓂃role taken:$userAvatar[$findUser[$message[2]]]}{thumbnail:$serverIcon}
{field:𓂃role:$roleName[$findRole[$message[3]]]}
{field:𓂃user:$userTag[$findUser[$message[2]]]}{color:$getServerVar[dang]}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[2]]]];{description:That user has higher role position than me.}{color:$getServerVar[dang]}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[2]]]];{description:That user has higher role position than you.}{color:$getServerVar[dang]}]

$onlyPerms[manageroles;You don't have one of \`MANAGE_ROLES\` role.]
$endif
`
 }
