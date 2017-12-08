import React, { PropTypes } from 'react'
import ReduxedCell from '../containers/ReduxedCell'
import './App.css';

const App = ({keydownListener, r, c}) => {
  return (
    <div className="App" onKeyDown={keydownListener}>
      <input type='text' value={r + ':' + c} />
      {Array(r).fill().map((_, i) => {
        return <ReduxedCell r={i} c={c} key={'row' + i}/>
      })}
    </div>
  )
}

App.propTypes = {
  keydownListener: PropTypes.func.isRequired,
  r: PropTypes.number.isRequired,
  c: PropTypes.number.isRequired,
}

export default App;
