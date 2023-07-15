
/**
 * import ripple from './ripple'
 * directives: { ripple }
 * 
 * v-ripple
 * @desc 点击元素出现涟漪点击态
 * @example
 * ```vue
 * <div v-ripple></div>
 * ```
 */
export default {
  beforeMount(el) {
    el.addEventListener('touchstart', handleTouchStart)
    el.addEventListener('mousedown', handleMouseDown)
  },

  beforeUnmount(el) {
    el.removeEventListener('touchstart', handleTouchStart)
    el.removeEventListener('mousedown', handleMouseDown)
  },
}


function handleTouchStart(event) {
  if (event.changedTouches) {
    renderRipple(event.type, event.changedTouches[0]);
  }
}

function handleMouseDown(event) {

  // 只有点击左键才触发
  if (event.button === 0) {
    renderRipple(event.type, event)
  }
}

let index = 0
function renderRipple(eventType, event) {
  
  const holder = event.currentTarget || event.target
  if (!holder) return

  const attribute = 'rippple-event-type'
  const attr = holder.getAttribute(attribute)
  if (attr && attr !== eventType) return

  holder.setAttribute(attribute, eventType)

  // 计算ripple大小，左上角为0,0点
  const rect = holder.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // 创建ripple
  const container = document.createElement('span')
  const ripple = document.createElement('span')

  // 只记录第一次点击记录，防止点击多次样式错误
  let position;
  if (!index) {
    index++
    position = holder.style.position || getComputedStyle(holder, 'position')
    if (!position || position === 'static') {
      holder.style.position = 'relative'
    }
  }

  const max = Math.sqrt(rect.width * rect.width + rect.height * rect.height)
  const size = `${max * 2}PX`
  container.style = `
    color: inherit;
    border-radius: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
    contain: strict;
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
  `
  ripple.style = `
    width: ${size};
    height: ${size};
    left: ${-max + x}PX;
    top: ${-max + y}PX;
    background-clip: padding-box;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0.1;
    pointer-events: none;
    position: absolute;
    transform: scale(0);
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    user-select: none;
    overflow: hidden;
    will-change: transform, opacity;

  `
  container.appendChild(ripple)
  holder.appendChild(container)

  setTimeout(() => {
    showRipple(ripple)
  }, 0);


  // 移除ripple
  const releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend'
  const handleRelease = function() {
    document.removeEventListener(releaseEvent, handleRelease)

    hideRipple(ripple)
    
    // ripple动画执行完成后，移除ripple节点
    const timeout = 500

    setTimeout(() => {
      holder.removeChild(container)

      if (holder.children.length === 0) {
        if (!position || position === 'static') holder.style.position = ''
        holder.removeAttribute(attribute);
        index = 0
      }
    }, timeout);
  }

  document.addEventListener(releaseEvent, handleRelease)
}


function showRipple(ripple) {
  ripple.style.opacity = 0.2
  ripple.style.transform = 'scale(1)'
}

function hideRipple(ripple) {
  ripple.style.opacity = 0
}

function getComputedStyle(el, label) {
  if (window && window.getComputedStyle) {
    return window.getComputedStyle(el).getPropertyValue(label)
  } else return ''
}
