import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'


export default function Routes (){
   return(
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/characters" component={Characters} />
      </Switch>
   </BrowserRouter>
   )
}