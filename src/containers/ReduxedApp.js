import { connect } from 'react-redux'
import { focusRight, focusLeft } from '../actions'
import App from '../components/App'

const mapStateToProps = ({ cell }) => {
  return {
    r: cell.r,
    c: cell.c,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    keydownListener: (e) => {
      if (e.which === 13) {
        dispatch(e.shiftKey ? focusLeft() : focusRight())
      }
    },
  }
}

const ReduxedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

export default ReduxedApp
