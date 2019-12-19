import React, { Component } from 'react';
import Customer from '../components/Customer';
import ShowInfo from '../components/ShowInfo';
import ShowFunction from '../components/ShowFunction';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const styles = theme => ({
  show : {
    padding : '10px',
    border: '4px solid black'
  }
})

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers1: '',
      customers2: '',
    }
  }

  stateRefresh = () => {
    this.setState({
      customers1: '',
      customers2: '',
    });

    this.callApi1()
      .then(res => this.setState({ customers1: res }))
      .catch(err => console.log(err));
      this.callApi2()
      .then(res => this.setState({ customers2: res }))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.callApi1()
      .then(res => this.setState({ customers1: res }))
      .catch(err => console.log(err));
      this.callApi2()
      .then(res => this.setState({ customers2: res }))
      .catch(err => console.log(err));
  }

  callApi1 = async () => {
    const response = await fetch('/api/showAll');
    const body1 = await response.json();
    return body1
  }
  callApi2 = async () => {
    const response = await fetch('/api/showRecommend');
    const body2 = await response.json();
    return body2
  }

  callApiShow = async () => {
    const response = await fetch('/api/showselected');
    const body3 = await response.json();
    return body3
  }

  changeAttr = (e) => {
    let obj = document.getElementById("panel1Deatail")
    this.callApiShow()
    .then(res => this.setState({ show: res }))
    .then((body3 => this.setState({show_id: body3.show_id })))
    .catch(err => console.log(err));
    this.state.show.map(data => {
      console.log(data)

      
    })
  }

  render() {
    const { classes } = this.props;

    return (
        <Paper id='temp'>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>모든 상영작  </TableCell>
                <TableCell><NavLink to="/entireShowAll">+더보기</NavLink></TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="left"><ArrowBackIosIcon></ArrowBackIosIcon></TableCell>
                <ExpansionPanel>
                  <ExpansionPanelSummary>
                    
                    {this.state.customers1 ? this.state.customers1.map(c => {
                      return <TableCell className="show" key={c.show_id} >
                        <img src={c.show_preview} alt={'사진없음'} onClick={this.changeAttr.bind(this, c.show_id)}></img>
                      </TableCell>
                    }) : "no data"}
                    
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails id={"panel1Deatail"} target="0">
                    <Table> 
                      { 
                        (function() {
                          console.log()
                          let showid = document.getElementsByClassName('active')[0].getAttribute('id');
                          switch (showid) {
                            case 'ShowInfo':
                              return <ShowInfo /* show_content={show_content} show_preview={sow_preview} *//>;
                          }
                        })
                      } 
                    <ShowInfo/>  
                    <ShowFunction />
                    </Table>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <TableCell className="right"><ArrowForwardIosIcon></ArrowForwardIosIcon></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>추천 상영작  </TableCell>
                <TableCell><NavLink to="/entireShowAll">+더보기</NavLink></TableCell>
              </TableRow>

              <TableRow>
              <TableCell className="left"> &lt;</TableCell>
                <ExpansionPanel>
                  <ExpansionPanelSummary>
                    {this.state.customers2 ? this.state.customers2.map(c => {
                      return <TableCell className="show" key={c.show_id} >
                        <img src={c.show_preview} alt={'사진없음'} onClick={this.changAttr}></img>
                      </TableCell>
                    }) : "no data"}
                    
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails id={"panel2Deatail"} target="0">
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <TableCell className="right"> &gt;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>

    )
  }

}

export default Home;