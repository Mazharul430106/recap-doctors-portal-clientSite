import React from 'react';

const DisplayTestimonialItems = ({ testiMonialItem }) => {
    const { name, image, des, location } = testiMonialItem;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{des}</p>
                <div className='flex items-center gap-5'>

                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 classN ame="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DisplayTestimonialItems;