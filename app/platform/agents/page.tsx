import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { BotExplorer } from "@/components/redesign/BotExplorer";
import { CTA } from "@/components/redesign/Shared";
import { Screen } from "@/components/redesign/Screen";
import { productViews } from "@/content/product-views";
export const metadata:Metadata={title:"AI Bots — Meet your operations team",description:"Explore Margin Guard, Carrier Match, Pricer, Status Bot and Reengagement. See their purpose, inputs and configuration."};
export default function Page(){return <main className="pvl-redesign"><PageHero eyebrow="Platform / AI Bots" title="Your next shift starts with a better team." lead="Pricing, matching, updates and follow-up. Meet the specialists that help your team work through the day." primaryCta={{href:"#bot-roster",label:"Meet the bots"}} secondaryCta={{href:"/platform/dispatcher-bot",label:"See the dispatch workflow"}}/><BotExplorer/><section className="pvl-wrap pvl-section"><div className="pvl-section-heading"><div><p className="pvl-eyebrow">Inside the platform</p><h2>The workspace behind the work.</h2></div><p>Explore the AI workspace in a demo and review the available settings for your organization.</p></div><Screen {...productViews["platform/agents"]}/></section><CTA/></main>}
