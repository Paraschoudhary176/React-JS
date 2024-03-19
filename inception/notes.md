### What are CDN Links

#-> CDN is place where react libraries are hosted
#-> CDN links are ligt ways to put react in the project
#-> CDN Links are also of two types one is for development and another one is for production

## How do I use a CDN link?

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

- Just put these links into the body of index file

## But what is there inside these CDN Links ?

- there are js code written behind the scenes
- which helps us to import or require modules from npm packages

## what is cross origin ?

-Cross-origin markdown refers to the use of markdown syntax in a web environment where the markdown processor and the webpage are hosted on different origins. Cross-origin requests are typically subject to same-origin policy (SOP) restrictions, which can prevent a webpage from accessing resources (such as a markdown processor) from a different origin. However, cross-origin markdown can be enabled by using Cross-Origin Resource Sharing (CORS) headers, which allow a server to specify which origins are allowed to access its resources.

In the context of markdown, cross-origin markdown would involve a webpage hosted on one origin (e.g., https://example.com) using a markdown processor hosted on a different origin (e.g., https://markdown.com). The markdown processor would need to include the appropriate CORS headers in its responses to allow the webpage to access the processed markdown content.

-Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type

- The Access-Control-Allow-Origin header specifies the origin(s) that are allowed to access the resource. In this example, only requests from https://example.com will be allowed. The Access-Control-Allow-Methods header specifies the HTTP methods that are allowed for the request. In this example, both GET and POST requests are allowed. The Access-Control-Allow-Headers header specifies the HTTP headers that are allowed for the request. In this example, only the Content-Type header is allowed.

By including these headers in its responses, the markdown processor can enable cross-origin markdown and allow webpages hosted on different origins to use its services.
Cross-Origin Resource Sharing (CORS) is a security feature that allows web applications running at one domain to access resources from a different domain. It's primarily used by JavaScript on the
browsers to give a web application running at one origin access to selected resources from a resource.
