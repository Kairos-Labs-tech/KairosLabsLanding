import { ProductPage } from '@/components/ProductPage'

export const metadata = {
  title: 'WaveCraft — Kairos Labs',
  description: 'An AI audio editor with a real agent tool loop and measured self-audit. Raw sound in, mastered art out.',
}

const data = {
  greek: 'Α΄',
  accent: '#F05941',
  category: 'Audio Intelligence',
  status: 'Working Demo',
  name: 'WaveCraft',
  tagline: 'Raw sound in. Mastered art out.',
  vision: `WaveCraft is an AI audio editor. Give it a messy recording and tell it what you want in plain English, and it cleans up the sound, balances the levels, and masters it to a professional standard, checking its own work before handing it back. Building toward a complete content creator platform: record, edit, and publish, all in one place. Audio is where it started and where it's strongest today; video, clipping, and publishing are the next layers going on top.`,
  origin: `WaveCraft began as a college project. But the underlying problem felt much larger than audio. Creating content is difficult, not because ideas are difficult, but because perfectionism becomes a barrier. People stall before they start, and stall again right before they'd publish. Professional software can feel intimidating, workflows endless, learning curves exhausting. WaveCraft emerged from a simple question: what if editing felt conversational?`,
  problem: `Recording content has become easy. Editing remains difficult. People spend hours cleaning recordings, learning workflows, exploring plugins, watching tutorials, managing exports and versions. Most creators who stall don't lack ideas, they lack the patience for the tooling. WaveCraft is meant to remove that excuse.`,
  observation: `Nobody opens an audio editor because they love EQ curves. They want the recording to sound done: professional, clean, no mistakes left in. The workflow should come from what someone actually wants, not from which plugin they happen to know.`,
  gotWrong: `We first built the agent to write one upfront plan and execute it step by step. It broke constantly, audio problems don't reveal themselves until you're already inside them. We rebuilt it as a real tool-calling loop that decides its next move as it goes, instead of committing to a plan before it has enough information to make one.`,
  storyState: [
    `You give WaveCraft messy audio, a clipped podcast, a noisy interview, and either type what you want in plain English or drag tools onto a timeline yourself. Either way, a real agent runs the cleanup chain: transcribe, separate speakers, reduce noise, master to broadcast loudness.`,
    `The part we're proud of is that it checks its own work. If the output fails a measured quality check, it gets one shot to fix itself before it hands you the result.`,
    `Pulling individual voices and instruments apart from a mixed recording, the single most impressive thing it can do, is turned off by default right now while we finish tuning it. The system also doesn't yet remember in-progress jobs if it restarts mid-task.`,
  ],
  differentiation: `The agent runs as a single tool-calling loop over a 75-tool DSP manifest: transcription, diarization, source separation, LUFS mastering, and more, capped at 80 turns. It plans and executes iteratively as it works through a request, rather than committing to one fixed plan upfront.

Every output passes through a quality-audit step before it reaches you. The agent checks its work against real audio-quality metrics, and if a check fails, it gets one shot to fix itself before the file comes back to you.

The platform runs on tested infrastructure underneath: presigned uploads, OAuth, a rate limiter, a real database.

Current limitations: it runs on a single-machine task queue today, not a distributed cluster. Source separation is off by default while tuning continues. Job state lives in memory, so a server restart clears in-flight work.`,
  signatureCapabilities: [
    'Plans and runs a real audio cleanup and mastering chain from a plain-language request',
    'Measures its own output and repairs it once before handing it back',
    'Full drag-and-drop editing timeline for anyone who wants manual control instead',
    'Masters to broadcast-standard loudness, not a rough guess',
  ],
  grindDiagrams: [
    {
      eyebrowGreek: 'IV',
      eyebrow: 'The Self-Repair Loop',
      title: 'How it catches its own mistakes.',
      note: 'the loop that actually differentiates this',
      intro: `This is the part worth zooming in on. Most agent demos stop at "the AI did the thing." Here, the agent's output has to pass a measured check before it reaches you, and if it fails, the agent gets exactly one bounded attempt to fix it.`,
      chart: `flowchart TD
        PLAN["Agent plans a tool chain from your request"] --> RUN["Tools execute: transcribe, separate, denoise, master"]
        RUN --> MEASURE["Quality audit: measured against real audio metrics"]
        MEASURE -->|passes| DONE["Output returned"]
        MEASURE -->|fails| REPAIR["One bounded repair attempt, max 8 turns"]
        REPAIR --> MEASURE`,
    },
  ],
  futureDirection: [
    'Turn source separation on by default once tuning is finished',
    'Persist job state across server restarts',
    'Full video ingestion: long-form podcast or YouTube video to mastered 9:16 shorts',
    'Face-tracked smart cropping so the speaker stays centered in a vertical crop',
    'LLM-driven highlight detection to find the clip-worthy sixty seconds automatically',
    'Recording, not just editing: capture directly inside WaveCraft',
    'One-click publishing once a piece is mastered and cropped',
  ],
  personas: [
    {
      name: 'The Podcast Editor',
      pain: 'Spends hours a week separating overlapping voices and manually fixing poorly recorded room audio.',
      pitch: '"Drop the file in. The agent handles transcription, cleanup, and mastering end to end. Source separation is next on our list, but we\'re not locked in. What would actually unblock your workflow?"',
    },
    {
      name: 'The Short-Form Content Agency',
      pain: 'Needs to rip high-retention clips from long podcasts fast, but the original audio is clipped or noisy.',
      pitch: 'Consistently mastered audio today. Automated clip selection and cropping is the next build.',
    },
    {
      name: 'Indie Filmmakers and YouTubers',
      pain: "Strong visual setups, audio that doesn't match, because sound engineering is a skill they never wanted to learn.",
      pitch: '"Studio-quality audio to match your studio-quality visuals, without ever opening an audio manual."',
    },
  ],
  openQuestions: [
    'Do people want an audio editor, or something closer to broader media tooling?',
    'Is source separation actually the feature that matters most, or are we overweighting it?',
    'How much automation feels useful before it starts feeling intrusive?',
    'Do people actually want conversational editing, or would they rather just have a better editing app?',
  ],
  feedbackFrom: 'Audio engineers, podcast creators, media professionals, video editors, and people who gave up on content creation altogether.',
  team: [
    { name: 'Nikhil Y N', role: 'CEO & Technical Lead' },
    { name: 'Utkarsh P', role: 'Co-founder, Python Backend & Marketing' },
    { name: 'Sanjay J', role: 'Engineer, CI/CD & Security' },
  ],
  note: <>status: working demo<br />voice/instrument separation off by default while we tune it<br />runs on one machine, not a distributed cluster</>,
  flowchart: `flowchart TD
    IN["Upload: chat or timeline"] --> CLASSIFY["Classify the task"]
    CLASSIFY --> WHISPER["Transcript + word alignment"]
    CLASSIFY --> DIARIZE["Speaker diarization"]
    WHISPER --> AGENT["Agent tool loop: 75 tools"]
    DIARIZE --> AGENT
    AGENT --> SEP["Source separation, off by default"]
    AGENT --> DSP["DSP chain: denoise, EQ, LUFS master"]
    SEP --> QA["Quality audit"]
    DSP --> QA
    QA -->|fail| REPAIR["One bounded repair"]
    REPAIR --> QA
    QA -->|pass| OUT["Mastered output"]`,
  timeline: {
    shipped: [
      {
        era: 'Foundations',
        date: '2026-06-08',
        what: 'First working build: agent harness and DSP loop run end to end.',
        how: 'Monorepo restructure plus a first working chain of transcription and DSP tools driven by an LLM planner.',
      },
      {
        era: 'Foundations',
        date: '2026-06-09',
        what: 'UI and TTS pipeline groundwork.',
        how: 'Resizable panels, output tab, and a locked-in text-to-speech reference technique.',
      },
      {
        era: 'This Sprint',
        date: '2026-07-02',
        what: 'Agent loop rebuilt on native tool-calling.',
        how: 'Replaced one-shot planning with a real function-calling loop instead of a single upfront plan.',
      },
      {
        era: 'This Sprint',
        date: '2026-07-03',
        what: 'Drag-and-drop DAW-style timeline shipped.',
        how: 'A manual tool canvas alongside the existing chat mode, same backend underneath both.',
      },
      {
        era: 'This Sprint',
        date: '2026-07-04',
        what: 'Google OAuth login added.',
        how: 'Real authentication, not a stub, tested alongside S3 presigned uploads.',
      },
      {
        era: 'This Sprint',
        date: '2026-07-06',
        what: 'Security hardening pass; the two tool canvases unified into one.',
        how: 'A four-phase audit: security, lean tooling, docs restructure, and merging drag-and-drop with chat into a single surface.',
      },
      {
        era: 'This Sprint',
        date: '2026-07-09',
        what: 'The self-audit loop shipped.',
        how: 'Added a quality-judge pass and asset provisioning, so generated audio gets measured and repaired before it reaches you.',
      },
    ],
    next: [
      'Deploy a real, public version people can actually use',
      'Get it in front of real users',
      'Start investor conversations',
    ],
  },
  media: [
    {
      type: 'image',
      comingSoon: true,
      caption: 'Interactive editor, chat and drag-and-drop timeline view',
    },
    {
      type: 'image',
      comingSoon: true,
      caption: 'Before and after waveform, raw upload to mastered output',
    },
    {
      type: 'video',
      comingSoon: true,
      caption: 'WaveCraft demo, raw podcast to mastered audio',
    },
  ],
}

export default function WaveCraftPage() {
  return <ProductPage {...data} />
}
