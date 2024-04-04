import styles from './Bento.module.css'

export default function EssentialAlly() {
	return (
		<section className='max-w-[1400px] m-auto pt-12'>
			<div className='flex items-center justify-between gap-10 flex-col md:flex-row pb-10'>
				<h3 className='font-GilroyBold text-4xl text-balance text-center md:text-left'>
					Tu aliado esencial para la búsqueda de tu siguiente empleo
				</h3>
				<p className='font-GilroyMedium text-xl text-pretty text-center md:text-left max-w-[700px]'>
					Diseñada para ayudarte en la búsqueda activa de tu próximo trabajo,
					ofreciendo recursos y orientación personalizada para optimizar tu
					proceso de búsqueda laboral.
				</p>
			</div>
			<div className={styles.parent}>
				<article className={styles.firstbox}>
					<p className='font-GilroySemibold px-5 py-4 text-7xl'>+100K</p>
					<p className='font-GilroyMedium px-5 pt-10 text-3xl text-pretty'>
						Satisfechos con su nuevo empleo
					</p>
				</article>
				<article className={styles.secondbox}>
					<p className='font-GilroySemibold px-5 py-4 text-7xl'>+5</p>
					<p className='font-GilroyMedium px-5 pt-4 text-3xl text-pretty'>
						Premios ganados a la mejor plataforma de búsqueda de trabajos
					</p>
				</article>
				<article className={styles.thirdbox}>
					<p className='font-GilroySemibold px-5 py-4 text-7xl'>+5</p>
					<p className='font-GilroyMedium px-5 pt-10 text-3xl text-pretty'>
						Años brindando un excelente servicio
					</p>
				</article>
				<article className={styles.fourthbox}>
					<p className='font-GilroySemibold px-5 py-4 text-7xl'>+50</p>
					<p className='font-GilroyMedium px-5 pt-10 text-3xl text-pretty'>
						Diferentes categorías de trabajos
					</p>
				</article>
				<article className={styles.fifthbox}>
					<div className='flex flex-row items-center gap-3 justify-center'>
						<div>
							<p className=' px-5 py-4 font-GilroyMedium text-2xl text-black max-w-[300px]'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
								inventore modi consequatur sed esse vitae laborum quaerat
								facilis eum nostrum nesciunt quidem dicta odio aperiam, sit ex,
								recusandae ipsa corporis?
							</p>
						</div>
						<div className='m-auto select-none'>
							<img
								src='https://images.unsplash.com/photo-1626029322280-ba48ba381345?q=80&w=3347&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt=''
								className='w-[330px] h-[400px] bg-cover bg-center rounded-2xl drop-shadow-md'
							/>
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}
