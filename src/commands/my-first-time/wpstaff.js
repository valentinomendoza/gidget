module.exports = {
    run: async (bot, message, args) => {
     if(!message.guild) return message.channel.send('This command only works on Wow Wow Discord.')
      if (message.guild.id !== '402555684849451028') return message.channel.send('This command only works on Wow Wow Discord.')
      let members = ["**SuKanzoo**", "**AndreMor**", "**Thevideogameguy22**", "**Wubbzy! Wow!**", "**DerpJobi**"];
      let description = ["He is the greatest Wubbzy fan that you have ever seen", "A 15 year old boy from Peru who is helping with the CSS and JS of Wubbzypedia and the international content. A great Wubbzy fan too.", "A 15 year old boy, who loves the show and has always contributed to the wiki. Hobbies: Loves playing Guitar Hero and Just Dance", "He supports the HD content of the series, both uploading videos on his channel and uploading frames here.", "He has been supporting Wubbzypedia lately, such as detecting errors, reversing bad edits, helping to place templates, and editing :)"]
      let permissions = ["Bureaucrat", "Bureaucrat", "Bureaucrat", "Content Moderator", "Content Moderator"]
      let text = "";
      for (let i = 0; i < 5; i++) {
  text += members[i] + ": " + description[i] + "\n**Permissions:** " + permissions[i] + "\n \n";
}
      message.channel.send("The Wubbzypedia staff: \n" + text)
    },
    aliases: ["wubbzypedia-staff"],
    description: "Wubbzypedia staff :)",
}