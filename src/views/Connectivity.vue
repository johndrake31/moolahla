<template>
  <section class="container py-5">
    <h2 class="text-center mb-4">Connectivity & Smart Business Phone</h2>

    <p class="lead text-center mb-4">
      Get business internet from major providers and bundle it with a modern
      VoIP phone systems and apps. Pick a <strong>contract</strong> for lower monthly rates, or
      go <strong>no-contract</strong> for flexibility.
    </p>

    <!-- INTERNET BUNDLES -->
    <div class="mb-5">
      <h3 class="h5 text-center mb-3">Internet Business Bundles</h3>

      <div class="row g-4 mb-5 justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <h5 class="card-title mb-0">Business Internet</h5>
                <span class="badge bg-primary">Fiber / Cable</span>
              </div>
              <ul class="text-muted mb-3 ps-3">
                <li><strong>Contract</strong>: 5 year price guarantee </li>
                <li>
                  <strong>No-contract</strong>: month-to-month flexibility
                </li>
                <li><strong>Speeds</strong>: up to 7 gigabit where available</li>
                <li>
                  <strong>Static IP (optional)</strong>: keeps the same address
                  for remote access or cameras
                </li>
                <li>
                  <strong>Failover / backup</strong>: stay online during outages
                </li>
              </ul>
              <RouterLink to="/contact" class="btn btn-outline-dark btn-sm">
                Check Availability
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VOIP / CLOUD PBX -->
    <div class="mb-5">
      <h3 class="h5 text-center mb-3">
        Smart Business Phone (VoIP / Cloud PBX)
      </h3>
      <p class="text-center text-muted mb-4">
        VoIP runs your phones over the internet. It
        <strong>requires a contract</strong> and comes with powerful,
        easy-to-use features.
      </p>

      <div class="row g-4">
        <div v-for="feat in voipBenefits" :key="feat.key" class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                <i :class="feat.icon + ' me-2'"></i>{{ feat.title }}
              </h5>
              <p class="card-text text-muted">{{ feat.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <h4 class="h6 text-center mt-4 mb-3">Popular Phone Features</h4>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 g-sm-3 mb-4 text-muted"
      >
        <div class="col">
          <i class="bi bi-person-workspace me-2"></i>Auto-attendant (press 1 for
          Sales, etc.)
        </div>
        <div class="col">
          <i class="bi bi-people me-2"></i>Ring groups &amp; queues (share calls
          across team)
        </div>
        <div class="col">
          <i class="bi bi-telephone-outbound me-2"></i>Forward/transfer/park
          (send calls where needed)
        </div>
        <div class="col">
          <i class="bi bi-voicemail me-2"></i>Voicemail to email (messages in
          your inbox)
        </div>
        <div class="col">
          <i class="bi bi-clipboard2-data me-2"></i>Call history, monitoring
          &amp; recording
        </div>
        <div class="col">
          <i class="bi bi-diagram-2 me-2"></i>Conference bridge &amp; 3-way
          calling
        </div>
        <div class="col">
          <i class="bi bi-broadcast-pin me-2"></i>Paging/announcements
        </div>
        <div class="col">
          <i class="bi bi-lamp me-2"></i>Busy lamp field (see who’s on a call)
        </div>
        <div class="col">
          <i class="bi bi-phone-flip me-2"></i>Mobile &amp; web apps
        </div>
      </div>

      <div class="alert alert-info small">
        “VoIP” uses the internet instead of old
        phone lines. “Cloud PBX” is the phone system brain in the cloud—no big
        box in a closet. No hidden taxes and fees for long distance calls and copper phone line maintenance.
      </div>
    </div>

    <!-- QUICK GLOSSARY -->
    <div class="mb-5">
      <h3 class="h6 mb-3">Quick Glossary</h3>
      <div class="row g-3 text-muted">
        <div class="col-md-4">
          <div class="p-3 border rounded-3 h-100">
            <strong>Static IP</strong> — a fixed internet address for your
            business (helpful for cameras/VPN).
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 border rounded-3 h-100">
            <strong>Failover / Redundancy</strong> — a backup internet line if
            the main one goes down.
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 border rounded-3 h-100">
            <strong>Contract vs No-contract</strong> — contracts lower monthly
            cost; month-to-month is flexible.
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center">
      <RouterLink to="/contact" class="btn btn-dark">
        <i class="bi bi-send me-2"></i>Get a Connectivity &amp; Phone Quote
      </RouterLink>
      <p class="text-muted small mt-2">
        We’ll check provider availability at your address and recommend the best
        bundle for your needs.
      </p>
    </div>
  </section>
</template>

<script setup>
const voipBenefits = [
  {
    key: "one-system",
    title: "One System for All Locations",
    icon: "bi bi-diagram-3",
    text: "Keep every store or office on one phone system. Add users or extensions as you grow without new hardware closets.",
  },
  {
    key: "work-anywhere",
    title: "Work Anywhere",
    icon: "bi bi-phone-flip",
    text: "Desk phones, mobile app, or browser calling—answer from the office or on the go with the same business number.",
  },
  {
    key: "recording",
    title: "Call Recording (Quality & Legal)",
    icon: "bi bi-shield-check",
    text: "Record calls for training and compliance. We’ll set up announcements so callers know they’re being recorded (requirements vary by state).",
  },
];
</script>

<style scoped>
/* Optional media treatment for card images */
.card-media {
  /* keeps a consistent, modern card-top image area */
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
  display: block;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
</style>
