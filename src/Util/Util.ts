export function bindAsEventListener(func, obj) {
  return (event) => {
    return func.call(obj, event || window.event);
  }
}
export function stopEventBubble(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
  if (e && e.stopPropagation) {
    e.stopPropagation();
  } else {
    window.event.cancelBubble = true;
  }
}