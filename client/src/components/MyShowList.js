import React from 'react'; 
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// import { Button } from '@material-ui/core';
// import RefundUpdate from '../RefundUpdate';
import RefundUpdate from '../pages/RefundUpdate';

class MyShowList extends React.Component{
    render(){
        return(
            <TableRow>
                
                <TableCell>{this.props.show_id}</TableCell>
                <TableCell>{this.props.ticketing_date}</TableCell>
                <TableCell>{this.props.refund_flag}</TableCell>
                <TableCell><RefundUpdate stateRefresh={this.props.stateRefresh} /></TableCell>
                {/* <TableCell><Button>신창하기</Button></TableCell> */}
            </TableRow>
        )
    }
}
export default MyShowList; 