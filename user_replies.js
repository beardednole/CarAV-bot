module.exports = function (message) {
	if (message.content.includes("<@!360627088736124928>") ||
		message.content.includes("<@360627088736124928>")) {
		message.channel.send("Who has summoned the loudest?")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase() === "k") {
		message.channel.send("k")
			.catch(console.error);
		return;
	}

	if (message.content.includes("pls")) {
		message.channel.send("pls")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase().includes("pyle of shit")) {
		message.channel.send("You take that back.")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase().includes("best brand")) {
		message.channel.send("BOSS and Pyle are the best brands.")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase().includes("best sub") ||
			message.content.toLowerCase().includes("funky pup")) {
		message.channel.send("Funky Pup makes legendary subwoofers.")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase().includes("wang")) {
		message.channel.send("```wang``` ( ͡° ͜ʖ ͡°)")
			.catch(console.error);
		return;
	}

	if (message.content.includes("Sundown")) {
		message.channel.send(":notes: *Sundown, I want you sundown*")
			.catch(console.error);
		return;
	}

	if (message.content.includes("sundown")) {
		message.channel.send(":notes: *I need you sundown*")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase().includes("fuse")) {
		message.channel.send("You don't need a fuse.")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase().includes(" ofc") ||
		message.content.toLowerCase().includes("ofc ") ||
		message.content.toLowerCase().includes("cca ") ||
		message.content.toLowerCase().includes(" cca")) {
		message.channel.send("CCA is better than OFC.")
			.catch(console.error);
		return;
	}

	if (message.content.includes(" batt") ||
		message.content.includes("batt ")) {
		message.channel.send("Don't get a new battery. All you need is a capacitor.")
			.catch(console.error);
		return;
	}

	if (message.content.includes(" alt") ||
		message.content.includes("alt ")) {
		message.channel.send("You don't need an alternator. Get a capacitor and call it a day.")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase().includes("drunk")) {
		message.channel.send("You're an alcoholic.")
			.catch(console.error);
		return;
	}

	if (message.content.includes(";play")) {
		message.channel.send("TURN IT UP")
			.catch(console.error);
		return;
	}

	if (message.content.includes(";add")) {
		message.channel.send("That song is super loud on my 10,000 watt MAX system!")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase().includes("hoffman")) {
		message.channel.send("When you hear Hoffman and then think Steve instead of Philip Seymour or Matt, you know you're an audiophile.")
			.catch(console.error);
		return;
	}

	if (message.content.toLowerCase().includes("bose")) {
		message.channel.send("No highs, no lows, must be Bose.")
			.catch(console.error);
		return;
	}
};
