import LoginForm from '@/components/loginUI/Login'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Iniciar Sesión - AgroTalent',
	description: 'Inicia sesión en AgroTalent para acceder a tu cuenta.'
}

export default function Login() {
	return (
		<main>
			<LoginForm />
		</main>
	)
}
