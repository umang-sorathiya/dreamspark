import Navbar from '@/components/Navbar'

export default function Login() {
  return (
    <main>
      <Navbar />

      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Login / Register</h1>
        <p className="text-lg text-blue-100">Welcome back to Dream Spark</p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8 shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Student Login</h2>
          <div className="space-y-4">
            <input type="email" placeholder="Email *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            <input type="password" placeholder="Password *" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-500 transition">
              Login
            </button>
            <p className="text-center text-gray-600 text-sm">Don't have an account? <a href="#" className="text-blue-600 font-bold">Register</a></p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-gray-400 text-sm">Copyright © 2026, DreamSpark All Rights Reserved.</p>
      </footer>
    </main>
  )
}