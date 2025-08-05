import Header from "@/components/ui/header"
import LandingPage from "./landing/page"
import Footer from "@/components/ui/footer"
import TasksPage from "./tasks/page"

export default function Home() {
	return (
		<>
			<Header />
			<LandingPage />
			<TasksPage />
			<Footer />
		</>
	)
}
