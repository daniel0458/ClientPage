import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import BlockRoundedIcon from '@material-ui/icons/BlockRounded';
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import '../css/ShowFunction.css';

class ShowFunction extends React.Component {

    moveTab = (e) => {
        
        let tab = document.getElementsByClassName("tab");
        let clicked = document.getElementById(e);
        console.log(clicked);
        for( let i=0; i < tab.length; i++) {
            tab.item(i).setAttribute('class','MuiTableCell-root MuiTableCell-body tab');
        }
        clicked.setAttribute('class','MuiTableCell-root MuiTableCell-body tab active');
      }

    render() {
        return (
            <div>
                <TableRow>
                        <Button>예매</Button>
                        <Button><FavoriteBorderIcon></FavoriteBorderIcon>찜하기</Button>
                        <Button><ChatBubbleRoundedIcon></ChatBubbleRoundedIcon>카카오톡</Button>
                        <Button><BlockRoundedIcon></BlockRoundedIcon>더이상 보지않기</Button>
                       <ThumbUpAltRoundedIcon></ThumbUpAltRoundedIcon> <ThumbDownAltRoundedIcon></ThumbDownAltRoundedIcon>
                </TableRow>
                <hr/>
                <TableRow>
                    <TableCell id='ShowInfo' className='tab active' onClick={this.moveTab.bind(this, 'ShowInfo')}>공연정보</TableCell>
                    <TableCell id='TheaterLocation' className='tab' onClick={this.moveTab.bind(this, 'TheaterLocation')}>극장위치</TableCell>
                    <TableCell id='ShowVideo' className='tab' onClick={this.moveTab.bind(this, 'ShowVideo')}>미리보기</TableCell>
                    <TableCell id='ShowReview' className='tab' onClick={this.moveTab.bind(this, 'ShowReview')}>리뷰</TableCell>
                    <TableCell id='ShowOthers' className='tab' onClick={this.moveTab.bind(this, 'ShowOthers')}>극단의 다른 작품</TableCell>
                </TableRow>
            </div>
        )
    }
}
export default ShowFunction;