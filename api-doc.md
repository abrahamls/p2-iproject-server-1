# API Documentation

## Endpoints :

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
{
  "id": 6,
  "name": "user10",
  "rank": "ancient"
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

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6InVzZXIzIiwiZW1haWwiOiJ1c2VyM0BtYWlsLmNvbSIsInJhbmsiOiJjcnVzYWRlciIsImlhdCI6MTYzNzI3ODc4Nn0.bGItPfZC48flglFuOeBcZnbS8HlwfHhgn6nj_NpyI-w"
}
```

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
    "id": 7,
    "name": "sadas",
    "partyLeaderId": 1,
    "mode": "ranked",
    "schedule": "2021-12-02T23:29:00.000Z",
    "members": [
      {
        "id": 1,
        "name": "user1",
        "rank": "crusader",
        "roles": [
          {
            "title": "midlaner",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 1,
              "createdAt": "2021-11-17T20:52:56.577Z",
              "updatedAt": "2021-11-17T20:52:56.577Z"
            }
          },
          {
            "title": "carry",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 2,
              "createdAt": "2021-11-17T20:53:02.413Z",
              "updatedAt": "2021-11-17T20:53:02.413Z"
            }
          },
          {
            "title": "offlaner",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 3,
              "createdAt": "2021-11-17T21:02:37.069Z",
              "updatedAt": "2021-11-17T21:02:37.069Z"
            }
          },
          {
            "title": "hardsupport",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 5,
              "createdAt": "2021-11-17T21:03:50.186Z",
              "updatedAt": "2021-11-17T21:03:50.186Z"
            }
          },
          {
            "title": "support",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 4,
              "createdAt": "2021-11-17T21:03:51.753Z",
              "updatedAt": "2021-11-17T21:03:51.753Z"
            }
          }
        ],
        "PartiesUser": {
          "id": 19,
          "PartyId": 7,
          "UserId": 1,
          "status": "approved",
          "createdAt": "2021-11-18T23:29:15.132Z",
          "updatedAt": "2021-11-18T23:29:15.132Z"
        }
      }
    ]
  },
  {
    "id": 6,
    "name": "aasdasd",
    "partyLeaderId": 1,
    "mode": "ranked",
    "schedule": "2021-11-30T23:30:00.000Z",
    "members": [
      {
        "id": 1,
        "name": "user1",
        "rank": "crusader",
        "roles": [
          {
            "title": "midlaner",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 1,
              "createdAt": "2021-11-17T20:52:56.577Z",
              "updatedAt": "2021-11-17T20:52:56.577Z"
            }
          },
          {
            "title": "carry",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 2,
              "createdAt": "2021-11-17T20:53:02.413Z",
              "updatedAt": "2021-11-17T20:53:02.413Z"
            }
          },
          {
            "title": "offlaner",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 3,
              "createdAt": "2021-11-17T21:02:37.069Z",
              "updatedAt": "2021-11-17T21:02:37.069Z"
            }
          },
          {
            "title": "hardsupport",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 5,
              "createdAt": "2021-11-17T21:03:50.186Z",
              "updatedAt": "2021-11-17T21:03:50.186Z"
            }
          },
          {
            "title": "support",
            "UsersRole": {
              "UserId": 1,
              "RoleId": 4,
              "createdAt": "2021-11-17T21:03:51.753Z",
              "updatedAt": "2021-11-17T21:03:51.753Z"
            }
          }
        ],
        "PartiesUser": {
          "id": 18,
          "PartyId": 6,
          "UserId": 1,
          "status": "approved",
          "createdAt": "2021-11-18T23:28:36.807Z",
          "updatedAt": "2021-11-18T23:28:36.807Z"
        }
      }
    ]
  }
]
```

&nbsp;

## 4. POST /party

Description:

- create new party

Request:

- body:

```json
{
  "name": "string",
  "mode": "string",
  "schedule": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": 8,
  "name": "tim family mantul",
  "mode": "chill",
  "partyLeaderId": 5,
  "schedule": "2021-10-09T17:00:00.000Z",
  "updatedAt": "2021-11-18T23:52:28.544Z",
  "createdAt": "2021-11-18T23:52:28.544Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
OR
{
  "message": "Mode is required"
}
OR
{
  "message": "Schedule is required"
}
OR
{
  "message": "Invalid date format!"
}

```

&nbsp;

## 5. GET /party/leadparties

Description:

