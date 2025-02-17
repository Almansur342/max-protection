import { Button } from "./ui/button";
import bannerImage from '../assets/images/banner.png'

export default function Banner() {
  return (
    <div className="w-full bg-[#1D0E45] relative mb-20 [clip-path:polygon(0%_0%,100%_0%,100%_100%,85%_100%,78%_88%,22%_88%,15%_100%,0%_100%)]">
      <div className="container mx-auto pb-16 flex items-center justify-between">
        {/* Banner content */}
        <div className="space-y-5">
            <h3 className="text-[50px] font-medium text-white  leading-tight max-w-[500px]">All in one <span className="text-[#DD9933]">Security System</span> In Greater Toronto Area</h3>
            <p className="text-white font-medium text-lg max-w-[440px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit Amet bin koki sollicitudin sit</p>
            <Button>Contact Us</Button>
        </div>
        {/* Banner Image */}
        <div >
           <img className="h-[450px] shrink-0 object-cover" src={bannerImage} alt="This is a Banner image " />
        </div>
      </div>
    </div>
  )
}
