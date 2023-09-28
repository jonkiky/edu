import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Link from 'next/link';
import Footer from "../../components/footer";
import Section from "../../components/section";
import QueryBuilder from "../questions";

export default function page() {

const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

	const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchTerm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(searchTerm!== ""){
    	
    	router.push('/content/'+searchTerm);
    }
  };


  const sport = router.query?.slug?.toUpperCase();

	if(sport==""){
  	router.push('/404');
  }

  const queries = QueryBuilder(sport);

  let outputBody = [];

  for(var i = 0; i<=queries.length-1; i++){
  	
  	outputBody.push(	<>
  					<h1>{queries[i].title}</h1>
  					<p>{queries[i].desc}</p>
  					<Section 
				  		prompts_system={queries[i].system} 
				  		prompts_user={queries[i].query}
				  	/>
				 </>)
  }

  
	return (

	<div id="search-page">
			<div className="search-paper">
				 	<header>
						 	<div id="search-logo">
						 	<Link href="/explore">
								  <h2>Explore</h2>
								</Link>
						 	</div>
						 	<div class="line"></div>
		       </header>

		      <div className="inner" id="content-sections">
								{outputBody}
					</div>
			</div>
		</div>
			)
}