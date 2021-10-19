module.exports = {
  name: "avatar",
  type: 'interactionCommand', 
  code:`
$interactionReply[;{description:**𓂃nickname:** __$nickname[$findUser[$message]]__
**𓂃user tag:** __$userTag[$findUser[$message]]__}{image:$userAvatar[$findUser[$message[1]]]}{color:$getServerVar[dang]};;;]
`
 }
