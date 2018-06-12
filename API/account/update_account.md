# Update Account Info

Used to update an account info.

**URL** : `/api/account/`

**Method** : `PUT`

**Auth required** : YES

**Data constraints (Only provide needed attributes)**

```json
{
    "password": "[password in plain text]",
    "admin": "[is admin? (true/false)]",
    "email": "[valid email address]",
    "name": "[Real name]",
    "address": "[home address]",
    "phone": "[phone number]",
    "country": "[country]",
    "city": "[city]"
}
```

**Data example (Update email and phone number)**

```json

{
    "email": "123@gmail.com",
    "phone": "2333333"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "success":true
}
```

## Error Response

**Condition** : System Error

**Code** : `500 INTERNAL ERROR`

**Content** :

```json
{
    "success":false,
    "msg": "error message"
}
```