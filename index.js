import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = process.env.DISCORD_TOKEN;

client.once("ready", () => {
  console.log(`Bot eingeloggt als ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  console.log(`Nachricht von ${msg.author.tag}: ${msg.content}`);
  // Test-Antwort, nur um zu sehen, dass er läuft:
  if (msg.content.toLowerCase() === "test") {
    msg.reply("Ich bin online ✅");
  }
});

if (!TOKEN) {
  console.error("Kein DISCORD_TOKEN gesetzt!");
} else {
  client.login(TOKEN);
}
