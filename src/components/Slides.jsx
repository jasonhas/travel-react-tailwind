import { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'

const sliderData = [

        'https://images.pexels.com/photos/5850782/pexels-photo-5850782.jpeg',

        'https://images.pexels.com/photos/9482128/pexels-photo-9482128.jpeg',

        "https://images.pexels.com/photos/9149362/pexels-photo-9149362.jpeg",

        "https://images.pexels.com/photos/6077942/pexels-photo-6077942.jpeg",
  
        "https://images.pexels.com/photos/18706906/pexels-photo-18706906/free-photo-of-sailboat-sailing-on-sea-coast-with-islands.jpeg",
]
const variants = {
    initial: direction => {
        return {
            x: direction > 0 ? 1900 : -1900,
            opacity: 0,
            scale: 0.5,
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: 'ease-in',
        // transition : {
        //     x: { type: 'spring', stiffness: 300, damping: 20 }
        // },
        scale: 1,
    },
    exit: direction => {
        return {
            x: direction > 0 ? -1900 : 1900,
            opacity: 0,
            scale: 0.5,
            transition: 'ease-in',
            // transition : {
            //     x: { type: 'spring', stiffness: 300, damping: 20 }
            // }
        }
    },
}
const Slides = () => {

    const [index,setIndex] = useState(1)
    const [direction, setDirection] = useState(0)

    const nextStep = () =>
    {   
        setDirection(1)
        if (index === sliderData.length -1 ) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }

    const prevStep = () =>
    {
        setDirection(-1)
        if (index === 0) {
            setIndex(sliderData.length -1)
            return
        }
        setIndex(index - 1)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 flex justify-center items-center relative">
                <BsArrowLeftSquareFill className='absolute top-[50%] text-3xl text-white cursor-pointer left-10 hover:text-slate-300' onClick={prevStep}/>
                <BsArrowRightSquareFill className='absolute top-[50%] text-3xl text-white cursor-pointer right-10 hover:text-slate-300' onClick={nextStep}/>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img 
                       variants={variants} 
                       animate="animate" 
                       initial='initial' 
                       exit='exit' 
                       src={sliderData[index]} 
                       custom={direction} 
                       key={sliderData[index]} 
                       alt='slide' 
                       className='slide rounded'/>
                </AnimatePresence>

    </div>
    )
}

export default Slides