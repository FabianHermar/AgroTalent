'use client'

import Link from 'next/link'

export default function Header () {
	return (
		<header>
			<div className='w-full relative z-20 border-b border-black/5 bg-white lg:bg-white/70 lg:backdrop-blur-md select-none'>
				<div className='px-6 md:px-12 lg:px-6 lg:py-4'>
					<div className='flex items-center justify-between pt-1 lg:pt-0'>
						<div className='relative z-20'>
							<Link href='/' className='flex items-center drop-shadow-md'>
								<img
									alt='AgroTalent'
									src='/svg/header-logo.svg'
									width='100'
									height='70'
								/>
							</Link>
						</div>
						<div className='flex items-center justify-end lg:border-l-0'>
							<input
								type='checkbox'
								name='VTX'
								id='VTX'
								className='peer'
								hidden
							/>
							<label
								htmlFor='VTX'
								className='peer-checked:VTX block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'
							>
								<div
									aria-hidden='true'
									className='m-auto h-0.5 w-6 rounded bg-black transition duration-300'
								/>
								<div
									aria-hidden='true'
									className='m-auto mt-2 h-0.5 w-6 rounded bg-black transition duration-300'
								/>
							</label>
							<div className='peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white lg:bg-transparent transition duration-300 lg:border-l-0 lg:w-auto lg:static lg:translate-x-0'>
								<div className='flex flex-col h-full lg:flex-row jusfify-between lg:items-center'>
									<ul className='px-6 pt-32 text-black font-GilroySemibold space-y-8 lg:space-y-0 md:px-12 lg:flex lg:space-x-12 lg:pt-0 font-xl shrink'>
										<li>
											<Link
												href='#home'
												className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-green-pea-200 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'
											>
												<span className='relative ease-in duration-200'>
													Inicio
												</span>
											</Link>
										</li>
										<li>
											<Link
												href='#services'
												className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-green-pea-200 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'
											>
												<span className='relative ease-in duration-200'>
													Empleos
												</span>
											</Link>
										</li>
										<li>
											<Link
												href='#clients'
												className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-green-pea-200 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'
											>
												<span className='relative ease-in duration-200'>
													Mis Postulaciones
												</span>
											</Link>
										</li>
										<li>
											<Link
												href='#about'
												className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-green-pea-200 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'
											>
												<span className='relative ease-in duration-200'>
													Notificaciones
												</span>
											</Link>
										</li>
										<li>
											<Link
												href='#contact'
												className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-green-pea-200 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'
											>
												<span className='relative ease-in duration-200'>
													Favoritos
												</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='lg:pb-0 lg:px-0 lg:ml-auto hidden lg:block'>
							<div className='flex flex-row gap-2'>
								<Link
									href='/login'
									className='px-5 py-2 text-white bg-green-pea-700 rounded-2xl font-GilroyMedium hover:bg-green-pea-500'
								>
									Iniciar sesión
								</Link>
								<Link
									href='#'
									className='px-5 py-2 text-white bg-green-pea-700 rounded-2xl font-GilroyMedium hover:bg-green-pea-500'
								>
									Registrarse
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
