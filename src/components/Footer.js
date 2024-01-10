import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    /*
    default - mobile, sm-tab, md-desktop
    */
    <section className="p-4 md:p-20 graybackgroundColor text-gray-500 flex md:flex-row items-center justify-between text-xs md:text-base md:gap-3">
        <div className="grid grid-flow-row gap-2 md:gap-3 md:mr-16">
            {/*first column*/}
            <div className="flex items-center h-16 md:h-32 w-16 md:w-32 gap-2 md:gap-3 text-white">
                <FaFacebook size={32}/>
                <FaInstagram size={32}/>
                <FaTwitter size={32} />
                <FaYoutube size={32}/>
            </div>
            <a href="#audio-desc">Audio Description</a>
            <a href="#investor-relations">Investor Relations</a>
            <a href="#legal-notice">Legal Notice</a>
            
            <button className="w-16 md:w-32 h-18 md:h-18 border border-slate-400 py-2 px-4 mt-2 md:mt-0">Service Code</button>

            <p className="mt-4 md:mt-0">&copy; 1997-2024 Netflix, Inc.</p>
        </div>

        {/*second row*/}
        <div className="grid grid-flow-row gap-3 mx-auto ml-1 md:mr-16 mt-4 md:mt-0">
            <a href="#help-centre">Help Centre</a>
            <a href="#jobs">Jobs</a>
            <a href="#cookie-preferences">Cookie Preferences</a>
        </div>  

        {/*third row*/}
        <div className="grid grid-flow-row gap-3 md:mr-16 mt-4 md:mt-0">
            <a href="#gift-cards">Gift Cards</a>
            <a href="#terms-use">Terms of Use</a>
            <a href="#corporate-info">Corporate Information</a>
        </div>

        {/*fourth row*/}
        <div className="grid grid-flow-row gap-3 mt-4 md:mt-0">
            <a href="#media-centre">Media Centre</a>
            <a href="#privacy">Privacy</a>
            <a href="#contact-us">Contact Us</a>
        </div>
    
    </section>
    
  )
}

export default Footer