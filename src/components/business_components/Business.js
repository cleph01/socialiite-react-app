import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import { useParams } from "react-router-dom";

import Nav from '../navigation_components/Nav';
import PromoStories from '../stories_components/StoriesFeed';

import '../../lib/css/Business.css'


function Business() {

    

    const params = useParams()

    const [imageUrl, setImageUrl] = useState("https://media-cdn.tripadvisor.com/media/photo-s/18/9b/0a/a5/urban-life.jpg")

    return (
        <>  

            <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
            
                

                
                <div className="business__posts">

                    <div className="business">
                        
                            <div className="business__header">

                                <Avatar
                                    className="business__avatar"
                                    // alt="CMoney"
                                    alt={params.businessId}
                                    src="/static/images/avatar/1.jpg"
                                />
                                <h3>{params.businessId}</h3>
                                
                            </div>
                        
                        <img alt="" className="business__image" src={imageUrl}/>
                        {/* image */}

                        {/* Liked By  and counter */}

                        <h4 className="business__text">
                            Text Greeting from Business
                        </h4>
                        <div>
                            <ul>
                                <li>Thumbnail Image-Hyperlinks to Product Video / Add</li>
                                <li>Thumbnail Image-Hyperlinks to Product Video / Add</li>
                                <li>Thumbnail Image-Hyperlinks to Product Video / Add</li>
                                <li>Thumbnail Image-Hyperlinks to Product Video / Add</li>
                                <li>Thumbnail Image-Hyperlinks to Product Video / Add</li>
                            </ul>
                        </div>

                    
                        
                    </div>
                </div>
            
            </div>

            <div>Business Id: {params.businessId}</div>
        </>
    )
}

export default Business
