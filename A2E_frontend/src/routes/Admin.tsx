import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Blog Form Component
const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    categories: "",
    author: "",
    excerpt: "",
    image: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = "http://localhost:3000";
  const API_URL = `${BASE_URL}/post`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          categories: formData.categories.split(",").map((c) => c.trim()),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create post");
      }

      await res.json();
      alert("Blog post created successfully!");
      setFormData({
        title: "",
        date: "",
        categories: "",
        author: "",
        excerpt: "",
        image: "",
        content: "",
      });
    } catch (err: any) {
      setError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="date"
          placeholder="Date (e.g., 10 September 2025)"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="categories"
          placeholder="Categories (comma separated)"
          value={formData.categories}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="excerpt"
          placeholder="Excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full text-white p-3 rounded hover:opacity-90 transition"
          style={{ backgroundColor: '#0a528e' }}
        >
          {loading ? "Creating..." : "Create Blog Post"}
        </button>
      </form>
    </div>
  );
};

// Stories Form Component
const StoriesForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    studentName: "",
    age: "",
    location: "",
    story: "",
    image: "",
    outcome: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with your stories API endpoint
      const res = await fetch("http://localhost:3000/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to create story");
      }

      alert("Success story created successfully!");
      setFormData({
        title: "",
        studentName: "",
        age: "",
        location: "",
        story: "",
        image: "",
        outcome: "",
      });
    } catch (err: any) {
      setError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Success Story</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          name="title"
          placeholder="Story Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="story"
          placeholder="Student's Story"
          value={formData.story}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        />

        <textarea
          name="outcome"
          placeholder="Outcome/Achievement"
          value={formData.outcome}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full text-white p-3 rounded hover:opacity-90 transition"
          style={{ backgroundColor: '#0a528e' }}
        >
          {loading ? "Creating..." : "Create Success Story"}
        </button>
      </form>
    </div>
  );
};

// Programs Form Component
const ProgramsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    targetAudience: "",
    duration: "",
    location: "",
    capacity: "",
    startDate: "",
    endDate: "",
    image: "",
    objectives: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with your programs API endpoint
      const res = await fetch("http://localhost:3000/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to create program");
      }

      alert("Program created successfully!");
      setFormData({
        name: "",
        description: "",
        targetAudience: "",
        duration: "",
        location: "",
        capacity: "",
        startDate: "",
        endDate: "",
        image: "",
        objectives: "",
      });
    } catch (err: any) {
      setError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Program</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Program Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Program Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
        />

        <input
          type="text"
          name="targetAudience"
          placeholder="Target Audience"
          value={formData.targetAudience}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 6 months)"
          value={formData.duration}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="capacity"
          placeholder="Capacity (number of students)"
          value={formData.capacity}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="objectives"
          placeholder="Program Objectives"
          value={formData.objectives}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full text-white p-3 rounded hover:opacity-90 transition"
          style={{ backgroundColor: '#0a528e' }}
        >
          {loading ? "Creating..." : "Create Program"}
        </button>
      </form>
    </div>
  );
};

// Main Admin Dashboard Component
export default function Admin() {
  const [activeSection, setActiveSection] = useState<'dashboard' | 'blog' | 'stories' | 'programs'>('dashboard');

  const dashboardCards = [
    {
      id: 'blog',
      title: 'Blog Posts',
      description: 'Create and manage blog posts',
      icon: '📝',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'stories',
      title: 'Success Stories',
      description: 'Share inspiring student stories',
      icon: '🌟',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'programs',
      title: 'Programs',
      description: 'Manage educational programs',
      icon: '🎓',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'blog':
        return <BlogForm />;
      case 'stories':
        return <StoriesForm />;
      case 'programs':
        return <ProgramsForm />;
      default:
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
              <p className="text-xl text-gray-600">Manage your content and programs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dashboardCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setActiveSection(card.id as any)}
                  className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${card.color} rounded-xl p-8 text-white shadow-lg hover:shadow-xl`}>
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white/90">{card.description}</p>
                    <div className="mt-6 flex items-center text-white/90">
                      <span className="text-sm">Click to manage</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeSection !== 'dashboard' && (
            <div className="mb-8">
              <button
                onClick={() => setActiveSection('dashboard')}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Dashboard
              </button>
            </div>
          )}
          
          {renderContent()}
        </div>
      </div>
      <Footer />
    </>
  );
}
