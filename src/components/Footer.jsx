import { CITIES } from '../config'
import { BrandLogo } from './BrandLogo'
import { BrandName } from './BrandName'
import { Logo } from './Logo'

export const Footer = () => {
    return (
        <footer>
            <section className='footer-info'>
                <section className='footer-disclaimer'>
                    <Logo
                        className="brand footer"
                        primary="#27445d"
                        secondary="#27445d"
                        tertiary="#fff"
                    />
                    <p>We provide patient, professional, and jargon-free support right in your home, making tech work for you.</p>
                </section>
                <section className='footer-service-areas'>
                    <h3>Services Areas</h3>
                    <ul className='service-area-list'>
                        {CITIES.map((city) => { return <li key={city.toLowerCase()}>{city}</li> })}
                    </ul>
                </section>
            </section>
            <section className='social-copy'>
                {/* <section className='social-media'>Social media</section> */}
                <span>Quick Tech Solutions &copy; 2026 &#183; developed by <a href='https://github.com/jassoncodes' target='_blank'>@jassoncodes</a></span>
            </section>
        </footer>
    )
}
