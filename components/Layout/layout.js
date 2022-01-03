import { useState } from "react";
import Navbar from "./navbar";
import DrawerMenu from "./Drawer";

function Layout({ children }) {
    const [openDrawer, setOpenDrawer] = useState(() => false);

    return (
        <>
            <DrawerMenu
                drawerStatus={openDrawer}
                closeDrawer={() => setOpenDrawer(false)}
            />
            <Navbar openDrawer={() => setOpenDrawer(true)} />
            {children}
        </>
    );
}
export default Layout;
