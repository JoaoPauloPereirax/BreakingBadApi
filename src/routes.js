import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Character from './pages/Character'


export default function Routes (){
   return(
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/characters/:id" component={Character} />
      </Switch>
   </BrowserRouter>
   )
}