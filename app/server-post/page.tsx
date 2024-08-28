import React from 'react'

async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

export default async function ServerFetch() {
    const posts = await getData();
  return (
    <div>
      List of posts :
      {posts.map((post:any)=>(
        <li key={post.id}>
            {post.body}
        </li>
      ))}
    </div>
  )
}
