import LUISClient from 'luis-sdk'

const luis = new LUISClient({
  domain: process.env.LUIS_DOMAIN,
  appId: process.env.LUIS_APP_ID,
  appKey: process.env.LUIS_APP_KEY,
  verbose: true,
})

export default async function handler(context, next) {
  const { text = '' } = context.event
  if (text.indexOf('支援') >= 0) {
    const response = await new Promise((resolve, reject) => {
      luis.predict(context.event.text, {
        onSuccess: resolve,
        onFailure: reject,
      })
    })
    console.log('luis response:', response)
    if (response.topScoringIntent.score > 0.5) {
      context.intent = response.topScoringIntent.intent
    }
    next()
  }
}
