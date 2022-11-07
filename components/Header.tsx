import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
function Header() {
    const {logout} = useAuth()
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsScrolled(true);
            }
            else{
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll" ,handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
  return (
   <header className={`${isScrolled && 'bg-[#141414]'}`}>
       <div className="flex items-center space-x-2 md:space-x-10">
       <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden md:flex space-x-4">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
       </div>
       <div className='flex items-center space-x-4 text-sm font-light'>
           
           <Link href='https://github.com/chirayu-xx' target='_blank'>
               <p className='hidden lg:inline cursor-pointer'>By Chirayu</p>
           </Link>
         
           {/* <Link href='/account'> */}
           <img onClick={logout}
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
           {/* </Link> */}
       </div>
   </header>
  )
}

export default Header
