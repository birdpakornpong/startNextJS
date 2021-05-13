import React from 'react'
import Link from "next/link"

export default function index() {

  return (
    // Navigation
    <div> 
      <nav>
        <a href="/aboutus">Aboutus</a> |
        <a href="/service">Service</a> |
        <a href="/register">Register</a> |
        <a href="/stock">Stock</a>
      </nav>
      <h1>Hello Bird</h1>
      <img src="/vercel.svg" alt="" height={100}></img>
      <img src="/images/liverpool.jpg" alt="" height={500}></img>
    </div>
  )
}