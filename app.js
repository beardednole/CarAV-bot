const Discord = require("discord.js");
const settings = require("./settings.json");
const botReplies = require("./Magic-8_replies");
const userReplies = require("./user_replies.js");
const subMention = require("./sub_mentions.js");
const joke = require("./jokes.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("Ready");
});

client.on("message", (message) => {
	if (botReplies[message.content]) {
		message.channel.send(botReplies[message.content]);
	}

	if (message.author.bot) {
		return;
	}

	userReplies(message);
	joke(message);

	if (botReplies[message.content]) {
		message.channel.send(botReplies[message.content]);
	}
});

client.on("guildMemberAdd", (member) => {
	const guild = member.guild;
	const newUser = [];
	if (!newUser[guild.id]) newUser[guild.id] = new Discord.Collection();
	newUser[guild.id].set(member.id, member.user);
	if (newUser[guild.id].size > 0) {
		const userName = newUser[guild.id].map(u => u.toString()).join("");
		guild.channels.first().send(
			"Welcome " + userName + ", I'm Max - world record holder for the flatest response in an SPL competition." +
			" If you have questions regarding mobile audio, visit " + "<#359460804417945601>" + ".");
		newUser[guild.id].clear();
	}
	return;
});

client.login(settings.token);
