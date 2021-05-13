import React from "react";

export default function Movies(props) {
    return (
        <div>
            <h1>Movies</h1>
            <span>{JSON.stringify(props)}</span>
        </div>
    );
}

export async function getStaticProps() {

    return {
        props: {
            movies: ["Back to the future","The contact","iRobot","Superman"]
        }
    }
}