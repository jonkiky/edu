import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Link from 'next/link';



export default function page() {

	return (

	<div id="search-page">
			<div className="search-paper">
				 	<header>
						 	<div id="search-logo"> 
						 		<Link href="/">
									<span className="symbol">
										<img src="images/logo.png" alt="" />
									</span>
								</Link>

						 	<Link href="/">
								   <h2>Kid Education Hub</h2>
								</Link>
						 	</div>
						 	<div class="line"></div>
		       </header>

		      <div className="inner" id="content-sections">
								"to be done"
					</div>
			</div>
		</div>
			)
}