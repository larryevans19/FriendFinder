// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.

let playersArray = [
    {
        "name": "Mario",
        "phone": "404.555.2345",
        "email": "mario@tennismatch.com",
        "hand": "Right",
        "pic": "../images/mario.png",
        "scores": [
            "1",
            "2",
            "5",
            "4",
            "1", 
            "5",
            "1",
            "4",
            "4",
            "5"

        ]
    },
    {
        "name": "Luigi",
        "phone": "404.555.2541",
        "email": "luigi@tennismatch.com",
        "hand": "Right",
        "pic": "../images/luigi.png",
        "scores": [
            "5",
            "1",
            "3",
            "4",
            "2",
            "1",
            "3",
            "2",
            "2",
            "2"
        ]
    },
    {
        "name": "Toad",
        "phone": "404.555.TOAD",
        "email": "toad@tennismatch.com",
        "hand": "Left",
        "pic": "../images/toad.png",
        "scores": [ 
            "2",
            "1",
            "3",
            "2",
            "4",
            "2",
            "5",
            "2",
            "5",
            "5"
        ]
    },
    {
        "name": "Yoshi",
        "phone": "404.555.5217",
        "email": "yoshi@tennismatch.com",
        "hand": "Right",
        "pic": "../images/yoshi.png",
        "scores": [
            "3",
            "2",
            "5",
            "5",
            "4",
            "2",
            "1",
            "4",
            "3",
            "1"
        ]
    },
    {
        "name": "Donkey Kong",
        "phone": "404.555.3467",
        "email": "donkeykong@tennismatch.com",
        "hand": "Right",
        "pic": "../images/donkey.png",
        "scores": [
            "5",
            "2",
            "5",
            "4",
            "3",
            "4",
            "1",
            "4",
            "3",
            "1"
        ]
    },
    {
        "name": "Diddy",
        "phone": "404.555.5465",
        "email": "diddy@tennismatch.com",
        "hand": "Right",
        "pic": "../images/diddy.png",
        "scores": [
            "5",
            "2",
            "2",
            "4",
            "1",
            "4",
            "2",
            "2",
            "3",
            "5"
        ]
    },
    {
        "name": "Shy Guy",
        "phone": "404.555.2587",
        "email": "shyguy@tennismatch.com",
        "hand": "Right",
        "pic": "../images/shyguy.png",
        "scores": [
            "1",
            "5",
            "3",
            "1",
            "2",
            "5",
            "1",
            "5",
            "1",
            "4"
        ]
    },
    {
        "name": "Wario",
        "phone": "404.555.6528",
        "email": "wario@tennismatch.com",
        "hand": "Right",
        "pic": "../images/wario.png",
        "scores": [
            "4",
            "4",
            "3",
            "2",
            "4",
            "4",
            "5",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name": "Bowser",
        "phone": "404.555.9871",
        "email": "bowser@tennismatch.com",
        "hand": "Right",
        "pic": "../images/bowser.png",
        "scores": [
            "3",
            "2",
            "4",
            "2",
            "1",
            "4",
            "3",
            "4",
            "1",
            "3"
        ]
    },

    {
        "name": "Koopa Troopa",
        "phone": "404.555.7812",
        "email": "koopatroopa@tennismatch.com",
        "hand": "Right",
        "pic": "../koopa.png",
        "scores": [
            "2",
            "1",
            "4",
            "3",
            "3",
            "2",
            "4",
            "4",
            "1",
            "3"
        ]
    },
    {
        "name": "Vyjoo",
        "phone": "404.555.2461",
        "email": "vyjoo@tennismatch.com",
        "hand": "Right",
        "pic": "/images/vyjoo.png",
        "scores": [
            "2",
            "1",
            "2",
            "3",
            "2",
            "1",
            "2",
            "1",
            "1",
            "5"
        ]
    }
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = playersArray;