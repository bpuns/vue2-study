/*       */

export const emptyObject = Object.freeze({})

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
export function makeMap(
  str,
  expectsLowerCase
) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
export function noop(a, b, c) { }

/**
 * Mix properties into target object.
 */
export function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

/**
 * Check if a tag is a built-in tag.
 */
export const isBuiltInTag = makeMap('slot,component', true)

/**
 * Create a cached version of a pure function.
 */
export function cached(fn) {
  const cache = Object.create(null)
  return (function cachedFn(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Always return false.
 */
export const no = (a, b, c) => false

/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export const camelize = cached((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
})

/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B([A-Z])/g
export const hyphenate = cached((str) => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})
