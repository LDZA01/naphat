import {
  ArrowRight,
  Database,
  Layers3,
  Sparkles,
  Workflow,
  ShieldCheck,
  Radio,
  Terminal,
} from "lucide-react";
export function ProjectArt({
  kind,
  hero = false,
}: {
  kind: string;
  hero?: boolean;
}) {
  if (hero)
    return (
      <div
        className="hero-art"
        aria-label="Abstract connected intelligence sculpture"
        role="img"
      >
        <div className="art-grid" />
        <div className="orbital orbital-one" />
        <div className="orbital orbital-two" />
        <div className="orbital orbital-three" />
        <div className="core-object">
          <div className="core-face face-one" />
          <div className="core-face face-two" />
          <div className="core-face face-three" />
          <span className="core-center">n.</span>
        </div>
        <span className="art-node node-one" />
        <span className="art-node node-two" />
        <span className="art-node node-three" />
        <span className="hero-art-label label-top">INPUT → INTELLIGENCE</span>
        <span className="hero-art-label label-bottom">
          <span /> SYSTEMS THAT CONNECT.
        </span>
        <span className="art-coordinate">[ 01 — ∞ ]</span>
      </div>
    );
  return (
    <div className={`project-art art-${kind}`} aria-hidden="true">
      <span className="art-caption">CONCEPT STUDY / {kind.toUpperCase()}</span>
      {kind === "planning" && (
        <div className="workflow-art">
          <div className="workflow-side">
            <span className="diagram-node">
              <Layers3 size={17} />
              Context
            </span>
            <span className="diagram-node">
              <Database size={17} />
              Enterprise data
            </span>
          </div>
          <div className="flow-line" />
          <div className="agent-node">
            <Sparkles size={27} />
            <span>
              Planning
              <br />
              Agent
            </span>
            <small>REASON · PLAN · ACT</small>
          </div>
          <div className="flow-line" />
          <div className="workflow-side">
            <span className="diagram-node">
              <Workflow size={17} />
              Workflow
            </span>
            <span className="diagram-node sap-node">
              SAP
              <ArrowRight size={17} />
            </span>
          </div>
        </div>
      )}
      {kind === "chat" && (
        <div className="chat-art">
          <div className="chat-symbol">
            <Sparkles size={32} />
          </div>
          <div className="chat-path">
            <span>Ask.</span>
            <ArrowRight />
            <span>Retrieve.</span>
            <ArrowRight />
            <span>Understand.</span>
          </div>
          <div className="data-lines">
            {[
              70, 100, 84, 58, 92, 66, 80, 48, 73, 90, 62, 43, 70, 86, 54, 76,
            ].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <span className="diagram-foot">CONVERSATION ↔ KNOWLEDGE</span>
        </div>
      )}
      {kind === "football" && (
        <div className="pitch">
          <div className="pitch-line" />
          <div className="pitch-circle" />
          <div className="pitch-goal goal-one" />
          <div className="pitch-goal goal-two" />
          {[
            [18, 30],
            [33, 62],
            [47, 25],
            [28, 80],
            [49, 53],
            [70, 31],
            [80, 65],
            [64, 73],
            [76, 49],
            [60, 20],
          ].map(([x, y], i) => (
            <span
              key={i}
              className={`player ${i < 5 ? "team-one" : "team-two"}`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          ))}
          <span className="pitch-label">THE RIGHT PEOPLE. THE SAME PITCH.</span>
        </div>
      )}
      {kind === "infra" && (
        <div className="infra-art">
          <div className="infra-line" />
          {[
            { icon: Terminal, label: "Validate" },
            { icon: ShieldCheck, label: "Automate" },
            { icon: Radio, label: "Monitor" },
          ].map(({ icon: Icon, label }) => (
            <div className="infra-node" key={label}>
              <Icon size={27} />
              <span>{label}</span>
              <i />
            </div>
          ))}
          <span className="diagram-foot">REPEATABLE BY DESIGN.</span>
        </div>
      )}
      <span className="art-cross">+</span>
    </div>
  );
}
