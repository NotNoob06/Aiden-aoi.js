module.exports = [{
  name: "suggest",
  type: 'interactionCommand', 
  code: `
$if[$channelID!=$getServerVar[suggestion_usage_channel]
$interactionReply[Please only use <#$getServerVar[suggestion_usage_channel> channel for this command.;;;64]
$else
$channelSendMessage[$getServerVar[suggestion_channel];— <@$authorID>
{author:$userTag:$authorAvatar}
{title:➥ suggestion}
{description:**✎...$noMentionMessage**}{reactions:<a:enabled:861074153880944680>,<a:disabled:861074181865078784>}{color:$getServerVar[idle]}{footer: Are you in?}{timestamp}]
$interactionReply[Successfully done!;;;64]
$endif
$onlyIf[$getServerVar[suggestion_channel]!=;Suggestion channel didn't select by staffs.]
`
}, {
  name: "set-suggestion-channel", 
  type: 'interactionCommand', 
  code: `
$setServerVar[suggestion_channel;$findChannel[$message[1]]]
$interactionReply[Suggesstion Channel settled to <#$findChannel[$message[1]]>]
`
}, {
  name: "set-suggestion-usage-channel", 
  type: 'interactionCommand', 
  code: `
$setServerVar[suggestion_usage_channel;$findChannel[$message[1]]]
$interactionReply[Suggesstion Channel settled to <#$findChannel[$message[1]]>]
`
}]
