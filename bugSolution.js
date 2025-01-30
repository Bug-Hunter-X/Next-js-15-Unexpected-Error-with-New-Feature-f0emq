```javascript
// pages/index.js
import {useEffect, useState} from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/hello');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
```