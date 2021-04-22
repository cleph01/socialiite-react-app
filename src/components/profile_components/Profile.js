import React from 'react'

// Begin Components
import PromoStories from '../stories_components/StoriesFeed';
import Nav from '../navigation_components/Nav';
import Footer from '../navigation_components/Footer';
// End Components

import '../../lib/css/Post.css'


function Profile() {
    return (
        <>
        <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
      
            {/* <Nav 
                user={user}
                setOpen={setOpen}
                setOpenSignIn={setOpenSignIn}
                auth={auth}
            /> */}
                

            <PromoStories />


            
            
        </div>

        {/* <Footer 
            destination1="notification" 
            destination2="promos"
            icon1="bell" 
            icon2="bullhorn" 
            setOpenUpload={setOpenUpload}
        /> */}
    </>
    )
}

export default Profile
