module.exports = {
  name: "play",
  type: 'interactionCommand', 
  code:`
$if[$voiceID[$authorID]==]
$interactionReply[You must join voice chat.;;;64]
$else

$let[song;$playSong[$message;1m;there is an error.]]
$interactionReply[{description:**“$get[song]$message” has added to queue!**}{color:$getServerVar[idle]}{footer:/play for playing more songs!}]
$endif 
`
}
