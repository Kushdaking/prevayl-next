"use client";
import { useState } from "react";
import Link from "next/link";
import { Screen } from "./Screen";
import { productViews } from "@/content/product-views";
const tabs=[{name:"Dispatch",slug:"platform/dispatch",line:"Start with the command center. See the work that needs your team’s attention."},{name:"Orders",slug:"platform/orders",line:"Follow the vehicles, customer details and movement status in the order workspace."},{name:"Accounting",slug:"platform/accounting",line:"Bring the financial side of the operation into view."},{name:"AI",slug:"platform/ai",line:"Explore the AI workspace and its available actions."},{name:"Intelligence",slug:"platform/business-intelligence",line:"See the operation through its reporting workspace."}];
export function ProductTour(){const [active,setActive]=useState(0);const t=tabs[active];return <div><div className="pvl-tour-tabs" aria-label="Choose a platform view">{tabs.map((v,i)=><button key={v.slug} type="button" aria-pressed={i===active} onClick={()=>setActive(i)}>{v.name}</button>)}</div><Screen key={t.slug} {...productViews[t.slug]}/><div className="pvl-tour-bottom"><p>{t.line}</p><Link className="pvl-text-link" href={"/"+t.slug}>Explore {t.name.toLowerCase()} ↗</Link></div></div>}
