# DIslike or like or bookmark an Item / Suit

Used to do some operations on an item or suit for a user.

**URL** : `/api/user/item`

**Method** : `POST`

**Auth required** : YES

**Data constraints (Only provide needed attributes)**

```json
{
    "operation": "[like / dislike / add_bookmark / remove_bookmark]",
    "type": "[item / suit]",
    "id": "item / suit ID"
}
```

**Data example**

```json
{
    "operation": "like",
    "type": "item",
    "id": "g3490tiu0jv0wrjm23r-2fp223-kf3-2fk-2"
}
```
OR
```json
{
    "operation": "add_bookmark",
    "type": "suit",
    "id": "verlg34-=tkremgowe-0r1-0rewfk2-==3rf"
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