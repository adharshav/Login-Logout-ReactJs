import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="loginApp">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClickLogout={this.onClickButton} />
          ) : (
            <Login onClickLogin={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
