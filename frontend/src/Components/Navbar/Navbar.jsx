"use client"
import { useState } from 'react';
import Link from 'next/link';
import './Navbar.css'

export default function Navbar() {

    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className='navbar'>

            <div className='logo_container'>
                <Link href='/'><img src='/portfolio_logo.png' className='logo' /> </Link>
            </div>

            <button className='toggle_menu' onClick={() => setIsOpen(!isOpen)}>☰</button>

            <div className={`buttons_container ${isOpen ? "open" : ""}`}>
                <Link className='button' href="/">HOME</Link>
                <Link className='button' href="/about">ABOUT</Link>
                <Link className='button' href="/projects">PROJECTS</Link>
                <Link className='button' href="/contacts">CONTACTS</Link>
                <Link className='button' href="/socials">SOCIALS</Link>
            </div>
        </div>

    );
}
