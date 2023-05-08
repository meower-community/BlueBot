// @ts-nocheck
import Bot from "meowerbot";
import { config } from "dotenv";
config();
const bot = new Bot();
const commands = [
    `@${process.env.BB_USERNAME} help`
];
bot.onCommand("help", (ctx) => {
    ctx.reply(`Commands:\n${commands.join("\n\t")}`);
});
bot.onLogin(() => {
    bot.post("BlueBot is now online!", null);
});
bot.login(process.env.BB_USERNAME, process.env.BB_PASSWORD);
