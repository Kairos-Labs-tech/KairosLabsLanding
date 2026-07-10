import { ProductPage } from '@/components/ProductPage'

export const metadata = {
  title: 'WaveCraft — Kairos Labs',
  description: 'An autonomous AI audio engineer. Raw sound in, mastered art out.',
}

const data = {
  greek: 'Α΄',
  category: 'Audio Intelligence',
  status: 'Working MVP',
  name: 'WaveCraft',
  tagline: 'Raw sound in. Mastered art out.',
  vision: `WaveCraft is an autonomous AI audio engineer. You give it raw, messy audio — whether it's a clipped podcast recording or a noisy field interview — and it figures out exactly how to clean it, isolate the speakers, and master it to professional studio standards.`,
  origin: `WaveCraft began as a college project in May 2026. But the underlying problem felt much larger. Creating content is difficult — not because ideas are difficult, but because perfectionism becomes a barrier. People hesitate to begin. People hesitate to publish. Professional software can feel intimidating. Workflows can feel endless. Learning curves can feel exhausting. WaveCraft emerged from a simple question: what if editing felt conversational?`,
  problem: `Recording content has become easy. Editing remains difficult. People spend hours cleaning recordings, learning workflows, exploring plugins, watching tutorials, managing exports and versions. Many creators stop before publishing — not because they lack creativity, but because tools create hesitation.`,
  observation: `People don't want compressors. People don't want EQ curves. People don't want plugins. People want outcomes. Make this podcast sound professional. Remove noise. Fix mistakes. The workflow should emerge from intent — not the other way around.`,
  differentiation: `Unlike generic AI tools or traditional DAW software, WaveCraft bridges the gap between intent and execution. We use a deterministic feedback loop — if the AI makes a mistake, it catches its own clipping errors via mathematical DSP audits, not "vibes". The pipeline is transparent: WhisperX for transcription and alignment, pyannote.audio for speaker diarization, SAM for source separation — each step auditable, each output inspectable. A FastAPI layer handles state-free routing while a Ray GPU cluster serializes heavy model work, preventing the OOM crashes that plague naive multi-model pipelines.`,
  capabilities: [
    'Speaker diarization (pyannote.audio)',
    'Transcription + word-level alignment (WhisperX)',
    'Source separation (SAM)',
    'Spectral noise reduction (SNR-gated)',
    'LUFS mastering to broadcast standard',
    'Intent-driven pipeline orchestration (LangGraph + Gemini)',
    'Branching outputs and workflow graphs',
    'Human-in-the-loop modifications',
    'S3-streamed uploads (no disk locking)',
    'Real-time progress via offset polling (SSE-safe)',
  ],
  futureDirection: [
    'Full MP4 ingestion — long-form video to viral 9:16 shorts',
    'Face-tracked smart cropping (MediaPipe)',
    'LLM-driven highlight detection (Gemini EDL output)',
    'Brand personalization and dynamic content replacement',
    'Post-production automation and version generation',
    'Cross-media workflows',
  ],
  personas: [
    {
      name: 'The Podcast Editor',
      pain: 'Spends 10 hours a week isolating speakers and manually EQing poorly recorded room audio.',
      pitch: '"Stop doing the math. Drop the file in, and our AI does the heavy lifting of source separation and LUFS mastering."',
    },
    {
      name: 'The Short-Form Content Agency',
      pain: 'Needs to rip high-retention clips from 3-hour podcasts instantly, but the original audio is filled with clipping or background noise.',
      pitch: '"Automated, perfectly leveled audio for 9:16 virality."',
    },
    {
      name: 'Indie Filmmakers / YouTubers',
      pain: 'They have incredible visual setups but absolutely butcher the audio because they don\'t understand DSP.',
      pitch: '"Studio audio to match your studio visuals."',
    },
  ],
  openQuestions: [
    'Do people want an audio editor, or do they want broader media tooling?',
    'What workflows matter most?',
    'How much automation feels useful versus intrusive?',
    'Do users care about conversational editing or branching outputs?',
  ],
  feedbackFrom: 'Audio engineers, podcast creators, media professionals, video editors — and people who abandoned content creation.',
  team: [
    { name: 'Nikhil Y N', role: 'CEO & Technical Lead' },
    { name: 'Utkarsh P', role: 'Co-founder, Python Backend & Marketing' },
    { name: 'Sanjay J', role: 'Engineer, CI/CD & Security' },
  ],
  note: <>started V.2026 as a college project<br />status: working MVP &mdash; interactive editor, editable pipelines<br />expanding into video in next phase</>,
  flowchart: `flowchart TD
    IN[yt-dlp: Long-form Video] --> SPLIT[FFmpeg: Split Audio/Video]
    SPLIT -->|Audio| WHISPER[faster-whisper: Transcript + Timestamps]
    SPLIT -->|Video| TRACK[MediaPipe: Face Tracking]
    WHISPER --> LLM[Gemini: Viral Highlight Detection]
    LLM -->|Timestamps| TRACK
    TRACK -->|9:16 Cropped Video| MUX[FFmpeg: Burn Subs + Mux]
    WHISPER -->|Audio| DSP[WaveCraft Master Pipeline]
    DSP -->|Mastered Audio| MUX
    MUX --> OUT[Viral Short-form Clip]`,
  media: [
    {
      type: 'image',
      src: '/media/wavecraft/editor-screenshot.png',
      caption: 'Interactive editor — pipeline view',
    },
    {
      type: 'image',
      src: '/media/wavecraft/waveform-view.png',
      caption: 'Waveform + speaker separation output',
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/watch?v=PLACEHOLDER_WAVECRAFT',
      caption: 'WaveCraft demo — raw podcast to mastered audio',
    },
  ],
}

export default function WaveCraftPage() {
  return <ProductPage {...data} />
}
