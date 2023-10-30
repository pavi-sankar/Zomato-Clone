import React, { useState } from 'react'
import Header from '../../components/common/header/Header';
import TabSection from '../../components/common/tabSection/TabSection';
import Footer from '../../components/common/footer/Footer';
import DiningOut from '../../components/dining-out/DiningOut';
import Delivery from '../../components/delivery/Delivery';
import NightLife from '../../components/night-life/NightLife';
import AuthPortal from '../../components/Portal/AuthPortal';


function Home() {

  const [portalPage,setPortalPage] = useState(false);

  const generatePortal = ()=> {
    setPortalPage(true)
  } 

  const closePortal = ()=> {
    setPortalPage(false)
  }
  
    const [sectionTab,setSectionTab] = useState("Delivery")

    function getSection (tab){
        switch(tab){
            case "Delivery":
            return <Delivery />

            case "Dining Out":
            return <DiningOut />

            case "Night Life":
            return <NightLife />

            default :
            return <Delivery />
        }
    }

  return (
    <div>
        <Header generatePortal={generatePortal} />
        <TabSection sectionTab={sectionTab} setSectionTab={setSectionTab} />
        {getSection(sectionTab)}
        <Footer />

        {
          portalPage && (<AuthPortal close={closePortal} />)
        }
    </div>
  )
}

export default Home;