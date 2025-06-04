import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
            <nav>
                <Link to="/"> Inicial </Link>
                <Link to="/contato"> Contato </Link>
                <Link to="/a-faculdade"> A Faculdade </Link>
                <Link to="/dpo-lgpd"> DPO Lgpd </Link>
                <Link to="/noticias"> Noticias </Link>
            </nav>
      
    </div>
  )
}

export default Navbar