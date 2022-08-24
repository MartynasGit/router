import React, { useState, useEffect } from "react";

function BlogPosts() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);


  const deletePost = (id) => {
    fetch(`http://localhost:8000/posts/${id}`, { method: "DELETE" }).then(
      (response) => {
        if (response.status === 200) {
          const remaining = posts.filter((p) => id !== p.id);
          // setPosts(remaining)
        }
      }
    );
  };

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setPosts(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }
   else {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Text</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.text}</td>
                <td>
                  <button
                    className="btn btn-dark"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default BlogPosts;
