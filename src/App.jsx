import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Pasta from './Components/Pasta/Pasta';
import Pizza from './Components/Pizza/Pizza';
import Kebab from './Components/Kebab/Kebab';
import IceCream from './Components/IceCream/IceCream';
import Cake from './Components/Cake/Cake';
import Croissant from "./Components/Croissant/Croissant"
import ScrollToTop from './ScrollToTop';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails';
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/pizza" component={Pizza} />
          <ProtectedRoute path="/pasta" component={Pasta} />
          <ProtectedRoute path="/kebab" component={Kebab} />
          <ProtectedRoute path="/icecream" component={IceCream} />
          <ProtectedRoute path="/croissant" component={Croissant} />
          <ProtectedRoute path="/cake" component={Cake} />
          <ProtectedRoute path="/recipedetails/:id" component={RecipeDetails} />
          <Route path="/404" component={NotFound} />
          <Redirect from="/" exact to="/register" />
          <Redirect path="*" to="/404" />
        </Switch>

      </Fragment>
    )
  }
}
