//import './App.css';
import React from 'react';

export default function Photo(props) {
    console.log(props)
    return (

        <div className= "App">

            {props.photos.map((photo, index) => (
                
                <div key = {index} className="borderSolid">
                    <p>title: {photo.title}</p>
                    <img src= {photo.thumbnailUrl} />
                    <button
                        onClick = {() => {
                            props.deletePhotos(photo.id); 
                        }}
                    >
                        {''}
                        Delete Photo
                </button>
            </div>
            ))}
        </div>
    ); 
}