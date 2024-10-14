const model = {
    app: {
        pages: ["index", "profile", "slopeInfo", "addSlope", "register", "login", "newEvent"],
        currentPage: "index",
        loggedIn: false,
    },

    input: {
        logIn: {
            userName: null,
            password: null,
        },
        registerUser: {
            userName: null,
            name: null,
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
            name: null,
            date: null,
            slope: null,
            comment: null,
            deadLine: null,
        },
        addSlope: {
            name: null,
            location: null,
            difficulty: null,
            description: null,
            comment: null,
            photo: null,
            type: null,
        },

    },

    data: {
        users: [{
            id: null,
            name: "",
            password: null,
            profilePicture: "",
            adress: "",
            phoneNumber: null,
            goals: {
                title: "",
                description: "",
                amount: null,
            },
            eventsAttending: [],
        },
        ],
        slopes: [{
            id: null,
            name: "",
            location: "",
            description: "",
            ratings: [],
            avgRating: null,
            difficulty: null,
            type: [],
            photo: null,
            comment: [],
        },
        ],

        events: [{
            id: null,
            name: "",
            slope: "",
            date: "",
            comment: [],
            members: [],   
            deadLine: null, 
            },
        ],

    },

}