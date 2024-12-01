import { useCallback, useState } from "react";
import FavButton from "../components/favbutton";
import { useModal } from "../contexts/contactmodalprovider";
import Button from "../components/button";
import ChatIcon from "../svgs/chat-icon";
import CallIcon from "../svgs/call-icon";

type StickyProductDetailsProps = {
    isSticky: boolean;
}

const StickyProductDetails: React.FC<StickyProductDetailsProps> = ({ isSticky }) => {

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
            <div className="tpl-container gap-[16px] flex items-center justify-between">
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
    )

}

export default StickyProductDetails;