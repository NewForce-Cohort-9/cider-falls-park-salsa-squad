import {getServices, getAreas, getAreaServices} from "./database.js"

const services = getServices()
const areas = getAreas()
const areaServices = getAreaServices()


export const Services = () => {
    let html = `<div> Services: `
    let whattoDO = true

        for (const service of services) {
            
            
            if(!whattoDO){
            // html += ", "
            } else {
            whattoDO = false
            }
            html +=`<div data-id="${services.id}"
            data-type="service"
            data-name="${services.name}"
            >${service.name}</div>`
        }
    
    html += `</div>`

    return html
}


 //What services are in an area
  const findService = (areaService, allServices) => {
      for(const service of allServices) {
          if(service.id === parseInt(areaService.serviceId)) {
              return service.name
          }
      }

  }

 // What areas have services
  const findArea = (areaService, allAreas) => {

      for(const area of allAreas) {
          if(area.id === parseInt(areaService.areaId)) {
              return area.name
          }
      }

  }


  document.addEventListener(
      "click",
      (clickEvent) => {
          const itemClicked = clickEvent.target

          for (const iterator of object) {
              const service = findService(services)
              const area = findArea(areas)
            
          }

          if (itemClicked.dataset.type === "service") {

              const serviceId = itemClicked.dataset.id


                  if (service.id === parseInt(serviceId)) {
                     window.alert(`${service.name} is available in ${area.name} `)
                  }
                
          }            
        
      }
  )