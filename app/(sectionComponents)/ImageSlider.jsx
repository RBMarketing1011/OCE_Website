'use client'

import { useEffect } from 'react'

import styles from './page.module.css'

const ImageSlider = ({ slider, hero }) =>
{
  //SlideShow 
  useEffect(() =>
  {
    let slideIndex = 0
    showSlides()

    function showSlides ()
    {
      let i
      let slides = document.querySelectorAll('.slide')

      for (i = 0; i < slides.length; i++)
      {
        slides[ i ].style.display = "none"
      }
      slideIndex++
      if (slideIndex > slides.length) { slideIndex = 1 }

      slides[ slideIndex - 1 ].style.display = "block"

      setTimeout(showSlides, 5000) // Change image every 2 seconds
    }
  })

  return (
    <section className={ hero ? `hero ${ styles.ImageSlider }` : styles.ImageSlider }>
      <div className={ `${ styles.slider } bg-dark flex justify-start align-center color-light` }>

        {
          slider.images.map((image, index) => (
            <img key={ index } className={ `${ styles.fade } slide` } src={ image.src } alt={ image.alt } />
          ))
        }

        <div className={ `${ styles.content } flex justify-center align-start flex-column gap-5 w-50` }>
          <div className='flex justify-start align-start flex-column'>
            { slider.subheading }
            { slider.heading }
          </div>
          <p className="medium">{ slider.content }</p>
          <div className="btnGroup">

            {
              slider.btns.map((btn, i) => (
                <a key={ i } href={ btn.href } className={ `btn ${ btn.size } ${ btn.color } ${ btn.style }` }>{ btn.text }</a>
              ))
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageSlider