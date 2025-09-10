import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stories = [
  {
    id: 'binta',
    name: 'Binta',
    tagline: 'She struggled to feed her family. Now she owns a farm.',
    image: '/ht1.jpg'
  },
  {
    id: 'haseena',
    name: 'Haseena',
    tagline: 'She convinced her father to cancel the marriage.',
    image: '/ht2.jpg'
  },
  {
    id: 'khushi',
    name: 'Khushi',
    tagline: 'From factory work to dreaming of becoming a doctor.',
    image: '/ht3.jpg'
  },
  {
    id: 'neneh',
    name: 'Neneh',
    tagline: "Left the mines, back in school with support.",
    image: '/students.jpg'
  },
  {
    id: 'tabu',
    name: 'Tabu Njie',
    tagline: 'We marched so women can own the land they work.',
    image: '/lots.jpg'
  },
  {
    id: 'hok',
    name: 'Hok & Sienglee',
    tagline: 'From drought to community leadership.',
    image: '/lots2.jpg'
  }
];

export default function Success() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Page header */}
      <section className="bg-gray-100 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Success Stories</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Together, we stand by their side — fighting for their rights and changing lives.
          </p>
        </div>
      </section>

      {/* Stories grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <article key={story.id} className="border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full aspect-[4/3] bg-gray-100">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900">{story.name}</h3>
                  <p className="mt-2 text-gray-600">{story.tagline}</p>
                  <div className="mt-6">
                    <a href="#" className="inline-block text-white px-5 py-2 rounded-md" style={{ backgroundColor: '#0a528e' }}>
                      Read my story
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

