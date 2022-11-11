import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home = () => (
  <Layout title="Home | Todo list">
    <div className="h-screen">
      <p className="text-xl">
        What is a ToDo List? The definition is a simple one. It's a list of tasks you need to complete or things that
        you want to do. Most typically, they're organised in order of priority. Traditionally, they're written on a
        piece of paper or post it notes and act as a memory aid. Don't have a piece of paper? Don't worry.
        <Link href="/todo" className="text-primary whitespace-nowrap">
          {' '}
          I've got something for you! <span className="text-2xl">»</span>
        </Link>
      </p>
    </div>
  </Layout>
)

export default Home
