import styles from './Bento.module.css'

export default function PopularOffers() {
	return (
		<section className='py-20 max-w-[1400px] m-auto h-screen pt-48'>
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
					<div className='px-6 py-6'>
						<a
							href='#'
							className='size-9 rounded-full bg-green-pea-400 absolute right-0 mr-6 flex justify-center items-center'
						>
							<img
								src='/svg/heart.svg'
								alt='Heart icon'
								className='size-5 hover:scale-105 transition-transform duration-75 select-none'
							/>
						</a>
					</div>
				</article>
				<article className={styles.POBento2}>
					<div className='px-6 py-6'>
						<a
							href='#'
							className='size-9 rounded-full bg-green-pea-400 absolute right-0 mr-6 flex justify-center items-center'
						>
							<img
								src='/svg/heart.svg'
								alt='Heart icon'
								className='size-5 hover:scale-105 transition-transform duration-75 select-none'
							/>
						</a>
					</div>
				</article>
				<article className={styles.POBento3}>
					<div className='px-6 py-6'>
						<a
							href='#'
							className='size-9 rounded-full bg-green-pea-400 absolute right-0 mr-6 flex justify-center items-center'
						>
							<img
								src='/svg/heart.svg'
								alt='Heart icon'
								className='size-5 hover:scale-105 transition-transform duration-75 select-none'
							/>
						</a>
					</div>
				</article>
				<article className={styles.POBento4}>
					<div className='px-6 py-6'>
						<a
							href='#'
							className='size-9 rounded-full bg-green-pea-400 absolute right-0 mr-6 flex justify-center items-center'
						>
							<img
								src='/svg/heart.svg'
								alt='Heart icon'
								className='size-5 hover:scale-105 transition-transform duration-75 select-none'
							/>
						</a>
					</div>
					48
				</article>
			</div>
		</section>
	)
}
