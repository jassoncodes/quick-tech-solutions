
import { ContactInfo } from './ContactInfo'
import { ButtonLink } from './ButtonLink';

export const Contact = () =>
{

    return (
        <section id='contact' className='contact'>
            <div className="section-header">
                <h3>Get in Touch</h3>
                <h2>Contact Us For A Free Consultation</h2>
            </div>
            <div className='contact-grid'>
                <ContactInfo />
                {/* // TODO: on mobile this button has to be visible */}
                <ButtonLink href="tel:17863943353" text='Call now for tech support' className='button-primary' />
                {/* TODO: Implement contact form and integrate with mail api */}
                {/* <ContactForm /> */}
            </div>
        </section>
    )
}
