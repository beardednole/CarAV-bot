const joke = [
	"The loudest burp recorded in an SPL competition came from your mom.",
	"```How many audiophiles does it take to change a light bulb?```\n" +
	"Two. One to change the bulb and another to get all excited about the upgrade.",
	"```Why did the amplifier hum?```\n" +
	"It didn't know the words.",
	"```How long does it take for an audiophile to change a light bulb?```\n" +
	"Forever, because he can't get past the double blind testing.",
	"You know you are an audiophile when you buy a cheap car in order to buy an expensive system to put in it.",
	"Two 12\" subs and an amp\n" +
	"https://i.imgur.com/1DptXkM.jpg",
	"https://i.imgur.com/mXRQGBh.jpg",
	"https://i.imgur.com/5VfDDfZ.jpg",
	"https://pbs.twimg.com/media/CJU98T5UAAAfyUC.jpg",
	"https://i.imgur.com/OKLwvzj.png"
];
let prefix = "!";

module.exports = function (message) {
	if (message.content.includes(prefix + "joke")) {
		let randomJoke = joke[Math.floor(Math.random() * joke.length)];
		message.channel.send(randomJoke)
			.catch(console.error);
		return;
	}

	if (message.content.includes(prefix + "ejoke")) {
		message.channel.send("```A Sexual encounter between a capacitor and an inductor:\n\n" +
		"One evening, with his charge at full capacity, Micro Farad decided to get a cute coil to discharge him. He went to the Magnet Bar to pick up a chip called Millie Amp. He caught her out back trying to self-induction; unfortunately, she had not damaged her solenoid. The two took off on his megacycle and rode across the Wheatstone Bridge into a magnetic field, next to a flowing current, to watch the sine waves." + "\n\n" +
		"Micro Farad was very much stimulated by Millie's characteristic curve. Being attractive himself, he soon had her field fully excited. He set her on the ground potential, raised his frequency, lowered her resistance, and pulled out his high voltage probe. When he inserted it in parallel, he short-circuited her shunt. Fully excited, Millie cried out, 'Ohm! Ohm, give me mho!!'. As he increased his tube to maximum output, her coil vibrated from current flow. It did not take long for her shunt to reach maximum heat." + "\n\n" +
		"Now with the excessive current shortening her shunt, Micro's capacity rapidly discharged - every electron drained off. But that was not the end of it. Indeed, they fluxed all night, tried various connections and hookings until his bar magnet weakened, and he could no longer generate enough voltage to sustain his collapsing field. With his battery fully discharged, Micro was unable to excite his tickler, so they went home. A few weeks later, they were merged forever and oscillated happily ever after." + "\n\n" +
		"The end.```")
			.catch(console.error);
		return;
	}
};
