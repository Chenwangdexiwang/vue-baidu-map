import events from './events.js'

export default function (instance, eventList) {
  const ev = eventList || events[this.$options.name]
  ev && ev.forEach(event => {
    const hasOn = event.slice(0, 2) === 'on'
    const eventName = hasOn ? event.slice(2) : event
    let listener = this.$listeners[eventName]
    if (!listener) {
      listener = this.$listeners[eventName.toLowerCase()]
    }
    listener && instance.addEventListener(event, listener.fns)
  })
}
