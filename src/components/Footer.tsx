export default function Footer() {
	return (
		<footer className='bg-white pt-16'>
			<div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 md:mb-0'>
						<a href='https://agrotalent.com/' className='flex items-center'>
							<img
								src='/svg/header-logo.svg'
								className='h-24 me-3'
								alt='AgroTalent Letters Logo'
							/>
						</a>
						<div className='flex mt-10 sm:justify-start items-center sm:mt-0 gap-2'>
							<a href='#' className='text-gray-500 hover:text-gray-900 ms-5'>
								<img
									src='/svg/facebook.svg'
									alt='Facebook Logo'
									className='size-6'
								/>
							</a>
							<a href='#' className='text-gray-500 hover:text-gray-900'>
								<img
									src='/svg/twitter.svg'
									alt='Twitter/X Logo'
									className='size-6'
								/>
							</a>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
						<div>
							<h2 className='mb-6 text-sm font-GilroyBold text-gray-900 uppercase'>
								Empresa
							</h2>
							<ul className='text-gray-500 font-GilroyMedium'>
								<li className='mb-2'>
									<a href='/careers' className='hover:underline'>
										Carreras
									</a>
								</li>
								<li className='mb-2'>
									<a href='/about' className='hover:underline'>
										Acerca de AgroTalent
									</a>
								</li>
								<li className='mb-2'>
									<a href='/privacy-policy' className='hover:underline'>
										Privacidad de AgroTalent
									</a>
								</li>
								<li className='mb-2'>
									<a href='/faq' className='hover:underline'>
										Preguntas frecuentes
									</a>
								</li>
								<li className='mb-2'>
									<a href='/blog' className='hover:underline'>
										Blog
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-GilroyBold text-gray-900 uppercase'>
								Educación
							</h2>
							<ul className='text-gray-500 font-GilroyMedium'>
								<li className='mb-2'>
									<a
										href='https://education.agrotalent.com'
										className='hover:underline '
									>
										AgroTalent Educación
									</a>
								</li>
								<li className='mb-2'>
									<a
										href='https://education.agrotalent.com/products'
										className='hover:underline'
									>
										Productos
									</a>
								</li>
								<li className='mb-2'>
									<a
										href='https://education.agrotalent.com/courses'
										className='hover:underline'
									>
										Cursos
									</a>
								</li>
								<li className='mb-2'>
									<a
										href='https://education.agrotalent.com/resources'
										className='hover:underline'
									>
										Recursos
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-GilroyBold text-gray-900 uppercase'>
								Compañia
							</h2>
							<ul className='text-gray-500 font-GilroyMedium'>
								<li className='mb-2'>
									<a
										href='https://business.agrotalent.com/marketing'
										className='hover:underline'
									>
										Marketing
									</a>
								</li>
								<li className='mb-2'>
									<a
										href='https://business.agrotalent.com/ads'
										className='hover:underline'
									>
										Publicidad
									</a>
								</li>
								<li className='mb-2'>
									<a href='/accesibility' className='hover:underline'>
										Accesibilidad
									</a>
								</li>
								<li className='mb-2'>
									<a href='/sustentability' className='hover:underline'>
										Sustentabilidad
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between'>
					<span className='text-sm font-GilroyRegular text-gray-500 sm:text-center'>
						© 2024{' '}
						<a href='https://agrotalent.com/' className='hover:underline'>
							AgroTalent™
						</a>
						. All Rights Reserved.
					</span>
					<div className='flex mt-4 sm:justify-center sm:mt-0 text-base font-GilroyRegular'>
						<a href='#' className='text-gray-500 hover:text-gray-900 ms-5'>
							Politica de Privacidad
						</a>
						<a href='#' className='text-gray-500 hover:text-gray-900 ms-5'>
							Términos y Condiciones
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
