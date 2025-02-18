import { TSolutions } from "@/utils/type";
import { Link } from "react-router-dom";
export default function SingleSolutions({solution}:{solution:TSolutions}) {
  const {name,image} = solution || {};
  return (
    <Link to='' className="relative w-full">
        <img className="shrink-0 object-cover" src={image} alt="" />
        <h3 className="text-[22px] font-medium text-white absolute bottom-4 left-2">{name}</h3>
    </Link>
  )
}
