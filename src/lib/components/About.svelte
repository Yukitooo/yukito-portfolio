<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="about" class="section container" aria-labelledby="about-title" use:reveal>
  <div class="hidden-title" id="about-title">About</div>
  <SectionHeader number="03" title="About" meta="Based in PH" />

  <div class="about-grid">
    <p class="statement heading-large">Software across the product, not just the interface.</p>
    <div class="copy">
      <p class="body-large">
        I’m Zachary Brent Mayuga, a Software Developer based in Las Piñas, Philippines.
      </p>
      <p>
        My work spans software development, QA, AI evaluation, frontend and backend
        development, databases, and internal software systems.
      </p>
      <p>
        I graduated from De La Salle University Manila with a Bachelor of Science in Computer
        Engineering in February 2025 and was a consistent Dean’s Lister.
      </p>
    </div>
  </div>

  <div class="education">
    <span class="mono">Education</span>
    <div>
      <h3>De La Salle University — Manila</h3>
      <p>Bachelor of Science in Computer Engineering</p>
    </div>
    <div class="education-meta mono">
      <span>Graduated / February 2025</span>
      <span>Consistent Dean’s Lister</span>
    </div>
  </div>
</section>

<style>
  .hidden-title {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    clip-path: inset(50%);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1.65fr 0.8fr;
    gap: clamp(3rem, 8vw, 10rem);
    padding: clamp(2.5rem, 6vw, 7rem) 0 clamp(5rem, 10vw, 10rem);
  }

  .statement {
    max-width: 12ch;
    margin: 0;
  }

  .copy {
    align-self: end;
    max-width: 38rem;
  }

  .copy p:not(.body-large) {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.65;
  }

  .education {
    display: grid;
    grid-template-columns: 0.45fr 1.5fr 0.8fr;
    gap: 2rem;
    padding: 1.5rem 0;
    border-top: 1px solid var(--ink);
    border-bottom: 1px solid var(--ink);
  }

  .education h3 {
    margin: 0;
    font-size: clamp(1.15rem, 2vw, 1.65rem);
    font-weight: 500;
    letter-spacing: -0.025em;
  }

  .education p {
    margin: 0.35rem 0 0;
    color: var(--muted);
    font-size: 0.83rem;
  }

  .education-meta {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 0.35rem;
    text-align: right;
  }

  @media (max-width: 760px) {
    .about-grid {
      grid-template-columns: 1fr;
    }

    .education {
      grid-template-columns: 1fr;
    }

    .education-meta {
      align-items: flex-start;
      text-align: left;
    }
  }
</style>
