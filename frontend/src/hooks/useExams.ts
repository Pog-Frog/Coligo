import useSWR from "swr";
import axios from "axios";

const useExams = () => {
    const fetcher = async (url: string) => axios.get(url).then((res) => res.data)

    const url = `http://localhost:8080/api/exams`;

    const { data, error, isLoading, mutate } = useSWR(url, fetcher);

    return {
        exams: data,
        isLoading,
        isError: error,
        mutate
    }

}

export default useExams;