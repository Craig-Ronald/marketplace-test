
'use client'
import { useCallback } from "react";
import Button from "../components/button";
import ChatIcon from "../svgs/chat-icon";
import CallIcon from "../svgs/call-icon";
import { useModal } from "../contexts/contactmodalprovider";



const ProfileCard: React.FC = () => {

    const { open } = useModal();

    const onCall = useCallback(() => {
        console.log("Calling");
    }, []);

    const onMessage = useCallback(() => {
        console.log("Messaging");
    }, []);

    const onReserve = useCallback(() => {
        console.log("Reserving");
    }, []);

    return (
        <div id="profile-card" className="flex flex-col gap-[12px] shadow-card p-[16px] w-full rounded-[8px] lg:min-w-[350px]">
            <div className="flex items-center">
                <div className="w-[89px] h-[67px] bg-[#000] rounded-[4px]"></div>
                <div className="ml-[16px]">
                    <h3 className="font-bold text-[16px]">Sussex Caravan Centre East</h3>
                    <p className="text-[12px]">Profile page</p>
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="flex items-center gap-[12px]">
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
                <Button 
                    background="transparent"
                    className="w-full mt-[16px] border border-[#000]"
                    text="Reserve now" 
                    onClick={onReserve} 
                />
            </div>
        </div>
    );

}

export default ProfileCard;

