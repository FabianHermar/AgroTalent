import './globals.css'

export const metadata = {
	title: {
		template: '%s - AgroTalent',
		default:
			'AgroTalent - Red internacional de talento y oportunidades en el área de gesión agrícola y negocios, agrotecnología hasta el desarrollo de negocios agroindustriales.'
	}
}

export default async function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='keywords'
					content='agrotalent, agro, talent, agro talent, agro-talent, agro talent, agro-talent.com, agro-talent.com, agrotalent.com, agro-talent.com'
				/>
				<link
					rel='shortcut icon'
					href='/favicon/favicon.ico'
					type='image/x-icon'
				/>
				<meta
					name='description'
					content='Red internacional de talento y oportunidades en el área de gesión agrícola y negocios, agrotecnología hasta el desarrollo de negocios agroindustriales.'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/favicon/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/favicon/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='theme-color' content='#ffffff' />
				<link rel='canonical' href='https://agrotalent.org/' />
				<meta name='apple-mobile-web-app-title' content='AgroTalent' />
				<meta name='application-name' content='AgroTalent' />
				<meta property='og:url' content='https://agrotalent.org/' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='AgroTalent' />
				<meta
					property='og:description'
					content='Red internacional de talento y oportunidades en el área de gesión agrícola y negocios, agrotecnología hasta el desarrollo de negocios agroindustriales.'
				/>
				<meta property='og:image' content='' />
				<meta property='og:locate' content='es_MX' />
				<meta property='og:site_name' content='AgroTalent' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content='@AgroTalent' />
				<meta name='twitter:domain' content='agrotalentorg' />
				<meta name='twitter:site' content='@AgroTalent' />
				<meta name='twitter:title' content='AgroTalent' />
				<meta
					name='twitter:description'
					content='Red internacional de talento y oportunidades en el área de gesión agrícola y negocios, agrotecnología hasta el desarrollo de negocios agroindustriales.'
				/>
				<meta name='twitter:image' content='' />
			</head>
			<body>{children}</body>
		</html>
	)
}
