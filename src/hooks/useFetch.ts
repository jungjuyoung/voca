import { useState, useEffect } from "react";

export default function useFetch(url: string) {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setState(data));
  }, [url]);

  return state;
}
