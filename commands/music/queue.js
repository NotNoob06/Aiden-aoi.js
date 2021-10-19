module.exports = {
  name: "queue",
  type: 'interactionCommand', 
  code: `
$if[$voiceID[$authorID]==]
$interactionReply[You must join voice chat.;;;64]
$else

$interactionReply[Nothing is playing right now, play something?;;;64]
$elseIf[$queueLength!=0]
$interactionReply[{title:Next Songs}{description:**𓂃current playing song**
$songInfo[title] [url]($songInfo[url]) <@$songInfo[userID]>
・・・・・・・・・・・
**𓂃next songs**
$queue[1;10;{number} — {title} [url]({url}) <@{userID}>]}{color:$getServerVar[idle]}]
$endelseif
$endif
	`
}
