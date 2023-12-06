import { useState,useEffect, useRef,createRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; 
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faCircleInfo ,faHeart as faHeartSolid ,faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartReg} from '@fortawesome/free-regular-svg-icons'
import Header from "../components/header";
import {data} from "../config/search_cate";
import 'react-select-search/style.css'

export default function SideInfoSection(handleLikeBtn, likeList,cate =[]) {

  const getLikedList =()=>{
  		let list = []
		  for (var i = cate.length - 1; i >= 0; i--) {
		  		let hrefLink = "/content/"+cate[i].name;
		  		let img = "/images/"+cate[i].name.replace(/ /g, "_")+".png";
		  		let likeIcon = <FontAwesomeIcon icon={faHeartReg} />;
		  		let isLiked = false;
		  		if (likeList.includes(cate[i].name)) {
				if(cate[i].ispublic){
							  			list.push(
							  				<div className="likedItem" key={"liked_"+cate[i].name}>
																<a href={hrefLink} target="_self" >
																	<span className="likedItemImage">
																	<img src={img} alt="" />
																</span>
																</a>
																<div className="disListIcon">
																	<button className="disLikeBtn" data-customproperty={cate[i].name} onClick={(e)=>handleLikeBtn(e)} >
																		<FontAwesomeIcon icon={faCircleXmark} />
																	</button>
																</div>
												</div>);
							  				
							  		}
						  		}

					}
		  		return list;
		  }

  return (
  	<div id="ads">
								<h2>Kiddie Discovery</h2>
								<p>We aim to help children in discovering their interests and passions while providing parents with 
								guidance on nurturing hobbies that can help 
								their children excel in a particular field.</p>
								<ul>
									<li>	<Link href="/about">About Us</Link></li>
									<li>	<Link href="/use">Terms of Service</Link></li>
									<li>	<Link href="/policy">Privacy Policy</Link></li>
								</ul>
								<div className="line"></div>
								<br/>
								<div className="collection">
									<p> Collection </p>
										<div className="collected-items">
											{getLikedList()}
										</div>
								</div>
							</div>
  );
}
