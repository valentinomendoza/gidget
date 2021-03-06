import Command from '../../utils/command.js';
const timer = new Map();
export default class extends Command {
  constructor(options) {
    super(options);
    this.description = "Reestablish roles for new members";
    this.guildonly = true;
    this.permissions = {
      user: [0, 0],
      bot: [1073741824, 0]
    };
  }
  async run(bot, message, args) {
    let u = timer.get(message.author.id);
    if (!u) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        timer.set(message.author.id, true);
        setTimeout(() => {
          timer.delete(message.author.id);
        }, 21600000);
      }
    } else {
      return message.channel.send("You cannot use this command, wait 6 hours!");
    }
    const col = message.guild.emojis.cache.filter(e => e.roles.cache.first());
    if (!col.first())
      return message.channel.send("There are no emojis to update");

    col.each(e => {
      let c = e.roles.cache;
      e.edit({ roles: c });
    });
 await message.channel.send("Done, new role members should now be able to use the emoji");
  }
}