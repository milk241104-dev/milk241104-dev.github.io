"use strict";

const PROFILE = {
  siteTitle: "らいなう | Profile Link",
  description: "らいなうの配信先と映像リンクをまとめた、横型プロフィールのリンク集ページ。",
  name: "Rainau",
  romanName: "らいなう",
  copyrightName: "Rainau",
  badge: "Bloom Link Hub",
  eyebrow: "Creator／Artist",
  tagline: "音楽と映像を作っています。",
  footerCopy: "",
  photoSrc: "./hero-photo.png",
  photoFallbacks: [
    "./rainau-profile.jpg",
    "./rainau-profile.png",
  ],
  photoAlt: "花のヘッドドレスをまとった、らいなうの横顔プロフィール写真",
  linksHeading: "",
  linksNote: "Listen &Watch below",
  links: [
    {
      label: "YouTube",
      meta: "映像と一緒に世界観を見る",
      action: "WATCH",
      url: "https://youtu.be/e6zycLKYLHs",
      platform: "youtube",
    },
    {
      label: "Spotify",
      meta: "フル音源をすぐ開く",
      action: "LISTEN",
      url: "https://open.spotify.com/intl-ja/artist/2lDWdr6KzAdEK9APsVWWXs?si=1xyx3cKMRRuWrVPdZcIJEw",
      platform: "spotify",
    },
    {
      label: "Apple Music",
      meta: "iPhone や Mac からそのまま再生",
      action: "OPEN",
      url: "https://music.apple.com/jp/album/let-em-talk-ep/1882663325",
      platform: "apple",
    },
    {
      label: "iTunes",
      meta: "iTunes Store で作品ページを開く",
      action: "BUY",
      url: "https://music.apple.com/jp/album/let-em-talk-ep/1882663325",
      platform: "itunes",
    },
  ],
};

const ICON_SVG = {
  youtube:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><linearGradient id="youtubeGradient" x1="3" y1="4" x2="21" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#2d7d5a"/><stop offset="1" stop-color="#7553bf"/></linearGradient></defs><path fill="url(#youtubeGradient)" d="M21.1 7.2a2.8 2.8 0 0 0-1.9-2c-1.7-.5-7.2-.5-7.2-.5s-5.5 0-7.2.5a2.8 2.8 0 0 0-1.9 2C2.5 9 2.5 12 2.5 12s0 3 .4 4.8a2.8 2.8 0 0 0 1.9 2c1.7.5 7.2.5 7.2.5s5.5 0 7.2-.5a2.8 2.8 0 0 0 1.9-2c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8Z"/><path fill="#fff" d="m10 8.8 5.6 3.2-5.6 3.2Z"/></svg>',
  spotify:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><linearGradient id="spotifyGradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#2d7d5a"/><stop offset="1" stop-color="#7553bf"/></linearGradient></defs><circle cx="12" cy="12" r="10" fill="url(#spotifyGradient)"/><path d="M7.1 9.1c3.8-1.1 7.7-.7 10.8 1.1" stroke="#fff" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M7.9 12.2c2.9-.8 5.9-.5 8.3.8" stroke="#fff" stroke-width="1.55" stroke-linecap="round" fill="none"/><path d="M8.8 15.1c2-.5 4.1-.2 5.8.8" stroke="#fff" stroke-width="1.35" stroke-linecap="round" fill="none"/></svg>',
  apple:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><linearGradient id="appleMusicGradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="#2d7d5a"/><stop offset="1" stop-color="#7553bf"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="4.6" fill="url(#appleMusicGradient)"/><path fill="#fff" d="M10.25 8.35v7.02a1.94 1.94 0 1 1-.95-1.67V9.24l4.98-1.16v5.4a1.94 1.94 0 1 1-.94-1.67V6.9l1.9-.45v6.95a1.94 1.94 0 1 1-.94-1.67V8.35Z"/></svg>',
  itunes:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><linearGradient id="itunesGradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#2d7d5a"/><stop offset="1" stop-color="#7553bf"/></linearGradient></defs><circle cx="12" cy="12" r="9.5" fill="#fff" stroke="url(#itunesGradient)" stroke-width="1.8"/><path fill="url(#itunesGradient)" d="M10.55 8.1v6.48a1.92 1.92 0 1 1-.94-1.64v-4.1l4.86-1.13v4.96a1.92 1.92 0 1 1-.94-1.64V8.1Z"/></svg>',
};

