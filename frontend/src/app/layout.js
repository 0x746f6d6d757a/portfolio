import "./globals.css";
import Navbar from '@/Components/Navbar/Navbar'
import { chillaxRegular } from "./fonts";
import Footer from "@/Components/Footer/Footer";


export const metadata = {
    title: "tommu's portfolio",
    description: "Next.JS webapp",
};

export default function RootLayout({ children }) {
  	return (
    	<html lang="en" className={chillaxRegular.className}>
			<body>
				<Navbar />
				<main>
					{children}
				</main>
				<Footer />
			</body>
    	</html>
  	);
}
