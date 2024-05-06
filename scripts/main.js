import { GuestList } from "./Guests.js"



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="guests">
    <section>
        <h2>Guests</h2>
        ${GuestList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML