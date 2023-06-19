
import './App.css';
import {Routes, Route, Outlet, useParams, useOutletContext, useLocation, useNavigate} from 'react-router-dom'

import Nav from './component/Nav'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <h1>react router workshop</h1>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/users" element={<Users/>}>
          <Route path=":id" element={<User/>}/>
          <Route path="me" element={<UserMe/>}/>
        </Route>

        <Route path="/loc" element={<Loc/>}/>
        <Route path="*" element={<Unknown/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

function Home(){
  const navigate = useNavigate()
  return (
    <main>
      <h2>This is home</h2>
      <div>
        <a href onClick={() => {navigate('/loc')}}>go to Location</a>
      </div>
      
    </main>
  )
}

function Users(){
  return (
    <main>
      <h2>This is Users</h2>

      <Outlet context={{clinton: Date.now()}}/>

      <Routes>
         <Route path=":id" element={<User/>}/>
          <Route path="me" element={<UserMe/>}/>
      </Routes>
    
    </main>
  )
}



function User(){

  const {id} = useParams()
  const context = useOutletContext();
  const clinton = context ? context.clinton : "";
  return (
    <main>
      <h2>This is User {id}</h2>
      <p> The data is {clinton} </p>
    </main>
  )
}

function UserMe(){
  return (
    <main>
      <h2>This is User Me</h2>
    </main>
  )
}

function Loc(){
  const {pathname, search, hash,state} = useLocation()
  return (
    <main>
      <h2>{pathname}</h2>
      <h2>{search}</h2>
      <h2>{hash}</h2>
      <h2>{JSON.stringify(state)}</h2>
    
    </main>
  )
}

function Unknown(){
  return (
    <main>
      <h2>Page not found</h2>
    
    </main>
  )
}


export default App;


