'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Enquiry() {
  const [form, setForm] = useState({
    full_name: '', father_name: '', email: '', mobile: '',
    address: '', city: '', pincode: '', message: '', course: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    const { error } = await supabase.from('enquiries').insert([form])
    setLoading(false)
    if (error) {
      alert('Error! Please try again.')
    } else {
      setSuccess(true)
      setForm({ full_name: '', father_name: '', email: '', mobile: '', address: '', city: '', pincode: '', message: '', course: '' })
    }
  }

  return (
    <main>
      <Navbar />

      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Enquiry Form</h1>
        <p className="text-lg text-blue-100">Transform Your Future with Quality Education</p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fill Your Details</h2>

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
              ✅ Enquiry submitted successfully! We will contact you soon.
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="full_name" value={form.full_name} onChange={handleChange} type="text" placeholder="Full Name *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <input name="father_name" value={form.father_name} onChange={handleChange} type="text" placeholder="Father Name *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <input name="mobile" value={form.mobile} onChange={handleChange} type="tel" placeholder="Mobile No (WhatsApp) *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            </div>
            <textarea name="address" value={form.address} onChange={handleChange} rows={3} placeholder="Full Address *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="city" value={form.city} onChange={handleChange} type="text" placeholder="City *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <input name="pincode" value={form.pincode} onChange={handleChange} type="text" placeholder="Pincode *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Message" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />

            <div>
              <h3 className="font-bold text-gray-800 mb-3">Select Course Level</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { value: "Level 1 - Capacity Building", price: "₹1,000" },
                  { value: "Level 2 - Strength Development", price: "₹25,000" },
                  { value: "Level 3 - Transformation Course", price: "₹2,40,000" },
                  { value: "Level 4 - Boot Camp Program", price: "₹5,000" },
                ].map((c, i) => (
                  <label key={i} className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition ${form.course === c.value ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'}`}>
                    <input type="radio" name="course" value={c.value} checked={form.course === c.value} onChange={handleChange} className="accent-blue-600" />
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{c.value}</p>
                      <p className="text-blue-600 font-bold text-sm">{c.price}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button onClick={handleSubmit} disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition disabled:opacity-50">
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-gray-400 text-sm">Copyright © 2026, DreamSpark All Rights Reserved.</p>
      </footer>
    </main>
  )
}