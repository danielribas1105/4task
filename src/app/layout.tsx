import type { Metadata } from "next"
import { DynaPuff, Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
})

const dynapuff = DynaPuff({
	variable: "--font-dyna-puff",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
	title: "4Task",
	description: "Gerenciador de tarefas",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${dynapuff.variable} ${roboto.variable} antialiased`}>{children}</body>
		</html>
	)
}
