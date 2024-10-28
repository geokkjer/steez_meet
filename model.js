const model = {
    app: {
        pages: ["home", "profile", "slopeInfo", "addSlope", "register", "login", "newEvent"],
        currentPage: "home",
        html: document.getElementById("app"),
        loggedInId: null,
    },

    input: {
        logIn: {
            userName: null,
            password: null,
        },
        registerUser: {
            userName: null,
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            confirmPassword: null,
            image: null,
            personalBio: null,
            address: null,
            phoneNumber: null,
        },
        newEvent: {
            id: null,
            name: null,
            date: null,
            slope: null,
            comment: null,
            deadLine: null,
        },
        slope: {
            rating: 0,
            comment: '',
        },
        addSlope: {
            name: null,
            location: null,
            difficulty: null,
            description: null,
            comment: null,
            photo: null,
            type: [],
        },
        addSlopeType: {
            type: "",
        }

    },

    data: {

        slopeTypes: [
            {id: 1, type: "off-Piste"}, 
            {id: 2, type: "Park"},
        ],

        users: [{
            id: 1,
            isAdmin: true,
            userName: "kjasalt",
            firstName: "Kjartan",
            lastName: "Salto",
            email: "kjartansalto@gmail.com",
            password: "passOrd!23",
            profilePicture: "img/profile.png",
            address: "Saltosvingen 23",
            phoneNumber: 48356902,
            goals: {
                title: "Ta salto",
                description: "Jeg skal lære meg å ta salto",
                amount: 5,
            },
            eventsAttending: [7],
            myEvents: [7],
            slopesAdded: [22,23],
        },
        {
            id: 2,
            isAdmin: false,
            userName: "barrein",
            firstName: "Bart",
            lastName: "Reindal",
            email: "bartreindal@hotmail.no",
            password: "pass123",
            profilePicture: "img/profile.png",
            address: "Bartedalen 1",
            phoneNumber: 44116902,
            goals: {
                title: "Ta 360 backflip",
                description: "Jeg skal lære meg å ta 360 backflip",
                amount: 3,
            },
            eventsAttending: [7],
            myEvents: [],
            slopesAdded: [],
        },
        ],
        slopes: [{
            id: 22,
            name: "Blefjell",
            location: "Telemark",
            description: "Not for the Danes",
            ratings: [3, 4],
            avgRating: 3.5,
            difficulty: 4,
            type: [1],
            photo: "img/slope1.png",
            comment: [
                {id: 1, userId: 1, comment: "Denne var fin!"}, 
                {id: 2, userId: 2, comment: "Meh!! :p"}],
        },
        {
            id: 23,
            name: "Hovden",
            location: "Agder",
            description: "Maybe for the Danes",
            ratings: [4, 5],
            avgRating: 4.5,
            difficulty: 2,
            type: [2],
            photo: "img/slope2.png",
            comment: [
                {id: 3, userId: 1, comment: "Ikke så vanskelig"}, 
                {id: 4, userId: 2, comment: "Veldig vanskelig"},
            ],
        },
        ],

        events: [{
            id: 7,
            name: "Slippery Slope",
            slope: 22,
            date: "01/11/2024",
            comment: [{
                id: 5,
                userId: 1,
                comment: "Be there or be square!",
            }],
            members: [1, 2],
            deadLine: "31/10/2024",
        },
        {
            id: 7,
            name: "Slippery New Years",
            slope: 22,
            date: "31/12/2024",
            comment: [{
                id: 6,
                userId: 2,
                comment: "It's gonna be wet",
            }],
            members: [1, 2],
            deadLine: "29/12/2024",
        },
        ],
    },

}