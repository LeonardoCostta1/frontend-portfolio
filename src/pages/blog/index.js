"use client"
import Link from "next/link";
import React from "react";
import useSWR from 'swr'
function Blog() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('http://localhost:4000/api/', fetcher)

  if (error) return <div>falhou ao carregar</div>
  if (isLoading) return <div>carregando...</div>
  return (
    <div className="blog_wrapper">
      <div className="blog_container">
        <div className="blog_headline">Leonardo Costa</div>
        {data?.docs.length === 0 ? (
          <h1>empty</h1>
        ) : (
          data?.docs?.map((article, index) => {
            return (
              <Link href={`/blog/${article._id}`}>
                <div key={index} className="articles_container">
                  <div className="description_container">
                    <div className="title">{article.title}</div>

                    <div className="resume">
                      {article.text.substring(0, 300)}
                    </div>

                    <div className="info_article_bottom">
                      <div className="date_of_creation">
                        <i className="fa-regular fa-clock"></i>{" "}
                        {article?.createdAt?.substring(0, 10)} · 4 min read
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Blog;
