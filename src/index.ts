// @ts-nocheck
import Bot from "meowerbot";
import { config } from "dotenv";
import { Context } from "../lib/interfaces";

config();

const bot = new Bot();
const commands: string[] = [
    "help",
    "whois"
];

bot.onCommand("help", (ctx: Context) => {
    ctx.reply(`Commands:\n\t${commands.join("\n\t")}`);
});

bot.onCommand("whois", async (ctx: Context) => {
    let user: any = await fetch(`https://api.meower.org/users/${ctx.args[1]}`).then(res => res.json());
    console.log(ctx);
    ctx.reply(`${user._id}\n\t`);
});

bot.onLogin(() => {
    // bot.post("BlueBot is now online!", null);
});

bot.login(process.env.BB_USERNAME, process.env.BB_PASSWORD);
