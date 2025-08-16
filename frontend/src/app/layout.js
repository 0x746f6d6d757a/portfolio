import "./globals.css";
import { Nunito } from 'next/font/google'
import Navbar from '@/Components/Navbar/Navbar'

const nunitoFont = Nunito({ subsets: ['latin'], weight: ['400', '700']})

export const metadata = {
    title: "tommu's portfolio",
    description: "Next.JS webapp",
};

export default function RootLayout({ children }) {
  	return (
    	<html lang="en">
			<body className={`${nunitoFont.className}`}>
				<Navbar />
				<main>
					{children}
				</main>
			</body>
    	</html>
  	);
}
