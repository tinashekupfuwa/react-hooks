import { useState, useEffect } from "react";

export function Effect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json().then((data) => setData(data))
    );
  }, []);

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
