// @ts-nocheck
import Bot from "meowerbot";
import { config } from "dotenv";
config();
const bot = new Bot();
const commands = [
    "help",
    "whois"
];
bot.onCommand("help", (ctx) => {
    ctx.reply(`Commands:\n\t${commands.join("\n\t")}`);
});
bot.onCommand("whois", (ctx) => {
    ctx.reply(`no`);
});
bot.onLogin(() => {
    bot.post("BlueBot is now online!", null);
});
bot.login(process.env.BB_USERNAME, process.env.BB_PASSWORD);
