import React from 'react';

const MyProjectCard = ({project}) => {
    const {id, title, image, url, description} = project;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='rounded xl' src={image} alt="ProjectImage" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default MyProjectCard;