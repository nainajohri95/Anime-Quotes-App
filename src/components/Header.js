import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='header'>

                <div className="title-box">
                    <Link to='/'><h1>Anime Quotes</h1></Link>
                    <p>Anime Quotes About Life</p>
                </div>

            </header>
        </>
    )
}
export default Header;