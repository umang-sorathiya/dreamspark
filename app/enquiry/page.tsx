import Navbar from '@/components/Navbar'

export default function Enquiry() {
  return (
    <main>
      <Navbar />

      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Enquiry Form</h1>
        <p className="text-lg text-gray-200">Transform Your Future with Quality Education</p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 shadow">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Fill Your Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <input type="text" placeholder="Father Name *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <input type="tel" placeholder="Mobile No *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            </div>
            <textarea rows={3} placeholder="Full Address *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="City *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <input type="text" placeholder="Pincode *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            </div>
            <textarea rows={3} placeholder="Message" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />

            <div>
              <h3 className="font-bold text-blue-900 mb-3">Select Course Level</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-blue-500">
                  <input type="radio" name="course" />
                  <div>
                    <p className="font-bold text-blue-900 text-sm">Level 1 - Capacity Building</p>
                    <p className="text-green-700 font-bold text-sm">₹1,000</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-blue-500">
                  <input type="radio" name="course" />
                  <div>
                    <p className="font-bold text-blue-900 text-sm">Level 2 - Strength Development</p>
                    <p className="text-green-700 font-bold text-sm">₹25,000</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-blue-500">
                  <input type="radio" name="course" />
                  <div>
                    <p className="font-bold text-blue-900 text-sm">Level 3 - Transformation Course</p>
                    <p className="text-green-700 font-bold text-sm">₹2,40,000</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-blue-500">
                  <input type="radio" name="course" />
                  <div>
                    <p className="font-bold text-blue-900 text-sm">Level 4 - Boot Camp Program</p>
                    <p className="text-green-700 font-bold text-sm">₹5,000</p>
                  </div>
                </label>
              </div>
            </div>

            <button className="w-full bg-yellow-400 text-blue-900 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition">
              Submit Enquiry
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