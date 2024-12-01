'use client';

import { FormEvent, useState } from "react";
import SearchIcon from "../svgs/search-icon";

const SearchBar: React.FC = () => {

    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('searching', event);

        if(false){
            setError('Error message');
        }
    };

    return (
        <div className="w-[50%] relative hidden md:block">
            {error && <p>{error}</p>}
            <form className="w-full" onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="search" 
                    placeholder="I'm looking for..."
                    className="grow border border-[#ACB0B7] rounded-[6px] py-[4px] px-[12px] w-full" 
                />
            </form>
            <SearchIcon className="absolute top-[7px] right-[7px]" width={20} height={20} />
        </div>
    )

}

export default SearchBar;