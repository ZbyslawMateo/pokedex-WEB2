import React from 'react'
import { Outlet } from "react-router-dom"
import SideBar from '../components/sidebar';

export default function Root() {
  return (
    <>
	 <main>
		<SideBar></SideBar>
		<section>
			<Outlet />
		</section>
	 </main>
    </>
  )
}
