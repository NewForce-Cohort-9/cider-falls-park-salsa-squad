import {getServices, getAreas, getAreaServices} from "./database.js"

const services = getServices()
const areas = getAreas()
const areaServices = getAreaServices()

//What services are in an area
const findService = (areaService, allServices) => {
    let areaServ = null

    for(const service of allServices) {
        if(service.id === areaServ.serviceId) {
            areaService = service.name
        }
    }

    return areaService
}

//What areas have services
const findArea = (areaService, allAreas) => {
    let areaArea = null

    for(const area of allAreas) {
        if(area.id === areaServ.areaId) {
            areaArea = area.name
        }
    }

    return areaArea
}

export const Services = () => {
    let html = `<div data-id="${services.id}"
                data-type="service"
                > Services: `
        
    let whattoDO = true

    for (const service of areaServices) {
        if(!whattoDO){
            html += ", "
        } else {
            whattoDO = false
        }
        html +=`${service.name}`
    }
    
    html += `</div>`

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const service = findService(services)
        const area = findArea(areas)

        if (itemClicked.dataset.type === "service") {

            const serviceId = itemClicked.dataset.id


                if (service.id === parseInt(serviceId)) {
                   window.alert(`${service.name} is available in ${area.name} `)
                }
                
        }            
        
    }
)