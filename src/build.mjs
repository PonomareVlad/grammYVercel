import {bot} from "./bot.mjs";
import {secretToken} from "./data.mjs";
import {saveInfo, setWebhook} from "vercel-grammy/build";

if (process.env.VERCEL_ENV === "development") process.exit();

if (await setWebhook(bot, {secret_token: secretToken})) {
    const {url} = await bot.api.getWebhookInfo();
    console.info("Secret token:", secretToken);
    console.info("Webhook set to URL:", url);
}

// const path = new URL("../info.json", import.meta.url);

// console.info("Bot info:", await saveInfo(bot, {path}));
