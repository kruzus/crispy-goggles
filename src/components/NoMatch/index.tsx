import { useLocation } from "react-router"

export const NoMatch = () => {
    const location = useLocation();

    return(
        <div>
            No match for <code>{location.pathname}. Please go back.</code>
        </div>
    )
}