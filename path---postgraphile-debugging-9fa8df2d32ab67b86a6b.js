webpackJsonp([58450730530065],{413:function(e,n){e.exports={data:{remark:{html:'<h2 id="debugging"><a href="#debugging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Debugging</h2>\n<p>When something\'s wrong with your app it can be hugely frustrating; so we want to make\nit as easy as we can for you to get to the bottom of these issues!</p>\n<h3 id="step-1-check-youre-requesting-what-you-think-youre-requesting"><a href="#step-1-check-youre-requesting-what-you-think-youre-requesting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1: check you\'re requesting what you think you\'re requesting</h3>\n<p>Often issues occur because your client code isn\'t doing what you think it\'s\ndoing. The first step here is to determine exactly what\'s being sent over the\nnetwork. If you\'re building a website you can easily use Google Chrome\'s\nNetwork Devtools to see exactly what\'s being sent and received.</p>\n<ol>\n<li>Open your website in Chrome</li>\n<li>Right click, and select \'Inspect\'</li>\n<li>Select the \'Network\' tab in the developer tools</li>\n<li>In the filter box, enter \'/graphql\' (or whatever path you have configured your API to use)</li>\n<li>Ensure that \'All\' is selected to the right of the filter box</li>\n<li>Trigger your GraphQL request (either by reloading the page or by clicking the relevant element on the screen)</li>\n<li>Review the network requests that have arrived to ensure they\'re what you\'d expect, that no variables are unexpectedly null, that the relevant access tokens are being set in the request headers, etc</li>\n</ol>\n<h3 id="step-2-try-your-query-in-graphiql"><a href="#step-2-try-your-query-in-graphiql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 2: try your query in GraphiQL</h3>\n<p>It sometimes helps to try doing the same thing a different way, and this is\nwhere GraphiQL comes in handy. Take the query you\'re running and execute it via\nGraphiQL. Is it producing the same issue? Note that we currently do not support\nsetting headers in GraphiQL (although it is set to use <code class="language-text">Credentials:\nsame-origin</code> which is helpful if you\'re using cookie-based sessions).</p>\n<h3 id="step-3-increase-postgraphiles-logging"><a href="#step-3-increase-postgraphiles-logging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 3: increase PostGraphile\'s logging</h3>\n<p>Note that the errors are sent through to the GraphQL client (they\'re not\noutput on the server by default) so you\'ll need to reproduce this from your\nclient so you can see the output (or use a network inspector such as\nWireShark if modifying the client is not an option). If you\'re using\nPostGraphile as a library then you can use <code class="language-text">handleErrors</code> to output the error\ndetails on the server side (and to manipulate them before they\'re returned to\nthe client).</p>\n<p>You probably don\'t want this level of debugging on production as the results\nare sent to the client and it may leak implementation details you wish to\nkeep private.</p>\n<p>Use the following CLI options with PostGraphile:</p>\n<ul>\n<li><code class="language-text">--show-error-stack</code></li>\n<li><code class="language-text">--extended-errors hint,detail,errcode</code> (other options available <a href="https://github.com/brianc/node-postgres/blob/7de137f9f88611b8fcae5539aa90b6037133f1f1/lib/connection.js#L565-L580">here</a>)</li>\n<li>\n<p>or </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">--extended-errors severity,code,detail,hint,positon,internalPosition,internalQuery,where,schema,table,column,dataType,constraint,file,line,routine</code></pre>\n      </div>\n</li>\n</ul>\n<p>or for the library:</p>\n<ul>\n<li><code class="language-text">showErrorStack: true</code></li>\n<li><code class="language-text">extendedErrors: [&#39;hint&#39;, &#39;detail&#39;, &#39;errcode&#39;]</code> (other options available <a href="https://github.com/brianc/node-postgres/blob/7de137f9f88611b8fcae5539aa90b6037133f1f1/lib/connection.js#L565-L580">here</a>)</li>\n<li>\n<p>or</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">extendedErrors: [&#39;severity&#39;, &#39;code&#39;, &#39;detail&#39;, &#39;hint&#39;, &#39;positon&#39;, &#39;internalPosition&#39;, &#39;internalQuery&#39;, &#39;where&#39;, &#39;schema&#39;, &#39;table&#39;, &#39;column&#39;, &#39;dataType&#39;, &#39;constraint&#39;, &#39;file&#39;, &#39;line&#39;, &#39;routine&#39;]</code></pre>\n      </div>\n</li>\n<li>or use a custom <code class="language-text">handleErrors</code> function to explore even more details about\nthe errors (or to log them server side), note this overrides the above\noptions. You might be interested in the <code class="language-text">originalError</code> property on the\nGraphQLErrors you\'re handed.</li>\n</ul>\n<h3 id="step-4-viewing-the-generated-sql"><a href="#step-4-viewing-the-generated-sql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 4: viewing the generated SQL</h3>\n<p>Assuming that the error is coming from within the database, you can see what\nSQL statements PostGraphile is generating. To do so, restart PostGraphile,\nbeing sure to set the relevant <a href="https://github.com/visionmedia/debug">DEBUG</a>\nenvironmental variable first. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment">#Linux</span>\n<span class="token function">export</span> DEBUG<span class="token operator">=</span><span class="token string">"postgraphile:postgres"</span>\n\n<span class="token comment"># Windows Console</span>\n<span class="token keyword">set</span> DEBUG<span class="token operator">=</span>postgraphile:postgres <span class="token operator">&amp;</span> <span class="token operator">&lt;</span>script start<span class="token operator">></span>\n\n<span class="token comment"># Windows PowerShell</span>\n<span class="token variable">$env</span>:DEBUG <span class="token operator">=</span> <span class="token string">"postgraphile:postgres"</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>script start<span class="token operator">></span></code></pre>\n      </div>\n<p>Note that this works with PostGraphile CLI and also when using PostGraphile as an express middleware.</p>\n<p>To find details of any errors thrown whilst executing SQL, use:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment">#Linux</span>\n<span class="token function">export</span> DEBUG<span class="token operator">=</span><span class="token string">"postgraphile:postgres,postgraphile:postgres:error"</span>\n  <span class="token comment"># or:</span>\n<span class="token function">export</span> DEBUG<span class="token operator">=</span><span class="token string">"postgraphile:postgres*"</span>\n\n<span class="token comment">#Windows Console</span>\n<span class="token keyword">set</span> DEBUG<span class="token operator">=</span>postgraphile:postgres,postgraphile:postgres:error <span class="token operator">&amp;</span> <span class="token operator">&lt;</span>script start<span class="token operator">></span>\n  <span class="token comment">#or</span>\n<span class="token keyword">set</span> DEBUG<span class="token operator">=</span>postgraphile:postgres* <span class="token operator">&amp;</span> <span class="token operator">&lt;</span>script start<span class="token operator">></span>\n\n<span class="token comment">#PowerShell</span>\n<span class="token variable">$env</span>:DEBUG <span class="token operator">=</span> <span class="token string">"postgraphile:postgres,postgraphile:postgres:error"</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>script start<span class="token operator">></span>\n  <span class="token comment">#or</span>\n<span class="token variable">$env</span>:DEBUG <span class="token operator">=</span> <span class="token string">"postgraphile:postgres*"</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>script start<span class="token operator">></span></code></pre>\n      </div>\n<h3 id="debug-envvars"><a href="#debug-envvars" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DEBUG envvars</h3>\n<p>We use a lot of DEBUG envvars for different parts of the system. Here\'s some of the ones you might care about:</p>\n<ul>\n<li><code class="language-text">postgraphile:cli</code> - informs about plugins being loaded</li>\n<li><code class="language-text">postgraphile:graphql</code> - prints out the full GraphQL query after validation and before execution</li>\n<li><code class="language-text">postgraphile:request</code> - prints out statuses during the HTTP request life-cycle</li>\n<li><code class="language-text">postgraphile:postgres</code> - prints out every SQL statement that\'s issued to the database (does not include placeholder values)</li>\n<li><code class="language-text">postgraphile:postgres:error</code> - outputs any errors generated whilst executing SQL statements</li>\n<li><code class="language-text">graphile-builder</code> - desperately in need of renaming, this hook is extremely useful for understanding the order in which hooks execute, and how hook executions can nest - a must for people getting started with graphile-build plugins</li>\n<li><code class="language-text">graphile-build-pg</code> - prints out various things, many of which should not occur. Also used to output errors from the update/delete mutations (where <code class="language-text">null</code> is returned to GraphQL)</li>\n<li><code class="language-text">graphile-build-pg:warn</code> - prints out warnings that occur during schema generation; these warnings might hint at field conflicts and similar issues</li>\n<li><code class="language-text">graphile-build-pg:sql</code> - prints out <em>some</em> SQL statements, you probably want <code class="language-text">postgraphile:postgres</code> instead</li>\n<li><code class="language-text">graphql-parse-resolve-info</code> - far more information than you could possibly need regarding how we process the resolveInfo / AST</li>\n</ul>\n<p>To enable these DEBUG modes, join them with commas when setting a DEBUG envvar, then run PostGraphile or your Node.js server in the same terminal:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment">#Linux</span>\n<span class="token function">export</span> DEBUG<span class="token operator">=</span><span class="token string">"postgraphile:graphql,postgraphile:request,postgraphile:postgres*"</span>\npostgraphile -c postgres://<span class="token punctuation">..</span>.\n\n<span class="token comment">#Windows Console</span>\n<span class="token keyword">set</span> DEBUG<span class="token operator">=</span>postgraphile:graphql,postgraphile:request,postgraphile:postgres* <span class="token operator">&amp;</span> postgraphile -c postgres://<span class="token punctuation">..</span>.\n\n<span class="token comment">#PowerShell</span>\n<span class="token variable">$env</span>:DEBUG <span class="token operator">=</span> <span class="token string">"postgraphile:graphql,postgraphile:request,postgraphile:postgres*"</span><span class="token punctuation">;</span> postgraphile -c postgres://<span class="token punctuation">..</span>.</code></pre>\n      </div>\n<h3 id="advanced-getting-your-hands-dirty"><a href="#advanced-getting-your-hands-dirty" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced: getting your hands dirty</h3>\n<p>If you\'re a plugin author, you think you\'ve discovered an issue in\nPostGraphile, or you just like seeing how things work, you can use the Chrome\nDebug tools to debug the node process - add breakpoints, break on exceptions,\nand step through code execution.</p>\n<ol>\n<li>Visit <code class="language-text">chrome://inspect</code> in Google Chrome (we can\'t hyperlink it for security reasons).</li>\n<li>Select \'Open dedicated DevTools for Node\', a new devtools window should open - don\'t close this!</li>\n<li>Run your server or PostGraphile via Node.js directly, in <code class="language-text">--inspect</code> mode, e.g.:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"># For globally installed PostGraphile:\nnode --inspect `which postgraphile`\n\n# or for locally installed PostGraphile:\nnode --inspect node_modules/.bin/postgraphile\n\n# or, if you have your own Node.js app in `server.js`:\nnode --inspect server.js</code></pre>\n      </div>',frontmatter:{path:"/postgraphile/debugging/",title:"Debugging",showExamples:null}},nav:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"},{id:"community",title:"Community"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/examples/",title:"Examples",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Schema Plugins",sectionId:"overview"},{to:"/postgraphile/plugins/",title:"Server Plugins",sectionId:"overview"},{to:"/postgraphile/subscriptions/",title:"Subscriptions",sectionId:"overview"},{to:"/postgraphile/production/",title:"Production Considerations",sectionId:"overview"},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"overview"},{to:"/postgraphile/debugging/",title:"Debugging",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"},{to:"/postgraphile/community-plugins/",title:"Community Plugins",sectionId:"community"},{to:"/postgraphile/community-chat/",title:"Community Chat",sectionId:"community"},{to:"/postgraphile/code-of-conduct/",title:"Code of Conduct",sectionId:"community"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]},examples:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/examples.json absPath of file [0] >>> JSON",title:"Basic",examples:[{title:"Forums",query:"{\n  allForums {\n    nodes {\n      nodeId\n      id\n      slug\n      name\n      description\n    }\n  }\n}\n",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "slug": "cat-life",\n        "name": "Cat Life",\n        "description":\n          "A forum all about cats and how fluffy they are and how they completely ignore their owners unless there is food. Or yarn."\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "slug": "dog-life",\n        "name": "Dog Life",\n        "description": ""\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDNd",\n        "id": 3,\n        "slug": "slug-life",\n        "name": "Slug Life",\n        "description": ""\n      }\n    ]\n  }\n}\n'},{title:"Forum by slug",query:'{\n  forumBySlug(slug: "slug-life") {\n    nodeId\n    id\n    slug\n    name\n    description\n  }\n}\n',result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDNd",\n    "id": 3,\n    "slug": "slug-life",\n    "name": "Slug Life",\n    "description": ""\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/examples.json absPath of file [1] >>> JSON",title:"Collections",examples:[{title:"First offset",query:"{\n  allForums(first: 1, offset: 1) {\n    nodes {\n      nodeId\n      id\n      name\n    }\n  }\n}\n",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "name": "Dog Life"\n      }\n    ]\n  }\n}\n'},{title:"Relation condition",query:'{\n  forumBySlug(slug: "cat-life") {\n    nodeId\n    id\n    name\n    topics(\n      condition: { authorId: 1 }\n    ) {\n      nodes {\n        nodeId\n        id\n        title\n      }\n    }\n  }\n}\n',result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDFd",\n    "id": 1,\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDFd",\n          "id": 1,\n          "title": "cats cats cats"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDJd",\n          "id": 2,\n          "title": "snooze life"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDNd",\n          "id": 3,\n          "title": "too hot"\n        }\n      ]\n    }\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/examples.json absPath of file [2] >>> JSON",title:"Relations",examples:[{title:"Forums topics posts",query:"{\n  forumById(id: 1) {\n    name\n    topics(\n      first: 1\n      orderBy: [CREATED_AT_ASC]\n    ) {\n      nodes {\n        id\n        title\n        bodySummary\n        author {\n          id\n          username\n        }\n        posts(\n          first: 1\n          orderBy: [ID_DESC]\n        ) {\n          nodes {\n            id\n            author {\n              id\n              username\n            }\n            body\n          }\n        }\n      }\n    }\n  }\n}\n",result:'{\n  "forumById": {\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "id": 1,\n          "title": "cats cats cats",\n          "bodySummary":\n            "lets discuss cats because t...",\n          "author": {\n            "id": 1,\n            "username": "user"\n          },\n          "posts": {\n            "nodes": [\n              {\n                "id": 3,\n                "author": {\n                  "id": 1,\n                  "username": "user"\n                },\n                "body":\n                  "I love it when they completely ignore you until they want something. So much better than dogs am I rite?"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/examples.json absPath of file [3] >>> JSON",title:"Mutations",examples:[{title:"Create",query:'mutation {\n  createTopic(\n    input: {\n      topic: {\n        forumId: 1\n        title: "My question relates to mutations..."\n        body: "How do you write them?"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      forumId\n      title\n      body\n    }\n  }\n}\n',result:'{\n  "createTopic": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDRd",\n      "id": 4,\n      "forumId": 1,\n      "title":\n        "My question relates to mutations...",\n      "body": "How do you write them?"\n    }\n  }\n}\n'},{title:"Update",query:'mutation {\n  updateTopicById(\n    input: {\n      id: 1\n      topicPatch: {\n        title: "My (edited) title"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      title\n      body\n    }\n  }\n}\n',result:'{\n  "updateTopicById": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDFd",\n      "id": 1,\n      "title": "My (edited) title",\n      "body":\n        "lets discuss cats because theyre totally cool"\n    }\n  }\n}\n'},{title:"Delete",query:"mutation {\n  deleteTopicById(input: { id: 1 }) {\n    deletedTopicId\n  }\n}\n",result:'{\n  "deleteTopicById": {\n    "deletedTopicId":\n      "WyJ0b3BpY3MiLDFd"\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/examples.json absPath of file [4] >>> JSON",title:"Custom queries",examples:[{title:"Single scalar",query:"{\n  randomNumber\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.random_number() returns int\n#  language sql stable\n#  as $$\n#    select 4; -- Chosen by fair dice roll. Guaranteed to be random. XKCD#221\n#  $$;\n#\n",result:'{ "randomNumber": 4 }\n'},{title:"Single row",query:"{\n  currentUser {\n    nodeId\n    id\n    username\n  }\n}\n\n# Added to the GraphQL schema via\n# this SQL:\n#\n#   create function current_user()\n#   returns app_public.users\n#   language sql stable\n#   as $$\n#     select users.*\n#     from app_public.users\n#     where id = current_user_id();\n#   $$;\n",result:'{\n  "currentUser": {\n    "nodeId": "WyJ1c2VycyIsMV0=",\n    "id": 1,\n    "username": "user"\n  }\n}\n'},{title:"Rows connection",query:"{\n  forumsAboutCats {\n    nodes {\n      nodeId\n      id\n      name\n      slug\n    }\n  }\n}\n\n# Created from SQL like:\n#\n#  create function app_public.forums_about_cats()\n#  returns setof app_public.forums\n#  language sql stable\n#  as $$\n#    select *\n#    from app_public.forums\n#    where slug like 'cat-%';\n#  $$;\n",result:'{\n  "forumsAboutCats": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "name": "Cat Life",\n        "slug": "cat-life"\n      }\n    ]\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/examples.json absPath of file [5] >>> JSON",title:"Custom mutations",examples:[{title:"Forgot password",query:"mutation {\n  forgotPassword(\n    input: {\n      email: \"user@example.com\"\n    }\n  ) {\n    success\n  }\n}\n\n# Generated with SQL like this:\n#\n#  create function forgot_password(email text)\n#  returns boolean\n#  language plpgsql volatile\n#  as $$\n#    ...\n#  $$;\n#\n#  -- Optionally rename the result field:\n#  comment on function\n#    forgot_password(email text)\n#    is '@resultFieldName success';\n",result:'{\n  "forgotPassword": {\n    "success": true\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.org/src/data/examples.json absPath of file [6] >>> JSON",title:"Computed columns",examples:[{title:"Topic summary",query:"{\n  topicById(id: 2) {\n    body\n    bodySummary\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your cat just s..."\n  }\n}\n'},{title:"Topic summary with arg",query:"{\n  topicById(id: 2) {\n    body\n    bodySummary(maxLength: 20)\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your ..."\n  }\n}\n'}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-debugging-9fa8df2d32ab67b86a6b.js.map