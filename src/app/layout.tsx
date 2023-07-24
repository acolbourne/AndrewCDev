// -> Imports -> Libraries
import React from 'react';
import { cn } from '@/lib/utils';

// -> Imports -> Constants
import { websiteName, websiteDescription } from '@/constants';

// -> Imports -> Fonts
import { Open_Sans } from 'next/font/google';

// -> Imports -> Stylesheets
import '@/cssfiles/globals.css';
import '@/cssfiles/layout.css';


export const metadata = {
    title: websiteName + ' - Dev.',
    description: websiteDescription,
}

// -> Set the font to Open Sans.
const OpenSans = Open_Sans ( { subsets: [ 'latin' ] } );

export default function RootLayout ( { children }: { children: React.ReactNode } ) {

    return (

        <>
        
        <html lang="en">
            
            <body className={ cn ( "bg-black", OpenSans.className ) }>
                
                { children }
                
            </body>
    
        </html>

        </>

    )

}
