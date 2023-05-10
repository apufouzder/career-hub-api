import HeroImg from '../../assets/hero-img.png'

const HeroSection = () => {
    return (
        <div className='bg-blue-50 pt-10'>
            <div className="container px-3 mx-auto md:grid grid-cols-2 justify-center items-center gap-9 ">
                <div className="hero-content">
                    <h1 className="text-6xl font-bold leading-tight">One Step <br /> Closer To Your <br /> <span className='text-indigo-500'>Dream Job</span></h1>
                    <p className="my-4 text-lg">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button href="#" className="inline-block  px-4 py-2 text-center text-white bg-indigo-500 rounded-md shadow hover:bg-gray-800">Get Started</button>
                </div>
                <div className="hero=img">
                    <img className='w-full' src={HeroImg} alt="Hero img" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;