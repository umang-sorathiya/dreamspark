import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We Transform Youth Into <span className="text-yellow-400">Global Human Resources</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          India's best coaching institute for IIT/JEE, NEET, UPSC, SSC and Government exams. Online, Offline & Residential courses available.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/courses" className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300">Explore Courses</a>
          <a href="/enquiry" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900">Enquiry Now</a>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow-400 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "1000+", label: "Daily Live Classes" },
            { num: "1000+", label: "Test & Sample Papers" },
            { num: "400+", label: "Teachers" },
            { num: "10+", label: "Offline Centers" },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold text-blue-900">{s.num}</h2>
              <p className="text-blue-800">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Explore Our Courses</h2>
          <p className="text-center text-gray-600 mb-10">From IIT/JEE, NEET to UPSC — we have it all!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Capacity Building", level: "Level 1", price: "₹1,000", color: "bg-green-100 border-green-400" },
              { name: "Strength Development", level: "Level 2", price: "₹25,000", color: "bg-blue-100 border-blue-400" },
              { name: "Transformation Course", level: "Level 3", price: "₹2,40,000", color: "bg-purple-100 border-purple-400" },
              { name: "Boot Camp Program", level: "Level 4", price: "₹5,000", color: "bg-orange-100 border-orange-400" },
            ].map((course, i) => (
              <div key={i} className={`border-2 rounded-xl p-6 ${course.color} text-center shadow hover:shadow-lg transition`}>
                <p className="text-sm font-semibold text-gray-500 mb-1">{course.level}</p>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{course.name}</h3>
                <p className="text-2xl font-bold text-green-700 mb-4">{course.price}</p>
                <a href="/enquiry" className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Enquire Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Trust Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Shikha Verma", text: "The coaching institute combines rigorous training with innovative teaching methods, offering a supportive environment." },
              { name: "Saurabh Sharma", text: "The structured curriculum and dedicated mentors significantly boost student performance and confidence." },
              { name: "Nehal Sinha", text: "Exceptional instructors and a tailored curriculum define this institute. Students receive comprehensive support." },
            ].map((t, i) => (
              <div key={i} className="bg-blue-800 rounded-xl p-6 border border-blue-600">
                <p className="text-gray-200 mb-4 italic">"{t.text}"</p>
                <p className="font-bold text-yellow-400">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">🎓 Dream Spark</h3>
            <p className="text-gray-400 text-sm">We transform youth into human resource globally.</p>
            <p className="text-gray-400 text-sm mt-3">📞 +91 07884068840</p>
            <p className="text-gray-400 text-sm">✉️ infodreamspark02@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-yellow-400">Quick Links</h4>
            {["Home","About","Services","Courses","Contact","Enquiry"].map((l, i) => (
              <a key={i} href={`/${l.toLowerCase()}`} className="block text-gray-400 hover:text-white text-sm mb-1">{l}</a>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-3 text-yellow-400">Our Courses</h4>
            {["Capacity Building","Strength Development","Transformation Course","Boot Camp Program"].map((c, i) => (
              <p key={i} className="text-gray-400 text-sm mb-1">{c}</p>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-3 text-yellow-400">Office Address</h4>
            <p className="text-gray-400 text-sm">G-2 Nehru Nagar (East), Street-7A</p>
            <p className="text-gray-400 text-sm">Distt. Durg (C.G.) - 490020</p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61573593586109" className="text-gray-400 hover:text-white">FB</a>
              <a href="https://www.instagram.com/dream.spark_official" className="text-gray-400 hover:text-white">IG</a>
              <a href="https://youtube.com/@dreamsparkyoutube-p6l" className="text-gray-400 hover:text-white">YT</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-6">
          Copyright © 2026, DreamSpark All Rights Reserved.
        </div>
      </footer>

    </main>
  )
}