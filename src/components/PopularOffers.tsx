import styles from './Bento.module.css'

export default function PopularOffers() {
	return (
    <section className='py-20 max-w-[1400px] m-auto h-screen'>
			<div className='flex items-center justify-between gap-10 flex-col md:flex-row pb-10'>
				<h3 className='font-GilroyBold text-4xl text-balance text-center md:text-left'>
					Descubre las ofertas más populares
				</h3>
				<p className='font-GilroyMedium text-xl text-pretty text-center md:text-left max-w-[700px]'>
					Ve lo que a los usuarios más les gusta en las siguientes ofertas más
					buscadas en nuestra plataforma.
				</p>
			</div>
			<div className={styles.POparent}>
				<article className={styles.POBento1}>
          <img
            alt='Agroculture image'
            src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='absolute inset-0 h-full w-full object-cover select-none'
          />
          <div className='relative bg-gradient-to-t from-gray-900/40 to-gray-900/25 w-full h-full'>
            <div className='px-6 py-6'>
              <a
                href='#'
                className='size-9 rounded-full bg-white absolute right-0 mr-6 flex justify-center items-center'
              >
                <img
                  src='/svg/heart.svg'
                  alt='Heart icon'
                  className='size-5 hover:scale-105 transition-transform duration-75 select-none'
                />
              </a>
            </div>
          </div>
				</article>
				<article className={styles.POBento2}>
          <img
            alt='Agroculture image'
            src='https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='absolute inset-0 h-full w-full object-cover select-none'
          />
          <div className='relative bg-gradient-to-t from-gray-900/40 to-gray-900/25 h-full w-full'>
            <div className='px-6 py-6'>
              <a
                href='#'
                className='size-9 rounded-full bg-white absolute right-0 mr-6 flex justify-center items-center'
              >
                <img
                  src='/svg/heart.svg'
                  alt='Heart icon'
                  className='size-5 hover:scale-105 transition-transform duration-75 select-none'
                />
              </a>
            </div>
          </div>
				</article>
				<article className={styles.POBento3}>
          <img
            alt='Agroculture image'
            src='https://images.unsplash.com/photo-1532509774891-141d37f25ae9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='absolute inset-0 h-full w-full object-cover select-none'
          />
          <div className='relative bg-gradient-to-t from-gray-900/40 to-gray-900/25 w-full h-full'>
            <div className='px-6 py-6'>
              <a
                href='#'
                className='size-9 rounded-full bg-white absolute right-0 mr-6 flex justify-center items-center'
              >
                <img
                  src='/svg/heart.svg'
                  alt='Heart icon'
                  className='size-5 hover:scale-105 transition-transform duration-75 select-none'
                />
              </a>
            </div>
					</div>
				</article>
				<article className={styles.POBento4}>
          <img
            alt='Agroculture image'
            src='https://images.unsplash.com/photo-1624720114708-0cbd6ee41f4e?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='absolute inset-0 h-full w-full object-cover select-none'
          />
          <div className='relative bg-gradient-to-t from-gray-900/40 to-gray-900/25 w-full h-full'>
            <div className='px-6 py-6'>
              <a
                href='#'
                className='size-9 rounded-full bg-white absolute right-0 mr-6 flex justify-center items-center'
              >
                <img
                  src='/svg/heart.svg'
                  alt='Heart icon'
                  className='size-5 hover:scale-105 transition-transform duration-75 select-none'
                />
              </a>
            </div>
          </div>
				</article>
			</div>
		</section>
	)
}
