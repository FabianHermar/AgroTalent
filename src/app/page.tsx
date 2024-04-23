import AAG from '@/components/AAG'
import EssentialAlly from '@/components/EssentialAlly'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PopularOffers from '@/components/PopularOffers'
import WorldMap from '@/components/WorldMap'

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<AAG />
			<EssentialAlly />
			<PopularOffers />
			<WorldMap />
			<Footer />
		</main>
	)
}
