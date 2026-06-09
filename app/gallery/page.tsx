import Navbar from '@/components/Navbar'

export default function Gallery() {
  return (
    <main>
      <Navbar />

      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
        <p className="text-lg text-orange-100">Moments from Dream Spark Institute</p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "https://www.dreamspark.co.in/images/cour.png",
            "https://www.dreamspark.co.in/images/creating-coaching-culture.jpeg",
            "https://www.dreamspark.co.in/images/hero.jpg",
            "https://www.dreamspark.co.in/images/food.jpg",
            "https://www.dreamspark.co.in/images/download.jpg",
            "https://www.dreamspark.co.in/images/images.jpg",
          ].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={img} alt={`Gallery ${i+1}`} className="w-full h-60 object-cover" />
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p className="text-gray-400 text-sm">Copyright © 2026, DreamSpark All Rights Reserved.</p>
      </footer>
    </main>
  )
}