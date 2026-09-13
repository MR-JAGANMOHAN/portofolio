(()=>{
  const loadStyle=()=>{if(document.getElementById('modern-layer'))return;const l=document.createElement('link');l.id='modern-layer';l.rel='stylesheet';l.href='assets/css/modern.css?v=20260913';document.head.appendChild(l)};
  loadStyle();
  const nav=document.querySelector('.nav-links,.links,nav');
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show','visible');observer.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}));
  const systems=document.createElement('section');
  systems.id='engineering-systems';systems.className='engineering-systems wrap reveal';
  systems.innerHTML=`<div class="section-top"><span>VISUAL SYSTEMS / 02A</span><h2>Engineering, made visible</h2></div><div class="systems-grid">
  <article class="system-card"><div class="system-meta">PERMIT + GIS / ROW / EOP</div><h3>Permit layers become a route.</h3><p>Basemap context, right-of-way and edge-of-pavement constraints settle into a proposed fiber path. The moving node represents design geometry being checked across the corridor.</p><div class="system-art"><div class="gridlines"></div><div class="permit-road"></div><div class="permit-eop"></div><div class="permit-row"></div><div class="permit-route"></div><i class="node-map node1"></i><i class="node-map node2"></i><i class="node-map node3"></i></div></article>
  <article class="system-card"><div class="system-meta">FIBER / F1 → F2 / CONNECTIVITY</div><h3>Connectivity is a living system.</h3><p>Instead of showing a static diagram, the route carries data: nodes pulse, packets move and the network visually connects distribution toward the customer edge.</p><div class="system-art"><div class="fiber-lines"><svg viewBox="0 0 600 100" preserveAspectRatio="none"><path d="M12 76 C95 20 140 92 220 40 S375 82 455 27 S530 35 588 64" fill="none" stroke="var(--cyan)" stroke-width="4"/><path d="M12 83 C120 48 165 98 270 58 S400 52 588 78" fill="none" stroke="var(--violet)" stroke-width="2"/></svg><span class="data-dot"></span></div><svg class="system-art-svg" viewBox="0 0 600 118" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%"><circle cx="125" cy="72" r="9" class="fiber-node"/><circle cx="300" cy="46" r="9" class="fiber-node"/><circle cx="485" cy="67" r="9" class="fiber-node"/></svg></div></article>
  <article class="system-card"><div class="system-meta">KATAPULT / PLA / POLE</div><h3>Field data → structural confidence.</h3><p>Katapult Pro supports integrated pole-loading analysis and make-ready decisions. This visual turns pole load percentage into something you can read at a glance.</p><div class="system-art"><div class="pole-art"></div><div class="gauge">78%</div><span style="position:absolute;left:12px;bottom:13px;font:500 9px 'DM Mono';color:#738095">POLE LOAD</span><span style="position:absolute;right:12px;bottom:13px;font:500 9px 'DM Mono';color:var(--green)">PASS / REVIEW</span></div></article>
  <article class="system-card"><div class="system-meta">NETWORK / DELIVERY / QA</div><h3>A design gets delivered, not just drawn.</h3><p>QA/QC is represented as a live connection: the cable searches for the port, plugs in, transfers the payload, then resets for the next deliverable.</p><div class="system-art"><div class="plug-shell"><div class="plug-port"></div><div class="plug-cable"><div class="plug-end"></div></div></div><span style="position:absolute;left:13%;bottom:16px;font:500 9px 'DM Mono';color:#738095">QA / FA</span><span style="position:absolute;right:13%;bottom:16px;font:500 9px 'DM Mono';color:var(--green)">DELIVERED</span></div></article></div>`;
  const about=document.querySelector('#about,.about');
  const anchor=about?.closest('section')||document.querySelector('.section');
  if(anchor) anchor.after(systems); else document.querySelector('main')?.prepend(systems);
  observer.observe(systems);
  const tools=document.createElement('section');tools.className='section wrap reveal';tools.id='toolbox-extended';
  const cards=[
    ['IQGeo','F1 / F2 telecom design','Fiber network planning, connected assets and low-level design workflows.'],
    ['QGIS','GIS / spatial analysis','Layer editing, geometry, map composition and spatial QA.'],
    ['ARAMIS','OSP production','Structured telecom design and production workflows.'],
    ['WALDO','OSP design','Route, asset and network design production work.'],
    ['Katapult PLA','Pole validation / loading','Pole field data, structural loading and make-ready context.'],
    ['AutoCAD','CAD / drafting','Precise technical drawings, annotations and engineering layouts.'],
    ['Google Earth Pro','Aerial context','Location validation, aerial review and visual checks.'],
    ['KMZ / KML','Geospatial exchange','Package, inspect and hand off field/network geometry.'],
    ['BaseMap','Utility design','Basemap preparation and utility/road/property context.'],
    ['AT&T systems','Final delivery','Encoding-system uploads, project handoff and production completion.'],
    ['TCF','Network deliverable','Structured telecom deliverable generation within the project flow.'],
    ['Reserved Loop','Fiber workflow','Reserved-loop generation and design coordination.']
  ];
  tools.innerHTML='<div class="section-top"><span>03A / TOOLBOX</span><h2>Tools behind the work</h2></div><div class="tools-extended">'+cards.map(c=>`<article class="toolx"><b>${c[0]}</b><small>${c[1]}</small><p>${c[2]}</p><span class="micro"><i></i> USED IN WORKFLOW</span></article>`).join('')+'</div>';
  const caps=document.querySelector('#capabilities');
  if(caps) caps.parentElement?.after(tools); else systems.after(tools);
  observer.observe(tools);
  // subtle cursor-driven glass depth on modern cards
  document.querySelectorAll('.system-card,.toolx,.project,.cap').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=((e.clientX-r.left)/r.width-.5)*6;const y=((e.clientY-r.top)/r.height-.5)*-6;card.style.transform=`perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-3px)`});card.addEventListener('pointerleave',()=>{card.style.transform=''})});
})();
