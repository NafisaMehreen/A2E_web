import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Story = {
  id: string;
  title: string;
  studentName: string;
  age?: number;
  location?: string;
  story: string;
  image?: string;
  outcome: string;
};

export default function Success() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const BASE_URL = "http://localhost:3000";
  const API_URL = `${import.meta.env.VITE_BASE_URL}/stories`;

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch stories");

        const data: Story[] = await res.json();
        setStories(data);
      } catch (err: any) {
        setError(err.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

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
          {loading && <p className="text-center text-gray-500 py-10">Loading stories…</p>}
          {error && <p className="text-center text-red-600 py-10">{error}</p>}
          {!loading && !error && stories.length === 0 && (
            <p className="text-center text-gray-600 py-10">No stories found</p>
          )}

          {!loading && !error && stories.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <article
                  key={story.id}
                  className="border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-full aspect-[4/3] bg-gray-100">
                    {story.image && (
                      <img src={story.image} alt={story.studentName} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900">{story.studentName}</h3>
                    <p className="mt-2 text-gray-600">{story.story}</p>
                    <div className="mt-6">
                      <Link
                        to={`/story/${story.id}`}
                        className="inline-block text-white px-5 py-2 rounded-md"
                        style={{ backgroundColor: '#0a528e' }}
                      >
                        Read my story
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
