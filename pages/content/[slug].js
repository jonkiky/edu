import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Link from 'next/link';
import fs from 'fs';
import Footer from "../../components/footer";
import Section from "../../components/section";
import QueryBuilder from "../questions";



export default function page() {

const [searchTerm, setSearchTerm] = useState("");
const [data, setData] = useState([]);

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

	const sport = router.query?.slug;

		if(sport==""){
	  	router.push('/404');
	  }

	async function checkIfFileExists(filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err) {
     return false;
    } else {
      // The file exists
      return true;
    }
  });
}

  useEffect(() => {

  	if(sport){

  		const filePath = '../../data/file.json'; // Adjust the file path as needed

	    // Check if the file exists
	    checkIfFileExists(filePath)
	      .then((exists) => {
	        fetchContent(sport)
	      })
	      .catch((error) => {
	      	 setData(askForAI(sport));
	      });

  		
  	};
    
  }, [sport]);

  const fetchContent = function(sport){
  	fetch('/api/staticData?keyword='+sport)
      .then((response) => {
        if (!response.ok) {
        	// no pre-define data,  will try realy time query
         setData(askForAI(sport));
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(localContent(response.json));
      })
      .catch((error) => {
        setData(error);
      });
  }

  const askForAI = function (sport){

	  const queries = QueryBuilder(sport);

	  let outputBody = [];

	  for(var i = 0; i<=queries.length-1; i++){
	  	
	  	outputBody.push(	<>
	  					<h1>{queries[i].title}</h1>
	  					<p>{queries[i].desc}</p>
	  					<Section
	  						title={queries[i].title}
					  		prompts_system={queries[i].system} 
					  		prompts_user={queries[i].query}
					  	/>
					 </>)
	  }
	  return outputBody;
  }

  const localContent = function(jsonData){
  	return "123";
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
								{data}
					</div>
			</div>
		</div>
			)
}