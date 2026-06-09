import Navbar from '@/components/Navbar'

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-200">We are here to help you. Reach out to us anytime!</p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Get In Touch</h2>
            {[
              { icon: "📍", title: "Office Address", text: "G-2 Nehru Nagar (East), Street-7A, Distt. Durg (C.G.) - 490020" },
              { icon: "📞", title: "Phone", text: "+91 07884068840" },
              { icon: "✉️", title: "Email", text: "infodreamspark02@gmail.com" },
              { icon: "🕐", title: "Open Hours", text: "8:30 AM - 8:30 PM" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 mb-6">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-blue-900">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 mt-4">
              {[
                { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61573593586109" },
                { name: "Instagram", url: "https://www.instagram.com/dream.spark_official" },
                { name: "YouTube", url: "https://youtube.com/@dreamsparkyoutube-p6l" },
                { name: "WhatsApp", url: "https://api.whatsapp.com/send?phone=918962973502" },
              ].map((s, i) => (
                <a key={i} href={s.url} target="_blank" className="bg-blue-900 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send a Message</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Your Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <input type="tel" placeholder="Your Mobile Number" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <textarea rows={4} placeholder="Your Message" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </div>

        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-gray-400 text-sm">Copyright © 2026, DreamSpark All Rights Reserved.</p>
      </footer>
    </main>
  )
}