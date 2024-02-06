import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import CountertopsIcon from '@mui/icons-material/Countertops';
import LineAxisIcon from '@mui/icons-material/LineAxis';


function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link to='/home' href="" className="navbar-brand"><CountertopsIcon /> Kitchen recipes</Link>
                <button onClick={() => { setShow(!show) }} className={show ? "navbar-toggler collapsed " : "navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={show ? "true" : "false"} aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={show ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarNavAltMarkup">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to='/dashboard' href="" className="navbar-brand ">Dashboard <LineAxisIcon /></Link>

                        </li>
                        <li className="nav-item">
                            <Link to='/recipe/create' href="" className="nav-link text-white " aria-current="page">Create <NoteAddIcon /></Link>

                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <YoutubeSearchedForIcon /> Search by
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/category/veg' className="dropdown-item " href="#">Vegetarian</Link>
                                <Link to='/category/non-veg' className="dropdown-item " href="#">non-vegetarian</Link>
                                <Link to='/category/baked' className="dropdown-item " href="#">Baked</Link>
                                <Link to='/category/grilled' className="dropdown-item " href="#">Grilled</Link>
                                <Link to='/category/chilled' className="dropdown-item " href="#">cold</Link>

                            </div>
                        </li>
                    </ul>
                </div>
                <div className="ms-5 my-3">
                        <Link to='/register' className='btn btn-outline-light btn-sm' type="submit">Logout</Link>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar