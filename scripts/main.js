import {Services} from "./Services.js"
import { GuestList } from "./Guests.js"



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Services</h2>
        ${Services()}
    </section>
    <article class="guests">
    <section>
        <h2>Guests</h2>
        ${GuestList()}
    </section>
</article
       
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
  
</article>
`

mainContainer.innerHTML = applicationHTML
