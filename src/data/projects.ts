import type { ArchitectureNode, Project } from "@/types/project";

const standardPipeline = (
  dbLabel: string,
  dbDescription: string,
): ArchitectureNode[] => [
  {
    id: "frontend",
    label: "Frontend",
    description: "Next.js App Router client, server-rendered and streamed.",
    icon: "frontend",
  },
  {
    id: "gateway",
    label: "API Gateway",
    description:
      "Single entry point handling routing, rate limiting, and CORS.",
    icon: "gateway",
  },
  {
    id: "auth",
    label: "Authentication",
    description: "JWT-based session auth with refresh-token rotation.",
    icon: "auth",
  },
  {
    id: "cache",
    label: "Redis",
    description: "Hot-path caching and session storage to cut database load.",
    icon: "cache",
  },
  {
    id: "queue",
    label: "Queue",
    description: "Background job queue for async work off the request path.",
    icon: "queue",
  },
  {
    id: "database",
    label: dbLabel,
    description: dbDescription,
    icon: "database",
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Containerized services deployed behind a load balancer.",
    icon: "cloud",
  },
];

export const projects: Project[] = [
  {
    slug: "ai-job-tracker",
    name: "AI Job Tracker SaaS",
    tagline:
      "Turns a messy job hunt into a structured pipeline, auto-parsing applications from your inbox.",
    featured: true,
    problem:
      "Job seekers track applications across scattered emails, spreadsheets, and job boards, losing sight of deadlines, follow-ups, and interview stages.",
    solution:
      "A SaaS dashboard that ingests application emails, uses an LLM to extract structured data (company, role, stage, deadline), and surfaces a kanban-style pipeline with automated follow-up reminders.",
    overview:
      "AI Job Tracker connects to a user's inbox via OAuth, classifies incoming emails as job-application-related, and extracts structured fields using an LLM with a constrained JSON schema. Extracted applications populate a kanban board the user can drag between stages, with reminders for stale applications.",
    features: [
      "Gmail/Outlook OAuth connection with read-only scopes",
      "LLM-powered email classification and structured field extraction",
      "Drag-and-drop kanban pipeline across application stages",
      "Automated follow-up reminders for stale applications",
      "Weekly digest email summarizing pipeline health",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "OpenAI API",
      "AWS SQS",
      "Docker",
    ],
    metrics: [
      { label: "Extraction accuracy", value: "94%" },
      { label: "Avg. processing time", value: "1.8s" },
      { label: "Emails processed", value: "50k+" },
    ],
    architecture: standardPipeline(
      "PostgreSQL",
      "Normalized schema for users, applications, and stage-history events.",
    ),
    database:
      "PostgreSQL with a normalized schema: users, mailbox_connections, applications, and an append-only stage_events table for full pipeline history. Application extraction results are stored as JSONB alongside typed columns for the fields the UI queries directly, avoiding a full schema migration every time the extraction model's output shape evolves.",
    apiDesign:
      "REST API versioned under /api/v1, with a dedicated internal endpoint for the email-ingestion worker to post extracted applications. Public endpoints are documented with OpenAPI and rate-limited per user via a Redis token bucket.",
    authentication:
      "User accounts use email/password plus OAuth for mailbox access, kept as separate concerns — a compromised OAuth token never grants dashboard access on its own. Sessions are JWT access tokens (15 min) with rotating refresh tokens stored as httpOnly cookies.",
    performance:
      "Email classification and extraction run as background jobs via SQS, so the ingestion webhook always returns in under 200ms regardless of LLM latency. Redis caches the user's active pipeline view, invalidated on any stage-change event.",
    challenges: [
      {
        challenge:
          "LLM extraction occasionally hallucinated fields or returned malformed JSON under load.",
        solution:
          "Constrained output with a strict JSON schema and function-calling, plus a validation layer that retries with a stricter prompt on schema mismatch before falling back to manual review.",
      },
      {
        challenge:
          "Users connecting large mailboxes (10k+ emails) caused an initial sync backlog.",
        solution:
          "Chunked the historical sync into paginated background jobs with exponential backoff, prioritizing the most recent 90 days first so the dashboard has useful data within minutes.",
      },
    ],
    deployment:
      "Containerized with Docker, deployed on AWS ECS behind an Application Load Balancer. The ingestion worker runs as a separate auto-scaling service so email-processing spikes don't compete with API request latency.",
    futureImprovements: [
      "Support for calendar integration to auto-detect interview scheduling",
      "Fine-tuned extraction model to reduce reliance on a third-party LLM API",
      "Browser extension for one-click manual application logging",
    ],
    lessonsLearned: [
      "Constrain LLM output format aggressively — free-form JSON parsing breaks in production in ways it never does in a demo.",
      "Separate ingestion latency from user-facing latency from day one; retrofitting a queue later is far more painful.",
    ],
    links: {
      demo: "https://example.com",
      github: "https://github.com/A-s-h-i-s-h-Biswas",
    },
  },
  {
    slug: "devflow",
    name: "Developer Productivity Platform",
    tagline:
      "A unified dashboard that pulls PR status, CI health, and on-call load into one view for engineering teams.",
    featured: true,
    problem:
      "Engineering teams juggle GitHub, CI dashboards, and incident tools separately, making it hard to see team-wide velocity or spot at-risk PRs before standup.",
    solution:
      "A single internal dashboard that aggregates GitHub PR data, CI pipeline status, and on-call schedules via webhooks and scheduled polling, surfacing stale PRs, flaky test trends, and team load at a glance.",
    overview:
      "DevFlow ingests events from GitHub, CI providers, and PagerDuty-style on-call tools through webhooks, normalizing them into a shared event model. A real-time dashboard highlights PRs waiting on review, CI flakiness trends, and per-engineer on-call burden.",
    features: [
      "Real-time PR status board grouped by review-wait time",
      "CI flakiness detection across repeated test failures",
      "On-call load balancing view across the team",
      "Slack notifications for PRs stalled beyond a configurable threshold",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "GitHub Webhooks",
      "Docker",
    ],
    metrics: [
      { label: "PR review time", value: "-35%" },
      { label: "Teams onboarded", value: "6" },
      { label: "Events processed/day", value: "12k+" },
    ],
    architecture: standardPipeline(
      "PostgreSQL",
      "Event-sourced schema storing normalized GitHub/CI/on-call events.",
    ),
    database:
      "PostgreSQL storing an append-only events table (GitHub, CI, on-call) plus materialized views recomputed on a schedule for dashboard aggregates, keeping expensive rollups off the request path.",
    apiDesign:
      "Webhook receivers validate provider signatures, normalize payloads into a shared event schema, and push to a queue. A thin internal GraphQL API serves the dashboard, chosen specifically for the ability to fetch nested PR/CI/on-call data in one round trip.",
    authentication:
      "SSO via the team's existing identity provider (OIDC), with role-based access so engineering managers see team-wide views while ICs see their own.",
    performance:
      "Dashboard updates stream over WebSockets rather than polling, and per-team aggregates are cached in Redis with a short TTL, refreshed by the same background job that processes incoming events.",
    challenges: [
      {
        challenge:
          "GitHub webhook delivery is at-least-once, causing duplicate event processing.",
        solution:
          "Made event ingestion idempotent using each provider's unique event ID as a dedupe key stored in Redis with a short expiry.",
      },
      {
        challenge:
          "Flakiness detection produced false positives on tests with legitimate environment-dependent failures.",
        solution:
          "Switched from a raw failure-rate threshold to a statistical test that accounts for failure clustering by commit and CI runner.",
      },
    ],
    deployment:
      "Docker Compose for local dev, deployed to a single-region Kubernetes cluster with horizontal pod autoscaling on the webhook-ingestion service specifically, since that's the component with the spikiest load.",
    futureImprovements: [
      "Cross-repo dependency graph to flag PRs likely to conflict",
      "Predictive alerts for on-call burnout risk based on historical load",
    ],
    lessonsLearned: [
      "Design for at-least-once delivery from the first webhook integration — retrofitting idempotency later touches every ingestion path.",
      "GraphQL earned its complexity here specifically because the dashboard's data shape is deeply nested; it wouldn't have for a flatter API.",
    ],
    links: {
      demo: "https://example.com",
      github: "https://github.com/A-s-h-i-s-h-Biswas",
    },
  },
  {
    slug: "bike-service-platform",
    name: "Bike Service Platform",
    tagline:
      "Marketplace connecting bike owners with local mechanics for on-demand and scheduled servicing.",
    featured: true,
    problem:
      "Getting a bike serviced usually means calling around local shops with no visibility into pricing, availability, or mechanic quality.",
    solution:
      "A two-sided marketplace where riders book service slots with verified mechanics, track service status in real time, and pay through the platform, while mechanics manage their schedule and inventory.",
    overview:
      "The platform serves two apps from one backend: a rider-facing booking flow and a mechanic-facing job management console. Bookings flow through a state machine (requested → confirmed → in progress → completed) with real-time status updates.",
    features: [
      "Real-time mechanic availability and instant booking",
      "In-app service status tracking with push notifications",
      "Integrated payments with escrow release on job completion",
      "Mechanic-side inventory and parts-pricing management",
    ],
    techStack: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Stripe Connect",
      "AWS",
    ],
    metrics: [
      { label: "Avg. booking time", value: "90s" },
      { label: "Mechanics onboarded", value: "80+" },
      { label: "Completed services", value: "3,000+" },
    ],
    architecture: standardPipeline(
      "PostgreSQL",
      "Relational schema modeling riders, mechanics, bookings, and payments.",
    ),
    database:
      "PostgreSQL with a booking state machine enforced at the database layer via check constraints, preventing invalid state transitions even if application code has a bug. Geospatial mechanic search uses PostGIS for radius queries.",
    apiDesign:
      "REST API shared between the rider and mechanic apps, with role-scoped endpoints. Booking state transitions go through a single internal service method to guarantee the state machine's invariants hold everywhere.",
    authentication:
      "Phone-number OTP auth for riders (lower signup friction than email), email/password with manual verification for mechanics onboarding onto the platform.",
    performance:
      "Mechanic availability search is cached per geographic cell in Redis and invalidated on any schedule change, keeping the booking flow's critical search step fast even during peak-hour spikes.",
    challenges: [
      {
        challenge:
          "Double-booking occurred when two riders booked the same mechanic slot simultaneously.",
        solution:
          'Added a database-level unique constraint on (mechanic_id, slot_start) combined with optimistic locking, rejecting the losing request with a clear "slot just taken" error instead of silently overwriting.',
      },
      {
        challenge:
          "Payment escrow release needed to survive the app crashing mid-transaction.",
        solution:
          'Moved escrow release to an idempotent, retryable background job triggered by a durable "job completed" event rather than an in-request side effect.',
      },
    ],
    deployment:
      "Backend deployed on AWS ECS with PostgreSQL on RDS; mobile apps distributed via TestFlight and Play Console internal testing tracks during the pilot city rollout.",
    futureImprovements: [
      "Dynamic pricing based on mechanic demand and time of day",
      "In-app chat between rider and mechanic during active jobs",
    ],
    lessonsLearned: [
      "Enforce critical invariants (like booking state transitions) at the database level, not just in application code — it's the difference that actually prevented double-bookings in production.",
      'Payment flows must be designed around "what if this crashes right here" for every step, not just the happy path.',
    ],
    links: {
      github: "https://github.com/A-s-h-i-s-h-Biswas",
    },
  },
  {
    slug: "healthcare-crm",
    name: "Healthcare CRM & App",
    tagline:
      "Patient relationship management for clinics, built around appointment workflows and HIPAA-conscious data handling.",
    featured: true,
    problem:
      "Small clinics manage patient communication and follow-ups through a mix of paper, spreadsheets, and generic CRMs that aren't built for healthcare workflows or compliance needs.",
    solution:
      "A CRM purpose-built for clinics: patient records, appointment scheduling with automated reminders, and staff task management, with access control and audit logging designed around healthcare data sensitivity.",
    overview:
      "The CRM centers on a patient timeline — appointments, notes, and communications in one view — with role-based access so front-desk staff, nurses, and physicians see only what their role requires. Every read/write to patient records is audit-logged.",
    features: [
      "Patient timeline with appointments, notes, and communication history",
      "Automated SMS/email appointment reminders",
      "Role-based access control (front-desk, nurse, physician, admin)",
      "Full audit log of every access to patient records",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Twilio",
      "AWS",
    ],
    metrics: [
      { label: "No-show rate", value: "-28%" },
      { label: "Clinics onboarded", value: "5" },
      { label: "Patient records managed", value: "15,000+" },
    ],
    architecture: standardPipeline(
      "PostgreSQL",
      "Row-level security enforced per clinic tenant, with a full audit-log table.",
    ),
    database:
      "PostgreSQL with row-level security policies scoping every query to the authenticated user's clinic, so a bug in application code can't leak one clinic's patient data into another's view. A separate append-only audit_log table records every access to a patient record.",
    apiDesign:
      "REST API with every mutating endpoint requiring an explicit reason code for the change, written to the audit log alongside the diff — a requirement that shaped the API design from the start rather than being bolted on.",
    authentication:
      "Email/password with mandatory 2FA for all staff roles, session timeouts tuned per role (shorter for front-desk shared terminals, longer for physician accounts).",
    performance:
      "Patient timeline queries are the hottest path in the app; denormalized read models keyed by patient ID are cached in Redis and invalidated on any write to that patient's record.",
    challenges: [
      {
        challenge:
          "Row-level security policies initially caused a significant query slowdown under load testing.",
        solution:
          "Restructured policies to use an indexed clinic_id column checked first, letting Postgres's planner filter before evaluating more complex policy conditions.",
      },
      {
        challenge:
          "Appointment reminders needed to respect each clinic's own quiet hours and patient opt-outs.",
        solution:
          "Built a rules-engine layer between the scheduler and the Twilio send call, evaluating clinic and patient-level preferences before every send rather than hardcoding a single global policy.",
      },
    ],
    deployment:
      "Deployed on AWS with infrastructure isolated per compliance boundary — a separate VPC for the database tier, with all patient data encrypted at rest and in transit.",
    futureImprovements: [
      "Configurable intake forms per clinic specialty",
      "Insurance eligibility verification integration",
    ],
    lessonsLearned: [
      "Compliance requirements (audit logging, access scoping) are far cheaper to build in from the schema up than to retrofit onto an existing data model.",
      "Row-level security is powerful but query-plan-sensitive — test it under realistic load, not just for correctness.",
    ],
    links: {
      github: "https://github.com/A-s-h-i-s-h-Biswas",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