function createPlatformIcon(platform) {
  const icon = document.createElement("span");
  icon.className = "link-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = ICON_SVG[platform] || ICON_SVG.youtube;
  return icon;
}

function setFirstAvailablePhoto(imageElement, sources) {
  const photoSources = sources.filter(Boolean);

  if (!imageElement || photoSources.length === 0) {
    return;
  }

  const [currentSource, ...restSources] = photoSources;
  const probeImage = new Image();

  probeImage.addEventListener("load", () => {
    imageElement.src = currentSource;
  });

  probeImage.addEventListener("error", () => {
    setFirstAvailablePhoto(imageElement, restSources);
  });

  probeImage.src = currentSource;
}

const pageTitle = document.getElementById("page-title");
const romanName = document.getElementById("page-roman-name");
const copyrightName = document.getElementById("copyright-name");
const pageBadge = document.getElementById("page-badge");
const pageEyebrow = document.getElementById("page-eyebrow");
const pageTagline = document.getElementById("page-tagline");
const footerCopy = document.getElementById("footer-copy");
const artistPhoto = document.getElementById("artist-photo");
const linksHeading = document.getElementById("links-heading");
const linksNote = document.getElementById("links-note");
const linkList = document.getElementById("link-list");
const year = document.getElementById("year");
const descriptionMeta = document.querySelector('meta[name="description"]');

if (pageTitle) {
  pageTitle.textContent = PROFILE.name;
}

if (romanName) {
  romanName.textContent = PROFILE.romanName;
}

if (copyrightName) {
  copyrightName.textContent = PROFILE.copyrightName || PROFILE.name;
}

if (pageBadge) {
  pageBadge.textContent = PROFILE.badge;
}

if (pageEyebrow) {
  pageEyebrow.textContent = PROFILE.eyebrow;
}

if (pageTagline) {
  pageTagline.textContent = PROFILE.tagline;
}

if (footerCopy) {
  footerCopy.textContent = PROFILE.footerCopy;
  footerCopy.hidden = !PROFILE.footerCopy;
}

if (linksHeading) {
  linksHeading.textContent = PROFILE.linksHeading;
  linksHeading.hidden = !PROFILE.linksHeading;
}

if (linksNote) {
  linksNote.textContent = PROFILE.linksNote;
}

if (PROFILE.siteTitle) {
  document.title = PROFILE.siteTitle;
}

if (descriptionMeta && PROFILE.description) {
  descriptionMeta.content = PROFILE.description;
}

if (artistPhoto) {
  artistPhoto.alt = PROFILE.photoAlt;

  const photoSources = [PROFILE.photoSrc, ...(PROFILE.photoFallbacks || [])];
  setFirstAvailablePhoto(artistPhoto, photoSources);
}

if (linkList) {
  linkList.innerHTML = "";

  PROFILE.links.forEach((link, index) => {
    if (!link.label || !link.url) {
      return;
    }

    const anchor = document.createElement("a");
    anchor.className = "link-button";
    if (link.platform) {
      anchor.classList.add(`link-${link.platform}`);
    }
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.style.setProperty("--order", String(index + 1));

    const icon = createPlatformIcon(link.platform);

    const textGroup = document.createElement("span");
    textGroup.className = "link-text";

    const label = document.createElement("span");
    label.className = "link-label duotone-text";
    label.textContent = link.label;

    const meta = document.createElement("span");
    meta.className = "link-meta";
    meta.textContent = link.meta || "";

    const arrow = document.createElement("span");
    arrow.className = "link-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = link.action || "OPEN";

    textGroup.append(label, meta);
    anchor.append(icon, textGroup, arrow);
    anchor.setAttribute("aria-label", `${link.label}を新しいタブで開く`);
    linkList.appendChild(anchor);
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (document.body) {
  document.body.classList.add("is-ready");
}
