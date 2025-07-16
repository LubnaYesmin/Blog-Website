import React, { useEffect, useState } from 'react';
import './BusinessNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function stripHtmlTags(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function BusinessNewsCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBusinessPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts?cat=business");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch business posts:", err);
      }
    };
    fetchBusinessPosts();
  }, []);

  const getImageUrl = (photo) => {
    if (!photo) return "/default.jpg";
    return photo.startsWith("http") ? photo : `http://localhost:5000/images/${photo}`;
  };

  const truncateText = (html, maxLength = 80) => {
    if (!html) return '';
    const text = stripHtmlTags(html);
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };

  return (
    <>
      <Header />
      <section className="business-section">
        <h2 className="business-title">Business</h2>
        <div className="business-grid">
          {posts.map((post) => (
            <Link to={`/post/${post._id}`} key={post._id} className="business-card">
              <img src={getImageUrl(post.photo)} alt={post.title} />
              <div className="business-card-content">
                <h3>{post.title}</h3>
                <p><em>Post From: {post.username}</em></p>
                <p>{truncateText(post.desc)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BusinessNewsCategory;