import Command from "../../utils/command.js";

import Discord from 'discord.js';

import cheerio from 'cheerio';

import fetch from 'node-fetch';

export default class extends Command {
  constructor(options) {
    super(options);
    this.aliases = [];
    this.description = "Random Widget Image";
    this.permissions = {
      user: [0, 0],
      bot: [0, 16384]
    }
  }
  async run(bot, message, args) {
    await image(message);
  }
}
async function image(message) {
  const options = {
    method: "GET",
    headers: {
      Accept: "text/html",
      "User-Agent": "Chrome"
    }
  };

  const response = await fetch(
    "http://results.dogpile.com/serp?qc=images&q=" + "wow wow wubbzy widget",
    options
  );
  const responseBody = await response.text();
  let $ = cheerio.load(responseBody);

  const links = $(".image a.link");

  const urls = new Array(links.length)
    .fill(0)
    .map((v, i) => links.eq(i).attr("href"));

  if (!urls.length) {
    return;
  }

  const rimg = urls[Math.floor(Math.random() * urls.length)];

  // Send result
  const embed = new Discord.MessageEmbed()
    .setTitle("Random Widget Image")
    .setImage(rimg);
  await message.channel.send(embed);
}
