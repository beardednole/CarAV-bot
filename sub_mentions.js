module.exports = function (message) {
	const subreddits = [];
	const regex = /\br\/([a-zA-Z_]+)/g;
	let match;
	let text = "";

	while (match = regex.exec(message.content) !== null) {
		const subreddit = match[1];
		if (!subreddits.includes(subreddit)) {
			subreddits.push(subreddit);
		}
		for (const subreddit of subreddits) {
			text += `<https://www.reddit.com/r/${subreddit}>\n`;
		}
		if (text.length > 0) {
			message.channel.send(text)
				.catch(console.error);
		}
	}
};
