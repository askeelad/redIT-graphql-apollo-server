GraphQL NodeObject API Documentation

Overview
This project provides a simple GraphQL API for managing NodeObject and Response data. It uses Express and Apollo Server to handle GraphQL queries and serves static data from a JavaScript module.
Authentication is properly implemented by JWT Bearer token

Features
Query NodeObject by ID
Retrieve related Response data using custom field resolvers
Login (just hit http://localhost:4000/login and you'll get a token)
Token for use: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTcyODM5MTQ0Mn0.4VQUTOKvx-mwKHm1YXz2zrt2rXfyEK6BqzvtVM4-wpQ

Technologies Used
Node.js
Express
Apollo Server
GraphQL
JWT

Installation
-- Clone the repository: git clone <repository-url>
-- cd repository-url
Install dependencies:
run the following command:
-- npm install
Running the Application
run the following command
-- node src/index.js
The server will run at http://localhost:4000/graphql.

sample graphiql query:
query {
node(nodeId: "6297172e70a0c165b989cd10") {
\_id
name
description
actions {
\_id
resourceTemplate {
\_id
name
description
schema
}
}
trigger {
description
resourceTemplate {
description
\_id
}
}
parents {
colour
description
}
responses {
name
\_id
}
priority
compositeId
global
colour
createdAt
updatedAt
}
}

FOR JWT use Authorization and set value like "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTcyODM5MTQ0Mn0.4VQUTOKvx-mwKHm1YXz2zrt2rXfyEK6BqzvtVM4-wpQ"
Expected response:
{
"data": {
"node": {
"\_id": "6297172e70a0c165b989cd10",
"name": "User's Email",
"description": "",
"actions": [
{
"_id": "6530933e6a1690d2f0c78a92",
"resourceTemplate": {
"_id": "62cfc19bf4573e1b32ca2295",
"name": "Send Email",
"description": null,
"schema": {
"type": "object",
"title": "Send Email",
"properties": {
"from": {
"type": "string",
"title": "From address"
},
"to": {
"type": "string",
"title": "To address"
},
"cc": {
"type": "string",
"title": "CC address"
},
"bcc": {
"type": "string",
"title": "BCC address"
},
"subject": {
"type": "string",
"title": "Subject",
"ui:type": "textTemplate"
},
"text": {
"type": "string",
"title": "Text",
"ui:type": "textTemplate",
"description": "This will be used as fallback text when HTML is applied."
},
"html": {
"type": "string",
"title": "HTML",
"ui:type": "code",
"ui:multiLine": true,
"ui:rows": 4
},
"attachments": {
"type": "array",
"title": "Attachments",
"maxItems": 10,
"items": {
"type": "object",
"title": "Attachment",
"properties": {
"path": {
"type": "string",
"title": "URL",
"ui:type": "mediaUrl"
}
}
}
},
"amp": {
"type": "string",
"title": "AMP",
"ui:hidden": true,
"ui:multiLine": true,
"ui:rows": 4
}
}
}
}
}
],
"trigger": {
"description": "",
"resourceTemplate": {
"description": null,
"\_id": "61e9ba20f9b58155162dbf52"
}
},
"parents": [
null
],
"responses": [
{
"name": "Get Email Response",
"_id": "6297189510f525833b1a9305"
}
],
"priority": null,
"compositeId": "L2ZrxYMqAW44L5tB",
"global": false,
"colour": null,
"createdAt": 1654069038783,
"updatedAt": 1696991678725
}
}
}
