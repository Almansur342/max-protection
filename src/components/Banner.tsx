import { Button } from "./ui/button";
import bannerImage from '../assets/images/banner.png'
import icon_1 from '../assets/icons/icon-1.png'
import icon_2 from '../assets/icons/icon-2.png'
import icon_3 from '../assets/icons/icon-3.png'
export default function Banner() {
  return (
    <div className="relative">
    <div className="w-full bg-[#1D0E45] relative mb-20 [clip-path:polygon(0%_0%,100%_0%,100%_100%,85%_100%,78%_95%,22%_95%,15%_100%,0%_100%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_100%,85%_100%,78%_93%,22%_93%,15%_100%,0%_100%)] lg:[clip-path:polygon(0%_0%,100%_0%,100%_100%,85%_100%,78%_88%,22%_88%,15%_100%,0%_100%)] overflow-hidden">
      <div className="container mx-auto pb-16 flex flex-col lg:flex-row items-center justify-between pt-8 md:pt-8 lg:pt-0 px-3 md:px-3 lg:px-0">
        {/* Banner content */}
        <div className="space-y-5">
            <h3 className="text-[30px] md:text-[40px] lg:text-[50px] font-medium text-white  leading-tight max-w-[500px]">All in one <span className="text-[#DD9933]">Security System</span> In Greater Toronto Area</h3>
            <p className="text-white font-medium text-lg max-w-[440px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit Amet bin koki sollicitudin sit</p>
            <Button>Contact Us</Button>
        </div>
        {/* Banner Image */}
        <div >
           <img className="h-[450px] shrink-0 object-cover" src={bannerImage} alt="This is a Banner image " />
        </div>
      </div>
    </div>
         {/* icons */}
      <div className="grid grid-cols-3 gap-5 static -mt-16 md:grid-cols-5 lg:grid-cols-5 items-center md:gap-2 lg:gap-10 md:absolute md:-bottom-16 md:left-28  lg:absolute lg:-bottom-12 lg:left-64 ">
         <div className="flex flex-col items-center space-y-1">
            <img src={icon_3} alt="icon" />
            <p className="text-sm font-semibold text-center">Access Control <br />System</p>
         </div>
         <div className="flex flex-col items-center space-y-1">
            <img src={icon_3} alt="icon" />
            <p className="text-sm font-semibold text-center">IT/Networking <br />Support</p>
         </div>
         <div className="flex flex-col items-center space-y-1">
            <img className="" src={icon_2} alt="icon" />
            <p className="text-sm font-semibold text-center">CCTV</p>
         </div>
         <div className="flex flex-col items-center space-y-1">
            <img src={icon_1} alt="icon" />
            <p className="text-sm font-semibold text-center">Telephone Entry <br />System</p>
         </div>
         <div className="flex flex-col items-center space-y-1">
            <img src={icon_1} alt="icon" />
            <p className="text-sm font-semibold text-center">Access Control <br />System</p>
         </div>
      </div>
    </div>
  )
}
