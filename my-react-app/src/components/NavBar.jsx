import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='nav'>
      <h2 className='nav-brand'>Tesnim!</h2>
      <ul className='menu'>
        <li><Link to='/' className='menu-btn'>Home</Link></li>
        <li><Link to='/newblog' className='menu-btn'>New Blog</Link></li>
        <li><Link to='/bookmark' className='menu-btn'>Bookmark</Link></li>

      </ul>
    </div>
  )
}

export default NavBar
