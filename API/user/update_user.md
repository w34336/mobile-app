# Update User Info

Used to register a User.

**URL** : `/api/user/`

**Method** : `PUT`

**Auth required** : YES

**Data constraints (Only provide needed attributes)**

```json
{
    "height": "[Number]",
    "skinColor": "[Number]",
    "belly": "[Number]",
    "shoulderShape": "[Number]",
    "legShape": "[Number]",
    "legTorsoRatio": "[Number]",
    "bodyShape": "[Number]",
    "atLength": "[Number]",
    "neckType": "[Number]"
}
```

**Data example**

```json

{
    "height": 0,
    "skinColor": 0,
    "belly": 1,
    "shoulderShape": 2,
    "legShape": 3,
    "legTorsoRatio": 1,
    "bodyShape": 2,
    "atLength": 3,
    "neckType": 2
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
