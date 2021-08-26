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