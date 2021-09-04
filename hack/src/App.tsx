import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Wrapper} from './App.styles';
import {Home, Quiz, Watson, Games, Draw} from './pages/index'
import Header from './components/Header'
import {General, Animals, AmericanHistory, Science, Sports} from './pages/quizPages/index'

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
          <Route exact path="/quiz/general" component={General}/>
          <Route exact path="/quiz/animals" component={Animals}/>
          <Route exact path="/quiz/history" component={AmericanHistory}/>
          <Route exact path="/quiz/science" component={Science}/>
          <Route exact path="/quiz/sports" component={Sports}/>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
