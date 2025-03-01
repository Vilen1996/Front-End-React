import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Popup from "./components/Popup";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <Navbar />
      <main className="cards-container">
        {filteredPosts.map((post, index) => (
          <PostCard
            key={index}
            post={post}
            onClick={() => setSelectedPost(post)}
          />
        ))}
      </main>

      {selectedPost && (
        <Popup post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </>
  );
}

export default App;
