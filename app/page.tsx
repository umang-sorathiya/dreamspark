import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Banner */}
      <section style={{backgroundColor: '#0d6efd'}} className="text-white py-20 px-6 text-center">
        <p className="text-lg mb-2 text-blue-100">We are educating and empowering India's youth to excel globally.</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          India's best School of Education <br/>for quality education.
        </h1>
        <p className="text-xl text-yellow-300 mb-8 font-semibold">"We transform youth into human resource globally"</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/about" className="bg-white font-bold px-8 py-3 rounded-lg hover:bg-gray-100" style={{color: '#0d6efd'}}>About Us</a>
          <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white" style={{}}>Contact Us</a>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "1000+", label: "Daily Live Classes" },
            { num: "1000+", label: "Test & Sample Papers" },
            { num: "400+", label: "Teachers" },
            { num: "10+", label: "Offline Centers" },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold" style={{color: '#0d6efd'}}>{s.num}</h2>
              <p className="text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">India's best School of Education for quality education.</h2>
            <p className="font-semibold mb-4" style={{color: '#0d6efd'}}>"We transform youth into human resource globally"</p>
            <p className="text-gray-600 mb-4">Dream Spark Coaching Institute is at the forefront of transforming education in Chhattisgarh. We offer inclusive courses available in online, offline, and residential formats.</p>
            <p className="text-gray-600 mb-6">We provide live offline coaching services, recorded lectures, and study materials. Conducting regular assessments to monitor the progress of students.</p>
            <div className="flex gap-4">
              <a href="/about" className="text-white px-6 py-2 rounded-lg" style={{backgroundColor: '#0d6efd'}}>About Us</a>
              <a href="/contact" className="border-2 px-6 py-2 rounded-lg" style={{borderColor: '#0d6efd', color: '#0d6efd'}}>Contact Us</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="https://www.dreamspark.co.in/images/cour.png" alt="Courses" className="w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Explore Our Courses</h2>
          <p className="text-center text-gray-600 mb-10">From IIT/JEE, NEET to UPSC — we have it all!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Capacity Building", level: "Level 1", price: "₹1,000" },
              { name: "Strength Development", level: "Level 2", price: "₹25,000" },
              { name: "Transformation Course", level: "Level 3", price: "₹2,40,000" },
              { name: "Boot Camp Program", level: "Level 4", price: "₹5,000" },
            ].map((course, i) => (
              <div key={i} className="border-2 rounded-xl p-6 text-center shadow hover:shadow-lg transition bg-white" style={{borderColor: '#0d6efd22'}}>
                <p className="text-sm font-semibold mb-1" style={{color: '#0d6efd'}}>{course.level}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{course.name}</h3>
                <p className="text-2xl font-bold mb-4" style={{color: '#0d6efd'}}>{course.price}</p>
                <a href="/enquiry" className="text-white px-4 py-2 rounded-lg text-sm" style={{backgroundColor: '#0d6efd'}}>Enquire Now</a>
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
              { num: "1", title: "Unique Syllabus", text: "Distinctive syllabus with residential courses emphasizing nutritional value, discipline, and human values." },
              { num: "2", title: "Holistic Development", text: "Mental health and emotional well-being through mandatory classes and memory development." },
              { num: "3", title: "Progressive Learning", text: "Level system (Level-1 to Level-4) for gradual and thorough mastery of concepts." },
              { num: "4", title: "Innovative Pedagogy", text: "Incorporating pedagogy and science of learning with child and human psychology." },
              { num: "5", title: "4D Development", text: "Yoga and meditation for 4D physical, mental, emotional and spiritual development." },
              { num: "6", title: "Continuous Assessment", text: "Routine tests and assessments to track student progress and offer feedback." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border rounded-xl hover:bg-blue-50" style={{borderColor: '#0d6efd22'}}>
                <div className="text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0" style={{backgroundColor: '#0d6efd'}}>{item.num}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-white" style={{backgroundColor: '#0d6efd'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Trust Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Shikha Verma", text: "The coaching institute combines rigorous training with innovative teaching methods, offering a supportive environment." },
              { name: "Saurabh Sharma", text: "The structured curriculum and dedicated mentors significantly boost student performance and confidence." },
              { name: "Nehal Sinha", text: "Exceptional instructors and a tailored curriculum. Students receive comprehensive support and practical resources." },
            ].map((t, i) => (
              <div key={i} className="rounded-xl p-6" style={{backgroundColor: '#1a7aff'}}>
                <p className="text-blue-100 mb-4 italic">"{t.text}"</p>
                <p className="font-bold text-yellow-300">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3" style={{color: '#0d6efd'}}>🎓 Dream Spark</h3>
            <p className="text-gray-400 text-sm">"We transform youth into human resource globally"</p>
            <p className="text-gray-400 text-sm mt-3">📞 +91 07884068840</p>
            <p className="text-gray-400 text-sm">✉️ infodreamspark02@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{color: '#0d6efd'}}>Quick Links</h4>
            {["Home","About","Services","Courses","Contact","Enquiry"].map((l, i) => (
              <a key={i} href={`/${l.toLowerCase()}`} className="block text-gray-400 hover:text-white text-sm mb-1">{l}</a>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{color: '#0d6efd'}}>Our Courses</h4>
            {["Capacity Building","Strength Development","Transformation Course","Boot Camp Program"].map((c, i) => (
              <p key={i} className="text-gray-400 text-sm mb-1">{c}</p>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{color: '#0d6efd'}}>Office Address</h4>
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