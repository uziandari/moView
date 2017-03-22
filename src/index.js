import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import containers
import App from './containers/App';

//import components
import MovieGrid from './components/MovieGrid';
import SingleMovie from './components/SingleMovie';

//import styles
import './styles/index.css';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/view/:postId" component={SingleMovie} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
  );
