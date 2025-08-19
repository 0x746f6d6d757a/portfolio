"use client"
import Link from 'next/link';
import './Navbar.css'
import { chillaxSemibold } from '@/app/fonts';
import { navbarData } from './navbarData.js';

export default function Navbar() {
    return (
        <div className='navbar_container'>
            <div className={`buttons_container ${chillaxSemibold.className}`}>
                { navbarData.map((button, index) => ( <Link key={index} className={button.className} href={button.path}> {button.title} </Link> ))}
            </div>
        </div>
    );
}
