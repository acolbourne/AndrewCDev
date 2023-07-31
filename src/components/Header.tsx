// -> Imports -> Libraries
import React from 'react';
import Link from 'next/link';

// -> Imports -> Components
import { Button } from './ui/button';

// -> Imports -> Constants
import { websiteName, pageContact } from '@/constants';

// -> Imports -> Icons
import { Pencil } from 'lucide-react';

const Header: React.FC = ( ) => {

    return (

        <>

            <header className="max-w-7xl mx-auto pt-5 px-2">

                <div className="hidden sm:flex sm:flex-grow justify-center sm:justify-end items-center space-x-3">

                    <Link href="/">
    
                        <Button variant="link">Home</Button>
                    
                    </Link>

                    <Link href="#Projects">
                        
                        <Button variant="holo">My Projects</Button>

                    </Link>
                    
                    <Link href={ pageContact } target="_blank">
                    
                        <Button variant="orange"><span>Work with me</span> <Pencil className="w-5 h-5" /></Button>

                    </Link>

                </div>

            </header>
        
        </>

    )

}

export default Header;