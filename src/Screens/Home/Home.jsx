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

  const [searchQuery,setSearchQuery] = useState('');

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
            return <Delivery searchQuery={searchQuery} />

            case "Dining Out":
            return <DiningOut searchQuery={searchQuery} />

            case "Night Life":
            return <NightLife searchQuery={searchQuery} />

            default :
            return <Delivery searchQuery={searchQuery} />
        }
    }

  return (
    <div>
        {
          portalPage &&  (<AuthPortal close={closePortal} />)
        }
        <Header generatePortal={generatePortal} setSearchQuery={setSearchQuery}  />
        <TabSection sectionTab={sectionTab} setSectionTab={setSectionTab} />
        {getSection(sectionTab)}
        <Footer />
    </div>
  )
}

export default Home;