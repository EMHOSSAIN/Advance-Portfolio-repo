import React from 'react';
import '../SkillsBanner/Banner.css'

const SkillsBanner = () => {
    return (
        <div className='mt-10 rounded-md'>
             <h1 className='text-center text-white text-2xl'>Technology what I know</h1>
             <hr className='w-5/12 m-auto'></hr>
        <section className='slider-img '>
        <div className='slider mt-8'>
           <span className='slider1' > <img className='' src="html.png" alt='' /> </span>
           <span className='slider2'> <img src="css.jpg" alt='' /> </span>
           <span className='slider3' > <img src="js.png" alt='' /> </span>
           <span className='slider4'> <img src="react.png" alt='' /> </span>
           <span className='slider5'> <img src="redux.jpg" alt='' /> </span>
           <span className='slider6'> <img src="nextjs.jpg" alt='' /> </span>
           <span className='slider7'> <img src="ts.png" alt='' /> </span>
           <span className='slider7'> <img src="node and express.jpg" alt='' /> </span>
           <span className='slider7'> <img src="mysqi.jpg" alt='' /> </span>
           <span className='slider7'> <img src="mongodb.jpg" alt='' /> </span>
       </div>
      </section>
     </div>
    );
};

export default SkillsBanner;