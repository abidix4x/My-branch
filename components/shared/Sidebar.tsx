"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import MenuLinks from './MenuLinks'

const Sidebar = () => {

  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col'>
            <Link href='/' className='sidebar-logo'>
                <Image src='/assets/images/imaginlogo.png' height={45} width={65} alt='logo'
                className='p-0 scale-150'/>
            </Link> 
            <nav className='sidebar-nav'>
                <SignedIn>
                    <MenuLinks start={0} end={6}/>
                    <MenuLinks start={6} end={9}/>
                       <ul>
                        <li className='cursor-pointer gap-2'>
                            <UserButton afterSignOutUrl='/' showName/>
                        </li>
                    </ul>
                </SignedIn>
                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'>
                        <Link href='/sign-in'>Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>

    </aside>
    )
}

export default Sidebar