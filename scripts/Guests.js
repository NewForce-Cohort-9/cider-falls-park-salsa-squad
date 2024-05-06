import {getGuests} from "./database.js"



export const GuestList = () => {
    const guests = getGuests()

    let guestHTML = "<ul>"

    for (const guest of guests) {
        // Convert each dock object to an <li> and append to the docksHTML string
        guestHTML += `<li data-type="guest"
                          data-id="${guest.id}"
                          data-name="${guest.name}"
                          data-areaId="${guest.areaId}"
                          >${guest.name}</li>`
    }

    guestHTML += "</ul>"

    return guestHTML
}