'use client';
import { useEffect, useState } from 'react';

interface Post { // Post arayüzü (data yapınıza göre düzenleyin)
  id: number;
  title: string;
  content: string;
  createdAt?: string; // İsteğe bağlı alanlar için ? kullanın
}

export default async function Home(): Promise<JSX.Element> {
  const [data, setData] = useState<Post[]>([]); // data'nın tipini belirtin

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/posts");
        const posts: Post[] = await res.json(); // gelen verinin tipini belirtin
        setData(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
      <div>
        {data.map((item: Post) => ( // item'ın tipini belirtin
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </div>
        ))}
      </div>
  );
}