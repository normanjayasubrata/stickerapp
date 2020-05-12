import React, { Component } from 'react'
import { connect } from 'react-redux'

import Routes from './Route'
// import { getAccount } from "./api/account";
import { isLogin, fetcAccount } from "./store/action";
import { FetchAccount } from "./api/account";

export class App extends Component {

  state = {
    fetchDone : false
  }

  componentDidMount() {
    this.props.checkLogin()
    setTimeout(() => {
      this.getAccount();

    }, 200);

  }

  getAccount() {
    if (this.props.account.isLogin) {
      FetchAccount().then(res => {
        this.props.fetcAccount(res.data)
      })
    } else {
      // console.log("belum login")
    }

    this.setState({fetchDone: true})
  }
  
  render() {
    console.log(process.env)
    return (
      <div>
        {
          this.state.fetchDone ? 
          <Routes isLogin={this.props.account.isLogin} />
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  account: state.accountReducer
})

const mapDispatchToProps = (dispatch) => ({
  checkLogin: () => dispatch(isLogin()),
  fetcAccount: (data) => dispatch(fetcAccount(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
