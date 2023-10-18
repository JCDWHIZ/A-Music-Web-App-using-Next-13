import React from "react";
import SectionHeader from "../events/SectionHeader";
import PostList from "./PostList";

async function getPosts() {
  const res = await fetch("http://localhost:4000/posts");

  return res.json();
}

async function Blog() {
  const posts = await getPosts();

  console.log(posts);
  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle={"Our Blog"} title={"Latest News"} />
        <PostList posts={posts} />
      </div>
    </section>
  );
}

export default Blog;
