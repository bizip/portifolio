import React,{Fragment} from 'react'
const MainNavBar=()=>{

return <Fragment>
     <nav className="navBar">
            <div className="maxWidth">
                <div className="logo">
                    <a href='#'>Pas<span>cal</span></a>
                </div>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </div>
        </nav>
</Fragment>

}
export default MainNavBar;