/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import axios from "axios";
import { useState, useEffect } from "react";
import { manipulateUserValue } from "./helper";

const BASE_URL = "https://us-central1-wands-2017.cloudfunctions.net/githubjobs";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export function fetchJobs() {
  const { data, error } = useSWR(BASE_URL, fetcher);
  return {
    data: data || [],
    isLoading: !error && !data,
    isError: error,
  };
}
export function searchByDes(search) {
  const { data, error } = useSWR(`${BASE_URL}?description=${search}`, fetcher);
  return {
    data: data || [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function fetchJobById(id) {
  const { data, error } = useSWR(`${BASE_URL}?id=${id} `, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const useFetch = (searchValue) => {
  const URL = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${manipulateUserValue(
    searchValue
  )}`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(URL);

        setData((prev) => {
          // if (prev.find((item) => item.hasOwnProperty([searchValue]))) {
          //   return prev;
          // }
          return [...prev, { [searchValue]: result.data }];
        });
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [searchValue, URL]);
  return { data, isLoading, isError };
};
