module.exports = {
  name: "spotify",
  type: 'interactionCommand', 
  code: `
$if[$voiceID[$authorID]==]
$interactionReply[Join a voice channel first.;;;64]

$else
$playSpotify[$message;name;no;]
$interactionReply[{description:Listening to this Spotify [Playlist]($message) right now}{color:$getServerVar[safe]}]
$endif	
`
}
