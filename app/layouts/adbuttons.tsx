import { useCallback, useState } from "react";
import DownloadIcon from "../svgs/download-icon";
import FavOff from "../svgs/fav-off"
import ReportIcon from "../svgs/report-icon";
import FavOn from "../svgs/fav-on";
import Button from "../components/button";
import FavButton from "../components/favbutton";

const AdButtons: React.FC = () => {

    const [isFav, setIsFav] = useState(false);

    const handleFavClick = () => {
        setIsFav(!isFav);
    }

    const onInsureClick = useCallback(() => {
        console.log("Insure your caravan");
    }, []);


    return (
        <div className="flex items-center gap-[12px]">
            <Button 
                text="Insure your caravan" 
                background="transparent" 
                onClick={onInsureClick} 
                className="border border-[#000] font-bold hover:bg-[#000] hover:text-white transition-colors duration-300 hidden lg:block"
                
            />
            <FavButton circularOutline={true} isFav={isFav} toggleFav={handleFavClick} />
            <div 
                className="border border-[#000] rounded-[50%] flex items-center justify-center gap-[8px] h-[40px] w-[40px] cursor-pointer
                hover:text-primary hover:border-primary
                transition-colors duration-300"
            >
                <DownloadIcon fill="currentColor" height="24" width="24" />
            </div>
            <div 
                className="border border-[#000] rounded-[50%] flex items-center justify-center gap-[8px] h-[40px] w-[40px] cursor-pointer
                hover:text-primary hover:border-primary
                transition-colors duration-300"
            >
                <ReportIcon fill="currentColor" height="24" width="24" />
            </div>
        </div>
    )

}

export default AdButtons;