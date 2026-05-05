import type jQuery from 'jquery'

declare global {
  interface Window {
    $: typeof jQuery
    jQuery: typeof jQuery
  }

  const $: typeof jQuery
  const jQuery: typeof jQuery
}

export {}
