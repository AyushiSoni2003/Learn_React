import React from "react";
import { useEffect , useState} from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/AyushiSoni2003")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);


    //         })
    //  } , [])

    return (
        <div className="text-center text-3xl m-4 bg-amber-100 text-black"> 
            Github Followers : {data.followers}
            <img src={data.avatar_url}  alt="Gir picture" width={300}/>
        </div>
    )

}

export const githubLoader = async () => {
    const response = await fetch("https://api.github.com/users/AyushiSoni2003")
     return response.json()
}