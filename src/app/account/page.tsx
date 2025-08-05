import Container from "@/components/templates/container"
import Image from "next/image"

export default function AccountPage() {
	return (
		<main className="h-screen">
			<Container className="flex flex-col justify-center">
				<section className="flex justify-between gap-10">
					<Image src="" alt="Imagem avatar" />
					<div>Nome usuário</div>
					<div>Endereço</div>
				</section>
				<section>
					<div>Estatísticas sobre as tarefas</div>
				</section>
			</Container>
		</main>
	)
}
