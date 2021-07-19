type SeoSettings= {
  title: string,
  desc: string,
  img: string,
  url: string,
}

export const SeoTags = (props: SeoSettings) => {

  // PATTERN STYLE
  //   const patternName = " - @edit Some Pattern for use"
  //   const title = `${props.title} ${patternName}`
  //   const desc = `${props.desc} ${patternName}`

  // SIMPLE STYLE
    const title = `${props.title}`
    const desc = `${props.desc}`
    const img = `${props.img}`
    const url = `${props.url}`

    return (
        <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:image" content={img} />
        </>
    )
}
  
