"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export default function MotionEnhancer() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section:not(.hero):not(.page-hero), .section-intro, .problem-bento > article, .difference-stage > div, .solution-tile, .fit-bento > article, .deliverable-glass > div, .faq-list > details, .process-grid > article, .path-card, .principle-grid > article, .portfolio-card, .leadership-card, .verification-panel"
      )
    );

    revealElements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    revealElements.forEach((element) => observer.observe(element));

    const motionTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".world-intro-visual, .problem-bento > article, .difference-stage > div, .solution-tile, .fit-bento > article, .deliverable-glass > div, .hero-photo-collage figure, .network-line-art, .center-heading, .right-heading, .deep-solutions-title, .fit-heading"
      )
    );
    motionTargets.forEach((element, index) => {
      element.classList.add("scroll-motion");
      element.dataset.motionIndex = String(index);
    });

    const progressInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const range = window.innerHeight + rect.height;
      return clamp((window.innerHeight - rect.top) / range, 0, 1);
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const pageRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty("--page-progress", String(clamp(window.scrollY / pageRange, 0, 1)));

      motionTargets.forEach((element) => {
        const progress = progressInViewport(element);
        const centered = progress - 0.5;
        const index = Number(element.dataset.motionIndex || 0);
        const direction = index % 2 === 0 ? 1 : -1;
        let strength = 34;

        if (element.matches(".world-intro-visual, .network-line-art, .hero-photo-collage figure")) strength = 76;
        if (element.matches(".center-heading, .right-heading, .deep-solutions-title, .fit-heading")) strength = 24;

        const y = centered * strength * -1;
        const x = element.matches(".center-heading, .right-heading, .deep-solutions-title, .fit-heading")
          ? centered * 30 * direction
          : 0;
        const rotate = element.matches(".solution-tile, .fit-bento > article")
          ? centered * 0.8 * direction
          : 0;

        element.style.setProperty("--motion-x", `${x.toFixed(2)}px`);
        element.style.setProperty("--motion-y", `${y.toFixed(2)}px`);
        element.style.setProperty("--motion-rotate", `${rotate.toFixed(3)}deg`);
        element.style.setProperty("--motion-progress", progress.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
