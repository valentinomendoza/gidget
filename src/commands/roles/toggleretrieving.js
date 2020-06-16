const MessageModel = require("../../database/models/retreiveconfig");

module.exports = {
  run: async (bot, message, args) => {
    if(!message.guild) return message.channel.send("This command only works on servers");
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permission to modify that.")
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I don't have the `MANAGE_ROLES` permission.")
    let msgDocument = await MessageModel.findOne({ guildId: message.guild.id });
    if(!msgDocument) {
      new MessageModel({
        guildId: message.guild.id,
        enabled: true,
      }).save().then(() => {
        message.channel.send("Now I will re-deliver the roles to the members who return to the server\nUse `mlremove <id>` if you need a user not to retrive the roles.");
      bot.rrcache.delete(message.guild.id);
      })
    } else {
      msgDocument.updateOne({ enabled: !msgDocument.enabled }).then(() => {
        message.channel.send(!msgDocument.enabled ? "Now I will re-deliver the roles to the members who return to the server\nUse `mlremove <id>` if you need a user not to retrive the roles." : "I will no longer re-deliver roles to users");
        bot.rrcache.delete(message.guild.id);
      })
    }
  },
  aliases: [],
  description: "If a server member leaves, return the roles to them."
}