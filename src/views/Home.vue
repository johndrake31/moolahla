<template>
  <section>
    <div class="hero">
      <video autoplay muted loop playsinline class="hero-video">
        <source :src="heroVideo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Overlay -->
      <div class="hero-overlay"></div>

      <!-- Hero content -->
      <div
        class="container text-center d-flex flex-column justify-content-center h-100 position-relative"
      >
        <h1 class="hero-title">So many solutions, you’ll say Oolah-la!</h1>
        <p class="hero-sub">
          With financial benefits that make you shout Moola-la!
        </p>
      </div>
    </div>

    <!-- What We Do -->
    <div class="container py-5">
      <div class="what-we-do">
        <h2 class="text-center mb-4">What We Do</h2>
        <p class="lead text-center mb-3">
          Every business runs on the 3 essentials: communications, order
          and payments processing systems.
        </p>
        <p class="lead text-center mb-5">
          At <span class="moo">Moolah-la Solutions</span>, we connect businesses
          and property managers with trusted, vetted providers for internet,
          VoIP phones with integrated communications apps, and point of sales and payment systems — the foundation that keeps your operation running smoothly and
          safely.
        </p>
      </div>

      <div class="d-flex flex-wrap justify-content-center gap-4 cust-row">
        <ConnectivityCard />
        <PosCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import heroVideo from "../assets/moolah-la.mp4";
import ConnectivityCard from "../components/ConnectivityCard.vue";
import PosCard from "../components/PosCard.vue";
</script>
<style scoped>
.hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.hero-sub {
  font-size: 1.25rem;
  color: #fff;
  opacity: 0.9;
}

.hero .container {
  position: relative;
  z-index: 2;
}

/* 📱 Mobile tweaks */
@media (max-width: 768px) {
  .hero {
    height: 40vh;
    min-height: 300px;
  }

  .hero-title {
    font-size: 1.6rem;
  }

  .hero-sub {
    font-size: 1rem;
  }
}

/* 📱 Very small screens (phones < 480px wide) */
@media (max-width: 480px) {
  .hero {
    height: 35vh;
    min-height: 220px;
  }

  .hero-title {
    font-size: 1.3rem;
    line-height: 1.3;
  }

  .hero-sub {
    font-size: 0.9rem;
  }
}
.cust-row{
  min-height: 200px;
}
.moo {
  font-weight: 700;
}
</style>
