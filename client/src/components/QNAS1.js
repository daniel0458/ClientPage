import React from 'react'; 
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class QNAS extends React.Component{

    handleClick =() =>{
        console.log(this.props.QnA_id)
        console.log(this.props.QnA_title)
    }
    render(){
        return(
            <div>
            <TableRow>
                <TableCell>{this.props.QnA_id}</TableCell>
                <TableCell onClick={this.handleClick}></TableCell>
                <TableCell>{this.props.QnA_content}</TableCell>
                <TableCell>{this.props.user_id}</TableCell>
                <TableCell>{this.props.QnA_date}</TableCell>
                <TableCell>{this.props.QnA_views}</TableCell>
            </TableRow>
            </div>
        )
    
            }
}
export default QNAS; 