import { useLocation } from "react-router"

export const NoMatch = () => {
    const location = useLocation();

    return(
        <div>
            <h1>Error</h1>
            <p>Sorry the page {location.pathname} not found.</p>
        </div>
    )
}