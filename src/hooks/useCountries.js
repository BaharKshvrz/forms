import { useEffect, useState } from "react";
import { fetchUrl } from "../components/utils";
import { COINTRIES, ROOT_API } from "../constants";

export default () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCountries() {
            setLoading(true);
           // const data = await fetchUrl(`${ROOT_API}countries`);
           // setData(data.countries);
            setData(COINTRIES);
            setLoading(false);
        }
        fetchCountries();
    }, []);

    return [data, loading];
}