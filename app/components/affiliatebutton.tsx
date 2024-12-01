import Image from "next/image";

type AffiliateButtonProps = {
    image: string;
    alt: string;
    text: string;
}

const AffiliateButton: React.FC<AffiliateButtonProps> = ({ image, alt, text }) => {

    return (
        <div className="flex flex-col justify-around items-center p-[12px] border border-[#CBD5D9] rounded-[8px] h-[150px] w-full md:w-[50%] cursor-pointer">
            <Image src={image} alt={alt} width={100} height={100} />
            <p className="text-center text-accent-dark text-[14px]">{text}</p>
        </div>
    )

}

export default AffiliateButton;