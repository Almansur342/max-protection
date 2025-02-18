import { TSolutions } from "@/utils/type";
import {solutions} from "../../lib/solutions";
import SingleSolutions from "./SingleSolutions";

export default function Solutions() {
  return (
    <div className="relative w-full my-20">
      <div className="text-center max-w-[700px] mx-auto">
        <button className="bg-[#1D0E45] text-white font-semibold px-2">
          What we do
        </button>
        <h1 className="text-[26px] md:text-[50px] lg:text-[50px] font-medium text-[#253237] leading-tight mb-5">
          Our Solutions
        </h1>
        <p className="text-lg font-medium text-[#797979]">
          Lorem ipsum dolor sit amet, consectetur korim adipiscing elit. Amet
          bin koki sollicitudin sit umo facilisis nibh. Commodo Lorem ipsum
          dolor sit amet
        </p>
      </div>
      <div>
        {solutions.map((solution : TSolutions) => {
        return <SingleSolutions key={solution.id} solution={solution}/>
      })}</div>
    </div>
  );
}
