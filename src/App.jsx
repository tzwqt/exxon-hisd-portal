import { useEffect, useMemo, useState } from "react";
import {
  ShieldCheck,
  QrCode,
  FileScan,
  BellRing,
  Clock3,
  UserCheck,
  LockKeyhole,
  Database,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Upload,
  Camera,
  Users,
  Activity,
} from "lucide-react";

export default function ExxonHISDSolutionSite() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [loggedIn, setLoggedIn] = useState(false);
  const [employee, setEmployee] = useState("Jane Doe");
  const [role, setRole] = useState("Worker");
  const [materialId, setMaterialId] = useState("XM-PIPE-48291");
  const [qrScanned, setQrScanned] = useState(false);
  const [docsUploaded, setDocsUploaded] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [scanMode, setScanMode] = useState("Camera Ready");
  const [clockInTime, setClockInTime] = useState(null);
  const [uploads, setUploads] = useState([
    { name: "Material Test Report.pdf", status: "Attached", size: "2.4 MB" },
    { name: "Shipping Record.pdf", status: "Attached", size: "1.1 MB" },
    { name: "Inspection Report.pdf", status: "Pending Review", size: "980 KB" },
  ]);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const workflowSteps = [
    { icon: <UserCheck className="h-4 w-4" />, title: "Secure Sign-In", text: "Workers log into a company device, creating a timestamped session." },
    { icon: <QrCode className="h-4 w-4" />, title: "Material QR Scan", text: "Scan the material QR code to link it to the correct record and location." },
    { icon: <FileScan className="h-4 w-4" />, title: "Document Capture", text: "Upload and attach shipping records and reports to the material profile." },
    { icon: <Database className="h-4 w-4" />, title: "Auto-Save + Logging", text: "System saves files and logs user, date, time, and actions." },
    { icon: <BellRing className="h-4 w-4" />, title: "Verification + Alerts", text: "Missing documents are flagged immediately to prevent incomplete records." },
  ];

  const dashboardRows = useMemo(
    () => [
      { worker: "Jane Doe", material: "XM-PIPE-48291", document: "Material Test Report", status: "Verified", time: "08:14 AM", date: "03/18/2026" },
      { worker: "John Doe", material: "XM-VALVE-10532", document: "Shipping Record", status: "Missing", time: "09:02 AM", date: "03/18/2026" },
      { worker: "Jane Doe", material: "XM-FLANGE-21770", document: "Inspection Report", status: "Pending", time: "09:41 AM", date: "03/18/2026" },
      { worker: "John Doe", material: "XM-PIPE-88440", document: "Material Test Report", status: "Verified", time: "10:16 AM", date: "03/18/2026" },
    ],
    []
  );

  const visibleRows =
    statusFilter === "all"
      ? dashboardRows
      : dashboardRows.filter((row) => row.status.toLowerCase() === statusFilter);

  const navTab = (id, label) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
        activeTab === id
          ? "border-[#d81e05] text-[#d81e05]"
          : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
      }`}
    >
      {label}
    </button>
  );

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (!files.length) return;
    const newUploads = files.map((file) => ({
      name: file.name,
      status: "Attached",
      size: file.size > 1_000_000
        ? `${(file.size / 1_000_000).toFixed(1)} MB`
        : `${Math.round(file.size / 1_000)} KB`,
    }));
    setUploads((prev) => [...prev, ...newUploads]);
    setDocsUploaded(true);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    const newUploads = files.map((file) => ({
      name: file.name,
      status: "Attached",
      size: file.size > 1_000_000
        ? `${(file.size / 1_000_000).toFixed(1)} MB`
        : `${Math.round(file.size / 1_000)} KB`,
    }));
    setUploads((prev) => [...prev, ...newUploads]);
    setDocsUploaded(true);
    e.target.value = "";
  };

  const addMockUpload = () => {
    const pool = [
      { name: "Receiving Confirmation.pdf", status: "Attached", size: "860 KB" },
      { name: "Heat Number Trace Report.pdf", status: "Attached", size: "1.7 MB" },
      { name: "Quality Certificate.pdf", status: "Pending Review", size: "1.2 MB" },
    ];
    const next = pool[uploads.length % pool.length];
    setUploads((prev) => [...prev, next]);
    setDocsUploaded(true);
  };

  const inputCls =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#d81e05] dark:border-[#1e2d3d] dark:bg-[#0c1520] dark:text-slate-100";
  const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500";
  const cardCls = "rounded-xl border border-slate-200 bg-white p-6 dark:border-[#1e2d3d] dark:bg-[#111827]";

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-900 dark:bg-[#0b0f18] dark:text-slate-100">

      {/* ── Header ── */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-[#1e2d3d] dark:bg-[#0d1520]/95">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-6">
          <div className="h-5 w-0.5 rounded-full bg-[#d81e05]" />
          <div className="min-w-0">
            <p className="text-xs text-slate-400 dark:text-slate-500">ExxonMobil × HISD Internship</p>
            <p className="text-sm font-semibold leading-tight text-slate-900 dark:text-slate-100">
              Material Documentation Portal
            </p>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-[#0d1520]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[3fr_2fr] md:items-center md:py-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#d81e05]">
              Prototype · 2026
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Scan. Parse.<br />Secure. Track.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
              A web-based concept using worker sign-in, QR scanning, and document
              capture to reduce missing paperwork, improve accountability, and ensure
              material traceability.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
              Why this works
            </p>
            <div className="space-y-3">
              {[
                "Creates a clear last-touch record tied to employee sign-in",
                "Connects every material record to required documentation",
                "Flags missing paperwork before materials are lost in storage",
                "Improves operational consistency across sites",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#d81e05]" />
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tab nav ── */}
      <div className="sticky top-14 z-10 border-b border-slate-200 bg-white dark:border-[#1e2d3d] dark:bg-[#0d1520]">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6">
          <div className="flex">
            {navTab("overview", "Overview")}
            {navTab("login", "Secure Login")}
            {navTab("scan", "QR + Scan Flow")}
            {navTab("dashboard", "Dashboard")}
            {navTab("security", "Security")}
          </div>
        </div>
      </div>

      {/* ── Main ── */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Root Issue",
                  text: "Missing paperwork is primarily a human and process accountability issue, with technology supporting accuracy and consistency.",
                  icon: <Clock3 className="h-4 w-4 text-[#d81e05]" />,
                },
                {
                  title: "Best Prototype Choice",
                  text: "A website is feasible within the internship timeline and effectively demonstrates the full workflow.",
                  icon: <FileScan className="h-4 w-4 text-[#d81e05]" />,
                },
                {
                  title: "Future Expansion",
                  text: "The system can later be developed into a company-managed mobile app for site-wide use.",
                  icon: <ChevronRight className="h-4 w-4 text-[#d81e05]" />,
                },
              ].map((card) => (
                <div key={card.title} className={cardCls}>
                  <div className="flex items-center gap-2.5">
                    {card.icon}
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className={cardCls}>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Problem Summary</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Materials can sit in storage for long periods. When required documentation is missing, even unused
                  materials become difficult to trust or use—leading to waste, rework, and added costs.
                </p>
                <div className="mt-5 space-y-2">
                  {[
                    "Paper records are easily lost over time",
                    "No standardized document retention process across sites",
                    "Lack of last-touch tracking weakens accountability",
                    "Limited access control reduces security and traceability",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:bg-[#0c1520] dark:text-slate-300"
                    >
                      <div className="mt-1.5 h-1 w-1 flex-none rounded-full bg-slate-300 dark:bg-slate-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={cardCls}>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Proposed Workflow</h3>
                <div className="mt-5 space-y-4">
                  {workflowSteps.map((step) => (
                    <div key={step.title} className="flex items-start gap-4">
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-[#d81e05]/10 text-[#d81e05]">
                        {step.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{step.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secure Login */}
        {activeTab === "login" && (
          <section className="grid gap-6 md:grid-cols-2">
            <div className={cardCls}>
              <div className="flex items-center gap-2.5">
                <LockKeyhole className="h-4 w-4 text-[#d81e05]" />
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Secure Sign-In Demo</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Represents a company-managed device login that creates a worker-linked session, starting the
                accountability trail with controlled access.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className={labelCls}>Employee Name</label>
                    <select
                      value={employee}
                      onChange={(e) => setEmployee(e.target.value)}
                      className={inputCls}
                    >
                      <option>Jane Doe</option>
                      <option>John Doe</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Access Role</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className={inputCls}
                    >
                      <option>Worker</option>
                      <option>Supervisor</option>
                      <option>Auditor</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Username</label>
                  <input
                    defaultValue={employee === "Jane Doe" ? "jdoe_facility" : "john.doe_ops"}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Password</label>
                  <input type="password" defaultValue="••••••••••" className={inputCls} />
                </div>
                <button
                  onClick={() => { setLoggedIn(true); setClockInTime(new Date()); }}
                  className="w-full rounded-lg bg-[#d81e05] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#bf1a04]"
                >
                  Start Secure Session
                </button>
              </div>
            </div>

            <div className={cardCls}>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Session Output</h3>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-slate-400">Live Audit Record Preview</p>

              <div className="mt-5 divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200 dark:divide-[#1e2d3d] dark:border-[#1e2d3d]">
                {[
                  [
                    "Session Status",
                    loggedIn ? (
                      <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                        Active
                      </span>
                    ) : (
                      <span className="rounded-md bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
                        Awaiting Login
                      </span>
                    ),
                  ],
                  ["Assigned Worker", <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{employee}</span>],
                  ["Role", <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{role}</span>],
                  [
                    "Clock-In Timestamp",
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {clockInTime
                        ? clockInTime.toLocaleString("en-US", {
                            month: "2-digit", day: "2-digit", year: "numeric",
                            hour: "2-digit", minute: "2-digit", hour12: true,
                          })
                        : "—"}
                    </span>,
                  ],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between px-4 py-3">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{label}</span>
                    {value}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-[#d81e05]/20 bg-[#d81e05]/5 px-4 py-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Controlled sign-in supports both accountability and security by tying document actions to an
                authenticated employee and limiting access to authorized personnel.
              </div>
            </div>
          </section>
        )}

        {/* QR + Scan Flow */}
        {activeTab === "scan" && (
          <section className="grid gap-6 md:grid-cols-2">
            <div className={cardCls}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">QR + Document Flow</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Simulates the workflow a worker would follow on a company-managed device.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 dark:border-[#1e2d3d] dark:bg-[#0c1520] dark:text-slate-400">
                  <Camera className="h-3.5 w-3.5" />
                  {scanMode}
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <label className={labelCls}>Material ID</label>
                  <input
                    value={materialId}
                    onChange={(e) => setMaterialId(e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  <button
                    onClick={() => { setQrScanned(true); setScanMode("QR Captured"); }}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-[#1e2d3d] dark:bg-[#0c1520] dark:text-slate-200 dark:hover:bg-[#152030]"
                  >
                    Simulate QR Scan
                  </button>
                  <button
                    onClick={addMockUpload}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-[#1e2d3d] dark:bg-[#0c1520] dark:text-slate-200 dark:hover:bg-[#152030]"
                  >
                    Add File
                  </button>
                  <button
                    onClick={() => setDocsUploaded(true)}
                    className="rounded-lg bg-[#d81e05] px-3 py-2.5 text-sm font-medium text-white transition hover:bg-[#bf1a04]"
                  >
                    Verify Package
                  </button>
                </div>
              </div>

              <label
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`mt-5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors ${
                  dragOver
                    ? "border-[#d81e05] bg-[#d81e05]/5"
                    : "border-slate-200 bg-slate-50 hover:border-slate-300 dark:border-[#1e2d3d] dark:bg-[#0c1520] dark:hover:border-slate-600"
                }`}
              >
                <input type="file" multiple className="sr-only" onChange={handleFileInput} />
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${dragOver ? "bg-[#d81e05]/10 text-[#d81e05]" : "bg-slate-200 text-slate-500 dark:bg-[#1e2d3d] dark:text-slate-400"}`}>
                  <Upload className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {dragOver ? "Drop files to attach" : "Drag files here"}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    or <span className="text-[#d81e05]">browse</span> · PDF, DOC, images accepted
                  </p>
                </div>
              </label>

              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e2d3d]">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-[#1e2d3d]">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Required Documentation</p>
                  <p className="text-xs text-slate-400">{uploads.length} files linked</p>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-[#1e2d3d]">
                  {uploads.map((doc, index) => (
                    <div key={`${doc.name}-${index}`} className="flex items-center justify-between px-4 py-3">
                      <div>
                        <p className="text-sm text-slate-800 dark:text-slate-200">{doc.name}</p>
                        <p className="mt-0.5 text-xs text-slate-400">{doc.size}</p>
                      </div>
                      <span
                        className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
                          doc.status === "Attached"
                            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                            : "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={cardCls}>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Material Record Preview</h3>
              <div className="mt-5 space-y-3">
                <div className="rounded-lg border border-slate-200 p-4 dark:border-[#1e2d3d]">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">QR Status</p>
                  <p className={`mt-1.5 text-sm font-semibold ${qrScanned ? "text-emerald-600" : "text-amber-600"}`}>
                    {qrScanned ? "Material linked successfully" : "Waiting for scan"}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 dark:border-[#1e2d3d]">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Selected Material</p>
                  <p className="mt-1.5 font-mono text-sm font-semibold text-slate-900 dark:text-slate-100">{materialId}</p>
                  <p className="mt-1 text-xs text-slate-400">Storage Zone B-14 · Pipeyard Intake</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 dark:border-[#1e2d3d]">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Routing + Ownership</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    Uploaded files are routed into a controlled digital folder structure with worker-linked logs,
                    ensuring sensitive records reach authorized internal users.
                  </p>
                </div>
                <div
                  className={`rounded-lg border p-4 ${
                    docsUploaded
                      ? "border-emerald-200 bg-emerald-50 dark:border-emerald-900/40 dark:bg-emerald-950/20"
                      : "border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {docsUploaded
                      ? <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      : <AlertTriangle className="mt-0.5 h-4 w-4 flex-none text-amber-600" />}
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {docsUploaded ? "Record package complete" : "Missing documents risk detected"}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {docsUploaded
                          ? "Required files are attached and ready for supervisor review."
                          : "Material should not be cleared until all required documentation is captured and verified."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <section className="space-y-6">
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["Verified Records", "24", <CheckCircle2 className="h-4 w-4" />],
                ["Pending Review", "8", <Activity className="h-4 w-4" />],
                ["Missing Documents", "3", <AlertTriangle className="h-4 w-4" />],
                ["Active Workers", "12", <Users className="h-4 w-4" />],
              ].map(([label, value, icon]) => (
                <div key={label} className={cardCls}>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">{label}</p>
                    <div className="text-[#d81e05]">{icon}</div>
                  </div>
                  <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">{value}</p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-[#1e2d3d] dark:bg-[#111827]">
              <div className="flex flex-col gap-4 border-b border-slate-200 p-6 dark:border-[#1e2d3d] md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Accountability Dashboard</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Track who handled each material, when, and whether documentation is complete.
                  </p>
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#d81e05] dark:border-[#1e2d3d] dark:bg-[#0c1520] dark:text-slate-100 md:w-40"
                >
                  <option value="all">All statuses</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                  <option value="missing">Missing</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-[#1e2d3d]">
                      {["Worker", "Material", "Document", "Status", "Time", "Date"].map((col) => (
                        <th key={col} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-400">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-[#1e2d3d]">
                    {visibleRows.map((row, idx) => (
                      <tr key={`${row.material}-${idx}`} className="transition-colors hover:bg-slate-50 dark:hover:bg-[#0c1520]">
                        <td className="px-4 py-3.5 font-medium text-slate-900 dark:text-slate-100">{row.worker}</td>
                        <td className="px-4 py-3.5 font-mono text-xs text-slate-500 dark:text-slate-400">{row.material}</td>
                        <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">{row.document}</td>
                        <td className="px-4 py-3.5">
                          <span
                            className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
                              row.status === "Verified"
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                                : row.status === "Missing"
                                ? "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400"
                                : "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-slate-500 dark:text-slate-400">{row.time}</td>
                        <td className="px-4 py-3.5 text-slate-500 dark:text-slate-400">{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Security */}
        {activeTab === "security" && (
          <section>
            <div className={cardCls}>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[#d81e05]" />
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Security + Access Control</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                For a company handling large-scale operations, accountability is not only about identifying
                responsibility — it also ensures records reach the right hands, stay under controlled access,
                and can be traced back to a verified source.
              </p>
              <div className="mt-5 space-y-2">
                {[
                  "Authenticated worker sessions on company-managed devices",
                  "Role-based access so only approved staff can view or upload records",
                  "Timestamped audit logs for scans, uploads, edits, and verification steps",
                  "Structured folder routing to prevent sensitive documents from being misfiled",
                  "Supervisor review checkpoints before materials are approved for use",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:bg-[#0c1520] dark:text-slate-300"
                  >
                    <div className="mt-1.5 h-1 w-1 flex-none rounded-full bg-[#d81e05]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 bg-white dark:border-[#1e2d3d] dark:bg-[#0d1520]">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tatianna Hernupont. All rights reserved.</p>
          <p>ExxonMobil × HISD internship concept prototype · Vite, React, Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
