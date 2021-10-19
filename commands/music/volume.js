module.exports = {
  name: "volume",
  type: 'interactionCommand', 
  code: `
$if[$voiceID[$authorID]==]
$interactionReply[Please enter to a voice chat first;;;64]

$else
$volume[$message]
$interactionReply[{description: Volume settled to **$message%**}{color:$getServerVar[idle]}]

$endif

$suppressErrors[Nothing was playing.]

$onlyif[$message<=200;Please do not enter a number higher than 200%.]
`
}
