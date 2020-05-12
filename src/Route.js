import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hasToken } from "./utils/token";

import ProtectedRoute from './components/ProtectedRoute'

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFound from "./components/NotFound";

import StickersPage from './pages/logo/LogosPage';
import CreateLogo from './pages/logo/CreateLogo';
import LogoUpdate from './pages/logo/UpdateLogo'

class Routes extends Component {

  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <ProtectedRoute isLogin={this.props.isLogin} exact path="/logo" component={StickersPage} />
            <ProtectedRoute isLogin={this.props.isLogin} exact path="/logo/create" component={CreateLogo} />
            <ProtectedRoute isLogin={this.props.isLogin} exact path="/logo/:id" component={LogoUpdate} />
         
            <Route path="/login" component={hasToken() ? null : LoginPage} />
            <Route path="/register" component={hasToken() ? null : RegisterPage} />
            
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;