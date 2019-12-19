import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Dallyeog, Posts, Mypage, Showing, ClientInformation} from '../pages';
import Menu from '../components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route path="/Dallyeog" component={Dallyeog}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/mypage" component={Mypage}/>
                <Route path="/showing" component={Showing}/>
                <Route path="/clientinformaion" component={ClientInformation}/>
             
            </div>
        );
    }
}

export default App;