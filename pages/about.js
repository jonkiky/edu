import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Header from "../components/header";
import Link from 'next/link';



export default function page() {

	return (

	<div id="search-page">
			<div className="search-paper">
				 	<Header />
		     		<div className="static-trend-list">
		     				 <div className="inner" id="content-sections">
		     				  <div className="content-header">About Us</div>

							   <div className="content">

							    <p>
							    	Our website hosts a collection of kids' activities. 
							    	We aim to help children discover their interests and 
							    	passions while providing parents with guidance on 
							    	nurturing hobbies that can help children excel in a 
							    	particular field. We also hope it can motivate kids 
							    	to move forward.
							    </p>

							    <b>Why creates the this application?</b>
							    <p>
							    	When I was kid, I dream of being a hero.
							    </p>
							    </div>
							   </div>
					</div>
			</div>
		</div>
			)
}