
import { post } from 'axios';
import React from 'react';

class ClientInformation2 extends React.Component {
 
    constructor(props) {
    
    super(props);
    
    this.state = {
    
   
    user_id: '',
    
    name: '',
    
    password: '',
    
    email: '',
    
    dislike_genre: '',
  
    exclude_show: ''
    }

    this.stateRefresh = this.stateRefresh.bind(this)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    
    this.handleValueChange = this.handleValueChange.bind(this)
    
    this.changeinformation = this.changeinformation.bind(this)
    
    }
    
    stateRefresh = () => {
        this.setState({
     user_id: '',
    
    name: '',
    
    password: '',
    
    email: '',
    
    dislike_genre: '',
    
    exclude_show: ''
        })
        this.props.stateRefresh();
    }

    handleFormSubmit(e) {
    
    e.preventDefault()
    
    this.changeinformation()
    
    .then((response) => {
    
    console.log(response.data);
    this.props.stateRefresh();
    })
    this.setState({
        
    user_id: '',
    
    name: '',
    
    password: '',
    
    email: '',
    
    dislike_genre: '',
    exclude_show: ''
    })
    window.location.reload()
    }
    
    
    
    handleValueChange(e) {
    
    let nextState = {};
    
    nextState[e.target.name] = e.target.value;
    
    this.setState(nextState);
    
    }
    
    
    
    changeinformation(){
    const url = '/api/users';
    const formData = new FormData();  
    formData.append('user_id', this.state.user_id)
    formData.append('name', this.state.name)
    formData.append('password', this.state.password)
    formData.append('email', this.state.email)
    // formData.append('dislike_genre', this.state.dislike_genre)
    // formData.append('exclude_show', this.state.exclude_show)
    const config = {
    
    }
    
    return post(url, formData, config)
    
    }
    
    
    
    render() {
    
    return (
    
    <form onSubmit={this.handleFormSubmit}>
    
    <h1>회원정보수정</h1>
    
    아이디: <input type="text" name="user_id" value={this.state.user_id} onChange={this.handleValueChange} /><br/>
    이름: <input type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /><br/>
    비밀번호: <input type="password" name="password" value={this.state.password} onChange={this.handleValueChange} /><br/>
    이메일: <input type="text" name="email" value={this.state.email} onChange={this.handleValueChange} /><br/>
    보고싶지않은장르: <input type="text" name=" dislike_genre" value={this.state.dislike_genre} onChange={this.handleValueChange} /> <button>추가</button><br/>
     제외된목록: <button>목록</button><br/>
    <button type="submit">확인</button>
    
    </form>
    
    )
    
    }
    
    }
    
    
export default ClientInformation2;  