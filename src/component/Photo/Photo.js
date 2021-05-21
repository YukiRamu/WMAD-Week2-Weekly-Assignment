//import './App.css';
import React from 'react';

export default function Photo(props) {
    console.log(props)
    return (

        <div className= "App">

            {props.photos.map((photo, index) => (

                <div key = {index} >
                    <p>title: {photo.title}</p>
                    <img src= {photo.thumbnailUrl} alt="colorphoto" />
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
                </div>
            ))}
        </div>
    ); 
}