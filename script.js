const iconSvg = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9 20v-6h6v6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-5 2 2-5 5-2Z"/>',
  folder: '<path d="M3 7h6l2 2h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/><path d="M8 12v5"/><path d="M12 12v3"/><path d="M16 12v6"/>',
  network: '<circle cx="6" cy="7" r="3"/><circle cx="18" cy="7" r="3"/><circle cx="12" cy="18" r="3"/><path d="M8.5 9.5 10.5 15"/><path d="M15.5 9.5 13.5 15"/><path d="M9 7h6"/>',
  chart: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
  megaphone: '<path d="M3 11v4a2 2 0 0 0 2 2h2l3 4v-4l9 3V6l-9 3H5a2 2 0 0 0-2 2Z"/><path d="M21 9v8"/>',
  coins: '<path d="M4 15h4l4 3h4l4-4"/><path d="M4 19h8"/><circle cx="16" cy="7" r="4"/><path d="M16 5v4"/><path d="M14.5 6.5h3"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.1 2.1-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V20h-3v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2.1-2.1.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.5-1H3v-3h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.1-2.1.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V4h3v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.1 2.1-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2v3h-.2a1.7 1.7 0 0 0-1.2 1Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  calendar: '<path d="M7 3v4"/><path d="M17 3v4"/><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/>',
  file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  clipboard: '<path d="M9 4h6l1 2h3v15H5V6h3Z"/><path d="M9 4h6"/><path d="M9 12h6"/><path d="M9 16h4"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.5 14.5A6 6 0 1 1 15.5 14c-.8.7-1.5 1.7-1.5 3h-4c0-1.1-.5-1.9-1.5-2.5Z"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5"/><path d="M12 16h.01"/>'
};

function icon(name, small = false) {
  return `<svg class="${small ? 'icon-sm' : 'icon'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconSvg[name] || ''}</svg>`;
}

const navItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'strategy', label: 'Strategy', icon: 'compass' },
  { id: 'special-projects', label: 'Special Projects', icon: 'folder' },
  { id: 'workstreams', label: 'Workstreams', icon: 'clipboard' },
  { id: 'partners', label: 'Partners', icon: 'network' },
  { id: 'data', label: 'Data & Learning', icon: 'chart' },
  { id: 'communications', label: 'Communications', icon: 'megaphone' },
  { id: 'funding', label: 'Funding & Systems', icon: 'coins' },
  { id: 'operations', label: 'Operations', icon: 'settings' }
];

const recentUpdates = [
  'Community Land Trust budget narrative updated',
  'Salesforce field database added for review',
  'LCDC / Aspire Center visit notes posted',
  'Special Projects communication timeline refreshed'
];

const quickLinks = [
  ['Staff Directory', 'users'],
  ['Grant Calendar', 'calendar'],
  ['Comms Request Form', 'message'],
  ['Member Directory', 'network'],
  ['Salesforce Planning', 'database'],
  ['Decision Log', 'file']
];

const workstreams = [
  ['Community Land Trust', 'Housing / Special Projects Lead', 'Planning', 'Oak Park Regional Housing, Westside Health Authority, ACT', 'Finalize resident engagement and consultant support plan'],
  ['Austin Forward. Together', 'Strategy Team', 'Active', 'Member network and implementation partners', 'Refresh implementation priorities and reporting structure'],
  ['Living Wage Careers', 'Economic Development Lead', 'Active', 'Workforce, employer, and training partners', 'Update partner map and aligned activities tracker'],
  ['Safe Neighborhoods', 'Community Safety Lead', 'Active', 'Community-based and public sector partners', 'Clarify metrics and recurring convening cadence']
];

let activePage = 'home';
let searchQuery = '';

function badge(text, tone = '') { return `<span class="badge ${tone}">${text}</span>`; }
function pageHeader(eyebrow, title, description) {
  return `<div class="page-header"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="description">${description}</p></div>`;
}
function sectionCard(iconName, title, body, action = '') {
  return `<div class="card"><div class="card-header"><span class="icon-box">${icon(iconName)}</span><h3>${title}</h3></div><div class="muted">${body}</div>${action}</div>`;
}
function setPage(pageId) { activePage = pageId; render(); }
function setSearch(value) { searchQuery = value; render(); }

