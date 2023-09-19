import { useState } from 'react';
import Image from 'next/image'; 

export default function Home() {

  return (
  	  <div id="home">

					<div  className="home-image">
						<Image src="/sport.png"  alt="background Image" layout="fill"
        objectFit="cover"/>
					</div>
					<div class="home-paper">
					 	<div id="logo"><h2>Explore</h2></div>
						<div id="slogan">
							<p> Learn and Discover Endless Adventures for Your Little Ones.</p>
						</div>
						<div id="explore-button">
						<a href="/explore" class="button primary submit-btn">Explore</a>
						</div>
					</div>
					

	</div>
  );
}
