## What are URLs and their anatomy?

The Rest API architecture is built on top of web technologies such as URLs and the HTTP protocol. Let's understand how these components work together, starting with URLs.

A URL (Uniform Resource Locator) describes the location of a resource in a computer network such as the web. Examples of resources are HTML pages, videos, images, etc.

The URL syntax had the following components:

![](/assets/mdn-url-all-simplified.png)
*URL syntax structure. Modified from MDN Web Docs.*

Each URL component is described below:

| **URL Component** | **Description**                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Scheme            | Protocol used by the client to request a resource from the server. Typically HTTPS or HTTP                             |
| Domain Name       | Registered name or IP address of the host computer (server) being asked for resource                                   |
| Path to resource  | Logical path to resource on the server. Typically used as a tree structure to organize contents.                       |
| Parameters        | Extra information passed to server. Character `?` followed by query strings made of `key=value` pairs separated by `&` | 


## Knowledge Check

<iframe src="https://app.Lumi.education/api/v1/run/M1Jn6m/embed" width="100%" height="500" frameborder="25" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
