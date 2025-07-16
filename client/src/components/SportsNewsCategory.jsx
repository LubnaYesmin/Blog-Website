
/*import React, { useEffect, useState } from 'react';
import './SportsNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function stripHtmlTags(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function SportsNewsCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getSportsPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts?cat=sports");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch sports posts:", err);
      }
    };
    getSportsPosts();
  }, []);

  const getImageUrl = (photo) => {
    if (!photo) return "/default.jpg"; // fallback image
    return photo.startsWith("http") ? photo : `http://localhost:5000/images/${photo}`;
  };

  const truncateText = (html, maxLength = 80) => {
    if (!html) return '';
    const text = stripHtmlTags(html);
    return text.length > maxLength ? text.substring(0, maxLength) + '...more' : text;
  };

  const highlightPost = posts[0];
  const featuredPost = posts[1];
  const miniPosts = posts.slice(2);

  return (
    <>
      <Header />

      <section className="sports-section">
        <h2 className="section-title">Sports News</h2>

        <div className="news-grid">
          {highlightPost && (
            <Link to={`/post/${highlightPost._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="highlight-card">
                <img src={getImageUrl(highlightPost.photo)} alt={highlightPost.title} />
                <div className="card-content">
                  <h3>{highlightPost.title}</h3>
                  <p className="post-user">By {highlightPost.username}</p>
                  <p>{truncateText(highlightPost.desc)}</p>
                </div>
              </div>
            </Link>
          )}

          {featuredPost && (
            <Link to={`/post/${featuredPost._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="featured-card">
                <img src={getImageUrl(featuredPost.photo)} alt={featuredPost.title} />
                <div className="card-content">
                  <h3>{featuredPost.title}</h3>
                  <p className="post-user">By {featuredPost.username}</p>
                  <p>{truncateText(featuredPost.desc)}</p>
                </div>
              </div>
            </Link>
          )}

          <div className="mini-cards">
            {miniPosts.map((post) => (
              <Link to={`/post/${post._id}`} key={post._id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mini-card">
                  <img src={getImageUrl(post.photo)} alt={post.title} />
                  <div className="mini-content">
                    <p className="mini-title">{post.title}</p>
                    <p className="mini-user">Post From: {post.username}</p>
                    <p className="mini-desc">{truncateText(post.desc)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SportsNewsCategory;*/

/*import React, { useEffect, useState } from 'react';
import './SportsNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SportsNewsCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getSportsPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts?cat=sports");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch sports posts:", err);
      }
    };
    getSportsPosts();
  }, []);

  const getImageUrl = (photo) => {
    if (!photo) return "/default.jpg";
    return photo.startsWith("http") ? photo : `http://localhost:5000/images/${photo}`;
  };

  const highlightPost = posts[0];
  const featuredPost = posts[1];
  const miniPosts = posts.slice(2);

  return (
    <>
      <Header />

      <section className="sports-section">
        <h2 className="section-title">Sports News</h2>

        <div className="news-grid">
          {highlightPost && (
            <Link to={`/post/${highlightPost._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="highlight-card">
                <img src={getImageUrl(highlightPost.photo)} alt={highlightPost.title} />
                <div className="card-content">
                  <h3>{highlightPost.title}</h3>
                  <p className="post-user">By {highlightPost.username}</p>
                </div>
              </div>
            </Link>
          )}

          {featuredPost && (
            <Link to={`/post/${featuredPost._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="featured-card">
                <img src={getImageUrl(featuredPost.photo)} alt={featuredPost.title} />
                <div className="card-content">
                  <h3>{featuredPost.title}</h3>
                  <p className="post-user">By {featuredPost.username}</p>
                </div>
              </div>
            </Link>
          )}

          <div className="mini-cards">
            {miniPosts.map((post) => (
              <Link to={`/post/${post._id}`} key={post._id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mini-card">
                  <img src={getImageUrl(post.photo)} alt={post.title} />
                  <div className="mini-content">
                    <p className="mini-title">{post.title}</p>
                    <p className="mini-user">Post From: {post.username}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SportsNewsCategory;*/

import React, { useEffect, useState } from 'react';
import './SportsNewsCategory.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function stripHtmlTags(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function SportsNewsCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchSportsPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts?cat=sports");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch sports posts:", err);
      }
    };
    fetchSportsPosts();
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
      <section className="sports-section">
        <h2 className="sports-title">Sports</h2>
        <div className="sports-grid">
          {posts.map((item) => (
            <Link
              to={`/post/${item._id}`}
              key={item._id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="sports-card">
                <img src={getImageUrl(item.photo)} alt={item.title} />
                <div className="sports-card-content">
                  <h3>{item.title}</h3>
                  <h5><em>Post From: {item.username}</em></h5>
                  <p>{truncateText(item.desc)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SportsNewsCategory;
