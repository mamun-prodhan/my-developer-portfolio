import React from 'react';
import { FaFacebookSquare , FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import image from '../../../assets/myimage.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-16 mb-16 p-8 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt="Myimage" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='ml-10'>
                    <h1 className="text-5xl font-bold">Hi, I'm Mamun Prodhan</h1>
                    <h2 className='text-3xl font-semibold'>a Full Stack Web Developer</h2>
                    <p className="py-6 text-justify">I am a full stack web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong understanding of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appearing.</p>
                    <button className="btn btn-primary"><a href="https://drive.google.com/file/d/12sl5CZ-FzwTwsE2exIKtvgyKit44zVgX/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a></button>
                    <h3 className='text-2xl mt-4 mb-4 font-bold'>Find Me On</h3>
                    <div className='flex'>
                    <a href="https://www.facebook.com/mamunpr9/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='w-8 h-8 mr-2'/></a>
                    <a href="https://github.com/mamun-prodhan" target="_blank" rel="noopener noreferrer"><FaGithubSquare className='w-8 h-8 mr-2'/></a>
                    <a href="https://www.linkedin.com/in/mamunprodhan/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-8 h-8'/></a>
                </div>
                </div>
            </div>
        </div>


        // <div className="hero  bg-base-200 mt-32 mb-32">
        //     <div className="hero-content text-center">
        //         <div className="max-w-md">
        //             <h1 className="text-5xl font-bold">Mamun Prodhan</h1>
        //             <h2 className='text-2xl font-bold'>Front-End Web Developer</h2>
        //             <p className="py-6">I am a Front End Web Developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong understanding of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appearing.</p>
        //             <FaFacebookSquare></FaFacebookSquare>
        //             <button className="btn btn-primary">Download Resume</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;