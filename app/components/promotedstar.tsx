import StarIcon from "../svgs/star-icon";
const PromotedStar: React.FC = () => {




    return (
        <div 
            className="flex absolute top-[10px] right-[10px] items-center justify-center bg-accent text-black 
            rounded-[40px] p-[4px] group"
        >   
            <p className="text-[12px] overflow-hidden font-bold w-0 text-center group-hover:w-[70px] transition-width duration-500">
                Promoted
            </p>
            <StarIcon fill="currentColor" height="17" width="17" />
        </div>
    )

};

export default PromotedStar;