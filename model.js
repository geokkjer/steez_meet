const model = {
    app: {
        pages: ["home", "profile", "slopeInfo", "addSlope", "register", "login", "newEvent"],
        currentPage: "home",
        html: document.getElementById("app"),
        loggedInId: 0,
        currentEventId: 0,
        isLoggedIn: false,
        userData: {},
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
            { id: 1, type: "off-Piste" },
            { id: 2, type: "Park" },
        ],

        users: [{
            id: 1,
            isAdmin: true,
            image: null,
            userName: "kjasalt",
            firstName: "Kjartan",
            lastName: "Salto",
            email: "kjartansalto@gmail.com",
            password: "kjasalt!23",
            profilePicture: "img/profile.png",
            address: "Saltosvingen 23",
            phoneNumber: 48356902,
            goals: {
                title: "Ta salto",
                description: "Jeg skal lære meg å ta salto",
                amount: 5,
                progress: [],
            },
            eventsAttending: [7],
            myEvents: [7],
            slopesAdded: [22, 23],
        },
        {
            id: 2,
            isAdmin: false,
            image: null,
            userName: "barrein",
            firstName: "Bart",
            lastName: "Reindal",
            email: "bartreindal@hotmail.no",
            password: "barrein",
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


        {
            id: 3,
            isAdmin: false,
            image: null,
            userName: "torsno",
            firstName: "Tor",
            lastName: "Snøplanke",
            email: "torsnoplanke@gmail.com",
            password: "torsno",
            profilePicture: "img/profile.png",
            address: "Snødalen 12",
            phoneNumber: 40536011,
            goals: {
                title: "Utføre bigjump",
                description: "Jeg skal ta en bigjump hver dag",
                amount: 7,
                progress: [],
            },
            eventsAttending: [5],
            myEvents: [2],
            slopesAdded: [],
        },

        {
            id: 4,
            isAdmin: false,
            image: null,
            userName: "hopsprett",
            firstName: "Hoppalong",
            lastName: "Sprettnes",
            email: "hsprettnes@gmail.com",
            password: "hopsprett",
            profilePicture: "img/profile2.jpg",
            address: "Kaninveien 34",
            phoneNumber: 49123944,
            goals: {
                title: "Utføre vanskelig bakke",
                description: "Fullføre den vanskeligste bakken i Blefjell",
                amount: 7,
                progress: [],
            },
            eventsAttending: [11],
            myEvents: [1],
            slopesAdded: [],
        },
        {
            id: 5,
            isAdmin: false,
            image: null,
            userName: "demo",
            firstName: "Demo",
            lastName: "Bruker",
            email: "demo123@gmail.com",
            password: "demo",
            profilePicture: "img/niccage.jpg",
            address: "demoveien 37",
            phoneNumber: 42069696,
            goals: {
                title: "Utføre vanskelig bakke",
                description: "Fullføre den vanskeligste bakken i Blefjell",
                amount: 7,
                progress: [2],
            },
            eventsAttending: [11],
            myEvents: [1],
            slopesAdded: [],
        },

        ],
        slopes: [{
            id: 1,
            name: "Blefjell",
            location: "Telemark",
            description: "Not for the Danes",
            ratings: [3, 4],
            avgRating: 3.5,
            difficulty: 4,
            type: [1],
            photo: "img/slope1.png",
            comment: [
                { id: 1, userId: 1, comment: "Denne var fin!" },
                { id: 2, userId: 2, comment: "Meh!! :p" }],
        },
        {
            id: 2,
            name: "Hovden",
            location: "Agder",
            description: "Maybe for the Danes",
            ratings: [4, 5],
            avgRating: 4.5,
            difficulty: 2,
            type: [2],
            photo: "img/slopeBlefjell.png",
            comment: [
                { id: 3, userId: 1, comment: "Ikke så vanskelig" },
                { id: 4, userId: 2, comment: "Veldig vanskelig" },
            ],
        },
        ],

        events: [{
            id: 7,
            name: "Slippery Slope",
            slope: 1,
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
            id: 8,
            name: "Slippery New Years",
            slope: 2,
            date: "31/12/2024",
            comment: [{
                id: 6,
                userId: 2,
                comment: "It's gonna be wet",
            }],
            members: [1, 3],
            deadLine: "29/12/2024",
        },
        ],
    },

}