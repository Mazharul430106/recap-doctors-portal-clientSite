import React from 'react';
import Chare from '../../../assets/images/chair.png';
import bannerImg from '../../../assets/images/bg.png';
import icon1 from '../../../assets/icons/clock.svg';
import icon2 from '../../../assets/icons/marker.svg';
import icon3 from '../../../assets/icons/phone.svg';
import ButtonComponent from '../../../Components/ButtonComponent/ButtonComponent';


const Banner = () => {
    return (
        <section className='pt-10 px-5 lg:px-0 ' style={{
            background: `url(${bannerImg})`
        }}>

            <div className="flex items-center  flex-col lg:flex-row-reverse mx-auto gap-10">
                <div className='lg:w-1/2'>
                    <img src={Chare} alt='' className="rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <div className=''>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                       <ButtonComponent>Get Started</ButtonComponent>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-5 my-20 mt-36'>

                <div className=" p-7 bg-gradient-to-r from-secondary to-primary card card-side text-white shadow-xl">
                    <figure><img src={icon1}alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                <div className=" p-7 bg-accent text-white card card-side shadow-xl">
                    <figure><img src={icon2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Visit Our Locations</h2>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
                <div className=" p-7 bg-gradient-to-r from-secondary to-primary text-white card card-side bg-base-100 shadow-xl">
                    <figure><img src={icon3} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Contact Us Now</h2>
                        <p>+8801766-430106</p>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default Banner;