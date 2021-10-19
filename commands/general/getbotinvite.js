module.exports = {
name: "gbi",
type: 'interactionCommand', 
code: `
$if[$isbot[$finduser[$message]]==false]
$interactionReply[{title:Oops!}{description:Hmmm, it seems $usertag[$finduser[$message]] is not a bot thus I can not generate an invite for them!}{color:$getServerVar[dang]};;;64]
$else

$interactionReply[No Permission, doesn't create a role for the bot!;;;64]
$apimessage[$channelid;<@$authorID>;{footer:Have fun!:$authorAvatar}{description:Success, I have successfully generated a bot invite for \`$usertag[$finduser[$message]]\`.
You can use the link buttons on this message to invite the bot.}{color:$getServerVar[safe]}{thumbnail:$useravatar[$finduser[$message]]};{actionRow:Admin Permissions,2,5,https\#COLON#//discord.com/oauth2/authorize?client_id=$finduser[$message]&scope=bot+applications.commands&permissions=8,:No Permissions,2,5,https\#COLON#//discord.com/oauth2/authorize?client_id=$finduser[$message]&scope=bot+applications.commands&permissions=0}]
$endif
`
}
