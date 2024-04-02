import SearchC from "./SerachC";

export default function Hero () {
  return (
    <section className="max-w-[1400px] mx-auto my-10">
      <article className='relative overflow-hidden rounded-3xl min-w-[1400px] min-h-[570px]'>
        <img
          alt="Agroculture image"
          src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 w-[1400px] h-[570px] flex items-center justify-center flex-col">
          <div className="p-4 sm:p-6">
            <h1 className="font-GilroyBold text-5xl text-white text-center text-balance drop-shadow-md">
              Conectamos talento y oportunidades para cultivar tu carrera en la agricultura y los negocios.
            </h1>

            <p className="mt-2 line-clamp-3 text-white/95 text-center font-GilroyRegular text-lg text-pretty drop-shadow-md">
              Red internacional de talento y oportunidades en el área de gesión agrícola y negocios, agrotecnología hasta el desarrollo de negocios agroindustriales.
            </p>
            <p className="mt-2 line-clamp-3 text-white/95 text-center font-GilroyRegular text-lg text-pretty drop-shadow-md">
              Únete a AgroTalent donde el futuro te espera para ser cosechado por ti.
            </p>
          </div>
          <SearchC />
        </div>
      </article>
    </section>
  )
}