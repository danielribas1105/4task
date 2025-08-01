"use client"
import { useState } from "react"
import Container from "../templates/container"
import BtnLogin from "./btn-login"
import Logo from "./logo"
import Menu from "./menu"
import ModalLogin from "./modal-login"

export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<>
			<header className="bg-white dark:bg-black">
				<Container className="flex justify-between items-center py-2">
					<Logo />
					<div className="flex gap-10 items-center">
						<Menu />
						<BtnLogin onClick={openModal} />
					</div>
				</Container>
			</header>
			<ModalLogin isOpen={isModalOpen} onClose={closeModal} />
		</>
	)
}
