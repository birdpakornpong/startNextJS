import React from "react";

export default function Movies({movies, moviesmock, randomData}) {
    return (
        <div>
            <h1>Movies</h1>
            <span>{JSON.stringify(randomData)}</span>
            <span>{JSON.stringify(moviesmock)}</span>
            <ul>
                {movies.map((movie, index) => {
                    return <li key={`${index}`}>{`${index + 1}. : ${movie.name} from ${movie.address.city}`}</li>
                })}
            </ul>
        </div>
    );
}

export async function getStaticProps() {

    const url = "https://jsonplaceholder.typicode.com/USERS"
    const res = await fetch(url);
    const data = await res.json()

    return {
        props: {
            moviesmock: ["Superman", "batman", "joker"],
            movies: data,
            randomData: Math.random().toString(),
        }
    }
}