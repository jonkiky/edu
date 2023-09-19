import { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export default function Home() {

  return (
  	  <div id="home">

			<section id="head">
				<div id="image"><Image
					  src="/images/bruce-mars-xj8qrWvuOEs-unsplash.jpg"
					  alt="Description of the image"
						layout="fill"
					  objectFit="cover"
					/>
					</div>
				<div id="head-text">
					<div id="logo">	<Link href="/explore">Explore</Link></div>
					<div id="slogan">
						<div id="slogan1">Looking for Kids' activities</div>
						<div id="slogan2">Feeling exhausted</div>
						<div id="slogan3">Let's handle the <span className="trend-list">research</span> for you.</div>
					</div>
					<div class="explore-btn">
									<Link href="/explore">
									  Explore
									</Link></div>
					</div>
			</section>

			<section id="question">
				
				<h1>The Question We Answer</h1>
				<div id="question-list">
					<div className="q">
							<div className="q-h">What</div>
							<div className="q-d">What kids can do</div>
					</div>

					<div className="q">
							<div className="q-h">When</div>
							<div className="q-d">When kids can start it</div>
					</div>
					
						<div className="q">
							<div className="q-h">Why</div>
							<div className="q-d">Why is it good for your kids</div>
					</div>

						<div className="q">
							<div className="q-h">Cost</div>
							<div className="q-d">maximum your edu ROI</div>
					</div>
				</div>
			</section>

				<section id="solution">
					<div id="solution-list">
						<ul>
							<li>Lists activities kids can play</li>
							<li>Facets search on age, mulit-intellignet, season, cost</li>
							<li>Details report on an active which covers all you want to know</li>
						</ul>
					</div>
					<div class="explore-btn">
								<Link href="/explore">
								  Explore
								</Link></div>
				</section>
				<section >
					<div><h1>Checkout what we have..</h1></div>
					<div class="explore-btn">
								<Link href="/explore">
								  Explore
								</Link></div>
				</section>
		</div>
  );
}
