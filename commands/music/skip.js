module.exports = {
  name:"skip",
  type:'interactionCommand',
  code:`
$if[$voiceID[$authorID]==]
$interactionReply[You must be in same voice channel with me.;;;64]

$elseif[$queueLength==1]
$interactionReply[{description:No song left to skip, use \`/stop\` interaction.}{color:$getServerVar[safe]};;;64]
$endelseif

$elseif[$queueLength==0]
$interactionReply[{description:Nothing is playing right now.}{color:$getServerVar[dang]};;;64]
$endelseif

$else
$skipSong
$interactionReply[{field:𓂃now playing: *$songInfo[title;1]*}
{field:song url: $songInfo[url;1]}
{field:song duration: $songInfo[duration;1]}{color:$getServerVar[idle]}]

$endif
`
} 
