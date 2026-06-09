import Navbar from '@/components/Navbar'

export default function Services() {
  return (
    <main>
      <Navbar />

      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-orange-100 max-w-3xl mx-auto">
          Comprehensive educational services designed for holistic student development.
        </p>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🎯", title: "Live Offline Coaching", text: "Expert teachers providing quality coaching in our offline centers across Chhattisgarh." },
            { icon: "🎥", title: "Recorded Lectures", text: "Access recorded lectures anytime, anywhere for flexible learning at your own pace." },
            { icon: "📝", title: "Test Series", text: "1000+ tests and sample papers to evaluate and improve student performance regularly." },
            { icon: "📚", title: "Study Materials", text: "Soft and hard copies of comprehensive study materials for all competitive exams." },
            { icon: "🧠", title: "Mental Health Support", text: "Dedicated programs for emotional and psychological well-being of every student." },
            { icon: "🎓", title: "Career Counseling", text: "Expert career guidance to help students choose the right path for their future." },
            { icon: "🏠", title: "Residential Program", text: "Fully residential courses with nutrition, discipline, and human values training." },
            { icon: "🧘", title: "Yoga & Meditation", text: "4D development through yoga and meditation for physical, mental and spiritual growth." },
            { icon: "🏆", title: "Motivational Sessions", text: "Regular motivational speeches to inspire students to reach their full potential." },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition border border-orange-100">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h2>
        <p className="text-orange-100 mb-6">Join thousands of students who have already changed their lives with Dream Spark.</p>
        <a href="/enquiry" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100">
          Enquire Now
        </a>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-gray-400 text-sm">Copyright © 2026, DreamSpark All Rights Reserved.</p>
      </footer>
    </main>
  )
}