import React from 'react'
import Link from 'next/link';

export default function Nav() {
    return (
        <>
            <nav>
                <Link href="/"><a >Home</a></Link>{" | "}
                <Link href="/aboutus"><a >Aboutus</a></Link>{" | "}
                <Link href="/service"><a >Service</a></Link>{" | "}
                <Link href="/register"><a >Register</a></Link>{" | "}
                <Link href="/stock"><a >Stock</a></Link>{" | "}
                <Link href="/movies"><a>Movies</a></Link>{" | "}
                <Link href="/moviesnoclass"><a>Moviesnoclass</a></Link>
            </nav>
        </>
    )
}