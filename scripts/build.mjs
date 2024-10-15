import { bot, secretToken } from '../src/bot.mjs'
import { getURL } from 'vercel-grammy'

const { VERCEL_ENV } = process.env

// List of allowed environments
const allowedEnvs = [
    'production',
    // "preview"
]

// Check bot
await bot.init()

// Exit in case of unsuitable environments
if (!allowedEnvs.includes(VERCEL_ENV)) process.exit()

// Webhook URL generation
const url = getURL({ path: 'api/webhook' })

// Webhook setup options
const options = { secret_token: secretToken }

// Installing a webhook
if (await bot.api.setWebhook(url, options)) {

    // Checking the webhook installation
    const { url } = await bot.api.getWebhookInfo()

    console.info('Webhook set to URL:', url)
    console.info('Secret token:', secretToken)
    console.info('Info:', bot.botInfo)

}
