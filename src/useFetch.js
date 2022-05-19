import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    //you can do this function inside useeffect but if you want to make it outside,
    //you should use 'useCallback'
    async function fetchData() {
      let response = await fetch(url);
      response = await response.json();
      // only set Data if is mounted to avoid race conditions
      // in the future we will use suspense instead.
      if (isMounted) {
        setData(response);
      }
    }
    //call the function
    fetchData();

    // cancel any future `setData`
    return () => (isMounted = false);
    //when url changes we will reload
  }, [url]);

  return [data];
};

export default useFetch;
