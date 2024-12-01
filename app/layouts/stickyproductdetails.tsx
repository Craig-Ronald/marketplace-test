import { useCallback, useState } from "react";
import FavButton from "../components/favbutton";
import { useModal } from "../contexts/contactmodalprovider";
import Button from "../components/button";
import ChatIcon from "../svgs/chat-icon";
import CallIcon from "../svgs/call-icon";
import Image from "next/image";

type StickyProductDetailsProps = {
    title?: string,
    price?: string,
    thumbnail?: string,
    isSticky: boolean;
}

const StickyProductDetails: React.FC<StickyProductDetailsProps> = ({ title, price, thumbnail, isSticky }) => {

    const [isFav, setIsFav] = useState(false);
    const { open } = useModal();

    const toggleFav = useCallback(() => {
        setIsFav(!isFav);
    },[isFav]);

    const onCall = useCallback(() => {
        console.log("Calling");
    }, []);

    const baseClass = "bg-white shadow-card";
    const stickyClass = isSticky ? "fixed bottom-0 left-0 right-0 z-50" : "";

    return (
        <div 
            id="sticky-product-details" 
            className={`${baseClass} ${stickyClass}`}
        >
            <div className="tpl-container gap-[16px] flex items-center justify-between md:gap-[120px]">
                <div className="hidden md:flex items-center gap-[16px]">
                    <div className="border border-gray-200 rounded-md w-[48px] h-[48px] overflow-hidden shrink-0">
                        {thumbnail && <Image className="object-cover" src={thumbnail} alt="Product thumbnail" width={48} height={48} />}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[16px]">{price}</p>
                        <p className="text-[18px] font-bold">{title}</p>
                    </div>
                </div>
                <div className="flex grow justify-between items-center gap-[16px]">
                <FavButton circularOutline={true} isFav={isFav} toggleFav={toggleFav} />
                <Button 
                    background="primary" 
                    className="w-full" 
                    icon={<ChatIcon fill="black" width="24" height="24"/>} 
                    iconPosition="left"
                    text="Message" 
                    onClick={open} 
                />
                <Button 
                    background="primary" 
                    className="w-full" 
                    icon={<CallIcon fill="black" width="24" height="24"/>}
                    iconPosition="left"
                    text="Call" 
                    onClick={onCall} 
                />
                </div>
            </div>
        </div>
    )

}

export default StickyProductDetails;