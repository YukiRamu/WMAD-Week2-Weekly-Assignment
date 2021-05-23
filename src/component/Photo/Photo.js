import React from 'react';
import "./Photo.css"; 

export default function Photo(props) {
    console.log(props)
    return (

        <div className= "App">

            {props.photos.map((photo, index) => (
                
                <div key = {index}>
                    <ul className="mainpage">
                        <li>
                            <p>Title: {photo.title}</p>
                            <img src= {photo.thumbnailUrl} alt="colorphoto" />
                            <br></br>
                            <button
                                onClick = {() => {
                                props.deletePhotos(photo.id); 
                            }}
                            >
                                {''}
                                Delete Photo
                            </button>
                            <button 
                                onClick = {() => {
                                props.editTitle(photo.id); 
                            }}
                            >
                                Edit Title
                            </button>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    ); 
}