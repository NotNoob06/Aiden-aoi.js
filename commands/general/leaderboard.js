module.exports = {
	name: "leaderboard", 
	type: 'interactionCommand', 
	code: `
$interactionReply[{author:activity leaderboard:https://cdn.discordapp.com/attachments/730462950954893332/896005930540486667/889217239092441178.png}{description:$userLeaderboard[point;asc;ð{top}-) *{username}* **{value}** activity points *!*]}{footer:ðyou have $numberSeparator[$getUserVar[mns;$authorID]] activity points!:$authorAvatar}{color:$getServerVar[idle]}]
`
}
