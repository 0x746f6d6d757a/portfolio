"use client"
import Link from 'next/link';
import './Navbar.css'
import { chillaxSemibold } from '@/app/fonts';

export default function Navbar() {
    return (
        <div className='navbar_container'>
            <div className={`buttons_container ${chillaxSemibold.className}`}>
                <Link className='button' href={'/'}>HOME</Link>
                <Link className='button' href={'/contacts'}>CONTACTS</Link>
                <Link className='button' href={'/projects'}>PROJECTS</Link>
                <Link className='button' href={'/socials'}>SOCIAL</Link>
                <Link className='button' href={'/about'}>ABOUT</Link>
            </div>
        </div>
    );
}
