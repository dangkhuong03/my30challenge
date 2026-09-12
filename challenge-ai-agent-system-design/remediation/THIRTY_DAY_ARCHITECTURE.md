# Thirty-Day Learning Architecture

Status: Gate 1 candidate. IDs are ledger routing, not learner-facing lesson titles. `New capability routes` assigns first-teach ownership exactly once; review/retrieval may revisit them.

Support fades from `S3` (worked reconstruction and prompts), through `S2` (partial scaffolds), `S1` (rubric only), to `S0` (sealed/independent).

| Day | Coherent role | Prerequisite dependency | New capability routes | Required build/output | Retrieval and transfer | Target/support |
|---:|---|---|---|---|---|---|
| 1 | Baseline and reasoning protocol | none | — | five-domain immutable baseline + error taxonomy | novel diagnostic, no teaching | 210m/S0 |
| 2 | Proof from invariants | baseline routing | M1,M5 | proof notebook with assumption/equality ledger | changed radical dependency and convex-function transfer | 120m/S3 |
| 3 | Linear maps as geometry | Day 2 proof discipline | M3,M4,M7,M11,M12 | invariant-subspace map + geometric sketches | oblique/nilpotent/degenerate cases | 150m/S3 |
| 4 | Optimization derivations | Days 2–3 algebra | M2,M6,M8,M10 | derivation sheet + numerical stability trace | nonuniform/rank-deficient/temperature changes | 150m/S3 |
| 5 | Scale before systems | Day 4 units/functions | M9,M72,M79,M81,P11 | cost-and-complexity model + dedup experiment plan | noisy comparisons, growth, overlap and sandbox TCO | 150m/S2 |
| 6 | Probability mechanisms and estimators | Days 2–5 derivation discipline | M13,M14,M15,M18,M20,M21,M26,M27,M30 | sampling-law notebook + three scored estimator/inference artifacts | changed distributions and regularity failures | 240m/S3 |
| 7 | Review 1 and repair | Days 2–6 | — | locked review + immutable corrections | retrieve every failed foundation cluster; changed retest | 150m/S1 |
| 8 | Experiments under uncertainty | Day 6 probability | M16,M17,M25,M29,M37 | preregistered experiment memo + power sheet | pairing, multiplicity and Bayesian decision changes | 150m/S2 |
| 9 | Bounds and noisy evaluation | Days 6–8 | M19,M24,M91,M92,M97,P10 | reliability/calibration harness design | bootstrap failure, canary attribution, pass-at-k vs pass-power-k | 150m/S2 |
| 10 | Statistical incident judgment | Days 6–9 | M22,M23,M28 | metric incident investigation | Simpson/selection/artifact counterfactual packet | 120m/S1 |
| 11 | Predictive models as decisions | Days 8–10 | M31,M32,M40,M44 | model card with cost-sensitive threshold | calibration/imbalance/overdispersion changes | 150m/S2 |
| 12 | Time, latent state and censoring | Day 11 likelihood/process view | M33,M34,M36 | AR/HMM/survival hand traces | unit-root, underflow and censoring-assumption failures | 150m/S2 |
| 13 | Causality and ranking | Days 8–12 | M35,M38,M39,M41,M42,M43,M45 | causal DAG + ranking launch design | anisotropy, cold-start safety and preference nontransitivity | 180m/S2 |
| 14 | Review 2 and repair | Days 8–13 | — | locked modelling review + correction ledger | retrieve weakest statistical and ranking routes | 150m/S1 |
| 15 | Sequential decisions and Bellman structure | probability + fixed points | M46,M47,M48,M56,M62 | solved MDP/POMDP + contraction proof | state-aliasing and horizon changes | 150m/S3 |
| 16 | TD control and stability | Day 15 Bellman objects | M49,M55,M57 | paired Q/SARSA traces + failure diagnosis | off-policy/deadly-triad boundary | 150m/S2 |
| 17 | Policy gradients and approximation | Days 15–16 | M50,M51,M60,M63 | gradient-estimator derivation + PPO trace | baseline/GAE/clipping extreme cases | 150m/S2 |
| 18 | Bandits, OPE and offline support | Days 8–9 and 15–17 | M52,M53,M58,M59,M64 | logged-policy decision table + IS trace | unsupported action and horizon variance | 150m/S1 |
| 19 | Reward integrity and agent formalization | Days 15–18 | M54,M61,M65 | reward spec + adversarial evaluation | proxy gaming and partial-observation transfer | 150m/S1 |
| 20 | Correctness, overload and unknown outcomes | Days 5,9,15 | M67,M68,M69,M71,M73,M76,M83,M98,P12,P15 | crash matrix + capacity/limiter trace | races, retry storm, strict latency bounds | 240m/S2 |
| 21 | Review 3 and repair | Days 15–20 | — | locked RL/systems review | changed control and failure-design retests | 150m/S1 |
| 22 | Durable workflows | Day 20 state/effects | M70,M86,M87,M88,M89 | executable state machine/DAG contract | leases, fan-out, version and human-wait failures | 180m/S2 |
| 23 | Serving, retrieval and data economics | Days 5,20,22 | M66,M74,M82,M84 | API + retrieval ablation + cost sheet | stream shape, cache invalidation and citation failure | 180m/S1 |
| 24 | Security and verified action | Days 20,22–23 | M80,M95,M96,P5,P14 | trust-boundary model + ambiguous-action trace | hostile documents, secret isolation and irreversible effects | 150m/S1 |
| 25 | Evaluation and release gates | Days 9,19,24 | M90,M93,M99,P6,P7,P17 | calibrated multi-axis release scorecard | test gaming, suite saturation and human disagreement | 180m/S1 |
| 26 | Product decisions and compatibility | Days 8,20,25 | M75,M77,M78,M94,M100,P8 | quantified decision/deprecation memo | Goodhart, cohort regression and forced-retirement cases | 150m/S1 |
| 27 | Context, tools and durable agent lifecycle | Days 20,22,24–26 | M85,P1,P2,P3,P4,P9,P13,P16 | complete tool/context/session/Goal topology | cost layers, cache breaks and concurrent wakes | 240m/S1 |
| 28 | Review 4 and repair | Days 20–27 | — | locked systems/agent review | retrieve every failed architecture route | 150m/S0 |
| 29 | Managed-agent synthesis | all prior builds | P18 | integrated architecture pack + adversarial defense | unfamiliar domain, constraints and failure injection | 180m/S0 |
| 30 | Sealed proof of transfer | all prior evidence | — | sealed parallel final + 118-capability ledger | unseen similar/difficult/advanced tasks | 210m/S0 |

## Dependency and output invariants

- Proof/derivation and units precede statistics; probability precedes modelling; modelling and fixed-point reasoning precede RL; correctness precedes durable workflows; security/evaluation precede integrated agent architecture.
- Review days introduce no hidden mandatory concepts. They diagnose, correct and run changed retests.
- Every content day produces one coherent build artifact that integrates its capabilities; each ID still receives an individual rubric contribution.
- Days 2–6 use explicit reconstruction, Days 8–19 progressively remove steps, Days 20–27 expose incomplete evidence and competing constraints, Days 28–30 provide rubric-only or sealed support.
- A timebox overflow yields `PARTIAL` and recovery routing. It never silently moves mandatory work to stretch.
