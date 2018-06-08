import { MemorySessionStore } from 'bottender'

const max = 500 // The maximum size of the cache, default will be 500.
const MINUTES_IN_ONE_YEAR = 365 * 24 * 60 // session expired time, default will a year.

export default new MemorySessionStore(max, MINUTES_IN_ONE_YEAR)
