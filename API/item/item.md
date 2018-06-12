# Add Item

Used to add an item.

**URL** : `/api/item/item/`

**Method** : `POST`

**Auth required** : YES

**Admin required** : YES

**Data constraints (Only provide needed attributes)**

| name        | type           | example  |
| ------------- |:-------------:| -----:|
| skinColor     | String     | 12122 |
| skinColor     | String     | 12122 |
| skinColor     | String     | 12122 |
| skinColor     | String     | 12122 |

```json
{
    "url": "[item url]",
    "name": "[item name]",
    "price": "[price]",
    "img": "[img url]",
    "type": [
        "tag1", "tag2", "tag3", "etc..."
    ],
    "season": [
        "s1", "s2", "s3", "etc..."
    ],
    "brand": "[brand name]",
    "allSizes": [
        "s1", "s2", "s3", "etc..."
    ],
    "colors":  [
        "blue", "white", "green", "etc..."
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
