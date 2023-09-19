import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Link from 'next/link';
import Footer from "../components/footer";
import Section from "../components/section";
import QueryBuilder from "./questions";

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


  const sport = "golf"

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

		<div>
			<div class="search-paper">

				 	<header>
						 	<div id="search-logo">
						 	 	<Link href="/">
								  <h2>Explore</h2>
								</Link>
								</div>
						 		<form onSubmit={handleSubmit}>
									<div className="search-bar">
													<div className="">
													  		<input type="text" id="search" placeholder="Search..."  onChange={handleInputChange} />
													  		</div>
													<div className="">
						       							<input type="submit" value="Search" className=" search-btn primary"  onChange={handleSubmit} />
						       				 </div>
			       			</div>
		       			</form>
		       </header>
		      <div className="inner" id="content-sections">
								{outputBody}
					</div>
			</div>
				<div class="wrapper">
					<Footer />
				</div>
		</div>
			)
}