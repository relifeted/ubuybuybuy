// import LUISClient from 'luis-sdk'

// const luis = new LUISClient({
//   domain: process.env.LUIS_DOMAIN,
//   appId: process.env.LUIS_APP_ID,
//   appKey: process.env.LUIS_APP_KEY,
//   verbose: true,
// })

export default async function handler(context, next) {
  const { text = '' } = context.event
  if (text.indexOf('支援') >= 0) {
    // const response = await new Promise((resolve, reject) => {
    //   luis.predict(context.event.text, {
    //     onSuccess: resolve,
    //     onFailure: reject,
    //   })
    // })
    // console.log('luis response:', response)
    // if (response.topScoringIntent.score > 0.5) {
    //   context.intent = response.topScoringIntent.intent
    // }
    switch (text) {
      case "支援買買買":
      case "支援剁手":
      case "支援剁剁剁":
      case "支援買了啦":
      case "支援勸敗":
      case "樓下支援買買買":
      case "樓下支援剁手":
      case "樓下支援剁剁剁":
      case "樓下支援買了啦":
      case "樓下支援勸敗":
        context.intent = "support buybuybuy"
        break;
      case "支援開司":
      case "支援給開司一罐啤酒":
      case "支援給開司一罐":
      case "樓下支援開司":
      case "樓下支援給開司一罐啤酒":
      case "樓下支援給開司一罐":
        context.intent = "support desire ball"
        break;
      case "支援浪味仙":
      case "樓下支援浪味仙":
        context.intent = "support lonely god"
        break;
      case "支援豹頭":
      case "支援全都要":
      case "支援全部都要":
      case "支援全要":
      case "樓下支援豹頭":
      case "樓下支援全都要":
      case "樓下支援全部都要":
      case "樓下支援全要":
        context.intent = "support panther head"
        break;

      default:
        break;
    }
    next()
  }
}
