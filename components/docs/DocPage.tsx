import { DocsShell, DocH2, DocH3, DocP, DocUl, DocCode, DocNote } from "./DocsShell";
import type { DocPageContent } from "@/content/pages/types";

export function DocPage({ page }: { page: DocPageContent }) {
  return (
    <DocsShell title={page.title} description={page.description}>
      {page.blocks.map((block, i) => {
        switch (block.type) {
          case "h2": return <DocH2 key={i}>{block.text}</DocH2>;
          case "h3": return <DocH3 key={i}>{block.text}</DocH3>;
          case "p": return <DocP key={i}>{block.text}</DocP>;
          case "ul": return <DocUl key={i} items={block.items} />;
          case "ol":
            return (
              <ol key={i} className="space-y-1.5 list-decimal list-inside text-prevayl-muted text-sm">
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ol>
            );
          case "code": return <DocCode key={i} text={block.text} lang={block.lang} />;
          case "note": return <DocNote key={i}>{block.text}</DocNote>;
          default: return null;
        }
      })}
    </DocsShell>
  );
}
