import { ProductPage } from '@/components/ProductPage'
import { getVaultContent } from '@/lib/vault'

export const metadata = {
  title: 'CausalCityAI — Kairos Labs',
  description: 'A 6-layer urban intelligence platform for city simulation and counterfactual testing.',
}

const data = {
  greek: 'Γ΄',
  category: 'Urban Intelligence',
  status: 'Research',
  name: 'CausalCityAI',
  tagline: 'Cities behave less like maps and more like living systems.',
  vision: `CausalCity is a 6-layer intelligence platform that simulates real urban environments to generate massive, causally-linked synthetic datasets.`,
  origin: `CausalCityAI began during a Google hackathon — initially a challenge problem, eventually an obsession. We became fascinated by the idea that locals understand cities in ways software does not: people know patterns, hidden behaviors, traffic habits, events, temporal rhythms, context. What if systems could learn them?`,
  problem: `Navigation apps tell you what traffic is doing right now. They don't tell you why, and they certainly don't tell you what will happen if you reroute 5,000 cars down a side street. Municipalities spend millions on infrastructure without knowing if it will trigger the Braess Paradox — where adding a road mathematically makes traffic worse.`,
  observation: `Cities are dynamic systems. Traffic affects people. People affect traffic. Weather affects movement. Movement affects congestion. Congestion affects decisions. Everything interacts. A model that tries to predict the future, explain why it happened, and recommend a route will be terrible at all three.`,
  differentiation: `We build a digital twin of your city. Navigation apps tell you what traffic is doing — we tell you why, and what will happen if you change it. The key insight: cities must be treated as dynamic graphs, not static maps. Every observation is expressed as (entity, timestamp) → state — immutable, append-only, fully auditable. Social media posts are not blindly ingested; they are clustered, verified against official sources, and only then promoted to Canonical Events. Our synth.main Numba JIT physics generator produces 180 days of causally-linked synthetic traffic data in under 30 minutes — so the AI team doesn't wait for sensor deployments before training GNNs.`,
  capabilities: [
    'Observation layer — traffic, weather, event schedules, social signals',
    'Memory layer — immutable append-only historical state',
    'State builder — (entity, timestamp) → state canonical representation',
    'Event clustering with source verification and trust tiers',
    'Forecasting engine — spatio-temporal GNNs',
    'Causal discovery — lag-based + multi-city structural analysis',
    'Confidence estimation — bootstrap validation + stability scoring',
    'Counterfactual simulation (Braess Paradox detection)',
    'Decision support — routes, timing, stop-reordering',
    'Synthetic dataset generation (180 days in ~28 minutes)',
  ],
  architecture: {
    layers: [
      { name: 'Observation', desc: 'Collects raw signals: traffic feeds, weather, event schedules, social media indicators. Immutable and append-only.' },
      { name: 'Memory', desc: 'Stores the historical reality of the city. Without historical context, forecasting and causal discovery are impossible.' },
      { name: 'State Builder', desc: 'Converts messy real-world data into a consistent representation: (entity, timestamp) → state. Single source of truth.' },
      { name: 'Intelligence', desc: 'Three engines: Forecasting (what will happen?), Causal Discovery (why will it happen?), and Confidence Estimation.' },
      { name: 'Simulation', desc: 'Imagines alternate futures. If Intelligence predicts a traffic jam on Road A, Simulation asks: what happens if we reroute 500 users through Road B?' },
      { name: 'Decision', desc: 'Turns simulations into interventions: route recommendations, departure time adjustments, stop-reordering plans — factoring in Braess Paradox.' },
    ],
  },
  futureDirection: [
    'Real sensor integration',
    'Multi-city causal discovery',
    'Personal planning engine',
    'Municipal API for urban planners',
    'Academic dataset releases',
  ],
  personas: [
    {
      name: 'Municipal Governments & Urban Planners',
      pain: 'They are building a new highway or re-routing a transit line and need to know if this will cause the Braess Paradox.',
      pitch: '"Don\'t guess with taxpayer money. Run a large-scale agent simulation on a digital twin of your city before you pour the concrete."',
    },
    {
      name: 'AI/ML Researchers',
      pain: 'Training Spatio-temporal GNNs to predict traffic, but lacking large-scale, causally-linked datasets to validate their models.',
      pitch: '"Generate 180 days of highly realistic, causally-linked traffic data in 28 minutes. Start training your AI today."',
    },
  ],
  openQuestions: [
    'How much interpretability is required for municipal adoption?',
    'Can synthetic data replace real sensor deployments for model training?',
    'What city-level decisions most benefit from counterfactual simulation?',
    'How do we handle the Braess Paradox at scale with live user compliance?',
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
  note: <>origin: Google hackathon &mdash; challenge problem &rarr; obsession<br />status: research / architecture phase<br />synth.main generates 180 days of data in 28 min</>,
  flowchart: `flowchart TD
    OBS[L1 Observation: traffic feeds, weather, events, social signals] --> MEM[L2 Memory: historical city state]
    MEM --> SB[L3 State Builder: entity × timestamp → state]
    SB --> FORE[L4a Forecasting: spatio-temporal GNNs]
    SB --> CAUS[L4b Causal Discovery: lag-based structural analysis]
    SB --> CONF[L4c Confidence Estimation: bootstrap + stability]
    FORE --> SIM[L5 Simulation: counterfactual futures]
    CAUS --> SIM
    CONF --> SIM
    SIM --> DEC[L6 Decision: routes, timing, Braess Paradox detection]
    DEC -.outcomes feed back.-> MEM`,
  media: [
    {
      type: 'image',
      src: '/media/causalcity/architecture-diagram.png',
      caption: '6-layer platform — strict separation of concerns',
    },
    {
      type: 'image',
      src: '/media/causalcity/synthetic-data-output.png',
      caption: 'synth.main output — 180 days of causally-linked traffic data',
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/watch?v=PLACEHOLDER_CAUSALCITY',
      caption: 'CausalCityAI demo — simulating 5,000 agents in real-time',
    },
  ],
}

export default function CausalCityPage() {
  const vaultContent = getVaultContent('CausalCity')
  return <ProductPage {...data} vaultContent={vaultContent} />
}
