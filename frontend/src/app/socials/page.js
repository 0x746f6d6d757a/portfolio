'use client'
import '../styles/socialPage.css'
import { chillaxBold } from '../fonts';

export default function Socials() {
    return (
		<div className="homepage_container">

			<div className={`name_container ${chillaxBold.className}`}>
				<div className='name'>SOCIALS</div>
				<div className='profile_picture'></div>
			</div>

			<div className={`social_containers`}>

				<div className='social_container'>
					<div className='social_title'>Ko-Fi</div>
					<div className='social_description'>
						<div className='description_text'>
							This is my Ko-fi page, I'm selling some of my own services! <p className='break_line' /> 
							Visit my page if you want to support me!
						</div>
						<div className='description_button'>
							<a href='https://ko-fi.com/S6S11INWZ6' target='_blank' className='button_container'><img src='/images/button_kofi.png' className='button_social' alt='Buy Me a Coffee at ko-fi.com' /></a>
						</div>
					</div>
				</div>

				<div className='social_container'>
					<div className='social_title'>GitHub</div>
					<div className='social_description'>
						<div className='description_text'>
							This is my GitHub account, here I will upload my open source projects! <p className='break_line' />
							Follow me and feel free to use any of my repositories and leave a feedback!
						</div>
						<div className='description_button'>
							<a href='https://github.com/0x746f6d6d757a' target='_blank' className='button_container'><img src='/images/button_github.png' className='button_social' alt='Buy Me a Coffee at ko-fi.com' /></a>
						</div>
					</div>
				</div>

				<div className='social_container'>
					<div className='social_title'>Twitch</div>
					<div className='social_description'>
						<div className='description_text'>
							In this channel I will stream sometimes, games or coding things!<p className='break_line' />
							Come here and follow to support me!
						</div>
						<div className='description_button'>
							<a href='https://www.twitch.tv/0x746f6d6d75' target='_blank' className='button_container'><img  src='/images/button_twitch.png' className='button_social' alt='Buy Me a Coffee at ko-fi.com' /></a>
						</div>
					</div>
				</div>

				<div className='social_container'>
					<div className='social_title'>Instagram</div>
					<div className='social_description'>
						<div className='description_text'>
							This is my personal Instagram account, I don't post much but if you want to make a bit of chit chat I will always be there!
						</div>
						<div className='description_button'>
							<a href='https://instagram.com/tommasofatticcioni' target='_blank' className='button_container'><img src='/images/button_instagram.png' className='button_social' alt='Buy Me a Coffee at ko-fi.com' /></a>
						</div>
					</div>
				</div>

				{/* <div className={`pharagrap_title`}>My socials!</div>
				<div className={`pharagrap_text`}>
					Inside this page you will be able to find all my currently used socials networks!    <p className='line_break' />

				</div> */}

				

			</div>

    	</div>
    );
}
