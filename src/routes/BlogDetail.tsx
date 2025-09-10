import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogApi, type Post } from '../model/Blog';

const BlogDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const BASE_URL = 'http://localhost:3000';
    const API_URL = `${BASE_URL}/post`;

    
    useEffect(() => {
        const fetchPost = async () => {
          try {
            // Call backend API for a single post
            const res = await fetch(`${API_URL}/${id}`);
            if (!res.ok) {
              throw new Error("Post not found");
            }
    
            const data: Post = await res.json();
            setPost(data);
          } catch (err: any) {
            setError(err.message || "Unexpected error");
          } finally {
            setLoading(false);
          }
        };
    
        if (id) fetchPost();
      }, [id]);

    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="bg-gray-100 border-b">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Blog</h1>
                    </div>
                </section>

                <section className="py-10">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {loading && <div className="py-20 text-center text-gray-500">Loading…</div>}
                        {error && <div className="py-4 text-center text-red-600">{error}</div>}
                        {!loading && !error && post && (
                            <article className="bg-white">
                                {post.image && (
                                    <div className="w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <h2 className="text-3xl font-semibold text-gray-900 mt-6">{post.title}</h2>
                                <p className="text-gray-500 text-sm mt-2">{post.date}{post.author ? ` • ${post.author}` : ''}</p>
                                <div className="prose max-w-none text-gray-800 mt-6 whitespace-pre-line">
                                    {post.content || post.excerpt}
                                </div>
                                <div className="mt-8">
                                    <Link to="/blog" className="inline-block text-white px-5 py-2 rounded-md" style={{ backgroundColor: '#0a528e' }}>
                                        Back to Blog
                                    </Link>
                                </div>
                            </article>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default BlogDetail;


