import { GuestList } from "./Guests.js"



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="guests">
    <section>
        <h1>Guests</h1>
        ${GuestList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML