# Fetching Resources with HTTP

The Hypertext Transfer Protocol (HTTP) is a communication protocol for clients to request resources such as HTML pages, images, videos and text from servers over a network.

The client initiates the communication by sending a **request message** to a server whose location is identified by a **URL**. The server in turn sends a **response message** with the required resources or with an descriptive error message.

![Laptop client sensing a request message to server and receiving a response message](/assets/http-client-server.png)

## HTTP is Stateless

Every HTTP request is made independently of previous ones. A new connection is created every time a request is received and forgotten once the response is sent. This means that the request must contain all the information necessary for the HTTP server to understand and process the request.

## Request Methods (Verbs)

The HTTP protocol uses a set of **request methods** to specify what action the server is expected to perform. Request methods are described by an action verb, and therefore also referred as **HTTP verbs**. Below are the most common verbs used with REST APIs:


| Request Method (Verb) | Request Description                               | Example                                  |
| --------------------- | ------------------------------------------------- | ---------------------------------------- |
| GET                   | **Read** (obtain a copy) of one or more resources | Get information about a user profile     |
| POST                  | **Create** a new instance of a resource           | Create a new user profile                |
| PUT or PATCH          | **Update** or replace a resource                  | Update the email field of a user profile |
| DELETE                | **Delete** a resource                             | Delete a user profile                    |


## Request Messages

Request messages have a defined structure made of two parts: a **header** and a **body**, separated by an empty line.

### Request Header

The first line of the HTTP request header contains:

- **HTTP method**
- **Logical path to resource**
- **HTTP version**

The next few lines contain HTTP request headers such as:

- **Target host**: server name
- **Accepted languages**: english, french, spanish, etc.


![Anatomy of HTTP request showing Header and body](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http_request.png)
*Anatomy of HTTP request Header [MDN Web Docs - An overview of HTTP]*
### Request body

The request body is optional, however, requests such as POST, PUT and PATCH will typically include data to be processed by the server such as book details or user profile information.

Below is a more elaborate request message, with additional headers and message body:


![Elaborate HTTP request with additional headers and body](https://www3.ntu.edu.sg/home/ehchua/programming/webprogramming/images/HTTP_RequestMessageExample.png)
*Complete HTTP request with several headers and body [Chua Hock-Chuan - HTTP (HyperText Transfer Protocol) Lesson Notes]*

## Response Messages

Response messages are also composed of a Header and Body section.

### Response Header

The first line of the HTTP **response header** contains:

- **Protocol version**
- **Response status code**: a code in the range of 100 to 599 that specifies if the request was successfully fulfilled or why it failed. Will be discussed in more detail in the next section. 
- **Status message:** a brief description of the status code.

The next few lines contain **headers** such as:

- **Server type**
- **Response timestamp**
- **Content type of response body** such as html page, json, binary data, etc.


Below is a visual example of a response body.


![Anatomy of HTTP response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http_response.png)
*Anatomy of HTTP request Header [MDN Web Docs - An overview of HTTP]*


## Response Status Codes


The **response status code** is a number in the 100 to 599 range specifying if the request succeeded or failed.

The codes are grouped by "level" in addition to having specific meaning. For a more detailed list see [MDN Web Docs: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) and [Internet Assigned Numbers Authority: HTTP Semantics, Status Codes](https://www.rfc-editor.org/rfc/rfc9110.html#name-status-codes).

Below is a list of the most common HTTP status codes used with REST APIs:

### 2xx level: Success

The 200-level codes indicates that the request was understood and accepted by the server.

| Status Code | Status Message | Description                                        |
| ----------- | -------------- | -------------------------------------------------- |
| 200         | OK             | Request succeeded                                  |
| 201         | Created        | Request succeeded, and a new resource was created  |
| 204         | No Content     | Request succeeded, and no content will be returned | 

### 3xx level: Redirection

300-level codes indicates the client must take additional action to complete the request.

| Status Code | Status Message    | Description                                                                |
| ----------- | ----------------- | -------------------------------------------------------------------------- |
| 301         | Moved Permanently | Resource URL was changed permanently. New URL given in the response header |
| 304         | Not Modified      | Resource unchanged, use previous version (used for caching)                | 


### 4xx level: Client Error

400-level codes are used in situations where the error was caused by the client.


| Status Code | Status Message | Description                                                                 |
| ----------- | -------------- | --------------------------------------------------------------------------- |
| 400         | Bad Request    | Request cannot be processed due to client error (syntax or invalid routing) |
| 401         | Unauthorized   | Client must authenticate before the request is processed                    |
| 403         | Forbidden      | Client does not have access rights to the resource                          |
| 404         | Not Found      | Server cannot find the requested resource                                   |
| 409         | Conflict       | The request conflicts with the current state of the server                  |


### 5xx level: Server Error

500-level codes indicates that the server has encountered an error or is otherwise incapable of performing the request.

| Status Code | Status Message        | Description                                                          |
| ----------- | --------------------- | -------------------------------------------------------------------- |
| 500         | Internal Server Error | Server has encountered a situation it does not know how to handle.   |
| 501         | Not Implemented       | Request method is not supported by the server and cannot be handled. | 


## Knowledge Check


<iframe src="https://app.Lumi.education/api/v1/run/KqmlgZ/embed" width="100%" height="350" frameborder="20" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>

<br>

<iframe src="https://app.Lumi.education/api/v1/run/mwV02u/embed" width="100%" height="900" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>

<br>

<iframe src="https://app.Lumi.education/api/v1/run/cX1ZwT/embed" width="100%" height="400" frameborder="20" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
