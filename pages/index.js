import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Link from 'next/link';
import PropagateLoader from "react-spinners/PropagateLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'




export default function Home() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("<div class=\"sections\"><div><p>Figure skating is a beautiful and artistic sport where skaters perform on ice, combining graceful movements, jumps, spins, and dance steps to music. Imagine dancing, but instead of a dance floor, you have a smooth, glistening sheet of ice to move across wearing special boots with blades—those are your ice skates!</p><p><strong>Benefits of Figure Skating:</strong></p><ul>  <li>Physical Fitness: Skating improves cardiovascular health, flexibility, muscle strength, and coordination.</li>  <li>Confidence and Performance Skills: As skaters learn and master new skills, their self-confidence grows. Performing routines can also enhance public performance skills.</li>  <li>Mental Discipline: Figure skating requires concentration, memory, and discipline, which can benefit kids in many areas of life.</li>  <li>Stress Relief: Physical activity, including skating, is a great way to relieve stress and improve mood.</li>  <li>Social Opportunities: Skating classes and rinks provide a chance to meet new friends and be part of a community with a common interest.</li></ul><p>Children can start learning figure skating at a young age. Many clubs offer <em>\"Learn to Skate\"</em> programs for children as young as 3 to 5 years old. This is a good time to introduce them to the ice, as they can learn quickly and have fewer fears.</p><p>Figure skating is often seen as a <strong>winter</strong> activity because it requires cold temperatures to maintain the ice. However, thanks to indoor ice rinks, figure skating can be enjoyed year-round! Competitions and ice shows tend to peak during the winter months, but training and lessons continue throughout all seasons in indoor facilities.</p><p>If you're interested in pursuing figure skating, you can find programs at local ice rinks or sports centers. Remember, the key is to have fun and enjoy the glide!</p></div></div>");
  const [loading, setLoading] = useState(false);

   function handleClick(event) {
   	if(event == "ask"){
   		if(question !== "") Talents();
   	}else{
   		Explore();
   	}
  }

  function Explore(){
  	window.open('/explore', '_blank');
  }

  function Explore(){
  	window.open('/talent', '_self');
  }
  return (
	<div id="home-section">
	  <div id="search-logo"> 
	    <Link href="/">
	      <span className="symbol">
	        <img src="https://raw.githubusercontent.com/jonkiky/edu/master/public/images/logo.png" alt="" />
	      </span>
	    </Link>
	    <span className="home-header-title">
	    	Kids Activites Hub
	    </span>
	  </div>
<div className="home-content">
	    <div className="home-search-input">
	    	<h1>Exploring Little Ones' Talents</h1>
	      <p>We believe that every child is unique, with a world of 
talents waiting to be discovered. Our mission is to empower
 parents, teachers, and guardians in recognizing and 
nurturing these talents from an early age. </p>
	    </div>
	    <div className="button-group">
		    <button  onClick={()=>handleClick("explore")} >Find The Talents </button>
		    <button  onClick={()=>handleClick("explore")} > Explore Activites Hub</button>
		   </div>
	</div>
</div>
  );
}