function homePage() {
  return `${pageHeader('ACT Staff Hub', 'A shared operating space for collective impact work', 'This demo shows how Austin Coming Together could organize internal resources, special projects, partner coordination, communications, funding, data, and operations in a simple Google Sites-style intranet.')}
  <div class="grid grid-3" style="margin-bottom: 16px;">
    <div class="card dark span-2"><div class="muted" style="display:flex;gap:8px;align-items:center;margin-bottom:16px;">${icon('calendar', true)} This week at ACT</div><h2>Focus: project clarity, partner alignment, and shared systems</h2><p class="muted">Use this hub to see current priorities, find key documents, submit requests, and understand how active projects connect to ACT’s broader role as a backbone organization.</p><div class="badges">${badge('Staff meeting','blue')}${badge('Partner follow-up','green')}${badge('Grant deadline','amber')}</div></div>
    <div class="card"><h3 style="margin-bottom:16px;">Recently updated</h3><div class="list">${recentUpdates.map(item => `<div class="list-item">${icon('check', true)} ${item}</div>`).join('')}</div></div>
  </div>
  <div class="grid grid-3" style="margin-bottom: 16px;">
    ${sectionCard('folder','Special Projects','Central place for cross-functional work like acquisition/transition communications, Salesforce planning, CLT launch, and strategic initiatives.', '<button class="primary-button" onclick="setPage(\'special-projects\')">Open project hub</button>')}
    ${sectionCard('network','Partner Coordination','Member directory, touchpoint tracker, convening notes, partner engagement playbook, and learning exchange records.', '<button class="secondary-button" onclick="setPage(\'partners\')">View partner tools</button>')}
    ${sectionCard('coins','Funding & Systems','Grant calendar, proposal library, funder profiles, Salesforce planning, and integrations with QuickBooks, Give Lively, and Mailchimp.', '<button class="secondary-button" onclick="setPage(\'funding\')">View systems map</button>')}
  </div>
  <div class="card"><h3 style="margin-bottom:16px;">Quick links</h3><div class="grid grid-3">${quickLinks.map(([label, iconName]) => `<button class="quick-link" type="button"><span>${icon(iconName,true)}${label}</span>${icon('arrow',true)}</button>`).join('')}</div></div>`;
}

function strategyPage() {
  return `${pageHeader('Strategy', 'Shared priorities and backbone role', 'This section keeps staff aligned on ACT’s role, strategic priorities, decision-making, and the connection between daily work and Austin’s broader quality-of-life goals.')}
  <div class="grid grid-2">
    ${sectionCard('compass','ACT as backbone','Plain-language explanation of what ACT does: align partners, coordinate action, steward community priorities, mobilize resources, support shared measurement, and communicate progress.')}
    ${sectionCard('lightbulb','Strategic priorities','Current annual and quarterly priorities with staff owners, related workstreams, key partners, and decision points.')}
    ${sectionCard('file','Decision log','A simple record of key decisions, dates, owners, rationale, and related documents so staff can see how choices were made.')}
    ${sectionCard('users','Board & leadership updates','Board materials, leadership notes, planning memos, and approved internal updates connected to strategic direction.')}
  </div>`;
}

function specialProjectsPage() {
  const docs = ['Project overview one-pager','Communication timeline: now through launch','Six-document planning checklist','Internal FAQ and staff talking points','Parking lot for future communications issues'];
  const tiles = [
    ['Overview','What this project is, why it matters, and who needs to be informed.'],
    ['Timeline','Short-term milestones through launch plus longer-term post-launch communication needs.'],
    ['Documents','The six potential documents, draft owners, and review status.'],
    ['Meetings','Who needs to meet, what decisions are needed, and how the work gets organized.'],
    ['FAQs','Approved internal answers for staff, partners, board, and community questions.'],
    ['Parking Lot','Important future issues like related initiatives, Aspire, Walser, or other communications needs.']
  ];
  return `${pageHeader('Special Projects', 'A dedicated hub for cross-functional, time-sensitive work', 'This area gives ACT one place to manage projects that cut across strategy, communications, partners, funding, systems, and leadership decisions.')}
  <div class="grid grid-3">
    <div class="card span-2"><div class="pill-row"><h3>Sample project: Special Projects Communication Hub</h3>${badge('Active','amber')}</div><div class="grid grid-2" style="margin-top:16px;">${tiles.map(([t,b]) => `<div class="tile"><h4>${t}</h4><p class="muted">${b}</p></div>`).join('')}</div></div>
    <div class="card"><h3 style="margin-bottom:16px;">Key documents</h3><div class="list">${docs.map(doc => `<div class="callout" style="display:flex;gap:8px;align-items:center;">${icon('file',true)}${doc}</div>`).join('')}</div></div>
  </div>`;
}

