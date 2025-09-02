<<script setup>
import logo from '../assets/Moolah-la-02.svg'
</script>
<template>
  <nav class="navbar navbar-expand-md sticky-top bg-light border-bottom">
    <div class="container">
      <RouterLink
        class="navbar-brand fw-bold d-flex align-items-center"
        to="/home"
      >
        <img
          :src="logo"
          alt="Moolah-la logo"
          height="32"
          class="me-2"
        />
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/home">
              <i class="bi bi-house-door me-1"></i> Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">
              <i class="bi bi-info-circle me-1"></i> About
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">
              <i class="bi bi-envelope-paper me-1"></i> Contact
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
