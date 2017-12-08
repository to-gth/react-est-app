const leftend = 0
const rightend = 7
const initialState = { r: 0, c: 0 }

const cell = (state=initialState, action) => {
  const {r, c} = state

  switch (action.type) {
    case 'FOCUS':
      return {r, c}
    case 'FOCUS_RIGHT':
      return (c > rightend)
              ? {r: r + 1, c: 0}
              : {r: r, c: c + 1}
    case 'FOCUS_LEFT':
      return (c < leftend)
              ? {r: r - 1, c: rightend}
              : {r: r, c: c - 1}
    default:
      return state
  }
}

export default cell
