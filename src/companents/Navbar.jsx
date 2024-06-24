import React, {useState} from 'react'

export default function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false)

const toggleMenu = ()=>{
  setIsMenuOpen(!isMenuOpen) // !fasle = true
}

console.log(isMenuOpen)



  return (
   <nav className='bg-blue-500 p-4'>
    <div className='flex items-center justify-between'>
    <div className='text-white text-2xl font-bold'>REACT AND TAILWIND</div>

    <div className='md:hidden'>
      <button className='text-white' onClick={toggleMenu}>
        <svg
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        stroke-width='2'
        viewBox='0 0 24 24'
        className='w-6 h-6'
        
        >
          <path d='M4 6h16M4 12h16M4 18h16'></path>

        </svg>
      </button>
    </div>




      <ul className='hidden md:flex space-x-4'>
        <li><a href='#' className='text-white'>Home</a></li>
        <li><a href='#' className='text-white'>About</a></li>
        <li><a href='#' className='text-white'>Services</a></li>
        <li><a href='#' className='text-white'>Contact</a></li>
      
      </ul>    
    </div>
    {/* mobile version  */}
    {isMenuOpen ? (
      <ul className='flex-col md:hidden '>
      <li className='py-2'><a href='#' className='text-white text-2xl'>Home</a></li>
      <li className='py-2'><a href='#' className='text-white text-2xl'>About</a></li>
      <li className='py-2'><a href='#' className='text-white text-2xl'>Services</a></li>
      <li className='py-2'><a href='#' className='text-white text-2xl'>Contact</a></li>
        </ul>    
    ) : null}



   </nav>
  )
}
