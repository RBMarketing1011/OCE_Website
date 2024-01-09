import styles from './page.module.css'

const PopularItems = ({ content, hero }) =>
{
  return (
    <section className={ hero ? `hero ${ styles.PopularItems }` : styles.PopularItems }>
      <div className="flex justify-start align-start flex-column gap-5">
        <div>
          <h1 className='xx-large color-accent lowercase'>{ content.title }</h1>
          <p className='medium color-dark w-75'>{ content.desc }</p>
        </div>
        <div className='flex justify-between align-center gap-2 w-100'>

          {
            content.items.map((item, i) => (
              <div key={ i } className={ `${ styles.card } flex justify-start align-start flex-column gap-2` }>
                <div className={ styles.imageContainer }>
                  <img className={ styles.image } src={ item.image.url } alt={ item.image.alt } />
                </div>
                <h1 className='medium color-accent lowercase'>{ item.title }</h1>
                <p>{ item.desc }</p>
              </div>
            ))
          }

        </div>
        <div className='w-100 flex justify-center align-center'>
          <div className="w-25">
            <a
              href={ content.btn.href }
              className='btn btn-primary btn-solid'>
              { content.btn.text }
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularItems