import { Screen } from "@/components/redesign/Screen";
import { productViews } from "@/content/product-views";
export function PageShot({slug}:{slug:string}){const view=productViews[slug];return view?<div className="pvl-redesign"><div className="pvl-wrap pvl-product-intro"><Screen {...view}/></div></div>:null}
