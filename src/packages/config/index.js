import dev      from './dev'
import main     from './main'
import prod     from './prod'

export default {
    ...main,
    ...( process.env.NODE_ENV === 'production' 
        ? prod
        : dev
    ),
}