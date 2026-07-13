import { ProductPage } from '@/components/ProductPage'

export const metadata = {
  title: 'CiteWeave — Kairos Labs',
  description: 'A citation-graph retrieval engine that maps where a paper sits in its research field. Real pipeline, API today.',
}

const data = {
  greek: 'Β΄',
  accent: '#8FB0A1',
  category: 'Knowledge Intelligence',
  status: 'Backend Prototype',
  name: 'CiteWeave',
  tagline: "Understanding a field shouldn't require fifty browser tabs.",
  vision: `CiteWeave is a retrieval engine that maps where a paper sits in its research field. Real citation-graph traversal, real extractive gap detection, a working query API today. The researcher-facing interface is what's still ahead.`,
  origin: `CiteWeave came out of research frustration. As an AI researcher, finding information isn't difficult. Understanding it is. Researchers keep asking the same questions. What datasets get used? What metrics matter? What's actually novel here, and what's foundational? Existing tools retrieve information. Orientation still costs you a week.`,
  problem: `Standard RAG is lazy. It takes your prompt, finds text chunks that share similar keywords, and tells an LLM to write an answer. In academia, law, and medicine, that's fatal. Standard RAG ignores how important a paper actually is. It will treat a 1990 abandoned hypothesis the same as a 2024 breakthrough with a thousand citations, simply because the keywords matched.`,
  observation: `People don't want papers. They want context. Relationships. A neighborhood, not a list. Comparisons. What's actually significant here. Literature should feel explorable, not exhausting.`,
  gotWrong: `The first version was a single hardcoded pipeline built for academic papers only. Adding a second domain meant forking the whole codebase, and every future domain would need its own fork forever. We rebuilt the core to be domain-agnostic, then proved it by running legal case-law retrieval on the same engine, not a copy of it.`,
  storyState: [
    `CiteWeave answers the question every researcher asks at one in the morning: where does this paper actually sit in the field? Give it a paper, and instead of a list of similar-sounding results, it hands you a map. What it builds on, what disagrees with it, what's genuinely new about it.`,
    `The engine behind that map is real and running. It doesn't just match keywords. It follows actual citation trails, and it pulls real sentences out of papers' "what we couldn't figure out" sections instead of guessing at gaps.`,
    `Today it's an engine, not an app. There's no web interface yet, you'd need to be a developer to query it directly. That's the next thing to build, and we'd rather build the right interface than the fast one.`,
  ],
  differentiation: `The retrieval core runs live behind a JSON API. Four channels: dense-vector semantic search, lexical search, a one-hop citation-graph traversal, and a recency-filtered vector pass, fused together and re-ranked with a cross-encoder.

Gap detection is extractive: real sentences pulled from papers' "Future Work" and "Limitations" sections, clustered mathematically, so a claim about what a field is missing traces back to an actual sentence in an actual paper.

Synthesis runs on a self-hosted model, with prompt-injection sanitization on tool outputs.

Current scope: there's no frontend yet, just the API. The legal-research vertical has a working retrieval pipeline with no exposed endpoint yet. The API has no authentication today, just a concurrency limit.`,
  signatureCapabilities: [
    'Citation graph traversal that weighs a paper by real influence, not keyword overlap',
    'Gap detection built from real sentences pulled out of papers, not LLM guesses',
    'Self-hosted model for synthesis, no dependency on an external API',
    'The same pipeline swaps into law or medicine by changing a config, not a rewrite',
  ],
  grindDiagrams: [
    {
      eyebrowGreek: 'IV',
      eyebrow: 'Gap Detection',
      title: 'How it finds what a field doesn\'t know yet.',
      note: 'extractive, not generated',
      intro: `Most tools ask an LLM to guess at research gaps, which means the LLM is inventing them. This pipeline finds gaps by reading what researchers actually wrote about what they couldn't solve, then clustering those admissions to find the shape of what's missing.`,
      chart: `flowchart TD
        CORPUS["Full-text papers"] --> EXTRACT["Extract sentences from Future Work and Limitations sections"]
        EXTRACT --> EMBED["Embed each sentence"]
        EMBED --> CLUSTER["Cluster embeddings to find recurring unsolved threads"]
        CLUSTER --> RANK["Rank clusters by recency and frequency"]
        RANK --> GAP["Surfaced gap, traceable to source sentences"]`,
    },
  ],
  sampleQuery: {
    paper: '"Attention Is All You Need" (Vaswani et al., 2017)',
    detail: 'This exact paper sits in our sample corpus today, with its real citation count. Query it and the engine has to place a paper with 174,000+ citations correctly in the graph, not just match it against a random abstract.',
    note: `There's no public deployment yet, so there's no live sandbox to hand you. The pipeline above runs against this and other real papers today, tested internally, not yet exposed publicly.`,
  },
  futureDirection: [
    'Ship a researcher-facing interface, not just the API',
    'Expose the legal vertical as a queryable endpoint',
    'Medical vertical: clinical trials, drug interactions, cohort sizes',
    'Compliance domain and regulation document analysis',
    'Authentication and production-grade rate limiting',
  ],
  personas: [
    {
      name: 'PhD Students & Academic Researchers',
      pain: 'Loses days to literature reviews just to find out whether an idea is actually novel. Standard RAG tools match keywords and miss the structurally important papers.',
      pitch: '"Query the API directly today and get citation-graph-verified context back. The retrieval engine is real, even before there\'s a browser tab to put it in."',
    },
    {
      name: 'R&D Labs & Big Tech',
      pain: 'Needs to track the edge of AI and CS research and pull out evaluation protocols to benchmark their own models against.',
      pitch: 'Surfaces the benchmarks, datasets, and metrics that matter in your domain, automatically, integrable into your own tooling today.',
    },
    {
      name: 'Law Students & Paralegals',
      pain: 'Hunting down obscure case law and checking whether a precedent has been overturned, with zero tolerance for a hallucinated citation.',
      pitch: '"The retrieval pipeline for case law already exists and is tested. We just haven\'t exposed it yet. If this is the use case that matters, tell us and it moves up the queue."',
    },
  ],
  openQuestions: [
    'Is an API-first launch the right call, or does this need a UI before anyone actually uses it?',
    'Can machine-generated orientation ever become something academia trusts?',
    'What domains need this most urgently, beyond CS research and law?',
    'How much synthesis is useful before people stop verifying it themselves?',
  ],
  feedbackFrom: 'Researchers, academics, lawyers, scientists, policy professionals, anyone doing literature reviews or fed up with existing discovery tools.',
  team: [
    { name: 'Nikhil Y N', role: 'CEO & Technical Lead' },
    { name: 'Praneel S', role: 'Engineer / Manager, Frontend & SEO' },
    { name: 'Karan R A', role: 'Engineer, Python Backend & AI/ML' },
    { name: 'Manichandan M', role: 'Engineer, Java & Web Development' },
  ],
  note: <>status: backend prototype, no frontend yet<br />domains: research live, legal pipeline built but not exposed<br />no auth on the API today, concurrency-limited only</>,
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
    RERANK --> OUT["Verified, Grounded Answer, JSON API"]`,
  timeline: {
    shipped: [
      {
        era: 'Foundations',
        date: '2026-05-02',
        what: 'First line of the retrieval engine written.',
        how: 'Started as an independent research side-project, before it became a Kairos product.',
      },
      {
        era: 'This Sprint',
        date: '2026-07-04',
        what: 'Engine rebuilt to be vertical-agnostic.',
        how: 'Split the monolith into a generic core plus per-vertical plugins, then proved a second vertical, legal research, working end to end on the same core, not a fork.',
      },
      {
        era: 'This Sprint',
        date: '2026-07-09',
        what: 'Full-system audit and hardening pass.',
        how: 'Fixed a real ETL crash on a single bad record, and a real prompt-injection gap found during a dedicated safety audit.',
      },
      {
        era: 'This Sprint',
        date: '2026-07-12',
        what: 'Shared CI and engineering standards adopted.',
        how: 'Unified lint and test gates, dependency installs, and PR review automation across all three products at once.',
      },
      {
        era: 'This Sprint',
        date: '2026-07-13',
        what: 'Frontend and productization roadmap documented.',
        how: 'Laid out what shipping a real interface and moving to production actually takes, the next milestone planned in detail.',
      },
    ],
    next: [
      'Ship a frontend, not just the API',
      'Route the legal vertical publicly',
      'Production deploy',
    ],
  },
  media: [
    {
      type: 'image',
      comingSoon: true,
      caption: 'Citation graph traversal, foundational papers surfaced',
    },
    {
      type: 'image',
      comingSoon: true,
      caption: 'API response, comparable-bucket clustering, raw JSON',
    },
    {
      type: 'video',
      comingSoon: true,
      caption: 'CiteWeave demo, a literature-review query end to end',
    },
  ],
}

export default function CiteWeavePage() {
  return <ProductPage {...data} />
}
