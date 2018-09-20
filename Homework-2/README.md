# Homework 2

## Homework 2 instruction
(as instructed by my professor)

Structuring Page Content

For this hw you’ll be planning and implementing a semantic structuring strategy for the entire site based on the work we completed in the lectures. In the steps below I’ll list the tasks you need to perform, as well as the relevant files for each task.

1. Determine a structuring strategy.
   - Applies to: structure.htm
   - Open the structure.htm file and explore the page structure and ARIA roles. Write out the document outline, and how structural tags like aside, article, nav, and section are being used.
   - Examine how semantic tags like the header, footer, and main elements are used.

2. Structure pages
   - Applies to: all pages
   - Using the strategy devised from the structure.htm file, structure each of the remaining files so that the site uses a consistent, logical structure.

3. Apply ARIA roles
   - Applies to: all pages
   - As you are structuring pages, add ARIA roles to elements when appropriate. 
					
## My solution
Based on /structure.html page that was already formatted, here's the basic outline for HW-2

```
<body>
  <header role="banner">
    <h1>...</h1>
    <h2>...</h2>
    <nav role="navigation">
      <ul>
        <li>...</li>
      </ul>
    </nav>
  <header>
  <main role="main">
    <article>
      <header>
        <h3>...<h3>
        <p>...</p>
      </header>
      <section>
        <h3>...</h3>
        <p>...</p>
        <aside role="complementary">
          <h4>...</h4>
          <p>...</p>
          <blockquote>...</blockquote>
        </aside>
      </section>
    </article>
  </main>
  <footer role="contentinfo">
    <p>...</p>
  </footer>
<body>
```

Also, I've made slight change to the CSS file, just for the cosmetic purposes. I've only change the background color of `<pre>` and `<aside>` so that those sections will hopefully looks a bit better when the two got mixed together, as seen in /syntax.html page.

```
pre {
  background: #444;
}

aside {
  background: rgb(0, 130, 155);
}
```