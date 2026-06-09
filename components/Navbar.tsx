'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div style={{backgroundColor: '#e8f4f8'}} className="text-gray-700 text-xs px-6 py-2 flex justify-between items-center">
        <span>⏰ Open hours: 8:30 AM - 8:30 PM</span>
        <span>📞 Call us: +91 07884068840</span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{color: '#0d6efd'}}>🎓 Dream Spark</h1>
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" style={{color: '#0d6efd'}}>☰</button>
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center">
            <li><Link href="/" className="hover:text-blue-600 font-semibold">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 font-semibold">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-600 font-semibold">Services</Link></li>
            <li><Link href="/courses" className="hover:text-blue-600 font-semibold">Our Courses</Link></li>
            <li><Link href="/gallery" className="hover:text-blue-600 font-semibold">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 font-semibold">Contact</Link></li>
            <li>
              <Link href="/enquiry" className="text-white px-4 py-2 rounded font-bold" style={{backgroundColor: '#0d6efd'}}>
                Enquiry
              </Link>
            </li>
            <li>
              <Link href="/login" className="border-2 text-blue-600 px-4 py-2 rounded font-bold hover:bg-blue-50" style={{borderColor: '#0d6efd'}}>
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
        {open && (
          <ul className="md:hidden flex flex-col gap-3 mt-3 text-sm text-gray-700 px-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/courses">Our Courses</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/enquiry">Enquiry</Link></li>
          </ul>
        )}
      </nav>
    </>
  )
}