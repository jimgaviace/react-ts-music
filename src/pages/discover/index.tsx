import { memo, Suspense} from "react";
import type { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./c-cpns/navbar";
import React from "react";


interface IProps {
  children?: React.ReactNode;
}

const Discover:FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback=''>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default memo(Discover);