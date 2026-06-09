import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <main>
      <Navbar />

      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Dream Spark</h1>
        <p className="text-lg max-w-3xl mx-auto text-orange-100">
          India's best coaching institute transforming youth into global human resources.
        </p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-blue-600 font-semibold mb-4">"We transform youth into human resource globally"</p>
            <p className="text-gray-600 mb-4">Dream Spark Coaching Institute is at the forefront of transforming education in Chhattisgarh. We offer inclusive courses available in online, offline, and residential formats.</p>
            <p className="text-gray-600 mb-4">Our institute was born out of a deep understanding of the obstacles that hold back student success — low participation in competitive exams, poor quality education, and lack of emotional support.</p>
            <p className="text-gray-600">We provide live offline coaching, recorded lectures, study materials, and regular assessments to monitor student progress.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎯", title: "Our Mission", text: "Empower students to succeed in competitive exams" },
              { icon: "👁️", title: "Our Vision", text: "Transform youth into global human resources" },
              { icon: "💡", title: "Innovation", text: "Innovative educational model addressing real challenges" },
              { icon: "🤝", title: "Support", text: "Mental, emotional and academic support for every student" },
            ].map((item, i) => (
              <div key={i} className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-blue-600 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Are We Unique?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: "🥗", title: "Nutrition", text: "Fostering healthy habits and balanced diets to fuel learning." },
              { icon: "🧠", title: "Mental Health", text: "Dedicated programs for emotional and psychological well-being." },
              { icon: "👶", title: "Child Psychology", text: "Tailored approach to match children's developmental stages." },
              { icon: "🧬", title: "Human Psychology", text: "Understanding human behaviour for effective teaching." },
              { icon: "📚", title: "Pedagogy", text: "Innovative techniques catering to diverse learning styles." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition border border-orange-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-gray-400 text-sm">Copyright © 2026, DreamSpark All Rights Reserved.</p>
      </footer>
    </main>
  )
}