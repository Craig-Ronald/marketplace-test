import FavOff from "../svgs/fav-off";
import FavOn from "../svgs/fav-on";

type FavButtonProps = {
    circularOutline: boolean;
    isFav: boolean;
    toggleFav: () => void;
}

const FavButton: React.FC<FavButtonProps> = ({ circularOutline, isFav, toggleFav }) => {

    const baseClass = circularOutline ? 
        "border border-[#000] rounded-[50%] flex items-center justify-center gap-[8px] h-[40px] w-[40px] cursor-pointer transition-colors duration-300 shrink-0"
    : "flex items-center justify-center gap-[8px] h-[40px] w-[40px] cursor-pointer transition-colors duration-300 shrink-0";

    const favClass = isFav ? "text-accent2 border-accent2 hover:text-secondary-hover hover:border-secondary-hover" : "hover:text-accent2 hover:border-accent2";

    return (
        <div 
            className={`${baseClass} ${favClass}`}
            onClick={toggleFav}
        >
            {isFav ?   
                <FavOn fill="currentColor" height="24" width="24" /> : 
                <FavOff fill="currentColor" height="24" width="24" />
            }
        </div>
    )

}

export default FavButton;