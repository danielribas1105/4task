import Container from "../templates/container"
import Logo from "./logo"

export default function Header() {
	return (
		<header className="bg-red-400">
			<Container className="flex justify-between py-2">
				<Logo />
				<div>Menu</div>
			</Container>
		</header>
	)
}
