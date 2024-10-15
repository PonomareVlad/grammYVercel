import { bot, secretToken as secret_token } from '../src/bot.mjs'

// Default Vercel hostnames
export const {
    VERCEL_URL = 'localhost',
    VERCEL_BRANCH_URL: hostname = VERCEL_URL,
} = process.env

// Webhook URL generation
const url = new URL('api/webhook', `https://${hostname}`)

// Installing a webhook
if (await bot.api.setWebhook(url.href, { secret_token })) {

    // Checking the webhook installation
    const { url } = await bot.api.getWebhookInfo()

    console.info('Secret token:', secret_token)
    console.info('Webhook set to URL:', url)
    console.info('Info:', bot.botInfo)

}
