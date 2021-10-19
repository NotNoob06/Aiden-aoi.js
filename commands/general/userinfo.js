module.exports = {
  name: "userinfo",
  type: 'interactionCommand', 
  code: `
$interactionReply[{color:$getRoleColor[$highestRole[$findUser[$message[1]]]]}
{author:$userTag[$findUser[$message[1]]]'s information:$authorAvatar}
{thumbnail:$userAvatar[$findUser[$message[1]]]}
{field:𓂃h.role: <@&$highestRole[$findUser[$message[1]]]>:yes}
{field:𓂃dates:
— joined • $memberJoinedDate[$findUser[$message[1]];time] ago
— created • $creationDate[$findUser[$message[1]];time] ago:yes}
{field:𓂃bot:$replaceText[$replaceText[$isBot[$findUser[$message[1]]];false;no;-1];true;yes;-1]}
{field:𓂃platform:$replaceText[$replaceText[$replaceText[$replaceText[$platform[$findUser[$message[1]]];mobile;mobile;-1];desktop;client;-1];none;offline;-1];web;browser;-1]}]
`
}
