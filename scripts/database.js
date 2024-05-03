const database = {

    areas: [
    {
        id: 1,
        name: "Chamfort River"
    },
    {
        id: 2,
        name: "Lost Wolf Hiking Trail"
    },
    {
        id: 3,
        name: "Lodge"
    },
    {
        id: 4,
        name: "Gander River"
    },
    {
        id: 5,
        name: "Campgrounds"
    },
    {
        id: 6,
        name: "Pine Bluffs Trails"
    }],

    services: [
    {
        id: 1,
        name: "Rafting"
    },
    {
        id: 2,
        name: "Canoeing"
    },
    {
        id: 3,
        name: "Fishing"
    },
    {
        id: 4,
        name: "Hiking"
    },
    {
        id: 5,
        name: "Picnicking"
    },
    {
        id: 6,
        name: "Rock Climbing"
    },
    {
        id: 7,
        name: "Lodging"
    },
    {
        id: 8,
        name: "Parking"
    },
    {
        id: 9,
        name: "Information"
    },
    {
        id: 10,
        name: "Zip Lines"
    }],

    attractions: [
    {
        id: 1,
        name: "Hotel"
    },
    {
        id: 2,
        name: "Restaurant"
    },
    {
        id: 3,
        name: "Office"
    },
    {
        id: 4,
        name: "Park"
    },
    {
        id: 6,
        name: "Children Play Area"
    },
    {
        id: 7,
        name: "Food Vendor"
    }],

    guests: [
    {
        id: 1,
        name: "Ricky Bobby",
        areaId: 1
    },
    {
        id: 2,
        name: "Jane Doe",
        areaId: 5
    },
    {
        id: 3,
        name: "Adadon the Despoiler",
        areaId: 2
    },
    {
        id: 4,
        name: "LeBron James",
        areaId: 3
    },
    {
        id: 5,
        name: "Susan Smith",
        areaId: 5
    },
    {
        id: 6,
        name: "Leaman Russ",
        areaId: 6
    },
    {
        id: 7,
        name: "Peter Griffin",
        areaId: 2
    },
    {
        id: 8,
        name: "Louis Griffin",
        areaId: 2
    },
    {
        id: 9,
        name: "Donny Thornberry",
        areaId: 6
    },
    {
        id: 10,
        name: "Wong Fe-Hung",
        areaId: 1
    },
    {
        id: 11,
        name: "Patrick Star",
        areaId: 3
    },
    {
        id: 12,
        name: "Sookie Stackhouse",
        areaId: 4
    },
    {
        id: 13,
        name: "Vlad Dracula",
        areaId: 4
    },
    {
        id: 14,
        name: "Brett Favre",
        areaId: 2
    },
    {
        id: 15,
        name: "Sarah Chaos",
        areaId: 6
    },
    {
        id: 16,
        name: "Eric Cartman",
        areaId: 3
    }],

    areaServices: [
    {
        id: 1,
        areaId: 1,
        servicesId: 1
    }, {
        id: 2,
        areaId: 1,
        servicesId: 2
    }, {
        id: 3,
        areaId: 1,
        servicesId: 3
    }, {
        id: 4,
        areaId: 2,
        servicesId: 4
    }, {
        id: 5,
        areaId: 2,
        servicesId: 5
    }, {
        id: 6,
        areaId: 2,
        servicesId: 6
    }, {
        id: 7,
        areaId: 3,
        servicesId: 7
    }, {
        id: 8,
        areaId: 3,
        servicesId: 8
    }, {
        id: 9,
        areaId: 3,
        servicesId: 9
    }, {
        id: 10,
        areaId: 3,
        servicesId: 5
    }, {
        id: 11,
        areaId: 4,
        servicesId: 3
    }, {
        id: 12,
        areaId: 4,
        servicesId: 4
    }, {
        id: 13,
        areaId: 5,
        servicesId: 7
    }, {
         id: 14,
        areaId: 5,
        servicesId: 8
    }, {
        id: 15,
        areaId: 5,
        servicesId: 9
    }, {
        id: 16,
        areaId: 6,
        servicesId: 4
    }, {
        id: 17,
        areaId: 6,
        servicesId: 5
    },{
        id: 18,
        areaId: 6,
        servicesId: 10
    }],

    areaAttractions: [
    {
        id: 1,
        areaId: 3,
        attractionId: 1
    }, {
        id: 2,
        areaId: 3,
        attractionId: 2
    }, {
        id: 3,
        areaId: 5,
        attractionId: 3
    }, {
        id: 4,
        areaId: 5,
        attractionId: 4
    }, {
        id: 5,
        areaId: 5,
        attractionId: 6
    }, {
        id: 6,
        areaId: 6,
        attractionId: 7
    }]

}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getAttractions = () => {
    return database.attractions.map(attraction => ({...attraction}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({...areaService}))
}

export const getAreaAttractions = () => {
    return database.areaAttractions.map(areaAttraction => ({...areaAttraction}))
}
