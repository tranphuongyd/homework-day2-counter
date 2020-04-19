import React from 'react';
import './App.css';
import { TimerComponent } from './components/timer/timer';
import { RatingComponent } from './components/rating/rating';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <TimerComponent />
      <RatingComponent />
      </div>
    );
  };
}

export default App;
