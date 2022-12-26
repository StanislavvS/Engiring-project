import Image from "next/image";
import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/outline";
function Header() {
  return (
    <div>
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <StarIcon className="h-7 w-7" />
      </div>

      <div className="">
        <HomeIcon className="h-60000 w-6" />
        <p>Strona główna</p>
      </div>
    </div>
  );
}

export default Header;
