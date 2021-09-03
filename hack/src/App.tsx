import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Wrapper} from './App.styles';
import {Home, Quiz, Watson, Games, Draw} from './pages/index'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/watson" component={Watson}/>
          <Route exact path="/quiz" component={Quiz}/>
          <Route exact path="/games" component={Games}/>
          <Route exact path="/draw" component={Draw}/>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
