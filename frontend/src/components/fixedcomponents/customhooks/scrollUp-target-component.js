/**
 * useScrollUp Custom Hook: This is a .js component aka custom hook
 *
 * This hook scrolls a target element to the top when certain dependencies change.
 * For example, in pagination — when the page changes — the hook will scroll the section to the top.
 *
 * @param {Object} params
 * @param {HTMLElement} params.targetElem - The DOM element to scroll.
 * @param {Array<any>} params.dependencies - Dependency list for triggering the scroll effect.
 */


import { useEffect, useRef } from "react";

export const useScrollUp = ({ targetElem, dependencies }) => {

    // use this code in the component where this custom hook is to be used, as explained in this example.
    //    const xyz = useRef(null) //which is set using ref in the element so      import useRef
    // for example: <div ref={xyz}></div> // this ref is used to get reference of the targeted element
    //    const targetElem = xyz.current;

    const isFirstRun = useRef(true);

    useEffect(() => {
        if (!targetElem) return; // Skip until target is available

        if (isFirstRun.current) {
            isFirstRun.current = false;
            return; //skip the first run
        }

        const targetElemDepth = targetElem.offsetTop;
        window.scrollTo({ top: targetElemDepth, behavior: "smooth" });
    },
        [targetElem, ...dependencies]);
}