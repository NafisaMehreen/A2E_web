export type Post = {
    id: string;
    title: string;
    date: string;
    categories: string[];
    author?: string;
    excerpt: string;
    image?: string;
    content?: string;
};
   
const mockDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const seedPosts: Post[] = [
    {
        id: '1',
        title: 'New scholarship program launches, supporting 200+ students nationwide',
        date: '15 December 2024',
        categories: ['education', 'press release'],
        author: 'A2E Team',
        excerpt: 'A new nationwide scholarship initiative will support 200+ students with tuition, mentorship and resources to thrive.',
        image: '/ht1.jpg',
        content: `We are launching a nationwide scholarship program to support more than 200 students across Bangladesh.

This initiative provides tuition assistance, mentorship, learning materials, and community support to ensure students not only enroll but also complete their education. The program prioritizes learners from underserved communities and focuses on long-term outcomes such as graduation rates and career readiness.

Key components:
- Tuition support tailored to family needs
- One-to-one mentorship and peer circles
- Access to digital learning resources
- Periodic skills workshops and counseling

How it works:
Applications are evaluated based on need, potential, and community recommendations. Selected scholars will be matched with mentors and receive support throughout the academic year. We will publish periodic updates and impact stories as the program scales.

If you’d like to nominate a student or partner with us, please reach out via our contact page.`,
    },
    {
        id: '2',
        title: "From village school to university: How scholarships changed Maria's life",
        date: '12 December 2024',
        categories: ['education', 'success story'],
        author: 'A2E Team',
        excerpt: 'Maria shares her journey from a rural classroom to university, made possible through sustained scholarship support.',
        image: '/ht2.jpg',
    },
    {
        id: '3',
        title: 'Breaking barriers: Female students leading change through education scholarships',
        date: '10 December 2024',
        categories: ['feature', 'equality'],
        author: 'A2E Team',
        excerpt: 'How scholarship opportunities are empowering young women to lead change in their communities.',
        image: '/ht3.jpg',
    },
    {
        id: '4',
        title: 'Battling the climate and global edible oil crises with sunflowers',
        date: 'May 24, 2025',
        categories: ['climate', 'crisis', "Editor's Picks"],
        author: 'Kazuki Kunimoto',
        excerpt: 'Bangladeshi farmers explore sunflower cultivation to reduce import dependence and adapt to climate impacts.',
        image: '/lots2.jpg',
    },
];

const STORAGE_KEY = 'a2e_posts';

const readStoredPosts = (): Post[] => {
    try {
        const raw = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed as Post[];
    } catch {
        return [];
    }
};

const writeStoredPosts = (posts: Post[]): void => {
    try {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
        }
    } catch {
        // no-op
    }
};

export const blogApi = {
    async listPosts(): Promise<{ posts: Post[] }> {
        await mockDelay(150);
        const stored = readStoredPosts();
        const merged = [...stored, ...seedPosts];
        return { posts: merged };
    },
    async getPost(id: string): Promise<{ post: Post } | { error: string }> {
        await mockDelay(120);
        const all = [...readStoredPosts(), ...seedPosts];
        const post = all.find(p => p.id === id);
        if (!post) return { error: 'Not found' };
        return { post };
    },
    async createPost(post: Post): Promise<{ ok: true }> {
        await mockDelay(100);
        const existing = readStoredPosts();
        writeStoredPosts([post, ...existing]);
        return { ok: true };
    }
};

