import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Information from './pages/Information'


export default function Routes (){
   return(
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/information" component={Information} />
      </Switch>
   </BrowserRouter>
   )
}