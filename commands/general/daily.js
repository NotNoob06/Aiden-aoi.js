module.exports = [{
name: "daily",
type: 'interactionCommand', 
code: `
$if[$sub[$dateStamp;$getUserVar[cd]]>0]
$setTimeOut[48h;
user: $authorID
streak: $getUserVar[streak]]

$interactionReply[You collected your daily balance and now you have **$sum[$getUserVar[point];100] (+$getUserVar[streak] streaks) MNS.**]

$setUserVar[streak;$sum[$getUserVar[streak];1]]

$setUserVar[cd;$sum[86400000;$dateStamp]]

$setUserVar[mns;$sum[$getUserVar[point];100;$multi[2;$getUserVar[streak]]]]
$else
$interactionReply[You already claimed your chest, wait **$humanizeMs[$sub[$getUserVar[cd];$dateStamp]]** time to get your next chest.;;;64]
$endif
`
}, {
type: 'timeoutCommand', 
code: `
$setUserVar[streak;$sum[$getUserVar[streak];1]]

$onlyIf[$timeoutdata[streak]==$getUserVar[streak;$timeoutdata[user]];]`
}]
