// -> Imports -> Libraries
import React from 'react';
import type { NextPage } from 'next';

// -> Imports -> Components
import { Header, Footer, ContactFormInputs } from '@/components';

// -> Imports -> Constants
import { websiteName } from '@/constants';

export const metadata = {
    title: websiteName + ' - Get in touch',
}

const ContactPage: NextPage = ( ) => {

    return (

        <>

            <Header />
            
                <main className="max-w-2xl mx-auto px-6 mt-10 space-y-24 relative">

                    <ContactFormInputs />

                </main>

            <Footer />

        </>

    )

}

export default ContactPage;