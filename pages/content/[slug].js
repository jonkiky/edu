import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Link from 'next/link';
import Header from "../../components/header";
import Section from "../../components/section";
import QueryBuilder from "../../components/questions";



export default function page() {

const [searchTerm, setSearchTerm] = useState("");
const [data, setData] = useState([]);

  const router = useRouter();


	const sport = router.query?.slug;

		if(sport==""){
	  	router.push('/404');
	  }



  useEffect(() => {
  	if(sport){
  			fetchContent(sport);
  	};
    
  }, [sport]);

  const fetchContent = function(sport){
  	fetch('https://raw.githubusercontent.com/jonkiky/edu/master/data/'+sport.replace(/ /g, '_')+'.json')
      .then((response) => {
        if (!response.ok) {
        	// no pre-define data,  will try realy time query
         setData(askForAI(sport));
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(localContent(jsonData));
      })
      .catch((error) => {
        setData(error);
      });
  }

  const askForAI = function (sport){
	  const queries = QueryBuilder(sport);
	  return buildContentFromRes(queries)
	 
  }

  const localContent = function(jsonData){
  	return buildContentFromRes(jsonData.data)
  }

  const buildContentFromRes = function(jsonData){
   let outputBody = [];
     console.log(jsonData);
	  for(var i = 0; i<=jsonData.length-1; i++){
	  	let content = jsonData[i].response?jsonData[i].response:"" ;
	  	outputBody.push(	<>
	  					<h1>{jsonData[i].title}</h1>
	  					<p>{jsonData[i].desc}</p>
	  					<Section
	  						title={jsonData[i].title}
					  		prompts_system={jsonData[i].system} 
					  		prompts_user={jsonData[i].query}
					  		content ={content}
					  	/>
					 </>)
	  }
	
	  return outputBody;
  }
  console.log(data);
	return (

	<div id="search-page">
			<div className="search-paper">
				 	<Header />
		      <div className="inner" id="content-sections">
								{data}
					</div>
			</div>
		</div>
			)
}