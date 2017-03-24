import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import containers
import App from './containers/App';

//import components
import MovieDetail from './components/MovieDetail';

//import styles
import './styles/index.css';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} /> {/*react-router v4*/}
        <Route path="/view/:imdbID?" component={MovieDetail} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
  );
