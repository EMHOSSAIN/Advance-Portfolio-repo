import './about.css'
import "../Home/Home.css"
import SkillsBanner from './SkillsBanner/SkillsBanner';
import ProgressBar from '../ProgressBar/ProgressBar';


const About = () => {
   
    return (
        <div>
            <section className='w-8/12 m-auto mt-10 pb-10'>
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />

                <h2 className='text-center text-5xl text-white'>About my</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>

                    <div>
                        <div class="">
                            <img className='w-64 h-72 rounded-md mt-4 lg:ml-10 bg-center' src="emon.png" alt='' />
                        </div>
                    </div>


                    <div className='pr-9' >
                        <h4 className='text-2xl text-white'>Information About me</h4>
                        <p className='mt-4 text-justify text-white'>
                            This is Emam Hossain.
                            I'm Graduating in BBA(Final year)
                            .As well as general Study i have focused in programming Language JavaScript
                            because it was my dream to be a programmer. That’s why
                            i have been learning JavaScript programming language for 1 year.
                            At the present I thing I have enough knowledge for working as a Front End Developer.
                        </p>
                        <button
                            className='bg-gray-300 px-10 py-2 rounded-xl mt-2 text-black '
                            type="submit"
                            onClick={() => window.open("https://drive.google.com/file/d/1puIBaZUWBgTGH88JzLqUHGWkEjsx3PxI/view?usp=share_link")}
                        >
                            Download CV
                        </button>
                    </div>
                   
                </div>

                <SkillsBanner />
                <div className='mt-5'>
                    <h4 className='text-white text-center mt-5 text-2xl' >My Skills</h4>
                    <hr className='w-5/12 m-auto'></hr>
                </div>
                {/* <!-- progress bar----------- --> */}

                <ProgressBar />

                {/* <!-- progress bar----------- --> */}
                <div >
                    <h4 className='text-white text-center mt-5 text-2xl' >My Timeline</h4>
                    <hr className='w-5/12 m-auto'></hr>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8'>
                    <div className='shadow-xl py-10'>

                        <h1 className='text-white text-xl font-bold'>Front-end development</h1>
                        <p className='text-white '>It takes approximately six months to learn  front <br/> end web development under perfect conditions.</p>
                    </div>

                    <div className='shadow-xl py-10'>

                        <h1 className='text-white text-xl font-bold'>Project collaboration</h1>
                        <p className='text-white'>I have worked with two teams on a project.There I work with several kinds  of people with several kinds of technology.This is my best experience working this as a front-end developer.

                        </p>
                    </div>
                    <div></div>
                </div>

            </section>
        </div>
    );
};

export default About;