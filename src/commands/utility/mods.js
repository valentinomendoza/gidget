import { MessageEmbed } from 'discord.js';
import Command from '../../utils/command.js';
export default class extends Command {
  constructor(options) {
    super(options);
    this.aliases = [];
    this.onlyguild = true;
    this.description = "List of Mods";
    this.permissions = {
      user: [0, 0],
      bot: [0, 16384]
    };
  }
  async run(bot, message, args) {
    const fetch = message.guild.roles.cache.get('617518093480230912').members.map(m => m.user);
    const mods = fetch.join('\n');
    const embed = new MessageEmbed()
      .setTitle('List of Mods')
      .setDescription(mods)
 await message.channel.send(embed);
  }
}