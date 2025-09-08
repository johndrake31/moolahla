<template>
  <section class="container py-5">
    <h2 class="text-center mb-4">POS & Payments – FAQs</h2>
    <p class="lead text-center mb-5">
      Straight answers for retailers and restaurants in Carrollton & Lewisville.
    </p>

    <div class="accordion" id="posFaq">
      <!-- Q1 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q1">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="true">
            What comes in a typical POS setup?
          </button>
        </h2>
        <div id="a1" class="accordion-collapse collapse show" data-bs-parent="#posFaq">
          <div class="accordion-body">
            Most packages include a touchscreen terminal, cash drawer, receipt printer, card reader, and POS software.
            Systems are available for restaurants, retail, and bars—with secure online reporting you can view from any device.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q2">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2">
            Do these systems integrate credit/debit and gift cards?
          </button>
        </h2>
        <div id="a2" class="accordion-collapse collapse" data-bs-parent="#posFaq">
          <div class="accordion-body">
            Yes. POS bundles commonly integrate credit/debit and gift card processing so you can take payments at the counter or table.
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q3">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a3">
            Can I buy, lease, or rent?
          </button>
        </h2>
        <div id="a3" class="accordion-collapse collapse" data-bs-parent="#posFaq">
          <div class="accordion-body">
            You can purchase, lease-to-own, or rent monthly—handy for new locations or seasonal operations.
          </div>
        </div>
      </div>

      <!-- Q4 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q4">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a4">
            What is dual pricing and is it legal?
          </button>
        </h2>
        <div id="a4" class="accordion-collapse collapse" data-bs-parent="#posFaq">
          <div class="accordion-body">
            Dual pricing shows a cash price and a card price, passing along processing costs transparently. It’s broadly legal when implemented as a true
            <em>cash discount</em> and disclosed clearly; rules vary by state. In Texas, surcharges are restricted, but cash-discount/dual-pricing programs
            with proper disclosure are permitted—display signage and show the final card price. Consult your payments provider for compliant setup.
          </div>
        </div>
      </div>

      <!-- Q5 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q5">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a5">
            Can I see sales and reports online?
          </button>
        </h2>
        <div id="a5" class="accordion-collapse collapse" data-bs-parent="#posFaq">
          <div class="accordion-body">
            Yes. Touch-screen systems integrate to a secure online reporting site so you can monitor sales, labor, and more from anywhere.
          </div>
        </div>
      </div>

      <!-- Q6 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q6">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a6">
            Is this suitable for restaurants and retail?
          </button>
        </h2>
        <div id="a6" class="accordion-collapse collapse" data-bs-parent="#posFaq">
          <div class="accordion-body">
            Yes—these systems are designed for quick service, table service, bars, cafés, and retail environments, with features like kitchen video, table maps, delivery, and inventory.
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-5">
      <RouterLink to="/contact" class="btn btn-dark btn-lg">
        Request a POS Demo
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // SEO: FAQPage schema for rich results
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What comes in a typical POS setup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most packages include a touchscreen terminal, cash drawer, receipt printer, card reader, and POS software. Systems are available for restaurants, retail, and bars—with secure online reporting you can view from any device."
        }
      },
      {
        "@type": "Question",
        "name": "Do these systems integrate credit/debit and gift cards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. POS bundles commonly integrate credit/debit and gift card processing so you can take payments at the counter or table."
        }
      },
      {
        "@type": "Question",
        "name": "Can I buy, lease, or rent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can purchase, lease-to-own, or rent monthly—handy for new locations or seasonal operations."
        }
      },
      {
        "@type": "Question",
        "name": "What is dual pricing and is it legal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dual pricing shows a cash price and a card price, passing along processing costs transparently. It is broadly legal as a true cash-discount program with clear disclosure; rules vary by state. In Texas, surcharges are restricted but cash-discount/dual-pricing programs with proper signage and display of the final card price are permitted. Consult your payments provider for compliant setup."
        }
      },
      {
        "@type": "Question",
        "name": "Can I see sales and reports online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Touch-screen systems integrate to a secure online reporting site so you can monitor sales, labor, and more from anywhere."
        }
      },
      {
        "@type": "Question",
        "name": "Is this suitable for restaurants and retail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes—these systems are designed for restaurants, bars, cafés, and retail with features like kitchen video, table maps, delivery, and inventory."
        }
      }
    ]
  }

  const el = document.createElement('script')
  el.type = 'application/ld+json'
  el.innerHTML = JSON.stringify(schema)
  document.head.appendChild(el)
})
</script>

<style scoped>
.accordion-button { font-weight: 600; }
.accordion-body { color: #555; line-height: 1.6; }
</style>
