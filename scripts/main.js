import {Services} from "./Services.js"
import { GuestList } from "./Guests.js"
import { Areas } from "./Areas.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = 

`
<article class="services">
    <h1>Services</h1>
    <section class="services--list__container">
        ${Services()}
    </section>
</article>

<article class="areas">
    <h1>Areas</h1>
    <section class="areas--list__container">
        ${Areas()}
    </section>
</article>

<article class="guests">
    <h1>Guests</h1>
    <section class="guests--list__container">
        ${GuestList()}
    </section>
</article
       
`
mainContainer.innerHTML = applicationHTML