import {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const sliderData = [
    {
        url:'https://images.pexels.com/photos/5850782/pexels-photo-5850782.jpeg'
    },
    {
        url:'https://images.pexels.com/photos/9482128/pexels-photo-9482128.jpeg'
    },
    {url:"https://images.pexels.com/photos/9149362/pexels-photo-9149362.jpeg"},
    {
        url:"https://images.pexels.com/photos/6077942/pexels-photo-6077942.jpeg"
    },
    {
        url:"https://images.pexels.com/photos/18706906/pexels-photo-18706906/free-photo-of-sailboat-sailing-on-sea-coast-with-islands.jpeg"
    }
]
const Carousel = () => {
    const [slide,setSlide] = useState(0)
    const length = sliderData.length
    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length -1 : slide - 1)
    }

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
            <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-10'/>
            <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-10'/>
            {sliderData.map((item, index) => (
                <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                    {index === slide && (<img className='w-full rounded-md object-cover' src={item.url} alt='/' />)}
                </div>
            ))}
        </div>
    )
}

export default Carousel