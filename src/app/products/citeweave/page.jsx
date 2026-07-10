import { ProductPage } from '@/components/ProductPage'

export const metadata = {
  title: 'CiteWeave — Kairos Labs',
  description: 'An anti-hallucination RAG engine for academic and legal research.',
}

const data = {
  greek: 'Β΄',
  category: 'Knowledge Intelligence',
  status: 'Working MVP',
  name: 'CiteWeave',
  tagline: "Understanding a field shouldn't require fifty browser tabs.",
  vision: `CiteWeave is an academic and legal RAG (Retrieval-Augmented Generation) engine designed to eradicate AI hallucinations completely.`,
  origin: `CiteWeave originated from research frustration. As an AI researcher, finding information is not difficult — understanding information is. Researchers constantly ask: what datasets are used? What metrics matter? What is novel? What is foundational? Existing systems retrieve information. But orientation remains expensive.`,
  problem: `Standard RAG is lazy. It takes a user's prompt, finds text chunks that share similar keywords (via vector embeddings), and tells the LLM to write an answer. In academia, law, and medicine, this is fatal. Standard RAG ignores the hierarchical importance of papers — it will treat a 1990 abandoned hypothesis with the same weight as a 2024 heavily-cited breakthrough simply because the keywords matched.`,
  observation: `People do not want papers. People want context. People want relationships. People want neighborhoods. People want comparisons. People want significance. Literature should feel explorable, not exhausting.`,
  differentiation: `CiteWeave does not guess. It crawls the actual citation graph using PageRank-style algorithms to surface foundational impact — a 1990 heavily-cited paper will not be treated the same as a keyword match from last week. It physically extracts sentences from "Future Work" sections of papers and mathematically clusters them to reveal what a field does not yet know. No chatbot. No hallucinations. 100% verifiable, grounded in the structural hierarchy of science. The engine is inherently vertical-agnostic: swap the corpus and the LLM extraction prompts, and the same pipeline works for case law (CourtListener citations), clinical trials (PubMed), or regulatory compliance documents.`,
  capabilities: [
    'Citation graph traversal (PageRank-style)',
    'Comparable bucket clustering',
    'Novelty scoring',
    'Research gap identification',
    'Foundational & emerging work detection',
    'Dataset & metric extraction',
    'Cross-encoder reranking',
    'Methodology clustering',
    '2.5 TB local corpus (no API rate limits)',
    'Dissenting opinion extraction (legal vertical)',
  ],
  futureDirection: [
    'Legal vertical — CourtListener / Free Law Project (cases citing precedents)',
    'Medical vertical — PubMed / ClinicalTrials.gov (drug interactions, cohort sizes)',
    'Compliance domain and regulation document analysis',
    'Multi-domain synthesis via VerticalConfig plugin architecture',
  ],
  personas: [
    {
      name: 'PhD Students & Academic Researchers',
      pain: 'Spends extensive time doing literature reviews just to find out if an idea is novel. Standard RAG tools just match semantic keywords and miss fundamental structural papers.',
      pitch: '"Don\'t guess what the limitations of a field are. Pull exact sentences from the Future Work sections of 5,000 papers."',
    },
    {
      name: 'R&D Labs & Big Tech',
      pain: 'Needs to track the cutting edge of AI/CS research and extract Common Evaluation Protocols automatically to benchmark their own models against state-of-the-art.',
      pitch: 'Automatically surface the benchmarks, datasets, and metrics that matter in your domain.',
    },
    {
      name: 'Law Students & Paralegals',
      pain: 'Hunting down obscure case law and verifying if a precedent has been overturned. They cannot afford a 1% hallucination rate.',
      pitch: '"100% verifiable truth grounded in the actual citation hierarchy."',
    },
  ],
  openQuestions: [
    'How much synthesis is useful before it becomes trusted?',
    'Can machine-generated orientation become trusted in academia?',
    'Can research become navigable for non-experts?',
    'What domains most urgently need this?',
  ],
  feedbackFrom: 'Researchers, academics, lawyers, scientists, policy professionals — anyone conducting literature reviews or dissatisfied with existing discovery systems.',
  team: [
    { name: 'Nikhil Y N', role: 'CEO & Technical Lead' },
    { name: 'Praneel S', role: 'Engineer / Manager, Frontend & SEO' },
    { name: 'Karan R A', role: 'Engineer, Python Backend & AI/ML' },
    { name: 'Manichandan M', role: 'Engineer, Java & Web Development' },
  ],
  note: <>local corpus: 2.5 TB and growing<br />domains: research &rarr; medical, legal; compliance planned<br />research MVP complete</>,
  flowchart: `flowchart TD
    Q[User Query] --> EMB[Sentence Embedding]
    EMB --> VEC[Vector Search: Semantic Similarity]
    Q --> GRAPH[Citation Graph: PageRank Traversal]
    VEC --> RRF[4-Channel RRF Fusion]
    GRAPH --> RRF
    Q --> CLUST[Mathematical Sentence Clustering]
    Q --> NOVEL[Novelty Scorer]
    CLUST --> RRF
    NOVEL --> RRF
    RRF --> RERANK[Cross-Encoder Reranking]
    RERANK --> OUT[Verified, Grounded Answer]`,
  media: [
    {
      type: 'image',
      src: '/media/citeweave/search-results.png',
      caption: 'Citation graph traversal — foundational papers surfaced',
    },
    {
      type: 'image',
      src: '/media/citeweave/cluster-view.png',
      caption: 'Comparable bucket clustering — research landscape overview',
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/watch?v=PLACEHOLDER_CITEWEAVE',
      caption: 'CiteWeave demo — literature review in 60 seconds',
    },
  ],
}

export default function CiteWeavePage() {
  return <ProductPage {...data} />
}
