import { ProductPage } from '@/components/ProductPage'

export const metadata = {
  title: 'CausalCityAI — Kairos Labs',
  description: 'A physics-accurate synthetic traffic generator with causal ground truth, built toward an urban intelligence platform.',
}

const data = {
  greek: 'Γ΄',
  category: 'Urban Intelligence',
  status: 'Research',
  name: 'CausalCityAI',
  tagline: 'Cities behave less like maps and more like living systems.',
  vision: `CausalCity is a synthetic-data generator for city traffic — physics-accurate, causally-labeled, and built to become the foundation of a forecast → simulate → decide platform for urban planners.`,
  origin: `CausalCityAI began during a Google hackathon — initially a challenge problem, eventually an obsession. We became fascinated by the idea that locals understand cities in ways software does not: people know patterns, hidden behaviors, traffic habits, events, temporal rhythms, context. What if systems could learn them?`,
  problem: `Navigation apps tell you what traffic is doing right now. They don't tell you why, and they certainly don't tell you what will happen if you reroute 5,000 cars down a side street. Municipalities spend millions on infrastructure without knowing if it will trigger the Braess Paradox — where adding a road mathematically makes traffic worse.`,
  observation: `Cities are dynamic systems. Traffic affects people. People affect traffic. Weather affects movement. Movement affects congestion. Congestion affects decisions. Everything interacts. A model that tries to predict the future, explain why it happened, and recommend a route will be terrible at all three.`,
  storyState: [
    `Right now, CausalCity is a very good traffic generator, not yet a decision platform. It builds twelve imaginary cities with realistic road networks and lets you watch traffic build up, jam, and clear — with the cause of every jam known and labeled, because we generated it.`,
    `That sounds small, but it solves a real problem: researchers who want to teach a model to find the cause of traffic, not just predict it, can't get real cities to hand them labeled cause-and-effect data. Real sensors don't come with ground truth attached. Ours does.`,
    `The bigger pitch — forecast what a city will do, simulate what happens if you reroute it, recommend a decision — is the destination, not where we are today. That's a target architecture below, not running code. We'd rather say that plainly than let the diagram oversell it.`,
  ],
  differentiation: `The generator is the real thing today: twelve fictional archetype cities — a tech corridor, a port-industrial district, a capital admin zone, a university town, and more — joined into one continuous 9,800-segment road network by 28 inter-city corridors, placed with a spring-layout graph algorithm so the whole map reads as one world, not twelve toy examples.

Traffic physics run through a Numba-JIT–compiled engine: modified Bureau-of-Public-Roads speed-flow curves with hysteresis (congestion builds fast, clears slow) and upstream spillback, so the generator can actually reproduce Braess-Paradox-style effects. A lazy-Polars feature builder turns raw simulation state into ML-ready tables on demand. The whole pipeline generates 180 days of causally-linked synthetic traffic in under 30 minutes.

cityviz, the visualization layer, is a real interactive deck.gl map with time-scrubbing, six toggleable data layers, H3 hex-grid heatmaps, a Plotly analytics dashboard, and colorblind-safe palettes throughout. It's the most finished part of the product.

What's not built yet, plainly: the forecasting, causal-discovery, simulation, and decision layers in the architecture below are the target, not the current state. An early, unmerged branch has rough forecasting and causal-discovery code, but it stands in NumPy for the GNN/transformer architectures it borrows names from, and isn't wired into anything shippable.`,
  builtCapabilities: [
    'Twelve archetype city generator (topology, weather, calendar, events)',
    'Numba-JIT physics engine — hysteresis + spillback traffic dynamics',
    'Lazy-Polars feature builder for ML-ready output',
    '180 days of causally-linked synthetic data in under 30 minutes',
    'cityviz — interactive map, H3 heatmaps, analytics dashboard',
    'Known, labeled causal ground truth across dozens of signal types',
  ],
  plannedCapabilities: [
    'Forecasting engine (spatio-temporal models)',
    'Causal discovery engine',
    'Confidence / stability estimation',
    'Counterfactual simulation (Braess Paradox detection)',
    'Decision support — routes, timing, stop-reordering',
    'Real sensor integration',
  ],
  architecture: {
    title: 'The target architecture.',
    noteText: <>vision, not current build</>,
    intro: `This is the destination, not a status report: a strict separation of concerns so a model that forecasts, explains, and recommends doesn't do all three badly. Today, only the data layers have real code behind them — the rest below is design we're building toward.`,
    layers: [
      { name: 'Observation', desc: 'Collects raw signals: traffic feeds, weather, event schedules, social indicators. Today, the synthetic generator stands in for this — manufacturing realistic history instead of observing a real city.', status: 'partial' },
      { name: 'Memory', desc: 'Stores the historical reality of the city. Without historical context, forecasting and causal discovery are impossible.', status: 'partial' },
      { name: 'State Builder', desc: 'Converts raw data into a consistent (entity, timestamp) → state representation. Built today as a genuinely production-shaped lazy-Polars feature builder — the most real layer in the stack.', status: 'built' },
      { name: 'Intelligence', desc: 'Three planned engines: forecasting (what will happen), causal discovery (why), and confidence estimation. Not built on the main line today.', status: 'planned' },
      { name: 'Simulation', desc: 'Would imagine alternate futures — reroute 500 users through Road B, see what happens. Not built yet.', status: 'planned' },
      { name: 'Decision', desc: 'Would turn simulations into route recommendations and timing interventions, factoring in the Braess Paradox. Not built yet.', status: 'planned' },
    ],
  },
  futureDirection: [
    'Ship cityviz + the synthetic dataset as a standalone researcher tool',
    'Real sensor integration',
    'Multi-city causal discovery',
    'Municipal API for urban planners',
    'Academic dataset releases',
  ],
  personas: [
    {
      name: 'AI/ML Researchers',
      pain: 'Training models to predict or explain traffic, but real-world sensor data rarely comes with verified causal ground truth attached.',
      pitch: '"Generate 180 days of causally-labeled synthetic traffic data in under 30 minutes — you know the exact cause of every anomaly, because we generated it."',
    },
    {
      name: 'Municipal Governments & Urban Planners',
      pain: 'Considering a new road or transit re-route, with no cheap way to test whether it triggers the Braess Paradox before committing budget.',
      pitch: '"This is what we\'re building toward next: a counterfactual simulator you could test infrastructure changes against before you pour concrete. Tell us if that\'s actually the tool you\'d use."',
    },
  ],
  openQuestions: [
    'Should we ship cityviz + the dataset as a standalone tool now, before building the intelligence layers?',
    'Can synthetic data replace real sensor deployments for model training?',
    'What city-level decisions most benefit from counterfactual simulation, once it exists?',
    'How much interpretability is required for municipal adoption?',
  ],
  feedbackFrom: 'Urban planners, transportation researchers, mobility startups, governments, traffic engineers, systems engineers — and people who think this idea cannot work.',
  team: [
    { name: 'Nikhil Y N', role: 'CEO & Technical Lead' },
    { name: 'Prithvi K M', role: 'Engineer, Cloud Infrastructure & Python' },
    { name: 'Karan S J', role: 'Engineer, Web Development' },
    { name: 'M. Talha', role: 'Engineer, Database Architecture & Data Pipelines' },
    { name: 'Anoushka P', role: 'Engineer, AI/ML' },
    { name: 'Ahad U B', role: 'Engineer, AI/ML' },
  ],
  note: <>origin: Google hackathon &mdash; challenge problem &rarr; obsession<br />status: generator + viz real, intelligence layers not yet built<br />synth.main generates 180 days of data in ~28 min</>,
  flowchart: `flowchart TD
    OBS["L1 Observation (synthetic proxy) — live"] --> MEM["L2 Memory — live"]
    MEM --> SB["L3 State Builder — live, lazy-Polars"]
    SB --> FORE["L4a Forecasting — target"]
    SB --> CAUS["L4b Causal Discovery — target"]
    SB --> CONF["L4c Confidence Estimation — target"]
    FORE --> SIM["L5 Simulation — target"]
    CAUS --> SIM
    CONF --> SIM
    SIM --> DEC["L6 Decision — target"]
    DEC -.outcomes feed back.-> MEM`,
  media: [
    {
      type: 'image',
      comingSoon: true,
      caption: 'cityviz — interactive map, live traffic simulation',
    },
    {
      type: 'image',
      comingSoon: true,
      caption: 'synth.main output — 180 days of causally-linked traffic data',
    },
    {
      type: 'video',
      comingSoon: true,
      caption: 'CausalCityAI walkthrough — the generator and viz, end to end',
    },
  ],
}

export default function CausalCityPage() {
  return <ProductPage {...data} />
}
