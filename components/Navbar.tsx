'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-blue-900 text-white w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🎓 Dream Spark</h1>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">☰</button>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link href="/services" className="hover:text-yellow-300">Services</Link></li>
          <li><Link href="/courses" className="hover:text-yellow-300">Courses</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
          <li><Link href="/enquiry" className="bg-yellow-400 text-blue-900 px-4 py-1 rounded font-bold hover:bg-yellow-300">Enquiry</Link></li>
        </ul>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col gap-3 mt-3 text-sm px-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/enquiry">Enquiry</Link></li>
        </ul>
      )}
    </nav>
  )
}