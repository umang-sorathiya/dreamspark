import Navbar from '@/components/Navbar'

export default function Courses() {
  const courses = [
    {
      level: "Level 1",
      name: "Capacity Building",
      price: "₹1,000",
      color: "border-green-400 bg-green-50",
      badge: "bg-green-400",
      features: ["Basic Competitive Exam Prep", "Online & Offline Classes", "Study Materials", "Weekly Tests"],
    },
    {
      level: "Level 2",
      name: "Strength Development",
      price: "₹25,000",
      color: "border-blue-400 bg-blue-50",
      badge: "bg-blue-400",
      features: ["Advanced Exam Preparation", "Live Classes + Recorded", "Test Series", "Career Counseling"],
    },
    {
      level: "Level 3",
      name: "Transformation Course",
      price: "₹2,40,000",
      color: "border-purple-400 bg-purple-50",
      badge: "bg-purple-400",
      features: ["Residential Program", "Nutrition & Mental Health", "Personality Development", "360° Development"],
    },
    {
      level: "Level 4",
      name: "Boot Camp Program",
      price: "₹5,000",
      color: "border-orange-400 bg-orange-50",
      badge: "bg-orange-400",
      features: ["Intensive Training", "Mock Tests & Analysis", "Expert Mentorship", "Exam Strategy"],
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-200">
          From IIT/JEE, NEET, SSC to UPSC — structured programs for every student.
        </p>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, i) => (
            <div key={i} className={`border-2 rounded-2xl overflow-hidden shadow hover:shadow-xl transition ${course.color}`}>
              <div className={`${course.badge} text-white text-center py-2 text-sm font-bold`}>
                {course.level}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{course.name}</h3>
                <p className="text-3xl font-bold text-green-700 mb-4">{course.price}</p>
                <ul className="text-left text-gray-600 text-sm mb-6 space-y-2">
                  {course.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="/enquiry" className="block bg-blue-900 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-gray-400 text-sm">Copyright © 2026, DreamSpark All Rights Reserved.</p>
      </footer>
    </main>
  )
}