This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## PAGES
* Much like Gatsby, pages are stored in the page folder and associated with a route based on the filename.
* Can be named anything but must be a default export.
* Linking uses the anchor tag but must be wrapped in Next's Link component.
* * ```import Link from 'next/link'```
* Using the Link component enables prefetching the linked pages in the background.

* If naming a file index, Next will route it to the root of the dir.
* * pages/blog/index => /blog
* Nested routes are supported.
* Dynaminc routes with bracketing...
* * pages/[username]/settings.js ==> pages/:username/settings => pages/NAME/settings

## ASSETS, META, CSS
* Static assets served from the public folder and can be referenced from the root of the app.
* Head from next/head can be used on pages to swap meta data.
* To customize the top level page structure look at Document
* * https://nextjs.org/docs/advanced-features/custom-document
* _App is top level common across all different pages
* * You can only import global CSS at the App layer.
* next/image - Much like Gatsby's image component
* *  Optimized on demand, lazy loaded by default, rendered to avoid layout jogs
* next/head - React component to modify the head tags meta.
* * <Head> <title>Title</title> </Head> ...
* CSS - Built in support for styled-jsx but other CSS in JS can be used.
* * Built in support for CSS and Sass to import css and scss/sass formats.
* * Compiled with CSS post out of the box.
* * postcss.config.js to customize
* * https://nextjs.org/learn/basics/assets-metadata-css/styling-tips

## Pre-rendering / Data Fetching
* Two forms - Static (w and w/o data) / Server Side Gen
* getStaticProps
* HTML generated in advance for every page, but both methods have different purposes.
* When a page is loaded by the browser it is hydrated and built with the minimal JS needed.
* * Prerendered content displayed.
* * Hydrated with initialized components, app becomes interactive
* * Note: Interactive components like Link will be active after JS loads.

Important: You can choose per page, static or SS for a hybrid app approach.

### Static Gen
* https://nextjs.org/learn/basics/data-fetching/with-data
* Prerenders at build time and reused on each request.
* Things that won't change much, if they do a rebuild is needed.
* Recommended for as much as possible due to speed of loading, caching.
* Can be done with and without data.
* No data - Everything gen at build time for production.
* With data - Fetch the data at build time, send the props to the page.
* * getStaticProps - Runs at build time in production
* * * only runs on the server, isn't included in bundle code
* * in devMode the above runs on each request.

```js
// this looks to be akin to a graphQL page query
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      // can be passed to the home component as a prop
      allPostsData
    }
  }
}
```

* * If you can pre render in advance of a page request, do this!

### Server Side Gen
* Pre rendered on each request.
* Uses getServerSideProps(context){reutrn {props: {}}}

* * If you cannot pre render in advance of a page request, do this!
* * Alternatively, you can update frequently updating data on the client.

### Client Side Rendering
* No need to prerender
* Generate parts that don't require external data.
* * On load, fetch external data, fill in the gaps.
* If fetching on the client side, give this React hook a look.
* https://nextjs.org/learn/basics/data-fetching/request-time
* https://swr.vercel.app/


## Dynamic Routes
* Use getStaticPaths alongside getStaticProps
* Building out paths like

```js
/posts/[id]
```

* Pages beginning with this pattern [...] are dynamic routes in NextJS.
* There are subleties with getStaticPaths that must be dealt with correctly.
* https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths

* Pick back up here...
* https://nextjs.org/learn/basics/dynamic-routes/render-markdown