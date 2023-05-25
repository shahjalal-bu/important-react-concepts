import axios from "axios";
import { useEffect, useMemo, useState } from "react";

/**
 * Custom hook for fetching data using Axios.
 *
 * @param {string} [method] -The optional HTTP method for the request (e.g., 'GET', 'POST', 'PUT', 'DELETE'). By default it is GET.
 * @param {string} url - The URL to send the request to.
 * @param {Object} [body] - The optional request payload/body.
 * @returns {Object} An object containing the loading state, data, and error.
 *     - isLoading: A boolean indicating if the request is in progress.
 *     - data: The response data from the request.
 *     - isError: An error object if the request fails, null otherwise.
 */

const useFetch = (url, method, body = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(true);
  const bodydata = useMemo(() => body, []);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: bodydata,
        });
        const data = await resp?.data;
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, bodydata]);

  return { isLoading, data, isError };
};

export default useFetch;
