'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'

const slides = [
  {
    image: "https://www.dreamspark.co.in/images/banner/Untitled design (4).jpg",
    title: "We Transform Youth Into Global Human Resources",
    subtitle: "India's best coaching institute for IIT/JEE, NEET, UPSC, SSC and Government exams.",
  },
  {
    image: "https://www.dreamspark.co.in/images/creating-coaching-culture.jpeg",
    title: "Quality Education for a Better Future",
    subtitle: "Online, Offline & Residential courses available across India.",
  },
  {
    image: "https://www.dreamspark.co.in/images/hero.jpg",
    title: "Empowering India's Youth to Excel Globally",
    subtitle: "Comprehensive programs for holistic development and academic excellence.",
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Carousel */}
      <section className="relative h-[500px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">{slide.subtitle}</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <a href="/courses" className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700">Explore Courses</a>
                  <a href="/enquiry" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100">Enquiry Now</a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 text-blue-600 w-10 h-10 rounded-full font-bold text-xl hover:bg-opacity-100">‹</button>
        <button onClick={() => setCurrent((current + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 text-blue-600 w-10 h-10 rounded-full font-bold text-xl hover:bg-opacity-100">›</button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-white bg-opacity-50'}`} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: "1000+", label: "Daily Live Classes" },
            { num: "1000+", label: "Test & Sample Papers" },
            { num: "400+", label: "Teachers" },
            { num: "10+", label: "Offline Centers" },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold">{s.num}</h2>
              <p className="text-blue-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">India's best School of Education for quality education.</h2>
            <p className="font-semibold mb-4 text-blue-600">"We transform youth into human resource globally"</p>
            <p className="text-gray-600 mb-4">Dream Spark Coaching Institute is at the forefront of transforming education in Chhattisgarh. We offer inclusive courses available in online, offline, and residential formats.</p>
            <p className="text-gray-600 mb-6">We provide live offline coaching services, recorded lectures, and study materials. Conducting regular assessments to monitor the progress of students.</p>
            <div className="flex gap-4">
              <a href="/about" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">About Us</a>
              <a href="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">Contact Us</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="https://www.dreamspark.co.in/images/cour.png" alt="Courses" className="w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Explore Our Courses</h2>
          <p className="text-center text-gray-500 mb-10">From IIT/JEE, NEET to UPSC — we have it all!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Capacity Building", level: "Level 1", price: "₹1,000" },
              { name: "Strength Development", level: "Level 2", price: "₹25,000" },
              { name: "Transformation Course", level: "Level 3", price: "₹2,40,000" },
              { name: "Boot Camp Program", level: "Level 4", price: "₹5,000" },
            ].map((course, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition bg-white">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{course.level}</span>
                <h3 className="text-lg font-bold text-gray-800 my-3">{course.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{course.price}</p>
                <a href="/enquiry" className="block bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">Enquire Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why is Dream Spark the Right Choice?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "1", title: "Unique Syllabus", text: "Residential courses emphasizing nutritional value, discipline, and human values." },
              { num: "2", title: "Holistic Development", text: "Mental health and emotional well-being through mandatory classes." },
              { num: "3", title: "Progressive Learning", text: "Level system (Level-1 to Level-4) for gradual mastery of concepts." },
              { num: "4", title: "Innovative Pedagogy", text: "Science of learning with child and human psychology." },
              { num: "5", title: "4D Development", text: "Yoga and meditation for physical, mental, emotional and spiritual development." },
              { num: "6", title: "Continuous Assessment", text: "Routine tests and assessments to track student progress." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:bg-blue-50 transition">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Trust Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Shikha Verma", text: "The coaching institute combines rigorous training with innovative teaching methods, offering a supportive environment." },
              { name: "Saurabh Sharma", text: "The structured curriculum and dedicated mentors significantly boost student performance and confidence." },
              { name: "Nehal Sinha", text: "Exceptional instructors and a tailored curriculum. Students receive comprehensive support and practical resources." },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow border border-gray-100">
                <p className="text-gray-600 mb-4 italic">"{t.text}"</p>
                <p className="font-bold text-blue-600">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-3">🎓 Dream Spark</h3>
            <p className="text-gray-400 text-sm">"We transform youth into human resource globally"</p>
            <p className="text-gray-400 text-sm mt-3">📞 +91 07884068840</p>
            <p className="text-gray-400 text-sm">✉️ infodreamspark02@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-blue-400">Quick Links</h4>
            {["Home","About","Services","Courses","Contact","Enquiry"].map((l, i) => (
              <a key={i} href={`/${l.toLowerCase()}`} className="block text-gray-400 hover:text-white text-sm mb-1">{l}</a>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-3 text-blue-400">Our Courses</h4>
            {["Capacity Building","Strength Development","Transformation Course","Boot Camp Program"].map((c, i) => (
              <p key={i} className="text-gray-400 text-sm mb-1">{c}</p>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-3 text-blue-400">Office Address</h4>
            <p className="text-gray-400 text-sm">G-2 Nehru Nagar (East), Street-7A</p>
            <p className="text-gray-400 text-sm">Distt. Durg (C.G.) - 490020</p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61573593586109" className="text-gray-400 hover:text-white">FB</a>
              <a href="https://www.instagram.com/dream.spark_official" className="text-gray-400 hover:text-white">IG</a>
              <a href="https://youtube.com/@dreamsparkyoutube-p6l" className="text-gray-400 hover:text-white">YT</a>
              <a href="https://api.whatsapp.com/send?phone=918962973502" className="text-gray-400 hover:text-white">WA</a>
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