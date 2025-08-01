interface MenuItemProps {
	item: string
}

export default function MenuItem({ item }: MenuItemProps) {
	return (
		<span className="text-lg uppercase hover:underline hover:decoration-4 hover:decoration-amber-400 hover:underline-offset-8">
			{item}
		</span>
	)
}
