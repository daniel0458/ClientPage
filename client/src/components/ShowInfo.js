import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import profile from '../upload/profile.jpg'
class ShowInfo extends React.Component {
    render() {
        return (
            <div>
                <TableRow>
                    <TableCell>
                        <Typography>
                            {this.props.show_content}
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <img src={this.props.show_preview} alt="이미지없음"/>
                    </TableCell>
                </TableRow>
            </div>
        )
    }
}
export default ShowInfo;