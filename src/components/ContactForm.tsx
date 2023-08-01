'use client';

// -> Imports -> Libraries
import React, { useState } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { useForm, SubmitHandler } from 'react-hook-form';

// -> Imports -> Components
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface ContactFormInput {
    formName: string;
    subject: string;
    access_key: string;
    name: string;
    email: string;
    message: string;
}

const ContactFormInputs: React.FC = ( ) => { 

    // -> Declare the initial states used in the form.
    const [ disableSubmit, setDisableSubmit ] = useState ( false );
    const [ displayFormError, setDisplayFormError ] = useState ( false );
    const [ displayFormSuccess, setDisplayFormSuccess ] = useState ( false );
    const { register, handleSubmit } = useForm < ContactFormInput > ( );

    // -> Declare the actions that take place on submission.
    const onSubmit: SubmitHandler < ContactFormInput > = async ( data ) => {
        
        // -> Prepare the data to be pushed to the API.
        const jsonPayload = JSON.stringify ( data );

        // -> Await the response.
        const response = await fetch ( "https://api.web3forms.com/submit", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: jsonPayload
        } );

        // -> Return the result from the API.
        const result = await response.json ( );

        // -> Handle the result.
        if ( result.success ) { 
            
            // -> Display a success message.
            setDisplayFormSuccess ( true );

        } else {
            
            // -> Display an error message.
            setDisplayFormError ( true );

        } 
        
    }

        return ( 

            <>

                <div className="flex flex-col space-y-8">
                                    
                    <div className="grid w-full gap-1.5 space-y-4">

                        <h4 className="text-3xl font-normal pb-4">
                            
                            <Balancer>Want to reach out to me? 😀</Balancer>
                            
                        </h4>

                        <p>Please complete the form below if you'd like to get in touch. I'll respond to your message as soon as I possibly can.</p>

                        <p className="text-sm italic text-muted">Please note: All fields are required.</p>

                    </div>

                    { displayFormSuccess === true && ( 
                    <Alert variant="default">
                    
                        <AlertTitle>Thank you!</AlertTitle>

                        <AlertDescription>

                            Your message has been sent successfully.

                        </AlertDescription>

                    </Alert>
                    ) }

                    { displayFormError === true && ( 
                    <Alert variant="destructive">
                    
                        <AlertTitle>Error</AlertTitle>

                        <AlertDescription>

                            There was a problem with your form submission. Please try again.

                        </AlertDescription>

                    </Alert>
                    ) }

                    <form onSubmit={ handleSubmit ( onSubmit ) } className="space-y-5">

                        <input type="hidden" { ...register ( "subject" ) } value="Contact Form Submission from www.andrew-c.dev" />
                        <input type="hidden" { ...register ( "access_key" ) } value="9dab2cef-842c-4f85-9b60-02b233872102" />

                        <p hidden>

                        <label>Don't fill this out if you're human: <input name="bot-zapper" value="" onChange={ function ( ) { setDisableSubmit ( true ) } } /></label>

                        </p>

                        <div className="grid w-full gap-1.5">

                            <Label htmlFor="name">Your Name:</Label>
                            <Input 
                                className="bg-white text-slate-900"
                                { ...register ( "name", { required: true } )} 
                                type="text" 
                                placeholder="Your Name" />
                        
                        </div>

                        <div className="grid w-full gap-1.5">

                            <Label htmlFor="email">Your Email Address:</Label>
                            <Input 
                                className="bg-white text-slate-900"
                                { ...register ( "email", { required: true, pattern: /\S+@\S+\.\S+/ } )} 
                                placeholder="Your Email Address" 
                            />

                        </div>

                        <div className="grid w-full gap-1.5">

                            <Label htmlFor="email">Your Message:</Label>
                            <Textarea 
                                className="bg-white text-slate-900"
                                { ...register ( "message", { required: true, minLength: 10 } )} 
                                placeholder="Please type your message here." 
                            />

                        </div>

                        { disableSubmit != true && ( 

                        <Button type="submit" id="submitForm" name="submitForm" variant="orange">
                            
                            Send Message &rarr;
                        
                        </Button>

                        )}
                        
                    </form>

                </div>

            </>

        );

    };

    export default ContactFormInputs;