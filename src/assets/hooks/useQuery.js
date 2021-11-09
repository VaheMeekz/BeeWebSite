import {useLocation} from 'react-router-dom'
import {useMemo} from "react";

const useQuery = () => {
    const { search } = useLocation();
    console.log(search)

    return useMemo(() => new URLSearchParams(search), [search]);
}

export default useQuery