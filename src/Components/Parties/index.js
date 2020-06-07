import React from 'react'
import { connect } from 'react-redux';
import { Box } from '@material-ui/core'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'


class Parties extends React.Component {
  render() {
    console.log(this.props.parties)
    const { parties } = this.props
    return (
      <Box className='text-muted p-3' >
        <h1>Wellcome!!!</h1>
        <h2>This is Parties.</h2>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parties.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.total_cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    parties: state.parties
  }
}

export default connect(mapStateToProps)(Parties);