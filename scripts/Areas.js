import {getAreas, getServices, getAttractions, getAreaServices, getGuests, getAreaAttractions} from "./database.js"

const areas = getAreas ()
const services = getServices()
const attractions = getAttractions()
const guests = getGuests()
const areaattractions = getAreaAttractions()
const areaservices = getAreaServices()



//function to find the attractions for the areas. 

//const findAttractionsForArea = (areaId) => {
   // const attractionsArray = []

    //for (const areaattraction of areaattractions) {
//         for (const attraction of attractions) {
//            if (areaattraction.areaId ===areaId && areaattraction.attractionId === attraction.Id) {
//             attractionsArray.push(attraction)
//            }
//            return attractionsArray
//         }
//     }
  
    
   
// }

//function to find the services for an area

const findAreaServices = (allServices, Area ) => {
    let areaService= null

    for (const service of allServices) {
        if (service.areaId === Area.id) {
            areaService = service
        }
        


    }
    return areaService
}

//funcction to find the attractions for each area

const findAreaAttractions = (allAttractions, Area) => {
    let areaAttraction=null

    for (const attraction of allAttractions) {
        if (attraction.areaId === Area.id)
            areaAttraction = attraction
        
    }
    
    return areaAttraction
}

 //function to list areas

 //add the services and attractions for each area

 export const Areas = () => {
    let areasHTML = "<ul>"

    for (const area of areas) {
        areasHTML  += `<li>${area.name}</li>`
        
    }
    
    
    areasHTML += "</ul>"
    
    return areasHTML

}


// function to list the areas and each service and attraction in that area

    
    
    
    
    
   

//document.addEventListener(
    //"click", 
    //(clickEvent) => {
       // const itemClicked = clickEvent.target

        //if

        //const

       // let 

        //for (const iterator of object) {

          //  if (()){


          //  }
            
        //    window.alert(`     `)
     //   }
        
        
    //}