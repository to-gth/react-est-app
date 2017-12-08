export const focus = (r=0, c=0) => {
  return {
    type: 'SET',
    r,
    c,
  }
}

export const focusRight = () => {
  return {
    type: 'FOCUS_RIGHT',
  }
}

export const focusLeft = () => {
  return {
    type: 'FOCUS_LEFT',
  }
}
