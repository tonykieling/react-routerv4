import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderLinks() {
  return (
    <div className="links">
      <NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
      <NavLink to="/about" className="link">About</NavLink>
      <NavLink to="/contact" className="link">Contact Us</NavLink>
      <NavLink to="/admin" className="link">Admin</NavLink>
    </div>
  )
}
