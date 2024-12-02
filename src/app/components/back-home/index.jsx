"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {memo} from "react";

export const BackHome = memo(() => {
    const pathname = usePathname();
 
    return pathname !== "/" ? <div style={{padding: "20px 0"}}><Link href={"/"}>Back to main page</Link></div> : null
})
