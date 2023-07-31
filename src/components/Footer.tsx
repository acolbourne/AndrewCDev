// -> Imports -> Libraries
import React from 'react';
import Link from 'next/link';

// -> Imports -> Constants
import { websiteDescription, websiteName, websiteGithubLink } from '@/constants';

// -> Imports -> Components
import { Github } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer: React.FC = ( ) => {

    return (

        <>

            <footer className="py-10 px-2 md:px-0 max-w-3xl my-10 mx-auto">

                <Separator className="my-10 max-w-md sm:max-w-xl mx-auto" />

                <div className="text-center justify-center flex space-x-2 mb-5">

                    <p className="text-sm font-extralight">Built with ❤️ and ☕ on a wet Monday morning in Wolverhampton, England.</p>

                </div>

                <div className="text-center justify-center flex space-x-2">

                    <p className="z-50">View source:</p>

                    <Link href={ websiteGithubLink } className="z-50">
                        
                        <Github />

                    </Link>

                </div>

            </footer>

        </>
    
    );

}

export default Footer;