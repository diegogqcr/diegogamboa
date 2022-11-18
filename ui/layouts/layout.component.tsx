import React from "react";
import { Header } from "./header";
import { Main } from "./main/main.component";

export function Layout({ children }:{children: React.ReactNode }) {
 return (
    <div className="hidden mt-0 md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      {/* <Header /> */}
      <div className="flex flex-col flex-1 md:pl-64">   
        <Main>{children}</Main>
      </div>
    </div>
 )
}