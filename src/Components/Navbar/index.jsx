import { Link, useLocation } from "react-router-dom"
import { HomeIcon, BuildingStorefrontIcon, UsersIcon } from "@heroicons/react/24/outline"
import React from "react"

export default function NavBar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <nav className="bg-slate-800 sm:fixed sm:bottom-0 sm:text-center lg:flex lg:justify-between lg:static w-full p-5">
      <div className="sm:hidden md:hidden lg:block">Logo</div>
      <ul className="inline-flex">
        <li className="p-2">
          <Link to={"/"}>
            <HomeIcon className="size-6 sm:block md:block lg:hidden" />
            <p className="sm:hidden md:hidden lg:block">Home</p>
          </Link>
        </li>
        <li className="p-2 hidden lg:block relative">
          <button className="text-white rounded focus:outline-none"
            onClick={() => setIsOpen(!isOpen)} >
            Locales
          </button>
          {isOpen && (
            <div className="absolute z-10 origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg bg-white">
              <div className="py-1">
                <Link onClick={() => setIsOpen(false)}
                  to={"/serdan"}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Serdan
                </Link>
                <Link onClick={() => setIsOpen(false)}
                  to={"/serdan"}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Jacarangas
                </Link>
              </div>
            </div>
          )}
        </li>
        <li className={location.pathname === '/' ? 'p-2 lg:hidden sm:block md:block' : 'hidden'}>
          <a href="#locales">
            <BuildingStorefrontIcon className="size-6" />
          </a>
        </li>
        <li className="p-2">
          <Link to={"/about"}>
            <UsersIcon className="size-6 hidden sm:block md:block lg:hidden" />
            <p className="sm:hidden md:hidden lg:block">Nosotros</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
