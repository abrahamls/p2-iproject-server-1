# API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /party`
- `POST /party`
- `GET /accommodation/histories`
- `GET /accommodation/:accommodationId`
- `PUT /accommodation/:accommodationId`
- `DELETE /accommodation/:accommodationId`
- `PATCH /accommodation/:accommodationId`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "name": "string",
  "email": "string",	
  "password": "string",
  "rank": "string"
}
```

_Response (201 - Created)_

```json
{{
  "name": "string",
  "email": "string",
  "rank": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Username is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Name is required"
}
OR
{
  "message": "rank is required is required"
}

```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```
&nbsp;

## 3. GET /party

Description:
- fetch all parties

Request:

- headers: 

```json
{
  "access_token": "string"
}
```


_Response (200 - OK)_
```json
[
    {
        "id": 1,
        "name": "ROAD TO TI",
        "partyLeaderId": 1,
        "mode": "ranked",
        "schedule": "2021-12-04T00:00:00.000Z",
        "createdAt": "2021-11-17T22:03:15.132Z",
        "updatedAt": "2021-11-17T22:03:15.132Z",
        "members": [
            {
                "id": 1,
                "name": "user1",
                "rank": "crusader",
                "heroes": [],
                "PartiesUser": {
                    "PartyId": 1,
                    "UserId": 1,
                    "status": "approved",
                    "createdAt": "2021-11-17T22:03:15.159Z",
                    "updatedAt": "2021-11-17T22:03:15.159Z"
                }
            },
            {
                "id": 2,
                "name": "miracle",
                "rank": "immortal",
                "heroes": [],
                "PartiesUser": {
                    "PartyId": 1,
                    "UserId": 2,
                    "status": "pending",
                    "createdAt": "2021-11-17T22:28:13.392Z",
                    "updatedAt": "2021-11-17T22:28:13.392Z"
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "Bapack Bapack gamer",
        "partyLeaderId": 1,
        "mode": "ranked",
        "schedule": "2021-11-25T00:00:00.000Z",
        "createdAt": "2021-11-17T22:07:36.209Z",
        "updatedAt": "2021-11-17T22:07:36.209Z",
        "members": [
            {
                "id": 1,
                "name": "user1",
                "rank": "crusader",
                "heroes": [],
                "PartiesUser": {
                    "PartyId": 2,
                    "UserId": 1,
                    "status": "approved",
                    "createdAt": "2021-11-17T22:07:36.231Z",
                    "updatedAt": "2021-11-17T22:07:36.231Z"
                }
            },
            {
                "id": 2,
                "name": "miracle",
                "rank": "immortal",
                "heroes": [],
                "PartiesUser": {
                    "PartyId": 2,
                    "UserId": 2,
                    "status": "pending",
                    "createdAt": "2021-11-17T22:28:18.941Z",
                    "updatedAt": "2021-11-17T22:28:18.941Z"
                }
            }
        ]
    }
]
```

&nbsp;


## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```