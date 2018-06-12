# Get a list of recommended suits

Used to register a User.

**URL** : `/api/user/recommendation/`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "suitId": "123e32rf43r3rf43",
        "name": "suit name here",
        "img": "suit image url here",
        "items": [
            {
                "itemId": "ewcm32k3-20r32r",
                "name": "item 1 name here",
                "price": "1233",
                "img": "suit image url here"
            },
            {
                "itemId": "ewcm321e1r32r",
                "name": "item 2 name here",
                "price": "1233",
                "img": "suit image url here"
            },
            {
                "itemId": "ewcm32fefewr32r",
                "name": "item 3 name here",
                "price": "1233",
                "img": "suit image url here"
            }
        ]
    },
    {
        "suitId": "123htht54543",
        "name": "suit name here",
        "img": "suit image url here",
        "items": [
            {
                "itemId": "ewcm32k3-20r32r",
                "name": "item 1 name here",
                "price": "1233",
                "img": "suit image url here"
            },
            {
                "itemId": "ewcm321e1r32r",
                "name": "item 2 name here",
                "price": "1233",
                "img": "suit image url here"
            },
            {
                "itemId": "ewcm32fefewr32r",
                "name": "item 3 name here",
                "price": "1233",
                "img": "suit image url here"
            }
        ]
    }
]
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