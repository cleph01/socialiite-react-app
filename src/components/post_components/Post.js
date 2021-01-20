import React, { useState, useEffect } from 'react'
import '../../lib/css/Post.css'
import Avatar from "@material-ui/core/Avatar";
import { db } from '../../utils/firebase_config';

function Post({postId, username, caption, imageUrl}) {

    const [comment, setComment] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let unsubscribe;

        if(postId){
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()))
                })
        }

        return () => {

            unsubscribe();
        }
    }, [postId])


    const postComment = (event) => {
    
    }
    
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

            <div className="post__comments">
                {comments.map(( comment ) => {
                    <p><b>{comment.username}</b> {comment.text}</p>
                })
                }
            </div>

            <form className="post__commentBox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange ={ e => setComment(e.target.value)}
                />

                <button 
                    disabled={!comment}
                    className="post__button"
                    type="submit"
                    onClick={postComment}
                >

                    Post
                </button>
            </form>
            
        </div>
    )
}

export default Post
