import { connect } from 'react-redux'
import Cell from '../components/Cell'

const mapStateToProps = ({ cell }) => {
  return {
    r: cell.r,
    c: cell.c,
  }
}

const ReduxedCell = connect(
  mapStateToProps,
)(Cell)

export default ReduxedCell
