import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Seed posts from Home highlights (temporary)
const seedPosts = [
  {
    id: '1',
    title: "New scholarship program launches, supporting 200+ students nationwide",
    date: '15 December 2024',
    categories: ['education', 'press release'],
    author: 'A2E Team',
    excerpt: 'A new nationwide scholarship initiative will support 200+ students with tuition, mentorship and resources to thrive.',
    image: '/ht1.jpg',
  },
  {
    id: '2',
    title: "From village school to university: How scholarships changed Maria\'s life",
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

app.get('/api/posts', (req, res) => {
  res.json({ posts: seedPosts });
});

app.get('/api/posts/:id', (req, res) => {
  const post = seedPosts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json({ post });
});

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});


