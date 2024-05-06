
import { Areas } from "./Areas.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = 

`
<h1>Area List Test</h1>
<article class="details">
    <section class="detail--column list details__areas">
        <h2>Areas</h2>
        ${Areas()}
    </section>
    `




mainContainer.innerHTML = applicationHTML