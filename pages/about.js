import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Header from "../components/header";
import Link from 'next/link';

export default function page() {

	return (

	<div id="search-page">
			<div className="search-paper">
				 	<Header />
		     		<div className="static-trend-list">
		     				 <div className="inner" id="about-content-sections">
		     				  <div className="content-header">About Us</div>

							   <div className="content">
							  	<p>Everyone harbors dreams deep within their hearts; however, many find themselves lost on the journey to pursue these dreams, feeling confused about the gap between their aspirations and reality. The lack of guidance and understanding of the paths to realization may lead to the dreams remaining unrealized.</p>
								<p>In my youth, I immersed myself in a profound love for the game of Go, often tinkering with the board in my leisure time. I have the dream of becoming a skilled Go player; however, I knew nothing about the learning path to achieve this dream. I was unaware of how to become a professional Go player, and ultimately, this dream silently faded away.</p>
								<p>If only I had known back then, if my parents had guided me in understanding the process of learning Go and pursuing a professional career, perhaps I would have had the opportunity to chase the dream of becoming a Go player, creating an extraordinary life trajectory.</p>
								<p>We build this in a hope to assist those who have dreams and this app can provide information for you learn where and how to get started. </p>
										    </div>
							   </div>
					</div>
			</div>
			<SubscribeForm/>
		</div>
			)
}