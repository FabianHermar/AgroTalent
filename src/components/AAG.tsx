export default function AAG() {
	return (
		<section className='max-w-[1400px] m-auto'>
			<div className='pt-[120px] pb-[120px] grid md:grid-cols-1 grid-rows-1'>
				<div className='flex flex-col md:flex-row items-center lg:justify-around'>
					<article className='flex items-center flex-col justify-center w-[467px]'>
						<img
							src='/svg/agronegocios.svg'
							alt=''
							className='w-[120px] drop-shadow-lg select-none'
						/>
						<h3 className='font-GilroyBold text-3xl py-4 text-center'>
							Agronegocios
						</h3>
						<p className='font-GilroyMedium text-center text-base pt-2 px-5 lg:px-10 '>
							Actividades comerciales y financieras relacionadas con la
							producción agrícola y ganadera.
						</p>
					</article>
					<article className='flex items-center flex-col justify-center w-[467px]'>
						<img
							src='/svg/agricultura.svg'
							alt=''
							className='w-[120px] drop-shadow-lg select-none pt-12 md:pt-0'
						/>
						<h3 className='font-GilroyBold text-3xl py-4 text-center'>
							Agricultura
						</h3>
						<p className='font-GilroyMedium text-center text-base pt-2 px-5 lg:px-10'>
							Siembra y el cuidado de los cultivos hasta la cosecha y la
							comercialización de los productos.
						</p>
					</article>
					<article className='flex items-center flex-col justify-center w-[467px]'>
						<img
							src='/svg/ganaderia.svg'
							alt=''
							className='w-[120px] drop-shadow-lg select-none pt-12 md:pt-0'
						/>
						<h3 className='font-GilroyBold text-3xl py-4 text-center'>
							Ganadería
						</h3>
						<p className='font-GilroyMedium text-center text-base pt-2 px-5 lg:px-10'>
							Crianza y el cuidado de animales para la producción de carne,
							leche, huevos, cuero, etc.
						</p>
					</article>
				</div>
			</div>
		</section>
	)
}