- get parties which the user made

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
    "id": 8,
    "name": "tim family mantul",
    "partyLeaderId": 5,
    "mode": "chill",
    "schedule": "2021-10-09T17:00:00.000Z"
  }
]
```

&nbsp;

## 6. GET /party/memberparties

Description:

- Get all parties where user is a member/leader
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
    "id": 13,
    "PartyId": 1,
    "UserId": 5,
    "status": "approved",
    "createdAt": "2021-11-18T19:54:30.117Z",
    "updatedAt": "2021-11-18T19:55:24.651Z",
    "MemberParties": {
      "id": 1,
      "name": "ROAD TO TI",
      "partyLeaderId": 1,
      "mode": "ranked",
      "schedule": "2021-12-04T00:00:00.000Z",
      "createdAt": "2021-11-17T22:03:15.132Z",
      "updatedAt": "2021-11-17T22:03:15.132Z"
    }
  },
  {
    "id": 12,
    "PartyId": 2,
    "UserId": 5,
    "status": "approved",
    "createdAt": "2021-11-18T19:54:29.043Z",
    "updatedAt": "2021-11-18T19:55:26.422Z",
    "MemberParties": {
      "id": 2,
      "name": "Bapack Bapack gamer",
      "partyLeaderId": 1,
      "mode": "ranked",
      "schedule": "2021-11-25T00:00:00.000Z",
      "createdAt": "2021-11-17T22:07:36.209Z",
      "updatedAt": "2021-11-17T22:07:36.209Z"
    }
  },
  {
    "id": 11,
    "PartyId": 3,
    "UserId": 5,
    "status": "approved",
    "createdAt": "2021-11-18T19:54:27.744Z",
    "updatedAt": "2021-11-18T19:55:29.194Z",
    "MemberParties": {
      "id": 3,
      "name": "contohhhh",
      "partyLeaderId": 1,
      "mode": "chill",
      "schedule": "2021-12-02T00:00:00.000Z",
      "createdAt": "2021-11-18T19:51:56.840Z",
      "updatedAt": "2021-11-18T19:51:56.840Z"
    }
  },
  {
    "id": 20,
    "PartyId": 8,
    "UserId": 5,
    "status": "approved",
    "createdAt": "2021-11-18T23:52:28.558Z",
    "updatedAt": "2021-11-18T23:52:28.558Z",
    "MemberParties": {
      "id": 8,
      "name": "tim family mantul",
      "partyLeaderId": 5,
      "mode": "chill",
      "schedule": "2021-10-09T17:00:00.000Z",
      "createdAt": "2021-11-18T23:52:28.544Z",
      "updatedAt": "2021-11-18T23:52:28.544Z"
    }
  }
]
```

&nbsp;

## 7. GET /party/partymembers/:partyId

Description:

- Get Members of a Party

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
    "name": "user1",
    "rank": "crusader"
  },
  {
    "id": 2,
    "name": "miracle",
    "rank": "immortal"
  },
  {
    "id": 3,
    "name": "john doe",
    "rank": "crusader"
  },
  {
    "id": 4,
    "name": "user1",
    "rank": "legend"
  },
  {
    "id": 5,
    "name": "user3",
    "rank": "crusader"
  }
]
```

&nbsp;

## 8. GET /party/pendingmembers/:partyId

Description:

- Get pending members of a Party

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
    "id": 29,
    "PartyId": 10,
    "UserId": 4,
    "status": "pending",
    "Users": {
      "name": "user1"
    }
  },
  {
    "id": 34,
    "PartyId": 10,
    "UserId": 2,
    "status": "pending",
    "Users": {
      "name": "miracle"
    }
  }
]
```

&nbsp;

## 9. POST /party/:id

Description:

- request to join party

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "status": "pending",
  "id": 40,
  "PartyId": 6,
  "UserId": 5,
  "updatedAt": "2021-11-19T00:37:00.508Z",
  "createdAt": "2021-11-19T00:37:00.508Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "You already requested to join this party! Please wait for the Party Leader to proccess your request"
}
OR
{
  "message": "You are already a member of this party!"
}

```

_Response (404 - Not Found)_

```json
{
  "message": "Party not found"
}
```

&nbsp;

## 10. POST /player/role

Description:

- add role to user database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "RoleId": "integer"
}
```

_Response (201 - Created)_

```json
{
  "RoleId": 1,
  "UserId": 5,
  "updatedAt": "2021-11-19T00:43:44.262Z",
  "createdAt": "2021-11-19T00:43:44.262Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "you already added this role!"
}
OR
{
  "message": "Role Is is required!"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Role Not Found"
}
```

&nbsp;

## 11. PATCH /player/status

Description:

- accept request from other user to join the party (authorization needed)

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "status has been updated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Party Not Found"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not authorized!"
}
```

&nbsp;

## 12. PATCH /player/rank

Description:

- add role to user database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Rank is required!"
}
```

_Response (200 - OK)_

```json
{
  "message": "Your Rank has been updated!"
}
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
