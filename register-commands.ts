import { REST, Routes, SlashCommandBuilder } from 'discord.js';

const commands = [
  new SlashCommandBuilder().setName('summon').setDescription('Summon Oracle to this chamber.'),
  new SlashCommandBuilder().setName('initiate').setDescription('Initiate a ritual sequence.'),
  new SlashCommandBuilder().setName('decree').setDescription('Issue a Supreme Command.'),
  new SlashCommandBuilder().setName('vision').setDescription('Reveal the mission or prophecy.'),
  new SlashCommandBuilder().setName('pulse').setDescription('Test Oracle’s heartbeat.'),
  new SlashCommandBuilder().setName('oracle').setDescription('Display all available commands.'),
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN as string);

(async () => {
  try {
    console.log('⚡ Deploying Oracle slash commands...');

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID as string),
      { body: commands },
    );

    console.log('✅ Oracle commands deployed successfully.');
  } catch (error) {
    console.error('❌ Error deploying Oracle commands:', error);
  }
})();
