import { createRequestHandler } from 'bottender-lambda'

import bots from './bots'

export const line = (_event, _context, callback) => {
  // console.log('apiw event:', JSON.stringify(_event))
  const handler = createRequestHandler(bots.line)
  const { context } = _event
  const event = {
    httpMethod: context['http-method'],
    body: _event['body-json'],
  }
  console.log('event:', JSON.stringify(event))
  handler(event, _context, callback)
}

export default {
  line,
}
