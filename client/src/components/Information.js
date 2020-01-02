import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Tablecell from '@material-ui/core/Tablecell';
import ClientInformation2 from '../pages/ClientInformation2';
class Information extends React.Component {
    render() {
        return (
            <TableRow>
                <Tablecell>{this.props.user_id}</Tablecell>
                <Tablecell>{this.props.name}</Tablecell>
                <Tablecell>{this.props.password}</Tablecell>
                <Tablecell>{this.props.email}</Tablecell>
                <Tablecell>{this.props.dislike_genre}</Tablecell>
          
   
            </TableRow>

        )
    }
}

export default Information;