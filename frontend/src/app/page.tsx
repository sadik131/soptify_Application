"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState('');


  useEffect(() => {
    fetch('http://localhost:3001/data') // Replace with your NestJS server URL and port
      .then(response => response.text())
      .then(data => setData(data));
  }, []);

  return (
    <main>
      {data}
    </main>
  );
}
