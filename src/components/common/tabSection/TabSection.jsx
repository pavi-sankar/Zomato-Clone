import React from 'react'
import "./tabsection.css"

function TabSection({sectionTab, setSectionTab}) {

  const tabs = [ 
  {id:1 ,name:"Delivery" ,active_img:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" ,backdrop:"FCEEC0" ,inactive_img:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"},
  {id:2 ,name:"Dining Out" ,active_img:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" ,backdrop:"FCEEC0" ,inactive_img:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"},
  {id:3 ,name:"Night Life" ,active_img:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" ,backdrop:"FCEEC0" ,inactive_img:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"} 
]

  return (
    <div className='tab-section'>
      <div className='max-width tab-bar'> 
        {tabs.map((event,index)=>{
          return(
            <div key={index} onClick={()=>setSectionTab(event.name)} className={`tab-list abs-center ${sectionTab===event.name && "active-tab"}`} >
              <div className='tab-img-container abs-center' style={{backgroundColor:`${sectionTab===event.name ? event.backdrop : ""}`}}>
                  <img className='tab-img abs-center' alt={event.name} src={sectionTab===event.name ? event.active_img : event.inactive_img}></img>
              </div>
              <h3 className='tab-name'>
                {event.name}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TabSection