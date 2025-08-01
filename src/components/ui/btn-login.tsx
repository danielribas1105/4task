"use client"
import { IconLogin2 } from "@tabler/icons-react"

interface BtnLoginProps {
	onClick: () => void
}

export default function BtnLogin({ onClick }: BtnLoginProps) {
	return (
		<div>
			<button
				className="flex items-center gap-2 text-lg text-white px-3 py-1 bg-purple-600 hover:bg-purple-800 rounded-md"
				onClick={onClick}
			>
				<IconLogin2 />
				LOGIN
			</button>
		</div>
	)
}
