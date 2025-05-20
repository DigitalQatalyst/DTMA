import React from "react";
import Image from 'next/image';
import user from "@/assets/img/icon/userAvatar.svg";

interface SearchButtonProps {
    icon?: React.ReactNode;
   //  user: string; //  <-  Consider making this more specific (e.g., string if it's a URL)
}

export default function SearchButton({ icon }: SearchButtonProps) {
    return (
        <div className="tp-search-open-btn" style={{ display: 'flex', alignItems: 'center' }}>
            {icon || (
                <Image
                    src={user}
                    alt="user icon"
                    width={20}
                    height={20}
                    style={{ marginRight: "3px" }}
                />
            )}
            <p style={{ margin: 0, }} >Admin</p>
        </div>
    );
}
