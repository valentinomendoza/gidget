import Command from '../../utils/command.js'
export default class extends Command {
    constructor(options) {
        super(options);
        this.description = "This command enables message link detection so that a message from the bot appears with its content."
        this.guildonly = true;
        this.permissions = {
            user: [8, 0],
            bot: [0, 0]
        }
    }
    async run(bot, message, args) {
        const thing = message.guild.cache.messagelinksconfig ? message.guild.messagelinksconfig : await message.guild.getMessageLinksConfig();
        await message.guild.setMessageLinksConfig(!thing.enabled);
        await message.channel.send("You have " + (!thing.enabled ? "enabled" : "disabled") + " the message link detection system");
    }
}