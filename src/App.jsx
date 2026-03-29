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
  Moon,
  Sun,
  Upload,
  Camera,
  Users,
  FolderLock,
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
  const [uploads, setUploads] = useState([
    { name: "Material Test Report.pdf", status: "Attached", size: "2.4 MB" },
    { name: "Shipping Record.pdf", status: "Attached", size: "1.1 MB" },
    { name: "Inspection Report.pdf", status: "Pending Review", size: "980 KB" },
  ]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const tools = ["Vite", "React", "Tailwind CSS", "Lucide React", "Prototype Workflow Logic"];

  const workflowSteps = [
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Secure Sign-In",
      text: "Workers sign into a company-managed device with assigned credentials, creating a timestamped session before any paperwork is handled.",
    },
    {
      icon: <QrCode className="h-5 w-5" />,
      title: "Material QR Scan",
      text: "The worker scans the material QR code to connect the paperwork to the correct item, record, and storage location.",
    },
    {
      icon: <FileScan className="h-5 w-5" />,
      title: "Document Capture + Parsing",
      text: "Shipping records, test reports, and supporting documents are scanned, parsed, and attached to the correct material profile.",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Auto-Save + Logging",
      text: "The system saves the files into a structured digital record while logging employee identity, date, time, and action taken.",
    },
    {
      icon: <BellRing className="h-5 w-5" />,
      title: "Verification + Alerts",
      text: "If required documents are missing, the system flags the issue immediately so the material is not lost in storage with incomplete records.",
    },
  ];

  const dashboardRows = useMemo(
    () => [
      {
        worker: "Jane Doe",
        material: "XM-PIPE-48291",
        document: "Material Test Report",
        status: "Verified",
        time: "08:14 AM",
        date: "03/18/2026",
      },
      {
        worker: "John Doe",
        material: "XM-VALVE-10532",
        document: "Shipping Record",
        status: "Missing",
        time: "09:02 AM",
        date: "03/18/2026",
      },
      {
        worker: "Jane Doe",
        material: "XM-FLANGE-21770",
        document: "Inspection Report",
        status: "Pending",
        time: "09:41 AM",
        date: "03/18/2026",
      },
      {
        worker: "John Doe",
        material: "XM-PIPE-88440",
        document: "Material Test Report",
        status: "Verified",
        time: "10:16 AM",
        date: "03/18/2026",
      },
    ],
    []
  );

  const visibleRows =
    statusFilter === "all"
      ? dashboardRows
      : dashboardRows.filter((row) => row.status.toLowerCase() === statusFilter);

  const navButton = (id, label) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        activeTab === id
          ? "bg-[#d81e05] text-white shadow-lg"
          : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      }`}
    >
      {label}
    </button>
  );

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

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-slate-900 transition-colors duration-300 dark:bg-[#0b0f14] dark:text-slate-100">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-[#10161d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d81e05] dark:text-[#ff6a4d]">
              ExxonMobil x HISD Internship Prototype
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Material Documentation Accountability Portal
              </h1>
              <button></button>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              A professional web-based concept demonstrating how worker sign-in, QR scanning,
              document capture, secure routing, and audit tracking can reduce missing paperwork,
              strengthen accountability, and improve material traceability.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Built With
            </p>
            <div className="mt-2 flex max-w-sm flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-[#111827] dark:text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-[#1c2733] via-[#233140] to-[#d81e05] text-white dark:from-[#0f1720] dark:via-[#16212e] dark:to-[#a51b08]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.4fr_0.8fr] md:py-16">
          <div>
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              Website prototype now, scalable work-phone app later
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Scan. Parse. Secure. Trace.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
              This solution treats missing paperwork as both a process problem and a security issue.
              Every scanned document is routed into the right hands through controlled access,
              logged activity, and traceable ownership so sensitive records are not left unmanaged,
              misplaced, or disconnected from the correct material.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {navButton("overview", "Overview")}
              {navButton("login", "Secure Login")}
              {navButton("scan", "QR + Scan Flow")}
              {navButton("dashboard", "Dashboard")}
              {navButton("security", "Security")}
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
              Why this works
            </p>
            <div className="mt-5 space-y-4">
              {[
                "Creates a clear last-touch record tied to employee sign-in",
                "Connects every material record to required documentation",
                "Flags missing paperwork before materials are lost in storage",
                "Improves operational consistency across sites",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-black/15 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
                  <p className="text-sm leading-relaxed text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-10">
        {activeTab === "overview" && (
          <div className="space-y-8">
            <section className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Root Issue",
                  text: "Missing paperwork is mainly a human and process accountability issue, supported by technology to make the process accurate and consistent.",
                  icon: <Clock3 className="h-6 w-6 text-[#d81e05] dark:text-[#ff6a4d]" />,
                },
                {
                  title: "Best Prototype Choice",
                  text: "A website is realistic within the internship timeline and can still simulate a full workflow clearly enough for presentation and review.",
                  icon: <FileScan className="h-6 w-6 text-[#d81e05] dark:text-[#ff6a4d]" />,
                },
                {
                  title: "Future Expansion",
                  text: "Once validated, this workflow can be migrated into a company-managed mobile application for work phones and site-wide deployment.",
                  icon: <ChevronRight className="h-6 w-6 text-[#d81e05] dark:text-[#ff6a4d]" />,
                },
              ].map((card) => (
                <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
                  <div className="flex items-center gap-3">
                    {card.icon}
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{card.text}</p>
                </div>
              ))}
            </section>

            <section className="grid gap-8 md:grid-cols-[1fr_1.15fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Problem Summary</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Materials may sit in pipeyards or storage for long periods. When required paper
                  records are lost, even unused material can become difficult or impossible to use
                  with confidence. That leads to waste, rework, and avoidable cost.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Paper records can be misplaced after long storage periods.",
                    "Sites may not follow one consistent document retention workflow.",
                    "Without a last-touch record, accountability is weak.",
                    "Security matters because access to records should be controlled and traceable.",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Proposed Workflow</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {workflowSteps.map((step) => (
                    <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                      <div className="flex items-center gap-3 text-[#d81e05] dark:text-[#ff6a4d]">
                        {step.icon}
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">{step.title}</h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "login" && (
          <section className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
              <div className="flex items-center gap-3">
                <LockKeyhole className="h-6 w-6 text-[#d81e05] dark:text-[#ff6a4d]" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Secure Sign-In Demo</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                This sign-in step represents a company-managed device login that creates a worker-linked
                session. The session starts the accountability trail and helps ensure records reach the
                right hands through controlled access.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Employee Name</label>
                    <select
                      value={employee}
                      onChange={(e) => setEmployee(e.target.value)}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#d81e05] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    >
                      <option>Jane Doe</option>
                      <option>John Doe</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Access Role</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#d81e05] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    >
                      <option>Worker</option>
                      <option>Supervisor</option>
                      <option>Auditor</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Username</label>
                  <input
                    defaultValue={employee === "Jane Doe" ? "jdoe_facility" : "john.doe_ops"}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#d81e05] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
                  <input
                    type="password"
                    defaultValue="••••••••••"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#d81e05] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
                <button
                  onClick={() => setLoggedIn(true)}
                  className="w-full rounded-2xl bg-[#d81e05] px-4 py-3 font-semibold text-white transition hover:opacity-95"
                >
                  Start Secure Session
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Session Output</h3>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Live Audit Record Preview
                </p>
                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4 dark:bg-[#111827]">
                    <span className="text-slate-500 dark:text-slate-400">Session Status</span>
                    <span className={`rounded-full px-3 py-1 font-medium ${loggedIn ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                      {loggedIn ? "Active" : "Awaiting Login"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4 dark:bg-[#111827]">
                    <span className="text-slate-500 dark:text-slate-400">Assigned Worker</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{employee}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4 dark:bg-[#111827]">
                    <span className="text-slate-500 dark:text-slate-400">Role</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{role}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4 dark:bg-[#111827]">
                    <span className="text-slate-500 dark:text-slate-400">Clock-In Timestamp</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">03/18/2026, 08:14 AM</span>
                  </div>
                  <div className="rounded-2xl border border-[#d81e05]/20 bg-[#d81e05]/5 p-4 text-slate-700 dark:text-slate-200">
                    Controlled sign-in supports both accountability and security by tying document actions
                    to an authenticated employee and limiting access to authorized personnel.
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "scan" && (
          <section className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">QR + Document Flow</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    This demo simulates the workflow a worker would follow using a company-managed device.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <Camera className="h-4 w-4" />
                    {scanMode}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Material ID</label>
                  <input
                    value={materialId}
                    onChange={(e) => setMaterialId(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#d81e05] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  <button
                    onClick={() => {
                      setQrScanned(true);
                      setScanMode("QR Captured");
                    }}
                    className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    Simulate QR Scan
                  </button>
                  <button
                    onClick={addMockUpload}
                    className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    Add File
                  </button>
                  <button
                    onClick={() => setDocsUploaded(true)}
                    className="rounded-2xl bg-[#d81e05] px-4 py-3 font-medium text-white transition hover:opacity-95"
                  >
                    Verify Package
                  </button>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Required Documentation</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{uploads.length} files linked</p>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  {uploads.map((doc, index) => (
                    <div key={`${doc.name}-${index}`} className="flex items-center justify-between rounded-2xl bg-white p-4 dark:bg-[#111827]">
                      <div>
                        <p className="dark:text-slate-100">{doc.name}</p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{doc.size}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${doc.status === "Attached" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                        {doc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Material Record Preview</h3>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">QR Status</p>
                  <p className={`mt-2 text-lg font-semibold ${qrScanned ? "text-emerald-700" : "text-amber-700"}`}>
                    {qrScanned ? "Material linked successfully" : "Waiting for scan"}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Selected Material</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{materialId}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Storage Zone B-14 · Pipeyard Intake</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Routing + Ownership</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    Uploaded files are routed into a controlled digital folder structure with worker-linked logs,
                    ensuring sensitive records reach authorized internal users instead of being scattered across
                    disconnected paper trails.
                  </p>
                </div>
                <div className={`rounded-2xl border p-5 ${docsUploaded ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30" : "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30"}`}>
                  <div className="flex items-start gap-3">
                    {docsUploaded ? <CheckCircle2 className="h-5 w-5 text-emerald-700" /> : <AlertTriangle className="h-5 w-5 text-amber-700" />}
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">
                        {docsUploaded ? "Record package complete" : "Missing documents risk detected"}
                      </p>
                      <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
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

        {activeTab === "dashboard" && (
          <section className="space-y-8">
            <div className="grid gap-6 md:grid-cols-4">
              {[
                ["Verified Records", "24", <CheckCircle2 className="h-5 w-5" />],
                ["Pending Review", "8", <Activity className="h-5 w-5" />],
                ["Missing Documents", "3", <AlertTriangle className="h-5 w-5" />],
                ["Active Workers", "12", <Users className="h-5 w-5" />],
              ].map(([label, value, icon], idx) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                    <p className="text-sm">{label}</p>
                    <div className="text-[#d81e05] dark:text-[#ff6a4d]">{icon}</div>
                  </div>
                  <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">{value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Accountability Dashboard</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Supervisors can track who handled each material record, when it happened, and whether required documentation is complete.
                  </p>
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#d81e05] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  <option value="all">All statuses</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                  <option value="missing">Missing</option>
                </select>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-6 bg-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                  <div>Worker</div>
                  <div>Material</div>
                  <div>Document</div>
                  <div>Status</div>
                  <div>Time</div>
                  <div>Date</div>
                </div>
                {visibleRows.map((row, idx) => (
                  <div key={`${row.material}-${idx}`} className="grid grid-cols-6 items-center border-t border-slate-200 bg-white px-4 py-4 text-sm dark:border-slate-700 dark:bg-[#10161d]">
                    <div className="font-medium text-slate-900 dark:text-slate-100">{row.worker}</div>
                    <div className="text-slate-700 dark:text-slate-200">{row.material}</div>
                    <div className="text-slate-700 dark:text-slate-200">{row.document}</div>
                    <div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        row.status === "Verified"
                          ? "bg-emerald-100 text-emerald-700"
                          : row.status === "Missing"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {row.status}
                      </span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-200">{row.time}</div>
                    <div className="text-slate-700 dark:text-slate-200">{row.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "security" && (
          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[#d81e05] dark:text-[#ff6a4d]" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Security + Access Control</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                For a company handling large-scale operations, accountability is not only about blaming the right person.
                It is also about making sure records reach the right hands, stay under controlled access, and can be
                traced back to a verified source.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Authenticated worker sessions on company-managed devices",
                  "Role-based access so only approved staff can view or upload records",
                  "Timestamped audit logs for scans, uploads, edits, and verification steps",
                  "Structured folder routing to prevent sensitive documents from being scattered or misfiled",
                  "Supervisor review checkpoints before materials are approved for use",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#10161d]">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Presentation Talking Point</h3>
              <div className="mt-6 rounded-3xl border border-[#d81e05]/20 bg-[#d81e05]/5 p-6">
                <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-100">
                  <span className="font-semibold">Suggested wording:</span> “Our solution improves accountability,
                  but it also supports security. By requiring employee sign-in, tracking last-touch ownership, and routing
                  documents into controlled records, the system helps ensure that sensitive material documentation reaches
                  authorized personnel and does not get lost in disconnected paper trails.”
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                    <FolderLock className="h-4 w-4" />
                    <p className="text-sm font-semibold">Website Now</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Fast to build, easy to demo, and enough to prove workflow logic, record structure, and dashboard concepts.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                    <Upload className="h-4 w-4" />
                    <p className="text-sm font-semibold">App Later</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    The same design can later become a company work-phone app with integrated camera scanning and internal system connections.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-[#10161d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tatianna Hernupont. All rights reserved.</p>
          <p>ExxonMobil x HISD internship concept prototype built for presentation and workflow demonstration.</p>
        </div>
      </footer>
    </div>
  );
}

