import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div >
      <h1 className="text-2xl text-red-600">reder here</h1>
      <Outlet/>
      <h2 className="text-2xl text-red-600">footer</h2>
    </div>
  )
}
