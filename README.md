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