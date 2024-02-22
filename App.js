import React from 'react';
import Nav from './Navbar';
import {Users} from './DynamicRouting/Users';
import {UsersDetail} from './DynamicRouting/Users-details';
import {Routes,Route} from 'react-router-dom';
import {Contact} from './Contact';

// import About from './About';
import {Home} from './Home';


const LazyAbout=React.lazy(()=>import('./About')); //Dynamically import the Lazy component to stop loading at a time all it makes suspense for some time 
//performance tool which in 'react-router-dom' Lazytime.****
function App(){
    return (
        <div>
       <Nav/>
       <Contact/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            {/* <Route path="/About" element={<About/>}/> */}
            <Route path="/About" element={<React.Suspense fallback="Loading......"><LazyAbout/></React.Suspense>}/>

            {/* we use <React.Suspense fallback="Loading......"> for indicating it is loading but it actually suspend by lazyloading*/}
            <Route path="/Users" element={<Users/>}/>
            <Route path="/Users/:Id" element={<UsersDetail/>}/>
        </Routes>
        </div>
    )
}
export default App;