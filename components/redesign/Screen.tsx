"use client";
import { useRef } from "react";
type Props={src:string; title:string; caption?:string; eager?:boolean; disclosure?:string; width?:number; height?:number};
export function Screen({src,title,caption,eager=false,disclosure,width=2400,height=1500}:Props){
 const dialog=useRef<HTMLDialogElement>(null);
 return <figure className="pvl-screen">
  <div className="pvl-screen-bar"><span><i aria-hidden="true"/> PREVAYL <span className="pvl-divider">/</span> {title}</span><button type="button" onClick={()=>dialog.current?.showModal()} aria-label={"Enlarge "+title}>Expand view ↗</button></div>
  <button className="pvl-screen-image" type="button" onClick={()=>dialog.current?.showModal()} aria-label={"Enlarge "+title}><img src={src} alt={title+" in the Prevayl platform"} width={width} height={height} style={{maxWidth:width,marginInline:"auto"}} loading={eager?"eager":"lazy"}/></button>
  <figcaption>{caption||"Platform capture. Select the image to explore it at full size."} {disclosure ?? (src.endsWith(".png")?"Interface recaptured with identifying fields replaced for privacy. Figures are example data, not verified operating results.":"Historical demonstration capture. Figures are example data, not verified operating results.")}</figcaption>
  <dialog ref={dialog} className="pvl-lightbox" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close()}}>
    <div className="pvl-lightbox-head"><span>{title}</span><button type="button" autoFocus onClick={()=>dialog.current?.close()} aria-label="Close enlarged view">Close ✕</button></div>
    <div className="pvl-lightbox-scroll"><img src={src} width={width} height={height} alt={"Enlarged "+title}/></div>
  </dialog>
 </figure>
}

