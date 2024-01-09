import ImageSlider from './(sectionComponents)/ImageSlider'
import PopularItems from './(sectionComponents)/PopularItems'

import styles from './page.module.css'

const HomePage = () =>
{
  return (
    <main className={ `${ styles.HomePage }` }>
      <ImageSlider
        hero={ true }
        slider={ {
          images: [
            {
              src: '/images/food/Omni_Bowl_1.jpg',
              alt: 'Omni Bowl | Omni Coffee & Eggs'
            },
            {
              src: '/images/food/Shrimp_Grits_1.jpg',
              alt: 'Omni Bowl | Omni Coffee & Eggs'
            },
            {
              src: '/images/food/Po_Boy_1.jpg',
              alt: 'Omni Bowl | Omni Coffee & Eggs'
            },
          ],
          heading: <h1 className='xx-large color-accent'>omni coffee <span className='color-primary'>&</span> eggs</h1>,
          subheading: <h2 className='medium'>the royal court presents</h2>,
          btns: [
            {
              text: 'Shop',
              href: 'https://order.toasttab.com/online/omnicoffeeandeggs',
              size: 'medium',
              color: 'btn-primary',
              style: 'btn-solid'
            },
            {}
          ],
          content: "Founded in 2021, Omni Coffee & Eggs is Atlanta's premiere cafe experience located in Castleberry Hill on Peters Street in the heart of Downtown Atlanta.Our feature- rich menu showcases our house brand, Omni Coffee Brands, with specialty imported beans from around the world. If you’re in search of a noble experience in every sip, then look no further!",
        } }
      />

      <PopularItems
        content={ {
          title: 'Royal Dishes',
          desc: 'Explore our Popular Food Items Section, where culinary delights await! Discover a curated selection of crowd-pleasers, from savory to sweet, that have earned the love and appetite of our discerning customers.',
          btn: {
            text: 'Order Now',
            href: 'https://order.toasttab.com/online/omnicoffeeandeggs'
          },
          items: [
            {
              image: {
                url: '/images/food/Avo_Toast_1.JPG',
                alt: 'Avocado Toast | Omni Coffee & Eggs'
              },
              title: 'Avocado Toast',
              desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, corporis consequuntur? Repellat iure blanditiis in repudiandae. Ipsam earum temporibus ab.'
            },
            {
              image: {
                url: '/images/food/Avo_Toast_1.JPG',
                alt: 'Avocado Toast | Omni Coffee & Eggs'
              },
              title: 'Avocado Toast',
              desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, corporis consequuntur? Repellat iure blanditiis in repudiandae. Ipsam earum temporibus ab.'
            },
            {
              image: {
                url: '/images/food/Avo_Toast_1.JPG',
                alt: 'Avocado Toast | Omni Coffee & Eggs'
              },
              title: 'Avocado Toast',
              desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, corporis consequuntur? Repellat iure blanditiis in repudiandae. Ipsam earum temporibus ab.'
            },
            {
              image: {
                url: '/images/food/Avo_Toast_1.JPG',
                alt: 'Avocado Toast | Omni Coffee & Eggs'
              },
              title: 'Avocado Toast',
              desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, corporis consequuntur? Repellat iure blanditiis in repudiandae. Ipsam earum temporibus ab.'
            },
          ]
        } }
      />


    </main>
  )
}

export default HomePage