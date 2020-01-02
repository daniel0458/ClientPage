import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

class RefundUpdate extends React.Component {

constructor(props) {

super(props);

this.state = {

open: false

}

this.handleClickOpen = this.handleClickOpen.bind(this)

this.handleClose = this.handleClose.bind(this);

}

handleClickOpen() {

this.setState({

open: true

});

}


handleClose() {

this.setState({

open: false

})

}



RefundUpdate(user_id){
    const url = '/api/myshowupdate';
    fetch(url);
    this.props.stateRefresh();
}

render() {

return (

<div>

<Button variant="contained" color="black" onClick={this.handleClickOpen}>

환불신청

</Button>

<Dialog onClose={this.handleClose} open={this.state.open}>

<DialogTitle onClose={this.handleClose}>

환불신청

</DialogTitle>

<DialogContent>

<Typography gutterBottom>

환불하시겠습니까?

</Typography>

</DialogContent>

<DialogActions>

<Button variant="contained" color="black" onClick={(e) => {this.RefundUpdate(this.props.user_id)}}>환불</Button>

<Button variant="outlined" color="black" onClick={this.handleClose}>닫기</Button>

</DialogActions>

</Dialog>

</div>

)

}

}



export default RefundUpdate;


