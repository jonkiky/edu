import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Link from 'next/link';
import Footer from "../../components/footer";

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

  const [result, setResult] = useState("");

	let prompts_system =[];
	prompts_system.push(" please use html  h1 to h6  ,<p>, <ul> tag only to style your response. keep your response within 2800 tokens. ");
	prompts_system.push(" please use html  h1 to h6  ,<p>, <ul> tag only to style your response. keep your response within 2800 tokens. ");
	prompts_system.push(" please use html  h1 to h6  ,<p>, <ul> tag only to style your response. keep your response within 2800 tokens. ");
	prompts_system.push("As a recruiter work for a top college, you will recruit a "+sport+" play,  please use html  h1 to h6  ,<p>, <ul> tag only to style your response. keep your response within 2800 tokens. ");
	prompts_system.push("You are "+sport+"  instructor, you will provide "+sport+"  related information to client. please use html  h1 to h6  ,<p>, <ul> tag only to style your response. keep your response within 2800 tokens. ");
	prompts_system.push("If kids want to turn pro and will involve more serious training.  please use html  h1 to h6  ,<p>, <ul> tag only to style your response. keep your response within 2800 tokens. ");
	prompts_system.push("Provide best college in the USA that kids can apply in name of pro in "+sport+".please use html  h1 to h6  ,<p>, <ul> tag only to style your response. keep your response within 2800 tokens. ");
	prompts_system.push("You are "+sport+"  instructor, you will provide "+sport+"  related information to client. please use html  h1 to h6  ,<p>, <ul> tag only to style your response. keep your response within 2800 tokens. ");
	prompts_system.push("As a parents, you are interested in "+sport+" and would like to enroll you kid to the program. please use html  h1 to h6  ,<p>, <ul> tag only to style your response. keep your response within 2800 tokens. " );

let prompts_user =[];
	prompts_user.push("You are "+sport+"  instructor, you will provide "+sport+"  related information to client. Please briefly introduce "+sport+" and the benefit of participating in this activity.  ");
	prompts_user.push("You are "+sport+"  instructor, you will provide "+sport+"  related information to client. please provide training activities by level or by age, also indication the key milestones.");
	prompts_user.push("You are "+sport+"  instructor, you will provide "+sport+"  related information to client. please provide key competitions by level or by age for kids  and provide the link, plus briefly description");
	prompts_user.push(" you will recruit a "+sport+" player,  you need a measurement matrix to help you to pick a good player.  Can you provide this matrix.");
	prompts_user.push("please provide the cost in general as  a hobby.");
	prompts_user.push("Please provide the key activities for kids will purchase the professional career on it and provide the cost matrix in general, give a number of money needed.");
	prompts_user.push("Provide best college in the USA that kids can apply in name of pro in "+sport+".");
	prompts_user.push("please provide possible career path in this field and possible income revenue for each path.");
	prompts_user.push("you want to know the popularity of this sport and trend of this sport, will it goes down or up and key influence in the field, and chance to be success in the field. ");


  useEffect(() => {
	async function Ask(prompts_user,prompts_system) {

		if(sport){
				
		  		// Create an array to store all the promises
        const promises = [];
		  		try {
		  				for (var i = 0; i < prompts_user.length; i++) {
					     promises.push(fetch("/api/generate", {
					        method: "POST",
					        headers: {
					          "Content-Type": "application/json",
					        },
					        body: JSON.stringify({ 
					        	system: prompts_system[i],
					        	user: prompts_user[i]
					         }),
					      }).then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .catch((error) => {
                console.error('Error fetching data:', error);
              })
					     );
				    	}
			      // Wait for all promises to resolve using Promise.all
		        const results = await Promise.all(promises);

		        let html = ""
		        for (var i = 0; i < results.length; i++) {
		        	html+= results[i]?.result?.choices[0]?.message?.content?? ""
		        }
		        
			       setResult(html)
			    } catch(error) {
			      // Consider implementing your own error handling logic here
			      console.error(error);
			      alert(error.message);
			    }

    }
  }
	
	  Ask(prompts_user,prompts_system);

 }, [sport]);

   
   let Pagebody =
   		<>
   			<b>We will cover the topics of {sport}, here is outline. </b>
				<ul>
				  <li>Understanding {sport}</li>
				  <li>Why {sport} is Great for Kids</li>
				  <li>Fun Activities and Milestones in {sport}</li>
				  <li>Measuring {sport} Progress</li>
				  <li>The Cost of {sport} as a Hobby</li>
				  <li>Training Young {sport} player for a Pro Career</li>
				  <li>Colleges Known for {sport} Programs</li>
				  <li>Career Opportunities in {sport}</li>
				  <li>{sport}'s Popularity and Trends</li>
				</ul>

   			<p>Details is on the way , usually take few minutes....</p>
   			<InfinitySpin width='200' color="#4fa94d" />
   		</>
   		;

		if(result !=""){
			Pagebody = <div dangerouslySetInnerHTML={{ __html: result }} />
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
		      <div className="inner">
							 { Pagebody }
						</div>
			</div>
				<div class="wrapper">
					<Footer />
				</div>
		</div>
			)
}