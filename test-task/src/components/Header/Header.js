import './Header.css'
import React from 'react';

export const Header = () => {
    return (
        <div className='HeaderBlock'>
            <div className='HeaderBlock_content'> 
                <div className='HeaderBlock_content_logoForm'> 
                    <div className='HeaderBlock_content_logo'> 
                        <img src='../images/headerLogo.jpeg'></img>
                    </div>
                    <div  className='HeaderBlock_content_profile'> 
                        <img src='../images/Profile-stroke.jpg'></img>
                    </div>
                </div>
                <div className='HeaderBlock_content_search'> 
                    <div className='HeaderBlock_content_search_photo'> 
                    <img src='../images/Search 24px.jpeg'></img>
                    </div>
                    <input className='HeaderBlock_content_search_input' placeholder='Найти...'></input> 
                </div>
                <div className='HeaderBlock_content_border'></div> 
                <div className='HeaderBlock_content_ellipse'> 
                    <h1 className='HeaderBlock_content_ellipse_name'>Константин</h1> 
                    <div className='HeaderBlock_content_ellipse_photo'> 
                        <img src='../images/Ellipse 18.jpeg'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}