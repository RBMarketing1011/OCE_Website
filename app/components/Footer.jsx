import Link from 'next/link'

import
{
  FaEnvelope,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa6'

import Links from './Links'

import styles from './page.module.css'

const Footer = () =>
{
  return (
    <div className={ `${ styles.Footer } flex justify-center align-center color-light w-100 text-center` }>
      <div className={ `${ styles.content } flex justify-start align-start flex-column w-100 gap-2` }>
        <div className={ `${ styles.primaryContent } bg-dark-50 flex justify-between align-center w-100` }>
          <div className={ `${ styles.contact } flex justify-start align-start flex-column gap-3 w-100` }>
            <h2 className='large'>omni coffee <span className='color-primary'>&</span> eggs</h2>
            <div className={ `${ styles.contactItem } flex justify-start align-start flex-column gap-1` }>
              <a href="tel:4042542029" className='underline'>(404) 254-2029</a>
              <a href="https://maps.app.goo.gl/bJATYTobU74NUAzP7">261 Peters ST SW Atlanta, GA 30313</a>
            </div>
            <div className={ `${ styles.contactItem } flex justify-start align-start flex-column gap-1` }>
              <p className='medium'>Need Catering or Want To Book The Venue?</p>
              <a href="mailto:Someone@omnicoffeeandeggs.com" className='underline'>Someone@omnicoffeeandeggs.com</a>
              <a href="tel:4042542029" className='underline'>(404) 254-2029</a>
            </div>
          </div>
          <div className="flex justify-center align-center w-100">
            <img src="/icons/3DSplotch.png" alt="OCE Red Splotch Logo" className='w-75 op-75' />
            <div className={ `${ styles.hours } fw-700 flex justify-center align-center flex-column gap-2` }>
              <h2 className='underline'>hours of operation</h2>
              <p className='medium'>Mon & Tues: 7am-5pm</p>
              <p className='medium'>Wed: 7am-3pm</p>
              <p className='medium'>Thurs & Fri: 7am-5pm</p>
              <p className='medium'>Sun: 11am-3pm</p>
            </div>
          </div>
          <div className="flex justify-start align-center flex-column gap-3 w-100">
            <div className={ `${ styles.footerLinks } flex justify-start align-start flex-column gap-1 w-75` }>

              <Links
                links={ [
                  {
                    text: 'Home',
                    href: '/'
                  },
                  {
                    text: 'Our Story',
                    href: '/our-story'
                  },
                  {
                    text: 'Events',
                    href: '/events'
                  },
                  {
                    text: 'Catering',
                    href: '/catering'
                  },
                  {
                    text: 'Parking',
                    href: '/parking'
                  },
                  {
                    text: 'Contact Us',
                    href: '/contact-us'
                  },
                  {
                    text: 'Careers',
                    href: '/careers'
                  }
                ] }
              />
              <a className='btn btn-accent btn-solid medium' href="#">Order Online</a>
            </div>
          </div>
        </div>
        <div className={ `${ styles.copyright } flex justify-between align-center fw-700 w-100` }>
          <p>Copyright &copy; 2021, Omni Coffee & Eggs LLC | <Links links={ [ { text: 'Privacy Policy', href: '/privacy-policy' } ] } /></p>
          <div className='flex justify-center align-center gap-2'>
            <Link href='mailto:info@omnicoffeeandeggs.com'>
              <FaEnvelope size={ 30 } />
            </Link>

            <Link href='https://facebook.com/omnicoffeeandeggs'>
              <FaFacebookF size={ 30 } />
            </Link>

            <Link href='https://instagram.com/omnicoffeeandeggs'>
              <FaInstagram size={ 30 } />
            </Link>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Footer