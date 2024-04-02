import React from "react";
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header(){
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const user = useSelector((data) => data.auth);
    // console.log('hi this is user data :' ,user.userData.name);
    const navItems = [
        {
          name: 'Home',
          slug: "/",
          active: true
        }, 
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
      },
      {
          name: "Signup",
          slug: "/signup",
          active: !authStatus,
      },
      {
          name: "All Posts",
          slug: "/all-posts",
          active: authStatus,
      },
      {
          name: "Add Post",
          slug: "/add-post",
          active: authStatus,
      },
      ]

    return (
        <header className='py-3 shadow bg-gradient-to-r from-sky-300 to-purple-500'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
                <div className='flex ml-auto'>
                <Logo width='70px'   />
                {
                  authStatus && 
                  <h1>{user.userData.name}</h1>
                }
               

                </div>
                
                </Link>
               
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
          </Container>
      </header>
    )
}

export default Header;