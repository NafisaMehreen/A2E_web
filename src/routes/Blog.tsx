import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogApi, type Post } from '../model/Blog';

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await blogApi.listPosts();
                setPosts(data.posts);
            } catch (err: any) {
                setError(err.message || 'Unexpected error');
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <>
            <Navbar />
            <main className="bg-white">
                {/* Hero / Header like BRAC blog */}
                <section className="bg-gray-50 border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">The Good Feed</h1>
                                <p className="mt-3 text-gray-600 max-w-2xl">Stories, insights and updates from our work in education and beyond.</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {['climate','crisis','education','equality','financial inclusion','health','skills'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-white border rounded-full text-sm text-gray-700">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Latest section grid */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {loading && (
                            <div className="py-20 text-center text-gray-500">Loading posts…</div>
                        )}
                        {error && (
                            <div className="py-4 text-center text-red-600">{error}</div>
                        )}

                        {!loading && !error && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <article key={post.id} className="group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-gray-100">
                                            {post.image ? (
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex gap-2 flex-wrap">
                                                {post.categories.map((c) => (
                                                    <span key={c} className="text-xs px-2 py-1 bg-pink-50 text-pink-700 rounded-full border border-pink-200">{c}</span>
                                                ))}
                                            </div>
                                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{post.title}</h2>
                                            <p className="text-gray-500 text-sm">{post.date}{post.author ? ` • ${post.author}` : ''}</p>
                                            <p className="text-gray-700">{post.excerpt}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Most read / editor's picks style footer section placeholder */}
                <section className="py-12 bg-gray-50 border-t">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Editor&apos;s picks</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {posts.slice(0,3).map((p) => (
                                <div key={p.id} className="p-4 bg-white rounded-xl border">
                                    <h4 className="font-semibold text-gray-900">{p.title}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{p.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Blog;
