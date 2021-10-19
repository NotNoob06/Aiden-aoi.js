module.exports = [{
  name: "loop",
  type: 'interactionCommand',
  code: `
$if[$voiceID[$authorID]==]
$interactionReply[You must join voice chat.;;;64]

$else
$buttonCollector[$get[id];$authorID;1m;1,2,3,;none,loop,cancel;Only $username can use this interaction,,64]
$interactionReply[You are the only one who can use it;;;64]
$let[id;$apiMessage[$channelId;;{title:𓂃loop}{description:please pick one button for loop, it is **__$loopStatus__** now. }
{color:$getServerVar[idle]};{actionRow:loop none,2,2,1,,false:loop queue, 2,2,2,,false:cancel,2,4,3,,false};;yes]]

$endif

$suppressErrors[Nothing is playing right now.]
`
}, {
  type: "awaitedCommand",
  name: "none",
  code: `
$if[$checkCondition[$loopQueue==false]]

$interactionReply[;{title:𓂃loop}{description:loop picked!}
{field:𓂃current loop status: $loopStatus}{color:$getServerVar[safe]};{actionRow:loop none,2,3,1,,true:loop queue,2,2,2,,true:cancel,2,4,3,,true};;7]

$else
$loopQueue
$interactionReply[;{title:𓂃loop}{description:loop picked!}
{field:𓂃current loop status: $loopStatus}{color:$getServerVar[safe]};{actionRow:loop none,2,3,1,,true:loop queue,2,2,2,,true:cancel,2,4,3,,true};;7]

$endif
`
}, {
  type: "awaitedCommand",
  name: "loop",
  code: `
$if[$checkCondition[$loopQueue==true]]
$interactionReply[;{title:𓂃loop}{description:looping picked!}{field:𓂃current loop status:$loopStatus}{color:$getServerVar[safe]};{actionRow:loop none,2,2,1,,true:loop queue,2,3,2,,true:cancel,2,4,3,,true};;7]

$else
$loopQueue
$interactionReply[;{title:𓂃loop}{description:looping picked!}{field:𓂃current loop status:$loopStatus}{color:$getServerVar[safe]};{actionRow:loop none,2,2,1,,true:loop queue,2,3,2,,true:cancel,2,4,3,,true};;7]

$endif
`
}, {
  type: "awaitedCommand", 
  name: "cancel", 
  code: `
$interactionReply[;{title:𓂃loop}{description:looping section canceled!}{field:𓂃current loop status:$loopStatus}{color:$getServerVar[dang]};{actionRow:loop none,2,2,1,,true:loop queue,2,2,2,,true:cancel,2,4,3,,true};;7]
`
		 
}]
