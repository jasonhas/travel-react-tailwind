import Aruba from '../assets/aruba-beach.jpg'
import DR from '../assets/dominican-republic-beach.jpg'
import Maldives from '../assets/maldives-airplane-islands.jpg'
import Nassau from '../assets/nassau-hotel-view.jpg'
import SantaM from '../assets/santa-martin-coves.jpg'
import Turks from '../assets/turks-and-caicos.jpg'

import SelectsCard from './SelectsCard'

const Selects = () => {

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <SelectsCard bg={Maldives} text={'Maldives'}/>
        <SelectsCard bg={Aruba} text={'Aruba'}/>
        <SelectsCard bg={DR} text={'Dominican Republic'}/>
        <SelectsCard bg={Nassau} text={'Nassau'}/>
        <SelectsCard bg={SantaM} text={'St. Martin'}/>
        <SelectsCard bg={Turks} text={'Turks & Caicos'}/>
        </div>
    )
}

export default Selects