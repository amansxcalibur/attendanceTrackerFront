'use client'

import { useState, useEffect, useRef } from "react";
import CircleScale from "@/components/scroll_shenanigans/circle_scale";
import HorizontalScroll from "@/components/scroll_shenanigans/stash/horizontal_scroll";
import DependencyScroll from "@/components/scroll_shenanigans/stash/dependency";
import HorizontalScrollCarousal from "@/components/scroll_shenanigans/dependent_horizontal_scroll";
export default function test(){
    return(
        <div className="">
            <CircleScale/>
            {/* <HorizontalScroll setActivate={setActivate} activate={activate}/> */}
            {/* <HorizontalScroll/> */}
            {/* <DependencyScroll/> */}
            <HorizontalScrollCarousal/>
        </div>
    )
}