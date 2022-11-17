import React from 'react';
import img1 from '../../../assets/images/fluoride.png';
import img2 from '../../../assets/images/cavity.png';
import img3 from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import DisplayServices from './DisplayServices';
import ButtonComponent from '../../../Components/ButtonComponent/ButtonComponent';



const Services = () => {

    const serviceData = [
        {
            id: 1,
            image: img1,
            name: 'Fluoride Treatment',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            image: img2,
            name: 'Cavity Filling',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            image: img3,
            name: 'Teeth Whitening',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]

    return (
        <div className='px-5 lg:px-0'>
            <div className="text-center mb-20">
                <h3 className='text-xl text-secondary  font-semibold'>Our Services</h3>
                <h2 className='text-4xl '>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-9 mb-32'>
                {
                    serviceData.map(service => <DisplayServices key={service.id} service={service}></DisplayServices>)
                }
            </div>

            <div className='mb-44'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:w-1/2'>
                            <img src={treatment} alt='' className="max-w-sm mx-auto rounded-lg shadow-2xl" />
                        </div>
                        <div className='lg:w-1/2'>
                            <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <ButtonComponent>get started</ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;