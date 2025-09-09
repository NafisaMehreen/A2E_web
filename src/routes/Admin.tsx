import { useState, type FormEvent } from 'react';

const Admin = () => {
    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<string>(() => new Date().toISOString().slice(0, 10));
    const [categories, setCategories] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [excerpt, setExcerpt] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [status, setStatus] = useState<{ type: 'success' | 'error' | '';
        message: string }>({ type: '', message: '' });

    const resetForm = () => {
        setTitle('');
        setDate(new Date().toISOString().slice(0, 10));
        setCategories('');
        setAuthor('');
        setExcerpt('');
        setImage('');
        setContent('');
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ type: '', message: '' });

        if (!title.trim() || !excerpt.trim()) {
            setStatus({ type: 'error', message: 'Title and excerpt are required.' });
            return;
        }

        const newPost = {
            id: `${Date.now()}`,
            title: title.trim(),
            date: new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
            categories: categories
                .split(',')
                .map((c) => c.trim())
                .filter(Boolean),
            author: author.trim() || undefined,
            excerpt: excerpt.trim(),
            image: image.trim() || undefined,
            content: content.trim() || undefined,
        };

        try {
            const key = 'a2e_posts';
            const existingRaw = localStorage.getItem(key);
            const existing = existingRaw ? JSON.parse(existingRaw) : [];
            const next = [newPost, ...existing];
            localStorage.setItem(key, JSON.stringify(next));
            setStatus({ type: 'success', message: 'Post saved. It will appear in the blog list.' });
            resetForm();
        } catch {
            setStatus({ type: 'error', message: 'Failed to save post. Please try again.' });
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin: Create Blog Post</h1>
            {status.message && (
                <div className={`mb-4 p-3 rounded ${status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border-green-200 border'}`}>
                    {status.message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Post title"
                        required
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Author name"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Categories (comma separated)</label>
                    <input
                        type="text"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. education, press release"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt *</label>
                    <textarea
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Short summary of the post"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="/path-or-full-url.jpg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 h-40 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Full post content (optional)"
                    />
                </div>
                <div className="pt-2">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Publish Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Admin;


