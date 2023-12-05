import { useState,useEffect, useRef,createRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

export default function Header() {

const options = [{ name:"Accordion",value:"Accordion"},
{ name:"Aerospace Engineering",value:"Aerospace_Engineering"},
{ name: "Archery",value:"Archery"},
{ name: "Artificial Intelligence",value:"Artificial_Intelligence"},
{ name: "Artistic Swimming",value:"Artistic_Swimming"},
{ name: "Astronomy",value:"Astronomy"},
{ name: "Auto Racing Simulations eSports",value:"Auto_Racing_Simulations_eSports"},
{ name: "Badminton",value:"Badminton"},
{ name: "Ballroom Dance",value:"Ballroom_Dance"},
{ name: "Banjo",value:"Banjo"},
{ name: "Baseball",value:"Baseball"},
{ name: "Basketball",value:"Basketball"},
{ name: "Beach Volleyball",value:"Beach_Volleyball"},
{ name: "Bead Art",value:"Bead_Art"},
{ name: "Beauty Pageant",value:"Beauty_Pageant"},
{ name: "Biathlon",value:"Biathlon"},
{ name: "Biology",value:"Biology"},
{ name: "Bobsleigh",value:"Bobsleigh"},
{ name: "Boxing",value:"Boxing"},
{ name: "Breakdancing",value:"Breakdancing"},
{ name: "Calligraphy",value:"Calligraphy"},
{ name: "Canoeing",value:"Canoeing"},
{ name: "Cello",value:"Cello"},
{ name: "Cooking",value:"Cooking"},
{ name: "Chemistry",value:"Chemistry"},
{ name: "Clarinet",value:"Clarinet"},
{ name: "Clay Modeling",value:"Clay_Modeling"},
{ name: "Computer Science",value:"Computer_Science"},
{ name: "Contemporary Dance",value:"Contemporary_Dance"},
{ name: "Curling",value:"Curling"},
{ name: "Cycling",value:"Cycling"},
{ name: "Digital Art",value:"Digital_Art"},
{ name: "Fancy Diving",value:"Fancy_Diving"},
{ name: "Drawing",value:"Drawing"},
{ name: "Drums",value:"Drums"},
{ name: "Equestrian",value:"Equestrian"},
{ name: "Fencing",value:"Fencing"},
{ name: "Film Maker",value:"Film_Maker"},
{ name: "Flag Football",value:"Flag_Football"},
{ name: "Flamenco Dance",value:"Flamenco_Dance"},
{ name: "Flute",value:"Flute"},
{ name: "Go-Kart Racing",value:"Go-Kart_Racing"},
{ name: "Formula 1 Racing",value:"Formula_1_Racing"},
{ name: "Golf",value:"Golf"},
{ name: "Guitar",value:"Guitar"},
{ name: "Gymnastics",value:"Gymnastics"},
{ name: "Handball",value:"Handball"},
{ name: "Harp",value:"Harp"},
{ name: "Hip-Hop Dance",value:"Hip-Hop_Dance"},
{ name: "Hockey",value:"Hockey"},
{ name: "Horse Racing",value:"Horse_Racing"},
{ name: "Hula Dance",value:"Hula_Dance"},
{ name: "Ice Hockey",value:"Ice_Hockey"},
{ name: "Jewelry Making",value:"Jewelry_Making"},
{ name: "Judo",value:"Judo"},
{ name: "Karate",value:"Karate"},
{ name: "Luge",value:"Luge"},
{ name: "Latin Dance",value:"Latin_Dance"},
{ name: "Mathematics",value:"Mathematics"},
{ name: "Modern Pentathlon",value:"Modern_Pentathlon"},
{ name: "Mosaics",value:"Mosaics"},
{ name: "Oboe",value:"Oboe"},
{ name: "Origami",value:"Origami"},
{ name: "Photography",value:"Photography"},
{ name: "Papercraft",value:"Papercraft"},
{ name: "Painting",value:"Painting"},
{ name: "Piano",value:"Piano"},
{ name: "Pottery",value:"Pottery"},
{ name: "Robotics",value:"Robotics"},
{ name: "Rowing",value:"Rowing"},
{ name: "Rugby",value:"Rugby"},
{ name: "Sailing",value:"Sailing"},
{ name: "Saxophone",value:"Saxophone"},
{ name: "Sculpting",value:"Sculpting"},
{ name: "Sewing and Embroidery",value:"Sewing_and_Embroidery"},
{ name: "Singing",value:"Singing"},
{ name: "Skiing and Snowboarding",value:"Skiing_and_Snowboarding"},
{ name: "Soccer",value:"Soccer"},
{ name: "String Art",value:"String_Art"},
{ name: "Trombone",value:"Trombone"},
{ name: "Trumpet",value:"Trumpet"},
{ name: "Ukulele",value:"Ukulele"},
{ name: "Violin",value:"Violin"},
{ name: "Volleyball",value:"Volleyball"},
{ name: "Water Polo",value:"Water_Polo"},
{ name: "Weightlifting",value:"Weightlifting"},
{ name: "Wrestling",value:"Wrestling"},
{ name: "Chocolate_Maker",value:"Chocolate_Maker"},
{ name: "Fishing",value:"Fishing"},
{ name: "Ping Pong",value:"Ping_Pong"},
{ name: "Sport Climbing",value:"Sport_Climbing"},
{ name: "Swimming",value:"Swimming"},
{ name: "Tennis",value:"Tennis"},
{ name: "Girl_Group",value:"Girl_Group"},
{ name: "Bowling",value:"Bowling"},
{ name: "American Football",value:"American_Football"},
{ name: "Lacrosse",value:"Lacrosse"},
{ name: "Rifle",value:"Rifle"},
{ name: "Taekwondo_Sport",value:"Taekwondo_Sport"},
{ name: "Figure Skating",value:"Figure_Skating"}
];

const router = useRouter();
const search = (terms)=>{
	router.push('/content/'+terms);
}
  return (
				 	<header>
				 			<div>
				 			System is under developmenet
				 			</div>
						 	<div id="search-logo"> 
						 		<Link href="/">
									<span className="symbol">
										<img src="https://raw.githubusercontent.com/jonkiky/edu/master/public/images/logo.png" alt="" />
									</span>
								</Link>

						 		<Link href="/">
						 			<span className="title">
								   <h2>Kiddie Discovery</h2>
								  </span>
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
						 	 <div className="line"></div>
		       </header>

		    
  );
}
