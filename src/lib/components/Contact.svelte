<script lang="ts">
  import { magnetic, reveal } from '$lib/actions/reveal';

  const email = 'yukibrent9@gmail.com';
  let copied = $state(false);
  let timeout: ReturnType<typeof setTimeout>;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    copied = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => (copied = false), 1800);
  }
</script>

<footer id="contact" class="contact" aria-labelledby="contact-title">
  <div class="container" use:reveal>
    <div class="contact-top mono">
      <span>05 / Contact</span>
      <span>Open to software opportunities</span>
    </div>

    <h2 id="contact-title" class="display">Let’s build<br />something.</h2>

    <div class="contact-bottom">
      <div class="email-block">
        <a href={`mailto:${email}`} class="email">{email}</a>
        <button type="button" class="copy mono" onclick={copyEmail} aria-live="polite" use:magnetic>
          {copied ? 'Copied' : 'Copy email'}
        </button>
      </div>
      <nav aria-label="Social links">
        <a href="https://github.com/Yukitooo" target="_blank" rel="noreferrer">
          GitHub <span class="arrow">↗</span>
        </a>
        <a href="https://www.linkedin.com/in/zachary-mayuga/" target="_blank" rel="noreferrer">
          LinkedIn <span class="arrow">↗</span>
        </a>
      </nav>
    </div>

    <div class="footer-meta mono">
      <span>© {new Date().getFullYear()} Zachary Brent Mayuga</span>
      <span>Las Piñas, Philippines</span>
      <a href="#main-content">Back to top ↑</a>
    </div>
  </div>
</footer>

<style>
  .contact {
    padding: clamp(4rem, 8vw, 8rem) 0 1.5rem;
    color: var(--paper);
    background: var(--ink);
  }

  .contact-top {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    border-top: 1px solid rgba(244, 244, 240, 0.35);
    color: rgba(244, 244, 240, 0.65);
  }

  h2 {
    margin: clamp(5rem, 11vw, 11rem) 0;
  }

  .contact-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 3rem;
    padding-bottom: 2rem;
  }

  .email-block {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .email {
    font-size: clamp(1.15rem, 2.6vw, 2.8rem);
    line-height: 1.2;
    letter-spacing: -0.04em;
    border-bottom: 1px solid currentColor;
  }

  .copy {
    padding: 0.6rem 0.8rem;
    border: 1px solid rgba(244, 244, 240, 0.6);
    color: var(--paper);
    background: transparent;
    cursor: pointer;
    transition:
      color 180ms ease,
      background 180ms ease,
      transform 160ms ease;
  }

  .copy:hover {
    color: var(--ink);
    background: var(--paper);
  }

  nav {
    display: flex;
    gap: 2rem;
  }

  nav a {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .footer-meta {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 1rem;
    padding-top: 1.25rem;
    border-top: 1px solid rgba(244, 244, 240, 0.35);
    color: rgba(244, 244, 240, 0.55);
  }

  .footer-meta span:nth-child(2) {
    text-align: center;
  }

  @media (max-width: 700px) {
    .contact-top,
    .contact-bottom {
      align-items: flex-start;
      flex-direction: column;
    }

    .contact-top {
      gap: 0.4rem;
    }

    h2 {
      margin-block: 6rem;
    }

    .footer-meta {
      grid-template-columns: 1fr;
    }

    .footer-meta span:nth-child(2) {
      text-align: left;
    }
  }
</style>
