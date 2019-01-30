import React from 'react'
import { withRouter } from "react-router";

class LoginForm extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    let inputName = event.target.name
    let inputValue = event.target.value
    this.setState({
      [inputName]: inputValue
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3005/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
    	   user: {
    	    email: this.state.email,
          password: this.state.password
        }
      }
    )
  })

      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('Incorrect username or password')
        } else{
          console.log(data)
          localStorage.setItem('token', data.jwt)
          this.props.loginSetup(data.user)

        }
      })
}
  render () {
    return (
      <div className="welcome">
      <div className="ui middle aligned center aligned grid">
        <div   className="column">

        <h2 class="ui image header">
          <div id="loging" class="content">
            Log-in to your account
          </div>
        </h2>
          <form onSubmit={this.handleSubmit} className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input onChange={this.handleChange} value={this.state.email} type="text" name="email" placeholder="E-mail address"/>
                </div>
              </div>

              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Password"/>
                </div>
              </div>
              <button id='loginClick'className="ui fluid large teal submit button">Log In</button>
            </div>
          </form>
          <div class="ui message">
            New to us? <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(LoginForm);
