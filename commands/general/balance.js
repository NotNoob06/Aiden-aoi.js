module.exports = {
  name: "balance", 
  type: 'interactionCommand', 
  code: `
$interactionReply[$userTag[$findUser[$message[1]]]'s balance is **$getUserVar[mns;$findUser[$message[1]]] MNS.**]
`
}
