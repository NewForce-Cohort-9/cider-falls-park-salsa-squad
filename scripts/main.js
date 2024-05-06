
import { Areas } from "./Areas.js"
import { GuestList } from "./Guests.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = 

`
<h1>Area List Test</h1>
<article class="details">
    <section class="detail--column list details__areas">
        <h2>Areas</h2>
        ${Areas()}
    </section>
 


<h1>Cider Falls</h1>
<article class="guests">
    <section>
        <h2>Guests</h2>
        ${GuestList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML