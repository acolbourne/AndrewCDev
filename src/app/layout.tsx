// -> Imports -> Libraries
import React from 'react';
import { cn } from '@/lib/utils';

// -> Imports -> Constants
import { websiteName, websiteDescription, websiteIcon } from '@/constants';

// -> Imports -> Fonts
import { Open_Sans } from 'next/font/google';

// -> Imports -> Stylesheets
import '@/cssfiles/globals.css';
import '@/cssfiles/layout.css';


export const metadata = {
    title: websiteName + ' - Dev.',
    description: websiteDescription,
    icons: {
        icon: websiteIcon
    } 
}

// -> Set the font to Open Sans.
const OpenSans = Open_Sans ( { subsets: [ 'latin' ] } );

export default function RootLayout ( { children }: { children: React.ReactNode } ) {

    return (

        <>
        
        <html lang="en" className="scroll-smooth">
            
            <body className={ cn ( "blueprint", OpenSans.className ) }>
                
                { children }
                
            </body>
    
        </html>

        </>

    )

}
