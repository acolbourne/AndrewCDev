// -> Imports -> Libraries
import React from 'react';
import Link from 'next/link';

// -> Imports -> Components
import { Button } from './ui/button';

// -> Imports -> Constants
import { websiteInitials, pageContact } from '@/constants';

// -> Imports -> Icons
import { Pencil } from 'lucide-react';

const Header = ( { hideLogo = false }: HeaderProps ) => {

    return (

        <>

            <header className="flex max-w-7xl mx-auto pt-5 px-2">

                { !hideLogo && ( 

                    <div className="flex flex-grow items-center justify-center">

                        <Link href="/">

                            <h1 id="Logo" className="font-semibold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.0)]">{ websiteInitials }</h1>
                        
                        </Link>

                    </div>
                
                ) }

                <div className="hidden sm:flex sm:flex-grow justify-center sm:justify-end items-center space-x-3">

                    <Link href="/">
    
                        <Button variant="link">Home</Button>
                    
                    </Link>

                    <Link href="#Projects">
                        
                        <Button variant="holo">My Projects</Button>

                    </Link>
                    
                    <Link href={ pageContact }>
                    
                        <Button variant="orange"><span>Work with me</span> <Pencil className="w-5 h-5" /></Button>

                    </Link>

                </div>

            </header>
        
        </>

    )

}

export default Header;