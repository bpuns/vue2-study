/*       */

import { warn } from '../packages/core/util/index'

export default function on (el            , dir              ) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn(`v-on without argument does not support modifiers.`)
  }
  el.wrapListeners = (code        ) => `_g(${code},${dir.value})`
}
