import { useEffect, useState } from "react";
import axios from "axios";

let config = {
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
  },
};
function useGetData(url: string) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, config);
        setData(response.data.data);
      } catch (error: any) {
        setError(error.message); // You can customize this error handling logic
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return setData(null);
  }, [url]);
  return { data, loading, error };
}

export default useGetData;
