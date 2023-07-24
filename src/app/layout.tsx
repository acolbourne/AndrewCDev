// -> Imports -> Libraries
import React from 'react';

// -> Imports -> Constants
import { websiteName, websiteDescription } from '@/constants';

// -> Imports -> Stylesheets
import '@/cssfiles/globals.css';
import '@/cssfiles/layout.css';

export const metadata = {
    title: websiteName + ' - Dev.',
    description: websiteDescription,
}

export default function RootLayout ( { children }: { children: React.ReactNode } ) {

    return (

        <>
        
        <html lang="en">
            
            <body>
                
                { children }
                
            </body>
    
        </html>

        </>

    )

}
