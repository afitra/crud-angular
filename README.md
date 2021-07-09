# crud-angular
install backend
cd testing-api  

0. install node
1. set env 
2. cd tenting-api/ 
3. npm install
4. node seed.js
5. npm run start / dev on nodemon










url 	:/admin/queue
method	: GET
body	: none
response	: json
{
    "status": true,
    "time": "10/07/2021 , 05:31:17",
    "queue": "A019"
}
=======================================
url 	:/admin/signin
method	: POST
body	: none
response	: session and json
{
    "status": true,
    "message": "anda berhasil login"
}

======================================
url 	    :/admin/signout
method	    : GET
body	    : none
response	: clear session and json
{
    "status": true,
    "message": "anda berhasil logout"
}

======================================
url 	:/admin/visitor
method	: POST
body	: 
{
    name	            : string (reqired),
    pic	                : string (reqired),
    city	            : string (reqired),
    remark	            : string (reqired),
    npwp	            : string (reqired),
    costumer_category   : string (reqired),
    address1            : string (reqired),
    address2            : string (reqired),
    contact             : string (reqired),
    region              : string (reqired),
    province            : string (reqired),
    expedition          : string (reqired),
    sales_id            : string objectId (required),
}

response	:  json
{
    "status": true,
    "visitor": {
        "_id": "60e89fc78ab6e5e3fafa8437",
        "name": " del piero",
        "pic": " this is pic",
        "city": " kediri",
        "remark": " this is remark",
        "npwp": " 123456",
        "costumer_category": " this is costumer_category",
        "address1": " this is address1",
        "address2": " this is address2",
        "contact": " 628523000000",
        "region": " this is region",
        "province": " this is province",
        "expedition": " this is expedition",
        "sales_id": "5e96cbe292b97300fc903346",
        "__v": 0
    }
}

======================================
url 	    :/admin/visitor
method	    : GET
body	    : none
response	: json

{
    "status": true,
    "visitor": [
        {
            "_id": "60e727e9b004f83caf03aee2",
            "name": " del piero dong",
            "pic": " this is picleh",
            "city": " kediri",
            "remark": " this is remark",
            "npwp": " 123456",
            "costumer_category": " this is costumer_category",
            "address1": " this is address1",
            "address2": " this is address2",
            "contact": " 628523000000",
            "region": " this is region",
            "province": " this is province",
            "expedition": " this is expedition",
            "sales_id": {
                "_id": "5e96cbe292b97300fc903346",
                "name": "budi",
                "id": "SLS-1",
                "__v": 0
            },
            "queue": "A009",
            "time": "08/07/2021 , 23:29:29",
            "__v": 0
        }, 
    ],
    
}

======================================
url 	    :/admin/visitor/:id
params      : string(objectId)
method	    : GET
body	    : none
response	: json

{
  status: true,
  visitor: {
    _id: "60e727e9b004f83caf03aee2",
    name: " del piero dong",
    pic: " this is picleh",
    city: " kediri",
    remark: " this is remark",
    npwp: " 123456",
    costumer_category: " this is costumer_category",
    address1: " this is address1",
    address2: " this is address2",
    contact: " 628523000000",
    region: " this is region",
    province: " this is province",
    expedition: " this is expedition",
    sales_id: "5e96cbe292b97300fc903346",
    queue: "A009",
    time: "08/07/2021 , 23:29:29",
    __v: 0,
  },
  sales: [
    { _id: "5e96cbe292b97300fc903346", name: "budi", id: "SLS-1", __v: 0 },
    { _id: "5e96cbe292b97300fc903311", name: "bejo", id: "SLS-2", __v: 0 },
    { _id: "5e96cbe292b97300fc903322", name: "imam", id: "SLS-3", __v: 0 },
    { _id: "5e96cbe292b97300fc903333", name: "mad", id: "SLS-4", __v: 0 },
  ],
}

======================================
url 	    :/admin/visitor/:id
params      : string(objectId)
method	    : PUT
body	    : json
{
    name	            : string (reqired),
    pic	                : string (reqired),
    city	            : string (reqired),
    remark	            : string (reqired),
    npwp	            : string (reqired),
    costumer_category   : string (reqired),
    address1            : string (reqired),
    address2            : string (reqired),
    contact             : string (reqired),
    region              : string (reqired),
    province            : string (reqired),
    expedition          : string (reqired),
    sales_id            : string objectId (required),
}

response	: json

{
    "status": true,
    "visitor": {
        "_id": "60e712d415f6bd32afacbfe9",
        "name": " totti",
        "pic": " this is pic lah ",
        "city": " kediri lah",
        "remark": " this is remark lah",
        "npwp": " 123456 lah",
        "costumer_category": " this is costumer_category lah",
        "address1": " this is address1 lah",
        "address2": " this is address2 lah",
        "contact": " 628523000000 lah",
        "region": " this is region si",
        "province": " this is province si",
        "expedition": " this is expedition si",
        "sales_id": {
            "_id": "5e96cbe292b97300fc903346",
            "name": "budi",
            "id": "SLS-1",
            "__v": 0
        },
        "__v": 0
    }
}

======================================
url 	    :/admin/visitor/:id
params      : string(objectId)
method	    : DELETE
body	    : none
response    : json
{
    "status": true,
    "message": "visitor has been deleted"
}
