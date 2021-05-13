import React from 'react';
import App from 'next/app';
import Head from 'next/head'
import Nav from '../components/Nav';
import "../styles/index.css";

export default class CMApp extends App {
  render() {
    const { Component } = this.props

    return (
      <div>
        <Head>
          <title>NextJS bird</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
        </Head>
        <Nav />
        <h5>ไม่ refesh หน้าจอ เพราะไปแบบ single web page appication</h5>
        <div style={{ marginTop: 50 }} className="main-content index-content">
          <Component/>
        </div>
        <span>Copyright 2020 by BirdPakornpong</span>
        <style>
          {
            `
            .main-content {
              padding: 30px;
            }
            `
          }
        </style>
      </div>
    )
  }
}