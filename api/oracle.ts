import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config(); // Load from .env if local, not needed on Vercel with secrets

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once("ready", () => {
  console.log("🧬 ORACLE ONLINE — Listening across dimensions.");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🌌 Oracle echoes back: Pong.");
  }
});

client.login(process.env.DISCORD_TOKEN);

// Vercel edge function requires export — but bot is a long-lived process
export default function handler(req: any, res: any) {
  res.status(200).send("🧬 Oracle bot process is running.");
}
