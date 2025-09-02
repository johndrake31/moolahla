<template>
  <section class="container py-5">
    <h2 class="text-center mb-4">POS & Payments Solutions</h2>

    <p class="lead text-center mb-5">
      Our flagship model the <strong>NCC Reflection POS® HK578</strong> delivers powerful performance,
      unmatched reliability, and hospitality-ready features for businesses of any size.
      From retail to restaurants, coffee shops to delivery, it’s designed to help your
      team work smarter and serve customers faster.
    </p>
    <div class="text-center mb-5">
      <img
        src="@/assets/heropos.avif"
        alt="NCC Reflection POS HK578 terminal"
        class="img-fluid rounded shadow-sm"
        style="max-width:500px"
      />
    </div>
    <!-- Hardware Highlights -->
    <h3 class="h5 mb-3">Hardware Highlights</h3>
    <div class="row g-4 mb-5">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title"><i class="bi bi-cpu me-2"></i>Performance</h5>
            <p class="card-text text-muted">
              Intel Elkhart Lake Quad Core J6412, fanless design with solid-state storage
              for speed, durability, and reliability.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title"><i class="bi bi-tablet me-2"></i>15” True-Flat Touchscreen</h5>
            <p class="card-text text-muted">
              Vivid LED backlight with projected capacitive touch (PCT) for responsive,
              modern interaction in high-volume environments.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title"><i class="bi bi-shield-check me-2"></i>Built Tough</h5>
            <p class="card-text text-muted">
              Die-cast aluminum housing, dual articulating stand, and optional customer-facing displays.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Hospitality Features -->
    <h3 class="h5 mb-3">Hospitality & Retail Features</h3>
    <ul class="list-group list-group-flush mb-5">
      <li class="list-group-item">✔ Quick service, table service, bars, cafés, bakeries, and delivery ready</li>
      <li class="list-group-item">✔ Integrated credit, debit, and gift card processing</li>
      <li class="list-group-item">✔ Dual drive-thru order & confirmation support</li>
      <li class="list-group-item">✔ Kitchen video display & order confirmation</li>
      <li class="list-group-item">✔ Graphical table maps for easy order management</li>
      <li class="list-group-item">✔ Customer file with up to 9,999 records for loyalty & delivery</li>
    </ul>

    <!-- Management & Reporting -->
    <h3 class="h5 mb-3">Management & Reporting</h3>
    <ul class="list-group list-group-flush mb-5">
      <li class="list-group-item">✔ Inventory control with recipes & cost analysis</li>
      <li class="list-group-item">✔ Built-in employee time clock & labor cost reporting</li>
      <li class="list-group-item">✔ No single point of failure – terminal redundancy ensures uptime</li>
      <li class="list-group-item">✔ Extensive reporting & system programming (no back-office PC required)</li>
    </ul>

    <!-- Connectivity -->
    <h3 class="h5 mb-3">Connectivity & Expandability</h3>
    <ul class="list-group list-group-flush mb-5">
      <li class="list-group-item">✔ Gigabit LAN for high-speed networking</li>
      <li class="list-group-item">✔ Multiple USB, COM, and powered peripheral ports</li>
      <li class="list-group-item">✔ Optional customer-facing LCD / VFD displays</li>
      <li class="list-group-item">✔ Supports scanners, cash drawers, card readers, and audio</li>
    </ul>

    <!-- CTA -->
    <div class="text-center">
      <RouterLink to="/contact" class="btn btn-dark btn-lg">
        <i class="bi bi-cart-check me-2"></i> Request a POS Demo
      </RouterLink>
      <p class="text-muted small mt-3">
        Looking for something different? <strong>Ask us about our other models</strong> to find the perfect fit for your business.
      </p>
    </div>
  </section>
</template>

<script setup>
// No logic needed yet – this is static marketing content
</script>
