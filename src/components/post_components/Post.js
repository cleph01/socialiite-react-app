import React from 'react'
import '../../lib/css/Post.css'
import Avatar from "@material-ui/core/Avatar";

function Post({postId, username, caption, imageUrl}) {

    //comments listener

    
    return (
        <div className="post">
            <div className="post__header">

                <Avatar
                    className="post__avatar"
                    // alt="CMoney"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
                
            </div>    
            <img className="post__image" src={imageUrl}/>
            {/* image */}

            {/* Liked By  and counter */}

            <h4 className="post__text">
                <strong>{username} </strong>{caption} 
            </h4>
            
        </div>
    )
}

export default Post
