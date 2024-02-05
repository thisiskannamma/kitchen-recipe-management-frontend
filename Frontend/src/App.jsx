import "./App.css"
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import Registration from "./Components/Registration"
import Login from "./Components/Login"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import CreateRecipe from "./Components/CreateRecipe"
import ViewRecipe from "./Components/ViewRecipe"
import ShowNoNavbar from "./Components/ShowNoNavbar"
import UpdateRecipe from "./Components/UpdateRecipe"
import Dashboard from "./Components/Dashboard"
import VegRecipe from "./Recipe/VegRecipe"
import NonVegRecipe from "./Recipe/NonVegRecipe"
import BakedRecipe from "./Recipe/BakedRecipe"
import GrilledRecipe from "./Recipe/GrilledRecipe"
import ChilledRecipe from "./Recipe/ChilledRecipe"

function App() {


  return (
  <Router>
    <ShowNoNavbar>
    <Navbar/>
    </ShowNoNavbar>
    <Routes>
      
      <Route path='/register' Component={Registration}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/home' Component={Home}></Route>
      <Route path='/dashboard' Component={Dashboard}></Route>
      <Route path='/category/veg' Component={VegRecipe}></Route>
      <Route path='/category/non-veg' Component={NonVegRecipe}></Route>
      <Route path='/category/baked' Component={BakedRecipe}></Route>
      <Route path='/category/grilled' Component={GrilledRecipe}></Route>
      <Route path='/category/chilled' Component={ChilledRecipe}></Route>
      <Route path='/recipe/create' Component={CreateRecipe}></Route>
      <Route path='/recipe/:id' Component={ViewRecipe}></Route>
      <Route path='/recipe/update/:id' Component={UpdateRecipe}></Route>
      <Route path="/" element={<Navigate replace to='/register'></Navigate>}></Route>
    </Routes>
  </Router>
  )
}

export default App
