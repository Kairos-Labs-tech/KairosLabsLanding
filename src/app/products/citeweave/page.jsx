import { ProductPage } from '@/components/ProductPage'

export const metadata = {
  title: 'CiteWeave — Kairos Labs',
  description: 'A citation-graph retrieval engine that maps where a paper sits in its research field — real pipeline, API today.',
}

const data = {
  greek: 'Β΄',
  category: 'Knowledge Intelligence',
  status: 'Backend Prototype',
  name: 'CiteWeave',
  tagline: "Understanding a field shouldn't require fifty browser tabs.",
  vision: `CiteWeave is a retrieval engine that maps where a paper sits in its research field — real citation-graph traversal, real extractive gap detection, and a working query API today. The researcher-facing interface is what's still ahead.`,
  origin: `CiteWeave originated from research frustration. As an AI researcher, finding information is not difficult — understanding information is. Researchers constantly ask: what datasets are used? What metrics matter? What is novel? What is foundational? Existing systems retrieve information. Orientation remains expensive.`,
  problem: `Standard RAG is lazy. It takes a user's prompt, finds text chunks that share similar keywords, and tells the LLM to write an answer. In academia, law, and medicine, this is fatal. Standard RAG ignores the hierarchical importance of papers — it will treat a 1990 abandoned hypothesis with the same weight as a 2024 heavily-cited breakthrough simply because the keywords matched.`,
  observation: `People do not want papers. People want context. People want relationships. People want neighborhoods, comparisons, significance. Literature should feel explorable, not exhausting.`,
  storyState: [
    `CiteWeave answers a question every researcher asks at 1am: where does this paper actually sit in the field? Give it a paper, and instead of a list of similar-sounding results, it gives you a map — what it builds on, what disagrees with it, what's genuinely new about it.`,
    `The engine behind that map is real and running. It doesn't just match keywords — it follows actual citation trails and pulls real sentences out of papers' "what we couldn't figure out" sections instead of guessing at gaps.`,
    `Where we're honest about the gap: today it's an engine, not an app. There's no web interface yet — you'd need to be a developer to query it directly. That's the next thing to build, and we'd rather build the right interface than the fast one. Which is part of why we're asking first.`,
  ],
  differentiation: `The retrieval core is real and live behind a JSON API: four channels — dense-vector semantic search, lexical search, a one-hop citation-graph traversal, and a recency-filtered vector pass — fused with Reciprocal Rank Fusion and re-ranked with a cross-encoder. This isn't a design doc; it's wired end to end in the query path today.

Research-gap detection is extractive, not generative: we physically pull real sentences out of papers' "Future Work" and "Limitations" sections and mathematically cluster them, so a gap claim traces back to an actual sentence in an actual paper — not an LLM's guess.

Synthesis runs on a self-hosted LLM server, not an external API call, with prompt-injection sanitization on tool outputs — a control most prototypes at this stage skip.

What's honestly missing: there's no frontend yet, just a JSON API a developer can query. The legal-research vertical has a real, tested retrieval pipeline but no exposed endpoint yet, so it's not something you can point a browser at. And the API itself has no authentication today, just a concurrency limit — it's a research prototype, not a production service.`,
  builtCapabilities: [
    '4-channel retrieval — semantic, lexical, citation-graph, recency',
    'Reciprocal Rank Fusion + cross-encoder reranking',
    'Extractive gap detection from real "Future Work" sentences',
    'Self-hosted LLM synthesis (no external API dependency)',
    'Prompt-injection sanitization on tool outputs',
    'Citation-graph traversal with influence-weighted ranking',
  ],
  plannedCapabilities: [
    'Researcher-facing web interface',
    'Legal vertical — exposed, queryable endpoint',
    'Medical / clinical-trials vertical',
    'Authentication + production rate limiting',
    'Multi-domain plugin architecture for new verticals',
  ],
  futureDirection: [
    'Legal vertical — case law, precedent citation graphs',
    'Medical vertical — clinical trials, drug interactions, cohort sizes',
    'Compliance domain and regulation document analysis',
    'Multi-domain synthesis via a swappable vertical-config architecture',
  ],
  personas: [
    {
      name: 'PhD Students & Academic Researchers',
      pain: 'Spends extensive time doing literature reviews just to find out if an idea is novel. Standard RAG tools match semantic keywords and miss fundamental structural papers.',
      pitch: '"Query the API directly today and get back exact citation-graph-verified context, not vibes — the retrieval engine is real, even before there\'s a browser tab to put it in."',
    },
    {
      name: 'R&D Labs & Big Tech',
      pain: 'Needs to track the cutting edge of AI/CS research and extract evaluation protocols automatically to benchmark their own models against the state of the art.',
      pitch: 'Automatically surface the benchmarks, datasets, and metrics that matter in your domain — via API, integratable into your own tooling today.',
    },
    {
      name: 'Law Students & Paralegals',
      pain: 'Hunting down obscure case law and verifying whether a precedent has been overturned, with zero tolerance for a hallucinated citation.',
      pitch: '"The retrieval pipeline for case law already exists and is tested — we just haven\'t exposed it yet. If this is the use case that matters, tell us and it moves up the queue."',
    },
  ],
  openQuestions: [
    'Is an API-first launch the right call, or does this need a UI before anyone will actually use it?',
    'Can machine-generated orientation become trusted in academia?',
    'What domains most urgently need this — beyond CS research and law?',
    'How much synthesis is useful before it becomes something people stop verifying themselves?',
  ],
  feedbackFrom: 'Researchers, academics, lawyers, scientists, policy professionals — anyone conducting literature reviews or dissatisfied with existing discovery systems.',
  team: [
    { name: 'Nikhil Y N', role: 'CEO & Technical Lead' },
    { name: 'Praneel S', role: 'Engineer / Manager, Frontend & SEO' },
    { name: 'Karan R A', role: 'Engineer, Python Backend & AI/ML' },
    { name: 'Manichandan M', role: 'Engineer, Java & Web Development' },
  ],
  note: <>status: backend prototype &mdash; no frontend yet<br />domains: research live; legal pipeline built, not exposed<br />no auth on the API today &mdash; concurrency-limited only</>,
  flowchart: `flowchart TD
    Q[User Query] --> EMB[Sentence Embedding]
    EMB --> VEC[Vector Search: Semantic Similarity]
    Q --> GRAPH[Citation Graph: 1-hop Traversal]
    VEC --> RRF[4-Channel RRF Fusion]
    GRAPH --> RRF
    Q --> CLUST[Extractive Gap Clustering]
    Q --> NOVEL[Novelty Scorer]
    CLUST --> RRF
    NOVEL --> RRF
    RRF --> RERANK[Cross-Encoder Reranking]
    RERANK --> OUT["Verified, Grounded Answer — JSON API"]`,
  media: [
    {
      type: 'image',
      comingSoon: true,
      caption: 'Citation graph traversal — foundational papers surfaced',
    },
    {
      type: 'image',
      comingSoon: true,
      caption: 'API response — comparable-bucket clustering, in raw JSON',
    },
    {
      type: 'video',
      comingSoon: true,
      caption: 'CiteWeave demo — a literature-review query end to end',
    },
  ],
}

export default function CiteWeavePage() {
  return <ProductPage {...data} />
}
