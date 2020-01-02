import React, { Component } from 'react';
import UsersId from '../components/UsersId';


class ClientInformation extends Component {
    constructor(props) {
        super(props);
        this.state= {
        // user_id: '',
        // password: ''
        users: '',
        }
        }
        stateRefresh = () => {
            this.setState({
                // user_id: '',
                // password: ''
                users: '',
            });
            this.callApi()
            .then(res => this.setState({users: res}))
            .catch(err => console.log(err));
        }
        componentDidMount() {
            this.callApi()
            .then(res => this.setState({ users: res}))
            .catch(err => console.log(err));
        }
        callApi = async () => {
            const response = await fetch('/api/ClientInformation')
            const body = await response.json();
            return body
        }
        
        handleFormSubmit = (e) => {
        e.preventDefault();
        // this.props.onCreate(this.state);
        if(this.state.users.password == this.state.password) {
            this.props.history.push('/ClientInformation2')
        }

        this.setState({
            user_id: '',
            password: ''
            //if 비번이 일치하면 다음 페이지로 넘어가고 아니면 비번이 틀렸다는 창뜨게
        })
    }

    render (){
      
        return (
           <form onSubmit={this.handleFormSubmit}> 
            <h1>비밀번호인증</h1>
            <input type="text" placeholder="아이디" values={this.state.user_id} name="user_id"/> <br/>
            <input type="password" placeholder="비밀번호" values={this.state.password} name="password"/> <br/>
            <button type="submit">확인</button>
             </form>
            
        )
    }
}

export default ClientInformation;                           