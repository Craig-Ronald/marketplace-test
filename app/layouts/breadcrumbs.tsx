import ExternalLink from "../svgs/external-link-icon";


const Breadcrumbs: React.FC<{breadcrumbs: string[]}> = ({breadcrumbs}) => {

    function truncateBreadcrumb(breadcrumb: string) {
        return breadcrumb.length > 20 ? breadcrumb.slice(0, 20) + '...' : breadcrumb;
    }

    return (
        <div className="bg-[#EAEFF0] border-t border-[#DDDDDD] w-full px-[16px]">
            <div className="flex tpl-container justify-between items-center overflow-x-scroll">
                <ul className="flex gap-[8px] text-[12px] shrink-0">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <>
                        <li key={index}>
                            <a href={`/${breadcrumb}`}>{truncateBreadcrumb(breadcrumb)}</a>
                        </li>
                        {index < breadcrumbs.length - 1 && <span> / </span>}
                        </>
                    ))}
                </ul>
                <div className="hidden md:flex items-center gap-[4px] group cursor-pointer shrink-0">
                    <p className="text-accent2 group-hover:text-[#000] text-[12px] font-medium">Advertise your business with Caravans For Sale</p>
                    <ExternalLink fill="currentColor" width={16} height={16} className="fill-accent2 group-hover:fill-[#000]" />
                </div>
            </div>
        </div>
    )

}

export default Breadcrumbs;