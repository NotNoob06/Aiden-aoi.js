module.exports = {
  name: "stop",
  type: 'interactionCommand', 
  code: `
$if[$voiceID[$authorID]==]
$interactionReply[You must be in same voice channel with me.;;;64]

$elseif[$queueLength==0]
$interactionReply[{description:Nothing is playing right now.}{color:$getServerVar[dang]};;;64]
$endelseif
$else

$stopSong
$interactionReply[{title:stopped the queue!}{description:cleared queue!}{color:$getServerVar[dang]}]
$endif
	`
}
