import MenuItem from "./menu-item"

const menuItens = ["home", "Sobre nós", "depoimentos"]

export default function Menu() {
	return (
		<nav className="flex gap-6 items-center text-zinc-800 dark:text-zinc-300 font-medium">
			{menuItens.map((item, index) => (
				<MenuItem key={index} item={item} />
			))}
		</nav>
	)
}
