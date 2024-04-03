export default function Login () {
  return (
    <section className='bg-white'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
          <div className='absolute bg-gradient-to-t from-gray-900/60 to-gray-900/45 h-full w-full z-10' />
          <img
            alt=''
            src='https://images.unsplash.com/photo-1619279681650-179e9ef3c22f?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='absolute inset-0 h-full w-full object-cover opacity-80 select-none'
          />

          <div className='hidden lg:relative lg:block lg:p-12 z-20'>
            <a
              className='text-white inline-flex size-16 items-center justify-center rounded-full bg-white sm:size-20'
              href='#'
            >
              <span className='sr-only'>Home</span>
              <img
                src='/svg/AgroTalent-logo.svg'
                alt=''
                className='size-16 select-none'
              />
            </a>

            <h2 className='mt-6 text-2xl font-GilroyBold text-white sm:text-3xl md:text-4xl'>
              Bienvenido a AgroTalent
            </h2>

            <p className='mt-4 leading-relaxed text-white/90 font-GilroyMedium'>
              Red internacional #1 para conectar a los agrónomos/ganaderos de
              todo el mundo
            </p>
          </div>
        </section>

        <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='max-w-xl lg:max-w-3xl relative'>
            <div className='relative -mt-16 block lg:hidden z-10'>
              <a
                className='inline-flex size-16 items-center justify-center rounded-full bg-white sm:size-20'
                href='#'
              >
                <span className='sr-only'>Home</span>
                <img
                  src='/svg/AgroTalent-logo.svg'
                  alt='AgroTalent logo'
                  className='size-16 select-none'
                />
              </a>

              <h1 className='mt-6 text-2xl font-GilroyBold text-white sm:text-3xl md:text-4xl'>
                Bienvenido a AgroTalent
              </h1>

              <p className='mt-4 leading-relaxed text-white/90 font-GilroyMedium'>
                Red internacional #1 para conectar a los agrónomos/ganaderos de
                todo el mundo
              </p>
            </div>
            <div className='pb-10'>
              <h2 className='font-GilroyBold text-5xl'>Iniciar sesión</h2>
            </div>
            <form action='#' className='mt-8 grid grid-cols-6 gap-6'>
              <div className='col-span-10'>
                <label
                  htmlFor='Email'
                  className='block text-base font-GilroySemibold text-gray-700'
                >
                  Email
                </label>

                <input
                  type='email'
                  id='Email'
                  name='email'
                  className='mt-1 w-full rounded-md border h-10 px-4 border-green-pea-400 bg-white text-sm text-gray-700 shadow-sm'
                />
              </div>

              <div className='col-span-10'>
                <label
                  htmlFor='Password'
                  className='block text-base font-GilroySemibold text-gray-700'
                >
                  Contraseña
                </label>

                <input
                  type='password'
                  id='Password'
                  name='password'
                  className='mt-1 w-full rounded-md border h-10 px-4 border-green-pea-400 bg-white text-sm text-gray-700 shadow-sm'
                />
              </div>

              <div className='col-span-6'>
                <p className='mt-4 text-sm font-GilroyRegular text-gray-500'>
                  ¿Olvidaste tu contraseña? &nbsp;
                  <a href='#' className='text-gray-700 underline font-GilroyMedium'>
                    Recupérala aquí
                  </a>
                </p>
              </div>

              <div className='col-span-6 sm:flex sm:items-center sm:gap-4 pt-10'>
                <button className='group relative inline-flex h-12 items-center justify-between overflow-hidden rounded-xl bg-green-pea-700 px-6 w-60 font-medium text-white select-none font-GilroyMedium'>
                  <span>Iniciar sesión</span>
                  <div className='ml-1 transition group-hover:translate-x-1'>
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                    >
                      <path
                        d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                </button>

                <p className='mt-4 text-sm text-gray-500 sm:mt-0 font-GilroyRegular'>
                  ¿Nuevo en AgroTalent?
                  <a href="#" className='group relative inline-flex items-center justify-center rounded-md text-black ml-2'>
                    <span className="underline font-GilroySemibold">Únete ahora</span>
                    <div className='relative ml-1 h-5 w-5 overflow-hidden'>
                      <div className='absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4'>
                        <svg
                          width='15'
                          height='15'
                          viewBox='0 0 15 15'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5'
                        >
                          <path
                            d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
                            fill='currentColor'
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                        <svg
                          width='15'
                          height='15'
                          viewBox='0 0 15 15'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 -translate-x-4'
                        >
                          <path
                            d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
                            fill='currentColor'
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </p>
              </div>
            </form>
            <div className="pt-32">
              <p className="text-gray-400 font-GilroyRegular text-xs">
                Al dar clic en <span className="font-GilroySemibold">&lt;&lt;continuar &gt;&gt;</span>, aceptas las
                <a href="#" className="font-GilroySemibold hover:underline"> Condiciones de uso</a>,
                <a href="#" className="font-GilroySemibold hover:underline"> la Política de Privacidad</a> y la
                <a href="#" className="font-GilroySemibold hover:underline"> Política de cookies</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
