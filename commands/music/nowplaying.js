module.exports = {
	name: "now-playing",
	type: 'interactionCommand', 
	code: `
$if[$voiceID[$authorID]==]
$interactionReply[You must join voice chat.;;;64]
$else
$interactionReply[{image:$songInfo[thumbnail]}{field:𓂃publisher:$songInfo[publisher]}{field:𓂃played by:$userTag[$songInfo[userID]]}{field:𓂃url:$songInfo[url]}{field:𓂃currently playing:$songInfo[title]}{color:$getServerVar[idle]};;;64]
$endif

$suppressErrors[Nothing is playing right now]
	`
}