function workstreamsPage() {
  return `${pageHeader('Workstreams', 'Organize active initiatives with a consistent template', 'Each workstream page should show purpose, lead staff, partner roles, current goals, meetings, metrics, documents, and open questions.')}
  <div class="grid">${workstreams.map(([title, lead, status, partners, next]) => `<div class="card"><div class="pill-row"><div><h3 style="font-size:18px;">${title}</h3><p class="muted">Lead: ${lead}</p></div>${badge(status, status === 'Planning' ? 'amber' : 'green')}</div><div class="grid grid-2" style="margin-top:16px;"><div class="callout"><strong>Partners:</strong> ${partners}</div><div class="callout"><strong>Next milestone:</strong> ${next}</div></div></div>`).join('')}</div>`;
}

function partnersPage() {
  return `${pageHeader('Partners', 'Member network and relationship coordination', 'This section helps ACT document member relationships, convenings, task forces, community learning, partner touchpoints, and opportunities for collaboration.')}
  <div class="grid grid-2">
    ${sectionCard('network','Member directory','Searchable database with organization, contact, issue area, sector, relationship owner, last touchpoint, and current collaborations.')}
    ${sectionCard('clipboard','Partner engagement playbook','Norms for onboarding members, documenting follow-ups, inviting partners into workstreams, and escalating relationship questions.')}
    ${sectionCard('calendar','Convenings & task forces','Purpose, audience, cadence, lead, agenda template, and notes folder for each recurring meeting.')}
    ${sectionCard('lightbulb','Learning exchanges','Notes from visits like LCDC / Aspire Center, including key themes, follow-up ideas, and collaboration opportunities.')}
  </div>`;
}

function dataPage() {
  return `${pageHeader('Data & Learning', 'Shared measurement, reporting, and learning agenda', 'This area should help staff understand what ACT is tracking, why it matters, where data lives, and how learning informs strategy and partner conversations.')}
  <div class="grid grid-3">
    ${sectionCard('chart','Dashboards','Links to Sheets, Looker Studio reports, grant trackers, board dashboards, and partner-facing summaries.')}
    ${sectionCard('database','Metrics library','Definitions, data sources, update cadence, owner, and reporting use for each shared metric.')}
    ${sectionCard('lightbulb','Learning agenda','Strategic questions ACT is trying to answer through data, partner feedback, and community voice.')}
  </div>`;
}

function communicationsPage() {
  return `${pageHeader('Communications', 'Messaging, storytelling, and public will', 'A central place for staff to access approved language, brand assets, templates, story bank, editorial calendar, and communications request forms.')}
  <div class="grid grid-2">
    ${sectionCard('megaphone','Messaging library','Approved descriptions of ACT, the backbone role, Austin Forward. Together, the CLT, partner initiatives, and funder-facing language.')}
    ${sectionCard('file','Brand & templates','Logos, slide templates, one-pagers, newsletter format, flyer templates, and public-facing boilerplate.')}
    ${sectionCard('message','Communications requests','Staff form for social posts, newsletters, flyers, press, website updates, and partner announcements.')}
    ${sectionCard('users','Story bank','Searchable record of stories, photos, quotes, partner wins, permissions, and grant/public use status.')}
  </div>`;
}

