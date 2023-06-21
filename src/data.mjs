import info from "../info.json" assert {type: "json"};

export const botInfo = info || undefined;

export const {
    TELEGRAM_BOT_TOKEN: token,
    TELEGRAM_SECRET_TOKEN: secretToken = String(token).split(":").pop()
} = process.env;
