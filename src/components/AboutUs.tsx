import aboutImage from '../assets/images/about.png'
export default function AboutUs() {
  return (
    <div className="relative w-full bg-white my-16 md:my-32 lg:my-32 overflow-hidden">
      <div className='container mx-auto flex flex-col md:flex-row lg:flex-row items-start gap-5 md:gap-10 lg:gap-16 px-3 md:px-14 lg:px-0'>
        {/* left side */}
        <div className=''>
          <button className='bg-[#1D0E45] text-white font-semibold px-2 mb-3'>About Us</button>
          <h1 className='text-[26px] md:text-[50px] lg:text-[50px] font-medium text-[#253237] leading-tight mb-5'>Welcome To Max Protection</h1>
          <p className='text-lg font-medium text-[#797979]'>Our Vision is to provide a very best and cost effective services with our long term hands on experience.</p>
        </div>
        {/* right */}
        <div className='flex items-center gap-5'>
           <img className='hidden md:block lg:block object-cover shrink-0 md:w-[400px] lg:w-[240px] lg:h-[330px]' src={aboutImage} alt="about image" />
           <div className='bg-[#1D0E45] block md:hidden lg:block p-4 space-y-3 lg:h-[330px] lg:w-[530px] px-3 md:px-2 lg:px-4'>
             <p className='text-lg font-medium text-white'>Welcome to max protection inc, your number one source for all Product and Services. We’re dedicated to giving you the very best of security system’s credential, with a focus on Industry Standard, Best Price and on time free shipping.</p>
             <p className='text-[#DD9933] text-xl font-medium underline underline-offset-4'>Read More</p>
           </div>
        </div>
      </div>
    </div>
  )
}
