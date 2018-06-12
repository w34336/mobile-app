# Get Account Info

Used to get an account info.

**URL** : `/api/account/`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "username": "lesterlyu",
    "password": "abcd1234",
    "admin": "true",
    "email": "lvds2000@gmail.com",
    "name": "Dishu Lyu",
    "phone": "121232323",
    "address": "123 Street",
    "city": "Toronto",
    "country": "Canada"
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