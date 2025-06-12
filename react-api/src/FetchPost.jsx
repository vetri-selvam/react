import { useState } from "react";

export default function FetchPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        setLoading(false);
        setTitle("");
        setBody("");
      })
      .catch((err) => {
        console.error("Error Posting", err);
        setLoading(false);
      });
  };

  return (
    <>
      <h2>Create a post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body: </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Posting" : "Post it"}
        </button>
      </form>

      {response && (
        <div style={{ marginTop: "1rem", padding: "0.5rem", border: "1px solid green" }}>
          <h4>✅ Server Response:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </>
  );
}
