import React from 'react'; 
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class MyShowList extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.show_id}</TableCell>
                <TableCell>{this.props.ticketing_date}</TableCell>
                <TableCell>{this.props.refund_flag}</TableCell>
            </TableRow>
        )
    }
}
export default MyShowList; 