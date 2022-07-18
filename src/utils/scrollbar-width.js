
let scrollbarWidth = 0

export default function() {
  if (scrollbarWidth) return scrollbarWidth

  const outer = document.createElement('div')
  const inner = document.createElement('div')

  outer.style = 'position: absolute;left: -999;top: -999;visibility: hidden;width: 100px;overflow: scroll;'
  inner.style = 'width: 100%'

  outer.appendChild(inner)
  document.body.appendChild(outer)

  scrollbarWidth = inner.offsetWidth - outer.offsetWidth

  outer.parentNode.removeChild(outer)

  return scrollbarWidth
}
