import { Line } from 'messaging-api-line'

const buybuybuyImages = [
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/1.gif',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/2.jpg',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/3.jpg',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/4.jpg',
]

const pantherHeadImages = [
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/panther_head_1.jpg',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/panther_head_2.jpg',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/panther_head_3.jpg',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/panther_head_4.jpg',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/panther_head_5.jpg',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/panther_head_6.jpg',
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default async function handler(context, next) {
  console.log('context.intent:', context.intent)
  let image
  if (context.intent && context.intent === 'support buybuybuy') {
    const index = getRandomInt(buybuybuyImages.length)
    console.log('index:', index)
    image = buybuybuyImages[index]
  } else if (context.intent && context.intent === 'support panther head') {
    const index = getRandomInt(pantherHeadImages.length)
    console.log('index:', index)
    image = pantherHeadImages[index]
  }
  console.log('image:', image)
  if (image) {
    const message = Line.createImage(image)
    console.log('message:', message)
    await context.reply([message])
  }
  if (context.intent && context.intent === 'support lonely god') {
    const message = Line.createVideo(
      'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/lonely_god_1.mp4',
      'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/lonely_god_1.jpg'
    )
    console.log('message:', message)
    await context.reply([message])
  }
  next()
}
