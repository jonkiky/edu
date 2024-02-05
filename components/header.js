import { useState,useEffect, useRef,createRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

export default function Header(props) {

const options = [
	{ name: "Swimming",value:"Swimming"},
	{ name: "Taekwondo",value:"Taekwondo"},
	{ name: "Street Dance",value:"Street Dance"},
	{ name: "Photographer",value:"Photographer"},
	{ name: "Karate",value:"Karate"},
	{ name: "Gymnastics",value:"Gymnastics"},
	{ name: "Karate",value:"Karate"},
	{ name: "Golf",value:"Golf"},
	{ name: "Beauty Pageant",value:"Beauty Pageant"},
	{ name: "Basketball",value:"Basketball"},
	{ name: "Ballet",value:"Ballet"},
	{ name: "Archery",value:"Archery"},
	{ name: "Accordion",value:"Accordion"}
];
const link = props.link?  props.link :"/";
const router = useRouter();
const search = (terms)=>{
	router.push('/content/'+terms);
}
  return (
				 	<header>
						 	<div id="search-logo"> 
						 		<Link href="/">
									<span className="symbol">
										<img src="https://raw.githubusercontent.com/jonkiky/edu/master/public/images/logo.png" alt="" />
									</span>
								</Link>

						 		<Link href={link}>
						 			<span className="title">
								   <h2>Kiddie Discovery</h2>
								  </span>
								</Link>
								<span className="search-input">
										<SelectSearch 
										options={options}  
										name="activities"
										placeholder="Find A Development Pathway" 
										emptyMessage =" No thing founded"
										search
										onChange= {(term)=>search(term)}/>
								</span>
						 	</div>
						 	 <div className="line"></div>
		       </header>

		    
  );
}
