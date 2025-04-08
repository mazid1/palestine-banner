const messages: string[] = [
	"🇵🇸 Free Palestine! 🇵🇸",
	"🕊️ Stop the Genocide! 🇵🇸",
	"✊ End the Occupation! 🇵🇸",
	"⚖️ Justice for Palestine! 🇵🇸",
	"🚫 Boycott Israel! 🇵🇸",
	"🕊️ Ceasefire Now! 🇵🇸",
	"🇵🇸 Free Palestine Now! 🇵🇸",
	"🌊 From the River to the Sea, Palestine Will Be Free! 🇵🇸",
	"✊🏽 No Justice, No Peace — End the Occupation! 🇵🇸",
	"🛑 Stop the Genocide in Gaza! 🇵🇸",
	"🤐 Silence is Violence — Speak for Palestine! 🇵🇸",
	"🚫 Occupation is a Crime — Israel Out of Palestine! 🇵🇸",
	"🏞️ Land Back, Justice Now! 🇵🇸",
	"⚖️ End Israeli Apartheid! 🇵🇸",
	"🕊️ Ceasefire Now, Justice Forever! 🇵🇸",
	"💔 Gaza Bleeds, The World Watches! 🇵🇸",
	"🗣️ Human Rights Are Not Negotiable! 🇵🇸",
	"🔇 Your Silence is Their Death Sentence! 🇵🇸",
	"🧱 Israel = Apartheid, Palestine = Resistance! 🇵🇸",
	"🚷 Zionism is Racism! 🇵🇸",
	"🧱 Tear Down the Walls — Free All the Land! 🇵🇸",
	"⛔ No More War Crimes — Sanction Israel! 🇵🇸",
	"💸 Boycott, Divest, Sanction (BDS)! 🇵🇸",
	"🤝 We Stand with Gaza! 🇵🇸",
	"👶🏽 Children Deserve Peace, Not Bombs! 🇵🇸",
	"⚖️ Justice for Palestine is Justice for All! 🇵🇸",
	"👶🏽 Stop killing children! 🇵🇸",
];

export const getRandomMessage = () => {
	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
	return randomMessage;
};
