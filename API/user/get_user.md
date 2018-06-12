# Get User Info

Used to register a User.

**URL** : `/api/user/`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "height": "[190]",
    "weight": "[80]",
    "skinColor": "[String]",
    "belly": "[ture / false]",
    "shoulderShape": "[String]]",
    "legShape": "[String]]",
    "legTorsoRatio": "[Number]",
    "bodyShape": "[String]",
    "atLength": "[String]]",
    "neckType": "[String]]"
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
