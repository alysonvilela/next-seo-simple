# What is SeoTags?

SeoTags is a Typescript component for simple and fast SEO, mainly used for React.js and Next.js applications.


## How to use
- Assuming that you **using Typescript Template** from `
npx create-next-app --ts
`

 - Clone this repository `git clone https://github.com/alysonvilela/next-seo-simple.git`
 - Extract all folders in the root of the project
 - Open `/components/SeoTags.tsx`
 - Choose which style you are going to use on `/components/SeoTags.tsx`
	 - PATTERN STYLE: uncomment the section and comment the other one.
	 - SIMPLE STYLE: default, just use.
 - Edit all @edit of `/pages`
 - Save and use

### You can use without constants
By default, on index.tsx, the SeoTags uses constants for fast editing, but you can use it as a string property so:

    import React from  'react'
    import Head from  'next/head';
    import { SeoTags } from  '../components/SeoTags';
    
    export  const  AboutPage  = () => {
    return (
    <>
    <Head>   
	    <title>Your title here</title>    
	    <SeoTags  title="This is the title"  desc="This is the 		description"  img="https://github.com/example-image.png"  url="https://www.yourwebsite.dev/"/>    
    </Head>    
    <div>    
	    Hello World!
    </div>
    </>
    )}
You can find this file at `noConstant.example.tsx`


