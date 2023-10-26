import Resort from '../assets/resort-arial.jpg'
import Surf from '../assets/surf-lessons.jpg'
import Kayak from '../assets/drone-beach-kayak.jpg'
import Coconut from '../assets/coconut-drink-beach.jpg'
import Palms from '../assets/beach-palms.jpg'

const Destinations = () => {

    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
            <h1>All-Inclusive Resorts</h1>
            <p className='py-4'>On the Caribbean's Best Beaches</p>
            <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
                <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={Resort} alt=""/>
                <img className="w-full h-full object-cover" src={Kayak} alt=""/>
                <img className="w-full h-full object-cover" src={Palms} alt=""/>
                <img className="w-full h-full object-cover" src={Coconut} alt=""/>
                <img className="w-full h-full object-cover" src={Surf} alt=""/>
            </div>
        </div>
    )
}

export default Destinations