import Image from "next/image";
import FavOff from "../svgs/fav-off";
import PromotedStar from "./promotedstar";
import FavButton from "./favbutton";
import { useCallback, useState } from "react";

type SimilarAdProps = {
    name: string;
    price: string;
    location: string;
    image: string;
    isPromoted?: boolean;
}

const SimilarAd: React.FC<SimilarAdProps> = ({name, price, location, image, isPromoted = false}) => {

    const [isFavourited, setIsFavourited] = useState(false);

    const toggleFav = useCallback(() => {
        setIsFavourited(!isFavourited);
    }, [isFavourited]);

    const baseClass = "flex flex-col relative border-[2px] w-full shrink-0 md:w-[32%] rounded-[8px] overflow-hidden min-h-[267px] group"
    const hoverClass = "hover:shadow-card transition-shadow duration-300";
    const promotedClass = isPromoted ? "border-accent" : "";

    return (
        <div className={`${baseClass} ${hoverClass} ${promotedClass}`}>
            {isPromoted && <PromotedStar />}
            <Image className="w-auto" src={image} alt={name} width={222} height={137} />
            <div className="p-[8px] flex flex-col gap-[10px] justify-between grow">
                <div className="flex flex-col gap-[8px]">
                    <h4 className="text-[14px] font-bold">{name}</h4>
                    <p className="text-[12px] bg-[#e3e3e3] px-[6px] h-[18px] max-w-max">{location}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-[18px] font-bold">{price}</p>
                    <FavButton circularOutline={false} isFav={isFavourited} toggleFav={toggleFav} />
                </div>
            </div>
        </div>
    )

}

export default SimilarAd;