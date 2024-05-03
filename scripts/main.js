import {Services} from "./Services.js"



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Services</h2>
        ${Services()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
       
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
  
</article>
`

mainContainer.innerHTML = applicationHTML
