// @ts-nocheck
import Bot from "meowerbot";
import { config } from "dotenv";
config();
const bot = new Bot();
bot.onCommand("help", (ctx) => {
    ctx.reply("There are no commands yet!");
});
bot.onLogin(() => {
    bot.post("BlueBot is now online!");
});
bot.login(process.env.BB_USERNAME, process.env.BB_PASSWORD);
