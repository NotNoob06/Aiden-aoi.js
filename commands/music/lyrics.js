//NOTE! This command doesn't show lyrics at all due API.
module.exports = {
	name: "lyrics",
	type: 'interactionCommand', 
	code: `
$if[$voiceID[$authorID]==]
$interactionReply[You should join to voice chat.;;;64]
$else
$interactionReply[{title:$songInfo[title]}{description:$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No lyrics found, sorry.]}{footer:Requested by $username:$authorAvatar}{color:$getServerVar[idle]};;;64]
$endif

$suppressErrors[{description:Nothing was playing}{color:$getServerVar[dang]}{delete:5s}]
	`
}
