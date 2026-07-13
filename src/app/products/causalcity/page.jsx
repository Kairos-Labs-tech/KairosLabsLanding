import { ProductPage } from '@/components/ProductPage'

export const metadata = {
  title: 'CausalCityAI — Kairos Labs',
  description: 'A physics-accurate synthetic traffic generator with causal ground truth, built toward an urban intelligence platform.',
}

const data = {
  greek: 'Γ΄',
  accent: '#D7BB90',
  category: 'Urban Intelligence',
  status: 'Research',
  name: 'CausalCityAI',
  tagline: 'Cities behave less like maps and more like living systems.',
  vision: `CausalCity is a synthetic-data generator for city traffic. Physics-accurate, causally labeled, built to become the foundation of a forecast, simulate, decide platform for urban planners.`,
  origin: `CausalCityAI began during a Google hackathon, first as a challenge problem, eventually as an obsession. We got fascinated by the idea that locals understand a city in ways software never does. People know the patterns, the hidden behaviors, the traffic habits, the events, the rhythm of a place. What if a system could learn that too?`,
  problem: `Navigation apps tell you what traffic is doing right now. They don't tell you why, and they definitely don't tell you what happens if you reroute five thousand cars down a side street. Municipalities spend millions on infrastructure without knowing whether it will trigger the Braess Paradox, the effect where adding a road mathematically makes traffic worse.`,
  observation: `Cities are dynamic systems. Traffic affects people. People affect traffic. Weather affects movement. Movement affects congestion. Congestion affects decisions. Everything touches everything else. A model that tries to predict the future, explain why it happened, and recommend a route all at once will be bad at all three.`,
  gotWrong: `Our own architecture doc called this a working six-layer platform. It's a very good data generator with a design document for the other five layers. We rewrote the docs to say that plainly, on 2026-07-13, the day we caught it.`,
  storyState: [
    `Right now, CausalCity is a very good traffic generator, not yet a decision platform. It builds twelve imaginary cities with realistic road networks and lets you watch traffic build, jam, and clear, with the cause of every jam known and labeled, because we generated it.`,
    `That sounds small, but it solves a real problem. Researchers who want to teach a model to find the cause of traffic, not just predict it, can't get real cities to hand them labeled cause-and-effect data. Real sensors don't come with ground truth attached. Ours does.`,
    `The bigger pitch, forecast what a city will do, simulate what happens if you reroute it, recommend a decision, is the destination, not where we are today. That's a target architecture below, not running code. We'd rather say that plainly than let a nice diagram oversell it.`,
  ],
  differentiation: `The generator is the real thing today. Twelve fictional archetype cities, a tech corridor, a port-industrial district, a capital admin zone, a university town, and more, joined into one continuous 9,800-segment road network by 28 inter-city corridors, placed with a spring-layout graph algorithm so the whole map reads as one world instead of twelve disconnected toy examples.

Traffic physics run through a Numba-compiled engine using modified Bureau-of-Public-Roads speed-flow curves, with hysteresis, meaning congestion builds fast and clears slowly, and upstream spillback, meaning a jam in one place backs up into another. That's what lets the generator actually reproduce Braess-Paradox-style effects instead of just simulating free-flowing traffic. A lazy feature builder turns raw simulation state into ML-ready tables on demand, and the whole pipeline generates 180 days of causally linked synthetic traffic in under 30 minutes.

cityviz, the visualization layer, is the most finished part of the product: a real interactive map with time-scrubbing, six toggleable data layers, hex-grid heatmaps, an analytics dashboard, and colorblind-safe palettes throughout.

What's not built yet, plainly: the forecasting, causal-discovery, simulation, and decision layers in the architecture below are the target, not the current state. An early, unmerged branch has rough forecasting and causal-discovery code, but it stands in for those architectures using plain array math rather than the real graph-neural-network machinery it borrows names from, and it isn't wired into anything shippable.`,
  signatureCapabilities: [
    'Twelve archetype cities stitched into one continuous, physically simulated road network',
    'Traffic physics that actually reproduce the Braess Paradox, not just congestion',
    '180 days of causally-linked synthetic data generated in under 30 minutes',
    'A live, interactive map of the whole simulation, not static charts',
  ],
  grindDiagrams: [
    {
      eyebrowGreek: 'IV',
      eyebrow: 'What Runs Today',
      title: 'The generator, as it actually exists.',
      note: 'this is real, tested code',
      intro: `Separate from the target architecture below, this is the pipeline that's actually built and running right now: the part that generates the twelve cities, simulates their traffic, and renders it. Nothing in this diagram is aspirational.`,
      chart: `flowchart TD
        CONFIG["City configs: topology, weather, calendar, events"] --> ROADS["Road network + inter-city corridors"]
        ROADS --> PHYSICS["Physics engine: speed-flow curves, hysteresis, spillback"]
        PHYSICS --> STATE["Per-segment traffic state, every timestep"]
        STATE --> FEATURES["Feature builder: ML-ready tables on demand"]
        STATE --> VIZ["cityviz: interactive map, heatmaps, dashboard"]`,
    },
  ],
  architecture: {
    title: 'The target architecture.',
    noteText: <>vision, not current build</>,
    intro: `This is the destination, not a status report. A strict separation of concerns, so a model that forecasts, explains, and recommends doesn't do all three badly. Today, only the data layers below have real code behind them. The rest is design we're building toward.`,
    layers: [
      { name: 'Observation', desc: 'Collects raw signals: traffic feeds, weather, event schedules, social indicators. Today, the synthetic generator stands in for this, manufacturing realistic history instead of observing a real city.', status: 'partial' },
      { name: 'Memory', desc: 'Stores the historical reality of the city. Without historical context, forecasting and causal discovery are impossible.', status: 'partial' },
      { name: 'State Builder', desc: 'Converts raw data into a consistent entity-and-timestamp state representation. Built today as a genuinely production-shaped feature builder, the most real layer in the stack.', status: 'built' },
      { name: 'Intelligence', desc: 'Three planned engines: forecasting for what will happen, causal discovery for why, and confidence estimation for how sure to be. Not built on the main line today.', status: 'planned' },
      { name: 'Simulation', desc: 'Would imagine alternate futures, reroute 500 users through Road B and see what happens. Not built yet.', status: 'planned' },
      { name: 'Decision', desc: 'Would turn simulations into route recommendations and timing interventions, accounting for the Braess Paradox. Not built yet.', status: 'planned' },
    ],
  },
  futureDirection: [
    'Ship cityviz and the synthetic dataset as a standalone researcher tool',
    'Real sensor integration',
    'Multi-city causal discovery',
    'Municipal API for urban planners',
    'Academic dataset releases',
  ],
  personas: [
    {
      name: 'AI/ML Researchers',
      pain: 'Training models to predict or explain traffic, but real-world sensor data rarely comes with verified causal ground truth attached.',
      pitch: '"Generate 180 days of causally-labeled synthetic traffic data in under 30 minutes. You know the exact cause of every anomaly, because we generated it."',
    },
    {
      name: 'Municipal Governments & Urban Planners',
      pain: 'Considering a new road or transit re-route, with no cheap way to test whether it triggers the Braess Paradox before committing budget.',
      pitch: '"This is what we\'re building toward next: a counterfactual simulator you could test infrastructure changes against before you pour concrete. Tell us if that\'s actually the tool you\'d use."',
    },
  ],
  openQuestions: [
    'Should we ship cityviz and the dataset as a standalone tool now, before building the intelligence layers?',
    'Can synthetic data replace real sensor deployments for model training?',
    'What city-level decisions benefit most from counterfactual simulation, once it exists?',
    'How much interpretability does municipal adoption actually require?',
  ],
  feedbackFrom: 'Urban planners, transportation researchers, mobility startups, governments, traffic engineers, systems engineers, and people who think this idea cannot work.',
  team: [
    { name: 'Nikhil Y N', role: 'CEO & Technical Lead' },
    { name: 'Prithvi K M', role: 'Engineer, Cloud Infrastructure & Python' },
    { name: 'Karan S J', role: 'Engineer, Web Development' },
    { name: 'M. Talha', role: 'Engineer, Database Architecture & Data Pipelines' },
    { name: 'Anoushka P', role: 'Engineer, AI/ML' },
    { name: 'Ahad U B', role: 'Engineer, AI/ML' },
  ],
  note: <>origin: Google hackathon, challenge problem to obsession<br />status: generator and viz are real, intelligence layers are not<br />synth.main generates 180 days of data in about 28 minutes</>,
  flowchart: `flowchart TD
    OBS["L1 Observation, synthetic proxy: live"] --> MEM["L2 Memory: live"]
    MEM --> SB["L3 State Builder: live"]
    SB --> FORE["L4a Forecasting: target"]
    SB --> CAUS["L4b Causal Discovery: target"]
    SB --> CONF["L4c Confidence Estimation: target"]
    FORE --> SIM["L5 Simulation: target"]
    CAUS --> SIM
    CONF --> SIM
    SIM --> DEC["L6 Decision: target"]
    DEC -.outcomes feed back.-> MEM`,
  timeline: {
    shipped: [
      {
        date: '2026-06-18',
        what: 'The generator and cityviz built from scratch.',
        how: 'Procedural city topology, weather, and calendar generators, plus a first pass of the interactive map layer.',
      },
      {
        date: '2026-06-21',
        what: 'Generator and viz reach a stable, tested state.',
        how: 'Hardened the physics loop and put a real test suite around it for the first time.',
      },
      {
        date: '2026-06-25',
        what: 'Analytics dashboard glitch fixed.',
        how: 'A rendering bug in the dashboard panels, caught and patched.',
      },
      {
        date: '2026-07-04',
        what: 'Scaffolded the future intelligence layer, on purpose left empty.',
        how: 'Added the ML dependency group and a models package with no model code in it yet, sequencing the work honestly instead of faking progress.',
      },
      {
        date: '2026-07-12',
        what: 'Shared CI and engineering standards adopted.',
        how: 'Unified lint and test gates, dependency installs, and PR review automation across all three products at once.',
      },
      {
        date: '2026-07-13',
        what: 'Caught our own docs overstating the architecture.',
        how: 'Audited every claim against the actual codebase and rewrote the docs to say plainly what is and isn\'t built.',
      },
    ],
    next: [
      'Start real forecasting and causal-discovery models',
      'Wire in real data sources',
      'Scale and stress-test the pipeline',
    ],
  },
  media: [
    {
      type: 'image',
      comingSoon: true,
      caption: 'cityviz, interactive map of a live traffic simulation',
    },
    {
      type: 'image',
      comingSoon: true,
      caption: 'synth.main output, 180 days of causally-linked traffic data',
    },
    {
      type: 'video',
      comingSoon: true,
      caption: 'CausalCityAI walkthrough, the generator and viz, end to end',
    },
  ],
}

export default function CausalCityPage() {
  return <ProductPage {...data} />
}
