type ButtonProps = {
    text: string;
    type?: "button" | "submit" | "reset";
    background?: "primary" | "secondary" | "transparent";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
};

const Button: React.FC<ButtonProps> = ({ 
    text, 
    type = "button",
    background = "primary", 
    onClick = () => {}, 
    className = '', 
    disabled = false, 
    icon, 
    iconPosition 
}) => {
    let baseClass = "button flex justify-center items-center gap-[8px] rounded-[6px] leading-[18px] py-[11px] px-[20px] font-bold ";

    switch(background) {
        case "primary":
            baseClass += "bg-primary hover:bg-primary-hover transition-colors duration-300";
            break;
        case "secondary":
            baseClass += "bg-secondary hover:bg-secondary-hover transition-colors duration-300";
            break;
        case "transparent":
            baseClass += "bg-transparent";
            break;
    }

    return (
        <button 
            type={type}
            className={`${baseClass} ${className}`}
            onClick={onClick} 
            disabled={disabled} 
        >
            {icon && iconPosition === "left" && icon}
            {text}
            {icon && iconPosition === "right" && icon}
        </button>
    );

};

export default Button;