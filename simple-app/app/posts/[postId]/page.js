"use client"
import React from 'react'

function page({ params }) {

  return (
    <h1 className=' font-extrabold text-center text-cyan-400 mt-6'>{params.postId}</h1>
  )
}

export default page