function fundingPage() {
  const systems = [
    ['Salesforce','Donor, member, contact, and relationship management planning.'],
    ['QuickBooks','Current finance system; may change as ACT moves toward fund accounting.'],
    ['Give Lively','Likely giving and events platform under consideration.'],
    ['Mailchimp','Primary marketing communications software.']
  ];
  return `${pageHeader('Funding & Systems', 'Grants, resource alignment, and system integration', 'This area connects development work with systems planning, so fundraising, events, finance, contacts, communications, and reporting do not live in separate silos.')}
  <div class="grid grid-3" style="margin-bottom:16px;">
    ${sectionCard('coins','Grant calendar','Funder, opportunity, due date, lead, status, amount, related workstream, and reporting requirements.')}
    ${sectionCard('file','Proposal library','Past proposals, budget narratives, attachments, partner letters, standard language, and issue-area examples.')}
    ${sectionCard('database','Resource alignment tracker','Track resources aligned to Austin priorities, including funding to ACT, partners, projects, and community initiatives.')}
  </div>
  <div class="card"><h3 style="margin-bottom:16px;">System integrations map</h3><div class="grid grid-4">${systems.map(([name,text]) => `<div class="tile"><h4>${name}</h4><p class="muted">${text}</p></div>`).join('')}</div></div>`;
}

function operationsPage() {
  return `${pageHeader('Operations', 'Staff resources, internal forms, and operating norms', 'This area supports day-to-day clarity: HR, finance, technology, onboarding, meeting templates, file norms, and internal requests.')}
  <div class="grid grid-2">
    ${sectionCard('users','People & HR','Staff directory, PTO, holidays, benefits, onboarding, job descriptions, and professional development resources.')}
    ${sectionCard('settings','Finance & admin','Expense reimbursement, vendor setup, invoice submission, budget templates, and procurement norms.')}
    ${sectionCard('database','Technology','Google Drive norms, file naming, email groups, password manager, CRM guidance, and software inventory.')}
    ${sectionCard('clipboard','Meeting templates','Staff meeting, partner convening, task force, decision-making, and follow-up templates.')}
  </div>`;
}

const pageRenderers = {
  home: homePage,
  strategy: strategyPage,
  'special-projects': specialProjectsPage,
  workstreams: workstreamsPage,
  partners: partnersPage,
  data: dataPage,
  communications: communicationsPage,
  funding: fundingPage,
  operations: operationsPage
};

function renderNav() {
  const normalized = searchQuery.trim().toLowerCase();
  const filtered = normalized ? navItems.filter(item => item.label.toLowerCase().includes(normalized)) : navItems;
  if (filtered.length === 0) return '<div class="no-results">No matching pages</div>';
  return filtered.map(item => `<button class="nav-button ${activePage === item.id ? 'active' : ''}" type="button" onclick="setPage('${item.id}')">${icon(item.icon, true)}${item.label}</button>`).join('');
}

function renderMobileNav() {
  return `<select onchange="setPage(this.value)">${navItems.map(item => `<option value="${item.id}" ${activePage === item.id ? 'selected' : ''}>${item.label}</option>`).join('')}</select>`;
}

function render() {
  const app = document.getElementById('app');
  const content = (pageRenderers[activePage] || homePage)();
  app.innerHTML = `<div class="app-shell">
    <aside class="sidebar"><div class="sidebar-inner"><div class="brand"><div class="brand-small">Austin Coming Together</div><div class="brand-title">Staff Hub Demo</div></div><div class="search-box">${icon('search', true)}<input value="${searchQuery.replace(/"/g, '&quot;')}" oninput="setSearch(this.value)" placeholder="Search pages" /></div><nav class="nav">${renderNav()}</nav><div class="demo-note"><div class="demo-note-title">${icon('alert', true)} Demo note</div>This is a prototype. In Google Sites, each card would link to Google Docs, Sheets, Forms, Calendars, and Drive folders.</div></div></aside>
    <main class="main"><div class="mobile-nav">${renderMobileNav()}</div><section class="page-card">${content}</section></main>
  </div>`;
}

function runSmokeTests() {
  const expected = ['home','strategy','special-projects','workstreams','partners','data','communications','funding','operations'];
  console.assert(expected.every(id => navItems.some(item => item.id === id)), 'Navigation is missing one or more expected pages.');
  console.assert(new Set(navItems.map(item => item.id)).size === navItems.length, 'Navigation contains duplicate page IDs.');
  console.assert(quickLinks.every(link => iconSvg[link[1]]), 'One or more quick links is missing an icon.');
  console.assert(workstreams.every(item => ['Active','Planning'].includes(item[2])), 'One or more workstreams has an unexpected status.');
}

runSmokeTests();
render();
