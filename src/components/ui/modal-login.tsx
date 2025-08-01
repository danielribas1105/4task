"use client"
import Image from "next/image"
import loginImage from "../../../public/login.png"
import InputText from "./input-text"
import React, { useState } from "react"
import { IconX } from "@tabler/icons-react"

interface ModalLoginProps {
	isOpen: boolean
	onClose: () => void
}

export default function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [address, setAddress] = useState("")
	const [complement, setComplement] = useState("")
	const [cep, setCep] = useState("")

	if (!isOpen) return null

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<>
			<div
				className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50"
				onClick={handleBackdropClick}
			>
				<section className="absolute top-30 left-100 flex items-center justify-around gap-10 p-4 bg-white dark:bg-black rounded-3xl shadow-zinc-800 dark:shadow-zinc-300 shadow-xs">
					<button
						onClick={onClose}
						className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
					>
						<IconX />
					</button>
					<Image src={loginImage} alt="Figura realizar login" width={200} height={200} />
					<form className="flex flex-col gap-3">
						<InputText label="Nome" type="text" placeholder="Nome" value={name} onChange={setName} />
						<InputText
							label="E-mail"
							type="email"
							placeholder="seuemail@maneiro.com.br"
							value={email}
							onChange={setEmail}
						/>
						<div className="flex gap-5 items-center">
							<InputText
								label="Senha"
								type="password"
								placeholder="Mínimo de 6 caracteres"
								value={password}
								onChange={setPassword}
							/>
							<InputText
								label="Confirmar Senha"
								type="password"
								placeholder="Digite novamente"
								value={password}
								onChange={setPassword}
							/>
						</div>
						<InputText label="Endereço" type="text" value={address} onChange={setAddress} />
						<div className="flex gap-5 items-center">
							<InputText label="Complemento" type="text" value={complement} onChange={setComplement} />
							<InputText label="CEP" type="text" value={cep} onChange={setCep} />
						</div>
						<button className="flex justify-center gap-2 text-lg text-white px-3 py-1 bg-purple-600 hover:bg-purple-800 rounded-md">
							Cadastrar
						</button>
					</form>
				</section>
			</div>
		</>
	)
}
