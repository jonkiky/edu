import { useState,useEffect, useRef,createRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; 
import Link from 'next/link';
import Footer from "../components/footer";
import {data} from "../config/search_cate";


export default function Search() {

  const router = useRouter();
  const [cate, setCate] = useState([]);
  const [tags, setTags] = useState([]);
	const [checkboxStatus, setCheckboxStatus] = useState(Array.from(22,() => false));

	useEffect(() => {
   setCate(filter(data,tags))
  }, [data,tags]);

	function filter(data=[],tags=[]){


		let transferedData = data.map((d) =>{
	 	let addProperty ={ispublic: false};

	 		let age_flag = 0 ;
			let mi_flag = 0 ;
			let cost_flag = 0 ;
			let season_flag = 0 ;

			for (var i = tags.length - 1; i >= 0; i--) {
					if(tags[i].includes("age-")){
							if(!age_flag == 1){
								if(d?.tags?.includes(tags[i])){
									age_flag=1;
								}else{
									age_flag=-1;
								}
							}
					}
					if(tags[i].includes("mi-")){
							if(mi_flag !== 1){
								if(d?.tags?.includes(tags[i])){
									mi_flag=1;
								}else{
									mi_flag=-1;
								}
							}
					}
					if(tags[i].includes("c-")){
							if(!cost_flag == 1){
								if(d?.tags?.includes(tags[i])){
									cost_flag=1;
								}else{
									cost_flag=-1;
								}
							}
					}
					if(tags[i].includes("s-")){
							if(!season_flag == 1){
								if(d?.tags?.includes(tags[i])){
									season_flag=1;
								}else{
									season_flag=-1;
								}
							}
					}
			}

		if(age_flag>=0 && mi_flag>=0 && cost_flag>=0 && season_flag >=0){
			addProperty={ispublic: true};
		}
	 	return({ ...d, ...addProperty })
	 }); 
		return transferedData;
	}

	function addTag(arr, tag) {
	  if (!arr.includes(tag)) {
	    arr.push(tag); // Add the element to the array
	  }
	  return arr;
	}


	function removeTag(arr, tag){
		return arr.filter(obj => obj!== tag);
	}

	const toggleCheckBoxStatus = (event, value) => {
		let updatedTags = tags
		if(event?.target?.checked){
				 updatedTags = addTag(tags,value);
			
		}else{
			   updatedTags = removeTag(tags,value);
		}
			setTags(updatedTags);
			setCate(filter(data,updatedTags))
  };

  function getList(){
  		let list = []
		  for (var i = cate.length - 1; i >= 0; i--) {
		  		let hrefLink = "/content/"+cate[i].name;
		  		let img = cate[i].image === "n/a" ? "images/pic01.jpg":cate[i].image;
		  		if(cate[i].ispublic){
			  			list.push(
			  				<article className="style1">
												<span className="image">
													<img src={img} alt="" />
												</span>
												<a href={hrefLink} target="_blank" >
													<h2>{cate[i].name}</h2>
													<div className="content">
														<p>{cate[i].desc}</p>
													</div>
												</a>
										</article>);
			  				
			  		}
		  		}

		  		if(list.length==0){
		  			list = 	[<article className="nofound">
												No result
										</article>]
		  		}
		  		return list;
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

		       <div className="trend-list">
		       		<div id="facetsearch">
		       			 <div className="filter-section">
		       			 		<div className="filter-section-header">Age</div>
		       			 		<div className="filter-section-options">
		       			 			<ul>
		       			 				<li>
		       			 					
		       			 							
		       			 				<input type="checkbox" id="age-2"  value="age-2"  
          									onChange={(e)=>toggleCheckBoxStatus(e,"age-2")}
        								/>
        								<label htmlFor="age-2"> Less than 3</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="age-3" value="age-3" 	onChange={(e)=>toggleCheckBoxStatus(e, "age-3")} />
		       			 						<label htmlFor="age-3"> 3</label>
		       			 				</li>
		       			 				<li>
		       			 					<input type="checkbox" id="age-4" value="age-4" 	onChange={(e)=>toggleCheckBoxStatus(e, "age-4")} />
		       			 						<label htmlFor="age-4"> 4</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="age-5" value="age-5" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-5")} />
		       			 						<label htmlFor="age-5">5</label></li>
		       			 				<li>
		       			 						<input type="checkbox" id="age-6" value="age-6" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-6")} />
		       			 						<label htmlFor="age-6">6</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="age-7" value="age-7" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-7")} />
		       			 						<label htmlFor="age-7">7</label>
		       			 				</li>
		       			 				<li> 	<input type="checkbox" id="age-8" value="age-8" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-8")} />
		       			 						<label htmlFor="age-8">8</label></li>
		       			 						<li> 	<input type="checkbox" id="age-9" value="age-9" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-9")} />
		       			 						<label htmlFor="age-9">9 </label></li>
		       			 						<li> 	<input type="checkbox" id="age-10" value="age-10" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-10")} />
		       			 						<label htmlFor="age-10">Older than 9</label></li>
		       			 			</ul>
		       			 		</div>
		       			 </div>
		       			 <div className="line"></div>
		       			  <div className="filter-section">
		       			 		<div className="filter-section-header">Multi-intelligent</div>
		       			 		<div className="filter-section-options">
		       			 			<ul>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-body" value="mi-bodily-kinesthetic" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-bodily-kinesthetic")} />
		       			 						<label htmlFor="mi-body">Bodily Kinesthetic</label>
		       			 						 </li>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-interpersonal" value="mi-interpersonal" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-interpersonal")} />
		       			 						<label htmlFor="mi-interpersonal">Interpersonal</label>
		       			 						 </li>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-vl" value="mi-linguistic" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-linguistic")} />
		       			 						<label htmlFor="mi-vl">Verbal Linguistic</label>
		       			 						</li>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-lm" value="mi-methematical" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-methematical")} />
		       			 						<label htmlFor="mi-lm">Logical Methematical</label>
		       			 				</li>
		       			 				<li>
		       			 					<input type="checkbox" id="mi-na" value="mi-naturalistic" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-naturalistic")} />
		       			 						<label htmlFor="mi-na">Naturalistic</label>
		       			 						</li>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-intrapersonal" value="mi-intrapersonal"  	onChange={(e)=>toggleCheckBoxStatus(e,"mi-intrapersonal")}/>
		       			 						<label htmlFor="mi-intrapersonal">Intrapersonal</label>
		       			 						</li>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-vs" value="mi-visual" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-visual")} />
		       			 						<label htmlFor="mi-vs">Visual Spatial</label>
		       			 						</li>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-ms" value="mi-musical" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-musical")} />
		       			 						<label htmlFor="mi-ms">Musical</label>
		       			 				</li>
		       			 			</ul>
		       			 		</div>
		       			 </div>
		       			 <div className="line"></div>
		       			 <div className="filter-section">
		       			 		<div className="filter-section-header">Cost</div>
		       			 		<div className="filter-section-options">
		       			 			<ul>
		       			 				<li>
		       			 						<input type="checkbox" id="cost1" value="c-$" 	onChange={(e)=>toggleCheckBoxStatus(e,"c-$")} />
		       			 						<label htmlFor="cost1">$</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="cost2" value="c-$$" 	onChange={(e)=>toggleCheckBoxStatus(e,"c-$$")} />
		       			 						<label htmlFor="cost2">$$</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="cost3" value="c-$$$" 	onChange={(e)=>toggleCheckBoxStatus(e,"c-$$$")} />
		       			 						<label htmlFor="cost3">$$$</label>
		       			 				</li>
		       			 			</ul>
		       			 		</div>
		       			 </div>
		       			 <div className="line"></div>
		       			 <div className="filter-section">
		       			 		<div className="filter-section-header">Season</div>
		       			 		<div className="filter-section-options">
		       			 			<ul>
		       			 				<li>
		       			 						<input type="checkbox" id="spring" value="s-spring" 	onChange={(e)=>toggleCheckBoxStatus(e,"s-spring")} />
		       			 						<label htmlFor="spring">Spring</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="summer" value="s-summer" 	onChange={(e)=>toggleCheckBoxStatus(e,"s-summer")} />
		       			 						<label htmlFor="summer">Summer</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="fall" value="s-fall" 	onChange={(e)=>toggleCheckBoxStatus(e,"s-fall")} />
		       			 						<label htmlFor="fall">Fall</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="winter" value="s-winter" 	onChange={(e)=>toggleCheckBoxStatus(e,"s-winter")} />
		       			 						<label htmlFor="winter">Winter</label>
		       			 				</li>
		       			 			</ul>
		       			 		</div>
		       			 </div>
		       		</div>
							<section className="tiles">
									 { getList()}
							</section>
							<div id="ads">
								<h2>Activities Hub For Parents</h2>
								<p>We aim to assist children in discovering their interests and passions while providing parents with 
								guidance on nurturing hobbies that can help 
								their children excel in a particular field.</p>
							</div>
						</div>
			</div>
				
		</div>
  );
}
