import './styles/homePage.css'
import { chillaxBold } from './fonts';
import { FaNodeJs, FaPython, FaJava,  } from 'react-icons/fa'
import { SiGnubash, SiMysql } from "react-icons/si";
import Link from 'next/link';

const languages = [
	{ name: "NodeJS", 	icon: <FaNodeJs className="prog_icon" /> },
	{ name: "Python", 	icon: <FaPython className="prog_icon" /> },
	{ name: "Java", 	icon: <FaJava className="prog_icon" /> },
	{ name: "Bash", 	icon: <SiGnubash className="prog_icon" /> },
	{ name: "MySQL", 	icon: <SiMysql className="prog_icon" /> },
]


export default function Home() {

    return (
		<div className="homepage_container">

			<div className={`name_container ${chillaxBold.className}`}>
				<div className='name'>tommu</div>
				<div className='profile_picture'></div>
			</div>

			<div className={`description_container`}>

				<div className={`pharagrap_title`}>Who am I?</div>
				<div className={`pharagrap_text`}>
					Hello there, I'm tommu! <p className='line_break' />
					I'm a young developer who use <code className={`prog_language`}>nodejs</code> to develop most of my projects. <p className='line_break' />
					I've started at the age of 11 to develop discord bot with <code className={`prog_language`}>discord.js</code> and then enojed to program things on my free time.
					In recent years I've been really interested in <code className={`prog_language`}>Software Developing</code> and this year I'll start a school that will teach me everything that i need to know. <p className='line_break' />
				</div>

				<div className={`pharagrap_title`}>Programming Languages</div>
				<div className={`pharagrap_text`}>
					I've learned many programming languages during these past years and here all of them! <p className='line_break' />

					<div className="carousel">
						<div className="carousel_track">
							{languages.map((language, i) => (
								<div key={i} className="prog_container"> {language.icon} <p className="prog_name">{language.name}</p> </div>
						))}
						{languages.map((language, i) => (
							<div key={`dup-${i}`} className="prog_container"> {language.icon} <p className="prog_name">{language.name}</p> </div>
						))}
						</div>
					</div>
					</div>


				<div className={`pharagrap_title`}>Resumee</div>
				<div className={`pharagrap_text`}>
					If you are interested about my projects and work you can get all my information inside my curriculum! <p className='line_break' />
					<Link className='download_btn' href={'/files/curriculum.pdf'} download={true}>DOWNLOAD MY RESUMEE</Link>


				</div>

			</div>

    	</div>
    );
}
