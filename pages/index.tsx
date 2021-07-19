import React from 'react'
import Head from 'next/head';
import { SeoTags } from '../components/SeoTags';


const index = () => {
  const title = "@edit PAGE TITLE"
  const description = "@edit PAGE DESCRIPTION"
  const img = "@edit PAGE IMG"
  const url = "@edit PAGE URL"

  return (
    <>
    <Head>
    <title>{title}</title>
    <SeoTags title={title} desc={description} img={img} url={url}/>
    </Head>

    <div>
      <h1>👷‍♀️👷‍♂️</h1>
      <h2>{title}</h2>
      <p>Meet me at <a href="https://twitch.tv/a7yson"><span className="p p-purple">Twitch</span></a></p>
    </div>
    </>
  )
}

export default About