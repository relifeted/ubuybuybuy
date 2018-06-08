export default async function handler(context, next) {
  await context.reply([
    {
      type: 'text',
      text: 'Hello!',
    },
  ])
  next()
}
