import React, { Component } from 'react';
import Customer from '../components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class EntireShowAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: '',
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
    });

    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/showall');
    const body = await response.json();
    return body
  }
  render() {

    return (
        <Paper id='showtemp'>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>모든 상영작  </TableCell>
              </TableRow>
              {this.state.customers ? this.state.customers.map(c => {
                return <Customer key={c.show_id} show_id={c.show_id} troup_id={c.troup_id} genre_id={c.genre_id} show_title={c.show_title}
                 start_date={c.start_date} end_date={c.end_date} show_preview={c.show_preview} show_content={c.show_content}/>
              }) : "no data"}
            </TableBody>
          </Table>
        </Paper>

    )
  }

}

export default EntireShowAll;