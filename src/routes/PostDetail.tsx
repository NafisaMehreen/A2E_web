import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogApi, type Post } from '../model/Blog';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            try {
                if (!id) return;
                const res = await blogApi.getPost(id);
                if ('error' in res) setError(res.error);
                else setPost(res.post);
            } catch (err: any) {
                setError(err.message || 'Unexpected error');
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [id]);

    return (
        <>
            <Navbar />
            <main className="bg-white">
                <section className="bg-gray-50 border-b">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Link to="/blog" className="text-blue-600 hover:text-blue-700">← Back to Blog</Link>
                        {loading && (
                            <div className="py-10 text-gray-500">Loading…</div>
                        )}
                        {error && (
                            <div className="py-10 text-red-600">{error}</div>
                        )}
                        {!loading && !error && post && (
                            <div className="py-4">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{post.title}</h1>
                                <p className="text-gray-500 mt-2">{post.date}{post.author ? ` • ${post.author}` : ''}</p>
                            </div>
                        )}
                    </div>
                </section>
                {!loading && !error && post && (
                    <section className="py-10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            {post.image && (
                                <img src={post.image} alt={post.title} className="w-full rounded-xl mb-6" />
                            )}
                            {post.categories && post.categories.length > 0 && (
                                <div className="flex gap-2 flex-wrap mb-4">
                                    {post.categories.map((c) => (
                                        <span key={c} className="text-xs px-2 py-1 bg-pink-50 text-pink-700 rounded-full border border-pink-200">{c}</span>
                                    ))}
                                </div>
                            )}
                            <p className="text-lg text-gray-800 whitespace-pre-line">{post.content || post.excerpt}</p>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
};

export default PostDetail;


