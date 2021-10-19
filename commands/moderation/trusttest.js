module.exports = {
	name: "trust-test",
	type: 'interactionCommand', 
	code: `
$if[$sub[$datestamp;$creationdate[$findUser[$message[1]];ms]]<$multi[$multi[$multi[$multi[30;24];60];60];1000]]
$interactionReply[{title:$username[$findUser[$message[1]]] user is RISKY!! Ban them right now.}{description:Account created **$creationDate[$findUser[$message[1]];time]** ago, bye bye.But if you can prove you are an real person prove it right now.}{footer:asked by $username:$authorAvatar}
{color:FEB2B2};;0]
$else
$interactionReply[{title:$username[$findUser[$message[1]]] ah, this user is safe!}
{description:Account created **$creationDate[$findUser[$message[1]];time]** ago so don't worry.}
{footer:asked by $username:$authorAvatar}
{color:B2FFB2};;0]
$endif`
}
