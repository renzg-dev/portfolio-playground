import { Outlet } from "react-router-dom";

import Navbar from "@/components/shared/navbar";
import FooterNav from "@/components/shared/app-footer-nav";
import { AppBreadcrumbs } from "@/components/shared/app-breadcrumbs";
import { Banner1 } from "@/components/shared/banner1";

const HomeLayout = () => {
  return (
    <>
      <Banner1
        title={"Work in progress!"}
        description={"Testing"}
        linkText={""}
        linkUrl={""}
      />
      <div className="mx-auto my-8 flex min-h-screen w-full max-w-2xl min-w-sm flex-col gap-5 px-4 sm:gap-10 md:gap-20">
        <Navbar />
        <main className="flex flex-col gap-6 pb-24">
          <AppBreadcrumbs />
          <Outlet />
        </main>
        <FooterNav />
      </div>
    </>
  );
};

export default HomeLayout;
