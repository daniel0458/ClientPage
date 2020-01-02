import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Dallyeog, Mypage, MyShow, ClientInformation, ClientInformation2, QNA,  ScheduleNovember, ScheduleDecember, ScheduleJanuary, ScheduleFebruary, QNAInsert, Juhyun, QNADetail } from '../pages';
import Menu from '../components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route path="/Dallyeog" component={Dallyeog}/>
                <Route path="/QNA" component={QNA}/>
                <Route path="/mypage" component={Mypage}/>
                <Route path="/MyShow" component={MyShow}/>
                <Route path="/clientInformation" component={ClientInformation}/>
                <Route path="/clientInformation2" component={ClientInformation2}/>
                <Route path="/ScheduleNovember" component={ScheduleNovember}/>
                <Route path="/ScheduleDecember" component={ScheduleDecember}/>
                <Route path="/ScheduleJanuary" component={ScheduleJanuary}/>
                <Route path="/ScheduleFebruary" component={ScheduleFebruary}/>
                <Route path="/QNAInsert" component={QNAInsert}/>
                <Route path="/Juhyun" component={Juhyun}/>
                {/* <Route path="/QNADetail" component={QNADetail}/> */}
                <Route path="/QNADetail/:QnA_id/:QnA_title" component={QNADetail}/>
                {/* <Route path="/calendar" component={Calendar}/> */}
                {/* <Route path="/Maps" component={Maps}/> */}
                {/* <Route path="mapmap" component={mapmap}/> */}
            </div>
        );
    }
}

export default App;