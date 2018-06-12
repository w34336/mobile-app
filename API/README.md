# The Look Webserver Backend APIs

## BASE URL: http://lesterlyu.com/

## Open Endpoints

Open endpoints require no token Authentication.

* [Registration (create an account)](register.md) : `POST /api/register/`
    <br>![Progress](http://progressed.io/bar/70)
* [Authenticate (get a token)](authenticate.md) : `POST /api/authenticate/`
    <br>![Progress](http://progressed.io/bar/100)

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Authenticate above.

> i.e. You need to add this into Header: 
> ```json
> {
>     "x-access-token": "YOUR_TOKEN_HERE"
> }
> ```

### Account related

Endpoints for basic account operations, i.e. change password, change home address.

* [Get account info](account/get_account.md) : `GET /api/account/` 
    <br>![Progress](http://progressed.io/bar/0)
* [Update account info](account/update_account.md) : `PUT /api/account/` 
    <br>![Progress](http://progressed.io/bar/0)

### User Personal Data related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request.

* [Get user info](user/get_user.md) : `GET /api/user/`
    <br>![Progress](http://progressed.io/bar/0)
* [Update user info](user/update_user.md) : `PUT /api/user/`
    <br>![Progress](http://progressed.io/bar/0)


* [Item/Suit operation](user/item.md) : `POST /api/user/item/`
    <br>![Progress](http://progressed.io/bar/0)
* [Recommended suits](user/recommendation.md) : `GET /api/user/recommendation/`
    <br>![Progress](http://progressed.io/bar/0)



### Item / Suit related

Endpoints for viewing and manipulating the Item(cloth) / Suit. **User must be admin**.

* [Add an item](item/item.md) : `POST /api/item/item`
    <br>![Progress](http://progressed.io/bar/0)
* [Auto add an item](item/auto_item.md) : `POST /api/item/autoitem`
    <br>![Progress](http://progressed.io/bar/0)
* [Add a suit](item/suit.md) : `POST /api/item/suit`
    <br>![Progress](http://progressed.io/bar/0)

### Purchase related (TO-DO)

