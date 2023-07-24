// -> Imports -> Libraries
import React from 'react';
import Link from 'next/link';

// -> Imports -> Constants
import { websiteDescription, websiteName, websiteGithubLink } from '@/constants';

// -> Imports -> Components
import { Github } from 'lucide-react';

const Footer: React.FC = ( ) => {

    return (

        <>

            <footer className="py-10 px-2 md:px-0 max-w-3xl my-10 mx-auto border-t">

                <div className="text-center justify-center flex space-x-2">

                    <p>View source:</p>

                    <Link href={ websiteGithubLink }>
                        
                        <Github />

                    </Link>

                </div>

            </footer>

        </>
    
    );

}

export default Footer;