import { ProductPage } from '@/components/ProductPage'

export const metadata = {
  title: 'WaveCraft — Kairos Labs',
  description: 'An AI audio editor with a real agent tool loop and measured self-audit — raw sound in, mastered art out.',
}

const data = {
  greek: 'Α΄',
  category: 'Audio Intelligence',
  status: 'Working MVP',
  name: 'WaveCraft',
  tagline: 'Raw sound in. Mastered art out.',
  vision: `WaveCraft is an AI audio editor: describe what you want in plain language, and an agent plans and runs a real chain of DSP/ML tools — checking its own output against measured quality gates, and retrying when it's wrong.`,
  origin: `WaveCraft began as a college project. But the underlying problem felt much larger. Creating content is difficult — not because ideas are difficult, but because perfectionism becomes a barrier. People hesitate to begin. People hesitate to publish. Professional software can feel intimidating, workflows endless, learning curves exhausting. WaveCraft emerged from a simple question: what if editing felt conversational?`,
  problem: `Recording content has become easy. Editing remains difficult. People spend hours cleaning recordings, learning workflows, exploring plugins, watching tutorials, managing exports and versions. Many creators stop before publishing — not because they lack creativity, but because tools create hesitation.`,
  observation: `People don't want compressors. People don't want EQ curves. People don't want plugins. People want outcomes. Make this podcast sound professional. Remove noise. Fix mistakes. The workflow should emerge from intent — not the other way around.`,
  storyState: [
    `You give WaveCraft messy audio — a clipped podcast, a noisy interview — and either type what you want in plain English or drag tools onto a timeline yourself. Either way, a real agent runs the actual cleanup chain: transcribe, separate speakers, reduce noise, master to broadcast loudness.`,
    `The part we're proud of: it checks its own work. If the output fails a measured quality check, it gets one shot to fix itself before it hands you the result — not "trust the AI," but "trust the AI because it had to pass a test."`,
    `The honest gap: source separation, the single most impressive thing it can do, is turned off by default right now while we finish tuning it — and the system doesn't yet remember in-progress jobs if the server restarts. We'd rather you know that than assume it's flawless.`,
  ],
  differentiation: `The agent loop is real, single-agent, tool-calling — function-calling over a 75-tool DSP/ML manifest (transcription, diarization, source separation, LUFS mastering, and more), capped at 80 turns. It's an honest ReAct-style loop with a hand-rolled policy layer, not a multi-agent system and not a planning graph.

Every output passes through measured quality gates before it's shown to you — the agent checks its own work against audio-quality metrics and gets one bounded repair attempt if it fails, instead of shipping whatever it produced first.

Auth (Google/GitHub OAuth), S3 presigned uploads, rate limiting, and the database layer are genuinely production-grade for this stage — all tested, all real. The frontend is a fully-wired React app with both a chat mode and a drag-and-drop DAW-style timeline.

What's honestly not true yet, so we can say it before you find out: this doesn't run on a distributed GPU cluster — it's a single-process GPU task queue on one machine. Source separation, the headline capability, is switched off by default in the standard path today while we tune it. And job state lives in memory, so a server restart loses in-flight work. None of that is dressed up.`,
  builtCapabilities: [
    'Agent tool-calling loop (function-calling, 75-tool manifest)',
    'Self-audit + one bounded repair pass on failed quality checks',
    'Speaker diarization',
    'Transcription + word-level alignment',
    'LUFS mastering to broadcast standard',
    'OAuth, S3 presigned uploads, rate limiting — all tested',
    'React frontend — chat mode + DAW-style timeline, fully wired',
  ],
  plannedCapabilities: [
    'Source separation on by default (currently off pending tuning)',
    'Persistent job state across server restarts',
    'Full MP4 ingestion — long-form video to 9:16 shorts',
    'Face-tracked smart cropping',
    'LLM-driven highlight detection for video',
  ],
  futureDirection: [
    'Full MP4 ingestion — long-form video to viral 9:16 shorts',
    'Face-tracked smart cropping',
    'LLM-driven highlight detection and edit-decision output',
    'Brand personalization and dynamic content replacement',
    'Post-production automation and version generation',
  ],
  personas: [
    {
      name: 'The Podcast Editor',
      pain: 'Spends hours a week isolating speakers and manually EQing poorly recorded room audio.',
      pitch: '"Drop the file in — the agent handles transcription, cleanup, and LUFS mastering end to end. Source separation is landing next; tell us if that\'s the blocker for you."',
    },
    {
      name: 'The Short-Form Content Agency',
      pain: 'Needs to rip high-retention clips from long podcasts instantly, but the original audio is filled with clipping or background noise.',
      pitch: 'Automated, consistently leveled audio today. Automated clip selection and cropping is the next build — see Future Direction.',
    },
    {
      name: 'Indie Filmmakers / YouTubers',
      pain: "They have strong visual setups but the audio doesn't match, because they don't understand DSP and don't want to learn it.",
      pitch: '"Studio audio to match your studio visuals — without opening a DSP textbook."',
    },
  ],
  openQuestions: [
    'Do people want an audio editor, or do they want broader media tooling?',
    'Is source separation actually the feature that matters most, or are we overweighting it?',
    'How much automation feels useful versus intrusive?',
    'Do users care about conversational editing, or would they rather just have a better DAW?',
  ],
  feedbackFrom: 'Audio engineers, podcast creators, media professionals, video editors — and people who abandoned content creation.',
  team: [
    { name: 'Nikhil Y N', role: 'CEO & Technical Lead' },
    { name: 'Utkarsh P', role: 'Co-founder, Python Backend & Marketing' },
    { name: 'Sanjay J', role: 'Engineer, CI/CD & Security' },
  ],
  note: <>status: working MVP &mdash; agent loop, auth, uploads all real<br />source separation off by default while we tune it<br />single-machine GPU queue, not a distributed cluster</>,
  flowchart: `flowchart TD
    IN["Upload — chat or timeline"] --> CLASSIFY["Classify task type"]
    CLASSIFY --> WHISPER["Transcript + word alignment"]
    CLASSIFY --> DIARIZE["Speaker diarization"]
    WHISPER --> AGENT["Agent tool loop — 75 tools, function-calling"]
    DIARIZE --> AGENT
    AGENT --> SEP["Source separation — off by default"]
    AGENT --> DSP["DSP chain — denoise, EQ, LUFS master"]
    SEP --> QA["Quality audit — measured gates"]
    DSP --> QA
    QA -->|fail| REPAIR["Bounded repair — one retry"]
    REPAIR --> QA
    QA -->|pass| OUT["Mastered output"]`,
  media: [
    {
      type: 'image',
      comingSoon: true,
      caption: 'Interactive editor — chat + DAW timeline view',
    },
    {
      type: 'image',
      comingSoon: true,
      caption: 'Before/after waveform — raw upload to mastered output',
    },
    {
      type: 'video',
      comingSoon: true,
      caption: 'WaveCraft demo — raw podcast to mastered audio',
    },
  ],
}

export default function WaveCraftPage() {
  return <ProductPage {...data} />
}
