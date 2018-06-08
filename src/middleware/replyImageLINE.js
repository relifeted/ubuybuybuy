import { Line } from 'messaging-api-line'

const images = [
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/1.gif',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/2.jpg',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/3.jpg',
  'https://s3-us-west-2.amazonaws.com/ubuybuybuy-us-west-2/4.jpg',
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default async function handler(context, next) {
  console.log('context.intent:', context.intent)
  if (context.intent && context.intent === 'buy buy buy') {
    const index = getRandomInt(images.length)
    console.log('index:', index)
    const image = images[index]
    console.log('image:', image)
    const message = Line.createImage(image)
    console.log('message:', message)
    await context.reply([message])
  }
  next()
}
