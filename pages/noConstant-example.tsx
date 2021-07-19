import React from  'react'
import Head from  'next/head';
import { SeoTags } from  '../components/SeoTags';

export  const  index  = () => {
  return (
  <>
    <Head>
      <title>Your title here</title>
      <SeoTags  title="This is the title" desc="This is the description" img="https://github.com/example-image.png" url="https://www.yourwebsite.dev/"/>
    </Head>
    <div>
      Hello World!
    </div>
  </>
  )
  }