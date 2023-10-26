import { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { motion, AnimatePresence} from 'framer-motion'

const SECTIONS = [
    {
        title: 'Policies, Payments & Cancellations',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate odio porro laborum officia qui aliquid perferendis sed! Quam atque, magni laudantium maxime facere blanditiis. Unde at perspiciatis quam quae.'
    },
    {
        title: 'Complimentary Concierge Service',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate odio porro laborum officia qui aliquid perferendis sed! Quam atque, magni laudantium maxime facere blanditiis. Unde at perspiciatis quam quae.'
    },
    {
        title: 'FAQs',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate odio porro laborum officia qui aliquid perferendis sed! Quam atque, magni laudantium maxime facere blanditiis. Unde at perspiciatis quam quae.'
    },
    {
        title: 'COVID-19 Information',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate odio porro laborum officia qui aliquid perferendis sed! Quam atque, magni laudantium maxime facere blanditiis. Unde at perspiciatis quam quae.'
    },
    {
        title: 'Special Events',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Necessitatibus </strong>voluptate odio porro laborum officia qui aliquid perferendis sed! Quam atque, magni laudantium maxime facere blanditiis. Unde at perspiciatis quam quae.<or><li>one</li><li>two</li></or>'
    }
]
const Service = () => {
    const [isOpen, setIsOpen] = useState(null)

    // const handleIsOpen = (i) => {
    //     if (isOpen === i) {
    //         return setIsOpen(null)
    //     }

    // }

    return (
        <div className='w-full h-screen'>
            <img src="https://images.pexels.com/photos/2598683/pexels-photo-2598683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full h-[50%] object-cover"/>
        
            <div className='absolute top-0 w-full h-[50%] flex flex-col justify-center text-center text-white p-4'>
                <h1>Customer Service</h1>
            </div>

                <div className='mx-auto h-full'>
                    <div className='accordion'>
                    {SECTIONS.map((section, index) =>{
                        return (
                            <div key={index} className='p-6'>
                                <div className='flex items-center justify-start cursor-pointer' onClick={() => setIsOpen (isOpen === index ? null : index)}>
                                <span>{isOpen === index ? <AiOutlineCloseCircle size={20}/> : <BsPlusCircle size={20}/>}</span>
                                    <h2 className='ml-4 font-semibold text-2xl'>{section.title}</h2>
                                </div>
                                <AnimatePresence>
                                    {isOpen === index &&  (
                                        <motion.div
                                          initial={{opacity: 0,
                                        height: 0}}
                                        animate={{opacity: 1,
                                        height: "auto"}}
                                        exit={{opacity: 0,
                                        height: 0}}
                                        className='mt-2 '
                                        >
                                            <p dangerouslySetInnerHTML={{ __html: `${section.answer}` }} className='ml-10'></p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                    </div>

                </div>
        </div>
    )
}

export default Service