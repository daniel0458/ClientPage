import React, { Component } from 'react';
import QNAS1 from '../components/QNAS1';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// // import QNAInsert from 'components/QNAInsert'
// import QNAS from 'components/QNAS'
// import CircularProgress from '@material-ui/core/CircularProgress';

class QNAShow extends Component {
    constructor(props) {
      super(props);
      this.state = {
        QNAS: '',
        completed: 0
      }
      this.stateRefresh = this.stateRefresh.bind(this);
    }
  
    stateRefresh = () => {
      this.setState({
        QNAS: '',
        completed: 0
      });
  
      this.callApi()
        .then(res => this.setState({ QNAS: res }))
        .catch(err => console.log(err));
    }

    componentDidMount() {
      this.timer = setInterval(this.progress, 20);
      this.callApi()
        .then(res => this.setState({ QNAS: res }))
        .catch(err => console.log(err));
    }
  
    callApi = async () => {
      const response = await fetch('/QNADetail/'+this.props.QnA_id);
      console.log(response)
      const body = await response.json();
      return body
    }
    progress = () => {
      const {completed} = this.state;
      this.setState({completed: completed >= 100 ? 0 : completed +1});
    }
    handleValueChange =(e) =>{
      let nextState = {}
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }
  //   handleClickOpen = () => {
  //     this.setState({
  //         open: true
  //     });
  // }
    render() {
      // const { classes } = this.props;
      const cellList = ["글번호",  "제목", "내용", "아이디", "등록일", "조회수"];
      //console.log(this.props.QnA_id)
      //console.log(this.props.QnA_title)
      return (
        <div>
          <Paper >
            <Table >
              <TableHead>
                <TableRow>
                  {cellList.map(c => {
                    return <TableCell key={c.toString()}>{c}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>
                  {this.state.QNAS ? this.state.QNAS.map(c => {
                    return <QNAS1 key={c.QnA_id} QnA_id={c.QnA_id} QnA_title={c.QnA_title} QnA_content={c.QnA_content} user_id={c.user_id} QnA_date={c.QnA_date} QnA_views={c.QnA_views}  />
                  }) : "no data"}
                  </TableCell>
              </TableBody>
            </Table>
          </Paper>
 
        </div>
  
      )
    }
  
  }

  export default QNAShow;