import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLinks() {
  return (
    <div className="links">
      <Link to="/" className="link">Home</Link>
      <Link to="/about" className="link">About</Link>
      <Link to="/contact" className="link">Contact</Link>
      <Link to="/admin" className="link">Admin</Link>
    </div>
  )
}
