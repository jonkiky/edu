import { useState,useEffect, useRef,createRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

export default function Header() {

const options = [
    {
        name: "Figure Skating",
        value: "Figure_Skating"
    },
    {
        name: "Archery",
        value: "Archery"
    },
    {
        name: "Fancy Diving",
        value: "Fancy_Diving"
    },
    {
        name: "Flag Football",
        value: "Flag_Football"
    },
    {
        name: "Racing Car",
        value: "Racing_Car"
    },
    {
        name: "Football",
        value: "Football"
    },
    {
        name: "Basketball",
        value: "Basketball"
    },
    {
        name: "Baseball",
        value: "Baseball"
    },
    {
        name: "Softball",
        value: "Softball"
    },
    {
        name: "Soccer",
        value: "Soccer"
    },
    {
        name: "Volleyball",
        value: "Volleyball"
    },
    {
        name: "Wrestling",
        value: "Wrestling"
    },
    {
        name: "Cross Country",
        value: "Cross_Country"
    },
    {
        name: "Track and Field",
        value: "Track_and_Field"
    },
    {
        name: "Swimming and Diving",
        value: "Swimming_and_Diving"
    },
    {
        name: "Golf",
        value: "Golf"
    },
    {
        name: "Tennis",
        value: "Tennis"
    },
    {
        name: "Lacrosse",
        value: "Lacrosse"
    },
    {
        name: "Field Hockey",
        value: "Field_Hockey"
    },
    {
        name: "Ice Hockey",
        value: "Ice_Hockey"
    },
    {
        name: "Rowing",
        value: "Rowing"
    },
    {
        name: "Gymnastics",
        value: "Gymnastics"
    },
    {
        name: "Fencing",
        value: "Fencing"
    },
    {
        name: "Rifle",
        value: "Rifle"
    },
    {
        name: "Bowling",
        value: "Bowling"
    },
    {
        name: "Water Polo",
        value: "Water_Polo"
    },
    {
        name: "Beach Volleyball",
        value: "Beach_Volleyball"
    },
    {
        name: "Skiing",
        value: "Skiing"
    },
    {
        name: "Equestrian",
        value: "Equestrian"
    },
    {
        name: "Piano",
        value: "Piano"
    },
    {
        name: "Violin",
        value: "Violin"
    },
    {
        name: "Guitar",
        value: "Guitar"
    },
    {
        name: "Drawing Art",
        value: "Drawing_Art"
    }
];

const search = (terms)=>{
	const newTab = window.open('/content/'+terms, '_blank');
    newTab.focus();
}
  return (
				 	<header>
						 	<div id="search-logo"> 
						 		<Link href="/">
									<span className="symbol">
										<img src="https://raw.githubusercontent.com/jonkiky/edu/master/public/images/logo.png" alt="" />
									</span>
								</Link>

						 	<Link href="/">
								   <h2>Activities Hub</h2>
								</Link>
								<span className="search-input">
										<SelectSearch 
										options={options}  
										name="activities"
										placeholder="Find Activity" 
										emptyMessage =" No thing founded"
										search
										onChange= {(term)=>search(term)}/>
								</span>
						 	</div>
						 	 <div class="line"></div>
		       </header>

		    
  );
}
