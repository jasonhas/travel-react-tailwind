import {RiCustomerServiceFill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {

    return (
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2>LUXURY VACATIONS FOR TWO PEOPLE</h2>
                    <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni repudiandae illum totam ex, consectetur itaque reiciendis, nulla fuga obcaecati consequuntur ullam hic nesciunt commodi dolore incidunt natus dolor ducimus reprehenderit.</p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'><button><RiCustomerServiceFill size={50}/></button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>All incluse company for 20 years in a row.</p>
                    </div>                    
                    </div>


                    <div className='flex flex-col lg:flex-row items-center text-center'><button><MdOutlineTravelExplore size={50}/></button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>All incluse company for 20 years in a row.</p>
                    </div>
                    </div>
                </div>
                
            </div>
            <div>
                <div className='border text-center'>
                    <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                    <p className='py-4'>LIMITED AVAILABILITY</p>
                    <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destinations</label>
                        <select className='border rounded-md p-2'>
                            <option>Barbados</option>
                            <option>Saint Lucia</option>
                            <option value="">Maldives</option>
                            <option value="">Turks & Caicos</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label>Check-In</label>
                        <input type="date" className='border rounded-md p-2'/>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label>Check-Out</label>
                        <input type="date" className='border rounded-md p-2'/>
                    </div>
                    <button className='w-full my-4'>Rates & Availability</button>
                </form>
            </div>
        </div>
    )
}

export default Search