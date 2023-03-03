import React from "react";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";
import { useRouter } from "next/router";
function Blog() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/api/${id}`,
    fetcher
  );

  if (error) return <div>falhou ao carregar</div>;
  if (isLoading) return <div>carregando...</div>;

  return (
    <>
      <div className="article_wrapper">
        <div className="article_container">
          <div className="article_content">
            <div className="social_wrapper">
              <div className="social_container"></div>
            </div>
            <div className="article_info_container">
              <div className="author_info_container">
                <div className="image">
                  {!data?.image ? <div>user</div> : data?.image}
                </div>

                <div className="author_box">
                  <div className="author">{data?.author}</div>

                  <div className="read_time">9 min read</div>
                </div>
              </div>

              <div className="data">
                {/* <img src={clock} alt="clock"/>{" "} */}
                {data?.createdAt?.substring(0, 10)}
              </div>
            </div>
            <div className="title_article">{data?.title}</div>
            <ReactMarkdown>{data?.text}</ReactMarkdown>
            {/* <div className="article_text">{data?.text} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
