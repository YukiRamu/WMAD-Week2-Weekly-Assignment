import './App.css';
import React from 'react';

export default function Photo(props) {
    return (
        <>
        {props.photos.map((photo, index) => (
            <div key = {index}>
                <p>title: {photo.title}</p>
                <p>photo: {photo.url} </p>
                <button
                onClick = {() => {
                    props.deletePhoto(photo.id); 
                }}
                >
                    {""}
                    Delete Photo
                </button>
            </div>
        ))}
        </>
    ); 
}