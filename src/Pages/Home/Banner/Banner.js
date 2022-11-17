import React from 'react';
import Chare from '../../../assets/images/chair.png';
import bannerImg from '../../../assets/images/bg.png';
const Banner = () => {

    return (
        <section className='py-10 px-5 lg:px-0 ' style ={{
            background: `url(${bannerImg})`
        }}>
            
            <div className="flex items-center my-10 flex-col lg:flex-row-reverse mx-auto gap-10">
                <div className='lg:w-1/2'>
                    <img src={Chare} alt='' className="rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <div className=''>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;