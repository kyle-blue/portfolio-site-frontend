import { useLocation, useNavigate } from 'react-router-dom';

export function useQuery() {
    return new URLSearchParams(useLocation().search)
}


export function useSetQueryParam(key: string, value: string) {
    const location = useLocation()
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search)
    queryParams.set(key, value)
    navigate(`${location.pathname}?${queryParams.toString()}`)
}

export function useRemoveQueryParam(key: string) {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    queryParams.delete(key)
    navigate(`${location.pathname}?${queryParams.toString()}`)
}