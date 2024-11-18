import Conversations from './Conversations'

import SearchInput from './SearchInput'
import logo from '/3.png'

const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 py-4 flex flex-col '>
            <div className="flex items-center  justify-center mb-4 px-3">
                <img src={logo} alt="logo" className=" w-64  h-32" />

            </div>
            <SearchInput />
            <div className="devider px-3"></div>
            <Conversations />
            

        </div>
    )
}

export default Sidebar