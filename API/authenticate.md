# Authenticate

Used to collect a Token for a registered User.

**URL** : `/api/authenticate/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "username": "[username in plain text]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "username": "lesterlyu",
    "password": "abcd1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "success":true,
    "msg":"Enjoy your token!",
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsInVzZXJuYW1lIjoiMTIzIiwiaWF0IjoxNTEwMzQzMTY0LCJleHAiOjE1MTg5ODMxNjR9.VJh8XERpV7njf_5Zs7vPAnBX1iRT5LcfStefZc5lJkM"
}
```

## Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "success": false,
    "msg": "Authentication failed. User not found."
}
```
OR
```json
{
    "success": false,
    "msg": "Authentication failed. Wrong password."
}
```