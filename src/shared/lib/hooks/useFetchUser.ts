import { useEffect, useState } from "react";
import { URL_USER } from "../../api/api";
import { IUser } from "../../types/types";

const useFetchUser = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL_USER('1')); 
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json(); 
        setUser(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Произошла ошибка");
      } finally {
        setLoading(false);  
      }
    };

    getUser();
  }, []);

  return { user, loading, error }; 
};

export default useFetchUser;
