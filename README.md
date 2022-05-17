# Triangles API

All triangles solution express app.

### Overview

This tool was developed in Node (v16), using express & aws-sdk.
It is using the API GATEWAY with api key required and method throttling.

It must have the Header:
``` 
x-api-key: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

https://46iobrvvmg.execute-api.us-east-1.amazonaws.com/prod/

#### GET / 
It will return the History of previous calculations performed by the API, each calculation is stored in this format:
```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://github.com/felipefsfs/triangles/model/hist.schema.json",
  "title": "Hist",
  "description": "Historical data",
  "type": "object",
  "properties": {
    "timestamp_ts": {
      "description": "Unix Timestamp",
      "type": "integer"
    },
    "result_type": {
      "description": "scalene, isosceles or equilateral",
      "type": "string"
    },
    "lengths": {
      "description": "Sides of the triangle calculated",
      "type": "array",
      "items": {
        "type": "number"
      },
      "minItems": 3,
      "maxItems": 3
    }
  },
  "required": [ "timestamp_ts", "result_type", "lengths" ]
}
```
![GET VSCODE](/media/get.PNG)

#### POST /
It will calculate the type of triangle based on the sides passed as the application/json body:
```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://github.com/felipefsfs/triangles/model/triangle.schema.json",
  "title": "Input",
  "description": "Triangle lengths",
  "type": "object",
  "properties": {
    "length1": {
      "description": "Length of 1 side (A) of the triangle",
      "type": "number"
    },
    "length2": {
      "description": "Length of 1 side (B) of the triangle",
      "type": "number"
    },
    "length3": {
      "description": "Length of 1 side (C) of the triangle",
      "type": "number"
    }
  },
  "required": [ "length1", "length2", "length3" ]
}
```

This should be the response for a valid body:
```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://github.com/felipefsfs/triangles/model/result.schema.json",
  "title": "Result",
  "description": "Result of the calculation",
  "type": "object",
  "properties": {
    "result": {
      "description": "scalene, isosceles or equilateral",
      "type": "string"
    }
  },
  "required": [ "result" ]
}
```

![POST VSCODE](/media/post.PNG)


![METHOD](/media/method.PNG)
![RATE](/media/rate.PNG)

### Running locally
Must setup environment variables: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, for Dynamo DB connection

```
$ npm install
```

```
$ npm start
```

### Testing
This will run all the mocha tests

```
$ npm test
```
