// import React, { Component } from 'react';
// import { Router } from 'express';
// // import Customer from '../components/Customer';
// // import Paper from '@material-ui/core/Paper';
//  import Table from '@material-ui/core/Table';
// // import TableHead from '@material-ui/core/TableHead';
// // import TableBody from '@material-ui/core/TableBody';
// // import TableRow from '@material-ui/core/TableRow';
// // import TableCell from '@material-ui/core/TableCell';

// class Authentication extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//          passwords: '',
//         }
//     }
    
//     stateRefresh = () => {
//         this.setState({
//             passwords: '',
//         });
//     this.callApi()
//        .then(res => this.setState({ passwords: res }))
//        .catch(err => console.log(err));
//     }
//     componentDidMount() {
//         this.callApi()
//         .then(res => this.setState({ passwords: res }))
//         .catch(err => console.log(err));
//     }
//     callApi = async () => {
//         const response = await fetch('/api/passwords');
//         const body = await response.json();
//         return body
//     }
   
//      render() {
//         if('./api/passwords' == true )
//             res.json('/clientinformation');
//     }
//         alert("비밀번호가일치하지않습니다.");
//     }

//     return(
//         <div>
//         <Table>
//         <tr>
//         <td>아이디 : </td>
//     <td><input type="text" name="user_id" value="{this.state.user_id}"/></td>
//         </tr>
//         <tr>
//          <td>비밀번호 : </td>
//         <td><input type="password" name="password"value="{this.state.password}" placeholder="비밀번호를 입력하세요"></input></td>
//         </tr>
//         <tr>
//         <button type="button" onClick="./ClientInformation">확인</button>
//         </tr>
//         </Table>
//         </div>
//     )
    


// export default Authentication;