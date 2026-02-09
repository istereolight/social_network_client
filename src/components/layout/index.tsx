import { Header } from "../header"
import { Container } from "../container"
import { NavBar } from "../nav-bar"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import {
  selectIsAuthenticated,
  selectUser,
} from "../../features/user/userSlice"
import { useEffect } from "react"
import { Profile } from "../profile"

export const Layout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth")
    }
  }, [])

  return (
    // <div className="">
    //   <Header />
    //   <Container>
    //     <div className="flex-2 p-4">
    //       <NavBar />
    //     </div>
    //     <div className="flex-1 p-4">
    //       <Outlet />
    //     </div>
    //     <div className="flex-2 p-4">
    //       <div className="flex-col flex gap-5">{!user && <Profile />}</div>
    //     </div>
    //   </Container>
    // </div>
    <div className="flex flex-col min-h-screen">
      <div className="mx-auto">
        <Header />
      </div>
      <div className="flex flex-col md:flex-row items-start">
        <Container>
          <div
            // className="md:bg-slate-800 lg:bg-slate-500 sm:bg-slate-300"
            className="flex flex-col lg:flex-row"
          >
            <div className="md:flex-[2] flex-1 p-2">
              <NavBar />
              <div className="flex-col flex gap-5">{!user && <Profile />}</div>
            </div>
            <div className="flex flex-col w-[318px] lg:w-[500px] p-2">
              <Outlet />
            </div>
            <div className="flex-1 p-2"></div>
          </div>
        </Container>
      </div>
    </div>
  )
}
