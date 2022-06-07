import {BrowserRouter as Router, Switch , Route} from 'react-router-dom' 
import Home from './Home'
import Sheets from './Sheets'
import Details from './Details'
import Update from './Update'
import Navbar from './Navbar'

function App() {

  
  return (
    <Router>
      <div className="App">

        <Navbar/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/Sheets">
            <Sheets/>
          </Route>

          <Route exact path="/Details:id">
            <Details/>
          </Route>

          <Route exact path="/Update:id">
            <Update/>
          </Route>
        
        </Switch>
    </div>
    </Router>
  );
}

export default App;