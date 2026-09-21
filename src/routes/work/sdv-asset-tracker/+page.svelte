<script lang="ts">
  import { env } from '$env/dynamic/public';
  import Contact from '$lib/components/Contact.svelte';
  import { reveal } from '$lib/actions/reveal';

  const stack = [
    'Svelte',
    'SvelteKit',
    'TypeScript',
    'Node.js',
    'SQLite',
    'Drizzle ORM',
    'Authentication'
  ];
  const siteUrl = env.PUBLIC_SITE_URL || '';
</script>

<svelte:head>
  <title>SDV Asset Tracker — Zachary Brent Mayuga</title>
  <meta
    name="description"
    content="Case study: an internal barcode-based asset management system built for Schola De Vita."
  />
  <link rel="canonical" href={`${siteUrl}/work/sdv-asset-tracker`} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="SDV Asset Tracker — Case Study" />
  <meta
    property="og:description"
    content="An internal barcode-based asset management system built for Schola De Vita."
  />
</svelte:head>

<main id="main-content" class="case-study">
  <header class="case-hero container">
    <div class="case-kicker mono" use:reveal>
      <span>Case study / 01</span>
      <span>Real-world software / Deployed</span>
    </div>
    <h1 class="display" use:reveal={{ delay: 60 }}>SDV Asset<br />Tracker</h1>
    <div class="case-intro" use:reveal={{ delay: 120 }}>
      <p class="body-large">Internal asset management software built for Schola De Vita.</p>
      <dl>
        <div>
          <dt>Role</dt>
          <dd>Software Developer</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>2026</dd>
        </div>
        <div>
          <dt>Deployment</dt>
          <dd>Internal local server</dd>
        </div>
      </dl>
    </div>
  </header>

  <section
    class="hero-visual container"
    aria-label="SDV Asset Tracker interface placeholder"
    use:reveal
  >
    <div class="screen-placeholder">
      <div class="screen-top mono">
        <span>SDV / Asset Inventory</span><span>Internal System</span>
      </div>
      <div class="screen-body">
        <aside><b>SDV</b><i></i><i></i><i></i><i></i></aside>
        <div class="screen-content">
          <span class="mono">Asset lookup</span>
          <h2>Scan or enter asset barcode</h2>
          <div class="fake-input mono"><span>ASSET ID</span><b>Search →</b></div>
          <div class="asset-table mono">
            <span>Asset</span><span>Assignment</span><span>Type</span><span>Status</span>
            <i></i><i></i><i></i><i></i>
            <i></i><i></i><i></i><i></i>
          </div>
        </div>
      </div>
    </div>
    <p class="placeholder-note mono">Interface placeholder — replace with project screenshot</p>
  </section>

  <section class="case-content container">
    <article class="case-section" use:reveal>
      <div class="case-label mono">01 / Overview</div>
      <div>
        <h2>A practical system for everyday asset operations.</h2>
        <p>
          I designed and developed an internal asset inventory system for Schola De Vita. It gives
          school staff a direct way to identify assets through barcodes and retrieve information
          such as student assignment, asset type, asset name, and other inventory details.
        </p>
      </div>
    </article>

    <article class="case-section" use:reveal>
      <div class="case-label mono">02 / The problem</div>
      <div>
        <h2>Asset information needed to be easier to retrieve.</h2>
        <p>
          School assets carry useful records, but those records need to be accessible at the moment
          staff identify an item. The project centered on making lookup fast and direct while
          keeping operational data inside the school’s own network.
        </p>
      </div>
    </article>

    <article class="case-section split" use:reveal>
      <div class="case-label mono">03 / The solution</div>
      <div>
        <h2>Barcode in. Clear record out.</h2>
        <p>
          The application connects a barcode-based lookup flow to a structured SQLite database.
          Authenticated staff can retrieve the relevant asset record without navigating a complex
          inventory interface.
        </p>
        <ul class="feature-list">
          <li><span>01</span> Barcode-based identification</li>
          <li><span>02</span> Authenticated internal access</li>
          <li><span>03</span> Structured inventory records</li>
          <li><span>04</span> Local-network deployment</li>
        </ul>
      </div>
    </article>

    <div class="detail-visual" use:reveal>
      <div class="barcode-panel">
        <span class="mono">Asset / Barcode</span>
        <div class="barcode"></div>
      </div>
      <div class="record-panel">
        <span class="mono">Retrieved record</span>
        <dl>
          <div>
            <dt>Asset name</dt>
            <dd>—</dd>
          </div>
          <div>
            <dt>Asset type</dt>
            <dd>—</dd>
          </div>
          <div>
            <dt>Assignment</dt>
            <dd>—</dd>
          </div>
        </dl>
      </div>
    </div>

    <article class="case-section" use:reveal>
      <div class="case-label mono">04 / How it works</div>
      <div>
        <ol class="workflow">
          <li>
            <span>01</span>
            <p>Staff authenticate to the internal application.</p>
          </li>
          <li>
            <span>02</span>
            <p>An asset barcode is scanned or entered.</p>
          </li>
          <li>
            <span>03</span>
            <p>The application queries the corresponding inventory record.</p>
          </li>
          <li>
            <span>04</span>
            <p>Assignment and asset details are returned to the user.</p>
          </li>
        </ol>
      </div>
    </article>

    <article class="case-section" use:reveal>
      <div class="case-label mono">05 / Architecture</div>
      <div>
        <h2>Built for a contained, internal environment.</h2>
        <p>
          SvelteKit provides the application layer, with Node.js handling server-side operations.
          SQLite and Drizzle ORM support the inventory data model. Authentication controls access,
          and the completed system runs on the school’s local server rather than a public host.
        </p>
        <div class="architecture mono" aria-label="Application architecture">
          <span>Staff browser</span><i>→</i><span>SvelteKit / Node</span><i>→</i><span
            >Drizzle / SQLite</span
          >
        </div>
      </div>
    </article>

    <article class="case-section" use:reveal>
      <div class="case-label mono">06 / Tech stack</div>
      <div class="stack-list">
        {#each stack as item, index (item)}<span
            ><i>{String(index + 1).padStart(2, '0')}</i>{item}</span
          >{/each}
      </div>
    </article>

    <article class="case-section" use:reveal>
      <div class="case-label mono">07 / Deployment</div>
      <div>
        <h2>Deployed where the work happens.</h2>
        <p>
          The application is deployed on Schola De Vita’s local server and is accessible only within
          the internal network. This keeps the system aligned with its operational context and
          prevents the private asset inventory from being publicly exposed.
        </p>
      </div>
    </article>

    <article class="case-section" use:reveal>
      <div class="case-label mono">08 / What I learned</div>
      <div>
        <h2>Internal software succeeds by fitting the workflow.</h2>
        <p>
          The project reinforced the importance of starting with the real operating environment: who
          needs the information, how they identify an asset, where the data should live, and how the
          finished application will be deployed and maintained.
        </p>
      </div>
    </article>

    <a
      class="next-project"
      href="https://ai-powered-todo-delta.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      <span class="mono">Next project / 02</span>
      <strong>AI-Powered To-Do <i>↗</i></strong>
    </a>
  </section>
</main>

<Contact />

<style>
  .case-study {
    padding-top: 5rem;
  }

  .case-hero {
    min-height: calc(100svh - 5rem);
    padding-top: clamp(3rem, 7vw, 7rem);
    padding-bottom: 2rem;
  }

  .case-kicker {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    border-top: 1px solid var(--ink);
    color: var(--muted);
  }

  h1 {
    margin: clamp(5rem, 10vw, 10rem) 0;
  }

  .case-intro {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 4rem;
    align-items: end;
  }

  .case-intro > p {
    max-width: 28ch;
    margin: 0;
  }

  dl {
    margin: 0;
  }

  .case-intro dl > div,
  .record-panel dl > div {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 0.65rem 0;
    border-top: 1px solid var(--line);
    font-size: 0.75rem;
  }

  dt {
    color: var(--muted);
  }

  dd {
    margin: 0;
    text-align: right;
  }

  .hero-visual {
    padding-bottom: var(--section-space);
  }

  .screen-placeholder {
    overflow: hidden;
    border: 1px solid var(--ink);
    background: #e8e8e3;
  }

  .screen-top {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    border-bottom: 1px solid var(--ink);
    background: var(--paper);
  }

  .screen-body {
    display: grid;
    grid-template-columns: 18% 1fr;
    min-height: min(62vw, 48rem);
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: clamp(1rem, 3vw, 2.5rem);
    border-right: 1px solid var(--ink);
    background: var(--ink);
    color: var(--paper);
  }

  aside b {
    margin-bottom: clamp(2rem, 8vw, 7rem);
    font-size: clamp(1.3rem, 3vw, 3rem);
  }

  aside i {
    height: 1px;
    background: currentColor;
    opacity: 0.45;
  }

  .screen-content {
    padding: clamp(1.5rem, 6vw, 7rem);
  }

  .screen-content h2 {
    max-width: 12ch;
    margin: clamp(2rem, 5vw, 5rem) 0;
    font-size: clamp(2rem, 5vw, 6rem);
    font-weight: 500;
    line-height: 0.95;
    letter-spacing: -0.06em;
  }

  .fake-input {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
    border: 1px solid var(--ink);
    background: var(--paper);
  }

  .asset-table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: clamp(2rem, 6vw, 6rem);
  }

  .asset-table i {
    height: 1px;
    background: var(--ink);
    opacity: 0.25;
  }

  .placeholder-note {
    margin-top: 0.7rem;
    color: var(--muted);
    text-align: right;
  }

  .case-section {
    display: grid;
    grid-template-columns: 0.7fr 1.6fr;
    gap: clamp(2rem, 8vw, 10rem);
    padding: clamp(4rem, 9vw, 9rem) 0;
    border-top: 1px solid var(--ink);
  }

  .case-label {
    color: var(--muted);
  }

  .case-section h2 {
    max-width: 14ch;
    margin: 0 0 2.5rem;
    font-size: clamp(2rem, 4.3vw, 4.8rem);
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.055em;
    text-transform: uppercase;
  }

  .case-section > div:last-child > p {
    max-width: 44rem;
    color: #383835;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    line-height: 1.65;
  }

  .feature-list,
  .workflow {
    margin: 4rem 0 0;
    padding: 0;
    list-style: none;
  }

  .feature-list li {
    display: grid;
    grid-template-columns: 3rem 1fr;
    padding: 1rem 0;
    border-top: 1px solid var(--line);
    font-size: 1rem;
  }

  .feature-list span,
  .workflow span {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
  }

  .detail-visual {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 32rem;
    margin-bottom: var(--section-space);
    border: 1px solid var(--ink);
  }

  .barcode-panel,
  .record-panel {
    display: flex;
    flex-direction: column;
    padding: clamp(1.5rem, 4vw, 4rem);
  }

  .barcode-panel {
    justify-content: space-between;
    background: var(--ink);
    color: var(--paper);
  }

  .barcode {
    height: 45%;
    background: repeating-linear-gradient(
      90deg,
      var(--paper) 0 3px,
      transparent 3px 8px,
      var(--paper) 8px 10px,
      transparent 10px 13px
    );
  }

  .record-panel dl {
    margin-top: auto;
  }

  .workflow {
    margin-top: 0;
  }

  .workflow li {
    display: grid;
    grid-template-columns: 4rem 1fr;
    align-items: baseline;
    padding: 1.25rem 0;
    border-top: 1px solid var(--line);
  }

  .workflow p {
    margin: 0;
    font-size: clamp(1.15rem, 2vw, 1.8rem);
    letter-spacing: -0.03em;
  }

  .architecture {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    gap: 1rem;
    align-items: center;
    margin-top: 4rem;
  }

  .architecture span {
    padding: 1.5rem 1rem;
    border: 1px solid var(--ink);
    text-align: center;
  }

  .stack-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .stack-list span {
    display: flex;
    gap: 2rem;
    padding: 1.2rem 0;
    border-top: 1px solid var(--line);
    font-size: clamp(1.2rem, 2.2vw, 2rem);
  }

  .stack-list i {
    color: var(--muted);
    font-family: 'DM Mono', monospace;
    font-size: 0.6rem;
    font-style: normal;
  }

  .next-project {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 2rem 0 var(--section-space);
    border-top: 1px solid var(--ink);
  }

  .next-project strong {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: clamp(2.5rem, 7vw, 8rem);
    font-weight: 500;
    line-height: 0.95;
    letter-spacing: -0.065em;
    text-transform: uppercase;
  }

  .next-project i {
    font-style: normal;
    transition: transform 200ms ease;
  }

  .next-project:hover i {
    transform: translate(8px, -8px);
  }

  @media (max-width: 720px) {
    .case-study {
      padding-top: 4.5rem;
    }

    .case-kicker,
    .case-intro,
    .case-section,
    .detail-visual {
      grid-template-columns: 1fr;
    }

    .case-kicker {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .case-hero {
      min-height: auto;
      padding-bottom: 5rem;
    }

    .screen-body {
      grid-template-columns: 1fr;
      min-height: 33rem;
    }

    aside {
      display: none;
    }

    .asset-table span:nth-of-type(n + 3),
    .asset-table i:nth-of-type(n + 5) {
      display: none;
    }

    .asset-table {
      grid-template-columns: repeat(2, 1fr);
    }

    .detail-visual {
      min-height: 42rem;
    }

    .architecture {
      grid-template-columns: 1fr;
    }

    .architecture i {
      transform: rotate(90deg);
      text-align: center;
    }

    .stack-list {
      grid-template-columns: 1fr;
    }
  }
</style>
