import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                <section className="bg-gray-50 border-b">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Blog</h1>
                    </div>
                </section>

                <section className="py-10">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {loading && (
                            <div className="py-20 text-center text-gray-500">Loading posts…</div>
                        )}
                        {error && (
                            <div className="py-4 text-center text-red-600">{error}</div>
                        )}

                        {!loading && !error && posts.length === 0 && (
                            <div className="text-center text-gray-500">No posts found</div>
                        )}

                        {!loading && !error && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <article key={post.id} className="bg-white border rounded-2xl overflow-hidden flex flex-col">
                                        <div className="relative aspect-[4/3] bg-gray-100">
                                            {post.image ? (
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                                            )}
                                        </div>
                                        <div className="p-5 flex flex-col gap-2 flex-1">
                                            <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                                            <p className="text-gray-500 text-sm">{post.date}{post.author ? ` • ${post.author}` : ''}</p>
                                            <p className="text-gray-700">{post.excerpt}</p>
                                            <div className="mt-auto pt-3">
                                                <Link
                                                    to={`/blog/${post.id}`}
                                                    className="inline-block text-blue-600 hover:text-blue-700 font-medium"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Blog;
