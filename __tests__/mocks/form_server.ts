import handlers from './form_handlers'
import { setupServer } from 'msw/node'

export default setupServer(...handlers)
