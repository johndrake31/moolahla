<template>
  <div class="col-md-6 col-lg-3">
    <RouterLink
      to="/pos"
      class="card-connectivity card h-100 shadow-sm text-decoration-none"
    >
      <div class="card-body d-flex flex-column">
        <h5 class="card-title text-primary">
          <i class="bi bi-credit-card-2-front me-2" aria-hidden="true"></i>
          POS & Payments
        </h5>
        <p class="card-text text-muted flex-grow-1">
          Cash and credit pricing menus, Integrated payment systems.
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
/* Base card */
.card .card-body {
  transition: box-shadow 0.25s ease, transform 0.25s ease,
    background-color 0.25s ease;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  transform: scale(1.03);
}

/* Connectivity card with background image */
.card-connectivity {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card-connectivity::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("../assets/heropos.avif") center/cover no-repeat;
  opacity: 0; /* hidden by default */
  transition: opacity 0.3s ease;
  z-index: 0;
}
.card-connectivity::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0; /* hidden by default */
  transition: opacity 0.3s ease;
  z-index: 1;
}
.card-connectivity:hover::before,
.card-connectivity:hover::after {
  opacity: 1;
}

/* Keep text above background */
.card-connectivity .card-body {
  position: relative;
  z-index: 2;
  transition: opacity 0.3s ease;
}
.card-connectivity:hover .card-body {
  opacity: 0; /* fade text out */
  z-index: 0; /* allow background/overlay to show fully */
}
/* Tablets & phones: always show background + overlay, text turns white */
@media (max-width: 1024px) {
  .card-body {
    min-height: 250px;
  }

  .card-connectivity::before,
  .card-connectivity::after {
    opacity: 1 !important; /* force background + overlay always visible */
  }

  .card-connectivity .card-body,
  .card-connectivity .card-body h5,
  .card-connectivity .card-body p {
    color: white !important; /* make text readable on dark overlay */
  }
}
</style>
