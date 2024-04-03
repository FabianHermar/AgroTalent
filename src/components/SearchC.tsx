export default function SearchC() {
	return (
		<>
			<div className='w-full flex justify-center origin-bottom select-none pt-16'>
				<div className='flex relative w-full items-center justify-center min-h-12 gap-2 bg-zinc-900 shadow-lg rounded-3xl sm:shadow-black/40 px-2 transition-all duration-300 z-10 max-w-[710px]'>
					<div className='items-center justify-center hidden rounded-l-full sm:flex pl-2 text-zinc-400'>
						<img
							alt='Leaf'
							width='16'
							height='16'
							className='relative flex shrink-0 text-zinc-400'
							src='/svg/Leaf.svg'
						/>
					</div>
					<div className='relative flex items-center self-end flex-1 w-full min-w-0 pl-2'>
						<form className='w-full h-full'>
							<div className='relative w-full flex-1 flex items-center gap-2 transition-all duration-300'>
								<div className='relative flex min-w-0 self-start w-full min-h-[3rem] items-center'>
									<div className='w-[400px]'>
										<input
											placeholder='Cargo'
											type='text'
											className='min-h-[1.5rem] sm:border-r pl-1 border-zinc-600 flex-[1_0_50%] disabled:opacity-80 text-white text-sm bg-transparent shadow-none resize-none outline-none ring-0 disabled:bg-transparent placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pr-2 leading-relaxed py-2.5 sm:py-3 w-full'
										/>
									</div>
									<div className='flex gap-5 pl-4 text-zinc-400'>
										<img
											alt='Leaf'
											width='16'
											height='16'
											className='relative flex shrink-0 stroke-zinc-400'
											src='/svg/pin-map.svg'
										/>
										<input
											placeholder='Localidad'
											type='text'
											className='min-h-[1.5rem] flex-[1_0_50%] disabled:opacity-80 text-white text-sm bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pr-2 leading-relaxed py-2.5 sm:py-3 w-[300px]'
										/>
									</div>
								</div>
								<div className='flex flex-row-reverse'>
									<div className='' data-state='closed'>
										<button
											className='whitespace-nowrap shrink-0 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white hover:bg-gray-800 flex items-center justify-center focus-visible:ring-0 focus-visible:bg-gray-800 rounded-full w-8 h-8'
											type='submit'
											id='send-button'
										>
											<span className='sr-only'>Send</span>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 256 256'
												fill='currentColor'
												className='w-6 h-6'
												aria-hidden='true'
											>
												<path d='m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z'></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='flex flex-row pt-4 items-center'>
				<h3 className='text-white font-GilroyMedium text-base mr-2'>
					Búsquedas Populares:
				</h3>
				<ul className='flex flex-row gap-2'>
					<li className='bg-white/35 backdrop-blur rounded text-white font-GilroyRegular px-2 py-0.5 hover:scale-105 transition-transform duration-75'>
						<a href=''>Ing. Agrónomo</a>
					</li>
					<li className='bg-white/35 backdrop-blur rounded text-white font-GilroyRegular px-2 py-0.5 hover:scale-105 transition-transform duration-75'>
						<a href=''>Análista de mercado</a>
					</li>
					<li className='bg-white/35 backdrop-blur rounded text-white font-GilroyRegular px-2 py-0.5 hover:scale-105 transition-transform duration-75'>
						<a href=''>Gerente de producción</a>
					</li>
					<li className='bg-white/35 backdrop-blur rounded text-white font-GilroyRegular px-2 py-0.5 hover:scale-105 transition-transform duration-75'>
						<a href=''>Jimador</a>
					</li>
				</ul>
			</div>
		</>
	)
}
