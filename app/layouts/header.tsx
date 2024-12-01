import SearchBar from '../components/searchbar';
import Navbar from './navbar';
import Link from 'next/link';
import Logo from '../svgs/logo';
import Button from '../components/button';
import PAAIcon from '../svgs/paa-icon';


const Header: React.FC = () => {

    return (
        <>
        <div id="header-container" className="tpl-container flex justify-between items-center gap-[12px]">
            <Link href="/"><Logo width={116} height={32} /></Link>
            <SearchBar />
            <Button 
                text="Sell my caravan" 
                className='text-white' 
                background="secondary" 
                icon={<PAAIcon fill="white" width={24} height={24} />}
                iconPosition='right'
                onClick={() => console.log("Sell my caravan")}
            />
            {/* <button>
                Sell my caravan
            </button> */}
        </div>
        <Navbar />
        </>
    )

}

export default Header;