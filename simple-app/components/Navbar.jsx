import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-500 text-white px-4 py-3">
    <Link className="text-xl font-bold" href={"/"}>
      Gtcoding
    </Link>
    <Link className="hover:underline" href={"/todos"}>
      Todo page
    </Link>
  </nav>
  
  )
}

export default Navbar