import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Link from 'next/link';
import Header from "../../components/header";
import Section from "../../components/section";
import QueryBuilder from "../../components/questions";



export default function page() {

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
  	fetch('../../data/'+sport.replace(/ /g, '_')+'.json')
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
	  for(var i = 0; i<=jsonData.length-1; i++){
	  	if(!(jsonData[i].hide&&jsonData[i].hide)){
	  				let content = jsonData[i].response?jsonData[i].response:"" ;
	  	outputBody.push(	<>
	  					<div className="content-header">{jsonData[i].title}</div>
	  					<Section
	  						title={jsonData[i].title}
					  		prompts_system={jsonData[i].system} 
					  		prompts_user={jsonData[i].query}
					  		content ={content}
					  	/>
					 </>)
	  		}
	  	}
	
	  return outputBody;
  }


	return (

	<div id="search-page">
			<div className="search-paper">
				 	<Header />
				 	<div className="trend-list">
			      <div className="inner" id="content-sections">
									{data}
						</div>
						 <div id="ads">
									<h2 className="side-title">Development Pathways</h2>
									<p>Embark on a journey of growth and discovery with Bright Futures Pathways,
									 where every child's potential is limitless. 
									 Our platform is dedicated to guiding and nurturing 
									 young minds through their developmental stages. 
									 We believe in creating a world where kids can
									  explore, learn, and thrive at their own pace.</p>
									<ul>
										<li>	<Link href="/about">About Us</Link></li>
										<li>	<Link href="/use">Terms of Service</Link></li>
										<li>	<Link href="/policy">Privacy Policy</Link></li>
									</ul>

									<div className="line"></div>
									<br/>
									<Link href="/explorer" className="back-btn">Back to program list</Link>
									<br/>
								</div>
					</div>
			</div>
		</div>
			)
}