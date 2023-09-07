import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; 
import Link from 'next/link';
import Footer from "../components/footer";
import {cate} from "../config/search_cate"

export default function Search() {

	const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

	const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchTerm(value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(searchTerm!== ""){
    	
    	router.push('./content/'+searchTerm);
    }
  };

  
  function getList(){
  		let list = []
		  for (var i = cate.length - 1; i >= 0; i--) {
		  		let hrefLink = "/content/"+cate[i].name;
		  		list.push(
		  				<article className="style1">
											<span className="image">
												<img src="images/pic01.jpg" alt="" />
											</span>
											<a href={hrefLink} >
												<h2>{cate[i].name}</h2>
												<div className="content">
													<p>{cate[i].desc}</p>
												</div>
											</a>
									</article>);
		  				
		  		}
		  		return list;
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
													  		<input type="text" id="search" placeholder="Search ..."  onChange={handleInputChange} />
													  		</div>
													<div className="">
						       							<input type="submit" value="Search" className=" search-btn primary"  onChange={handleSubmit} />
						       				 </div>
			       			</div>
		       			</form>
		       </header>
		       <div className="trend-list">
						<section className="tiles">
								 { getList()}
						</section>
						</div>
			</div>
				<div class="wrapper">
					<Footer />
				</div>
		</div>
  );
}
