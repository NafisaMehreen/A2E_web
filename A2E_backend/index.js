
const express = require("express");
const cors = require("cors"); // import cors
const app = express();
const PORT = 3000;

// enable cors for all requests
app.use(cors());

app.use(express.json());

// Data (your seedPosts)
const seedPosts = [
  {
    id: "1",
    title:
      "New scholarship program launches, supporting 200+ students nationwide",
    date: "15 December 2024",
    categories: ["education", "press release"],
    author: "A2E Team",
    excerpt:
      "A new nationwide scholarship initiative will support 200+ students with tuition, mentorship and resources to thrive.",
    image: "/ht1.jpg",
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
    id: "2",
    title:
      "From village school to university: How scholarships changed Maria's life",
    date: "12 December 2024",
    categories: ["education", "success story"],
    author: "A2E Team",
    excerpt:
      "Maria shares her journey from a rural classroom to university, made possible through sustained scholarship support.",
    image: "/ht2.jpg",
  },
  {
    id: "3",
    title:
      "Breaking barriers: Female students leading change through education scholarships",
    date: "10 December 2024",
    categories: ["feature", "equality"],
    author: "A2E Team",
    excerpt:
      "How scholarship opportunities are empowering young women to lead change in their communities.",
    image: "/ht3.jpg",
  },
  {
    id: "4",
    title: "Battling the climate and global edible oil crises with sunflowers",
    date: "May 24, 2025",
    categories: ["climate", "crisis", "Editor's Picks"],
    author: "Kazuki Kunimoto",
    excerpt:
      "Bangladeshi farmers explore sunflower cultivation to reduce import dependence and adapt to climate impacts.",
    image: "/lots2.jpg",
  },
];

// Routes

// GET all posts
app.get("/posts", (req, res) => {
  res.json(seedPosts);
});

// GET a single post by ID
app.get("/post/:id", (req, res) => {
  const { id } = req.params;
  const post = seedPosts.find((p) => p.id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.post("/post", (req, res) => {
    console.log(req.body);
    const { title, date, categories, author, excerpt, image, content } = req.body;
  
    if (!title || !date || !categories || !excerpt) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    // Generate a new ID (simple example)
    const newPost = {
      id: (seedPosts.length + 1).toString(),
      title,
      date,
      categories,
      author,
      excerpt,
      image,
      content,
    };
  
    seedPosts.push(newPost);
  
    res.status(201).json({ message: "Post created successfully", post: newPost });
  });
  
// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
