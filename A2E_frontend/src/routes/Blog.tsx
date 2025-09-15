import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { Post } from '../types';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // const BASE_URL = 'http://localhost:3000';
    const API_URL = `${import.meta.env.VITE_BASE_URL}/posts`;

    // console.log(import.meta.env.VITE_BASE_URL);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Call your backend API
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error("Failed to fetch posts");

                const data: Post[] = await res.json();
                setPosts(data);
            } catch (err: any) {
                setError(err.message || "Unexpected error");
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
                {/* Genesis-style page header */}
                <section className="bg-gray-100 border-b">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">Blog</h1>
                    </div>
                </section>

                {/* Single-column post list */}
                <section className="py-10">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {loading && (
                            <div className="py-20 text-center text-gray-500">Loading posts…</div>
                        )}
                        {error && (
                            <div className="py-4 text-center text-red-600">{error}</div>
                        )}

                        {!loading && !error && posts.length === 0 && (
                            <div className="py-10 text-center text-gray-600">No posts found</div>
                        )}

                        {!loading && !error && posts.length > 0 && (
                            <div className="space-y-10">
                                {posts.map((post) => (
                                    <article key={post.id} className="border rounded-lg overflow-hidden bg-white">
                                        {post.image && (
                                            <div className="w-full aspect-[16/9] bg-gray-100">
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <h2 className="text-2xl font-semibold text-gray-900">{post.title}</h2>
                                            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
                                            <p className="text-gray-700 mt-4">{post.excerpt}</p>
                                            <div className="mt-6">
                                                <Link to={`/blog/${post.id}`} className="inline-block text-white px-5 py-2 rounded-md" style={{ backgroundColor: '#0a528e' }}>
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
