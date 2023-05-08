// @ts-nocheck
import Bot from "meowerbot";
import { config } from "dotenv";
import { Context } from "../lib/interfaces";

config();

const bot = new Bot();
const commands: string[] = [
    `@${process.env.BB_USERNAME} help`
];

bot.onCommand("help", (ctx: Context) => {
    ctx.reply(`Commands:\n\t${commands.join("\n\t")}`);
});

bot.onLogin(() => {
    bot.post("BlueBot is now online!", null);
});

bot.login(process.env.BB_USERNAME, process.env.BB_PASSWORD);
