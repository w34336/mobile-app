# Add Suit

Used to add an suit.

**URL** : `/api/item/suit/`

**Method** : `POST`

**Auth required** : YES

**Admin required** : YES

**Data constraints (Only provide needed attributes)**

```json
{
    "name": "[suit name]",
    "price": "[price]",
    "img": "[img url]",
    "items": [
        "id1", "id2", "id3", "etc..."
    ],
    
    "height":{
        "max": "[Number in cm]",
        "min": "[Number in cm]"
    },
    "weight":{
        "max": "[Number in kg]",
        "min": "[Number in kg]"
    },
    "skinColor":[
        "c1", "c2", "c3", "etc..."
    ],
    "belly":[
        "b1", "b2", "b3", "etc..."
    ],
    "shoulderShape":[
        "shape1", "shape2", "etc..."
    ],
    "legShape":[
        "shape1", "shape2", "etc..."
    ],
    "legTorsoRatio":{
        "max": "[Number]",
        "min": "[Number]"
    },
    "bodyShape":[
        "shape1", "shape2", "etc..."
    ],
    "atLength":{
        "max": "[Number]",
        "min": "[Number]"
    },
    "neckType":[
       "t1", "t2", "etc..."
    ],
    "gender":[
        "male", "female"
    ]
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