<template>
  <section class="container py-5">
    <h2 class="text-center mb-4">VoIP & Business Phone FAQs</h2>
    <p class="lead text-center mb-5">
      Have questions about VoIP business phone systems? Here are some of the most
      common things local business owners in Carrollton and Lewisville ask us.
    </p>

    <div class="accordion" id="voipFaq">
      <!-- Q1 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q1">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#a1"
            aria-expanded="true"
            aria-controls="a1"
          >
            What is VoIP and how is it different from traditional phone service?
          </button>
        </h2>
        <div id="a1" class="accordion-collapse collapse show" aria-labelledby="q1" data-bs-parent="#voipFaq">
          <div class="accordion-body">
            VoIP (Voice over Internet Protocol) uses your internet connection
            instead of old copper phone lines. It’s cheaper, more flexible, and
            lets your team use desk phones, mobile apps, or computers under one
            phone system.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q2">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#a2"
            aria-expanded="false"
            aria-controls="a2"
          >
            Can I keep my existing business phone numbers?
          </button>
        </h2>
        <div id="a2" class="accordion-collapse collapse" aria-labelledby="q2" data-bs-parent="#voipFaq">
          <div class="accordion-body">
            Yes — most numbers can be ported to VoIP. Your business keeps the
            same published numbers, so your customers won’t notice a change.
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q3">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#a3"
            aria-expanded="false"
            aria-controls="a3"
          >
            What features come with VoIP phone systems?
          </button>
        </h2>
        <div id="a3" class="accordion-collapse collapse" aria-labelledby="q3" data-bs-parent="#voipFaq">
          <div class="accordion-body">
            Features include call forwarding, voicemail-to-email, auto-attendant,
            call recording, mobile apps, conference calling, and more. You get
            enterprise-grade features without expensive hardware.
          </div>
        </div>
      </div>

      <!-- Q4 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q4">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#a4"
            aria-expanded="false"
            aria-controls="a4"
          >
            Is VoIP reliable for my business?
          </button>
        </h2>
        <div id="a4" class="accordion-collapse collapse" aria-labelledby="q4" data-bs-parent="#voipFaq">
          <div class="accordion-body">
            Yes — with a stable internet connection, VoIP is extremely reliable.
            Many systems also include automatic failover, so calls can be routed
            to cell phones if your office internet ever goes down.
          </div>
        </div>
      </div>

      <!-- Q5 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="q5">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#a5"
            aria-expanded="false"
            aria-controls="a5"
          >
            How much does VoIP cost compared to traditional lines?
          </button>
        </h2>
        <div id="a5" class="accordion-collapse collapse" aria-labelledby="q5" data-bs-parent="#voipFaq">
          <div class="accordion-body">
            VoIP service usually costs **30–60% less** than traditional phone
            lines, especially when you factor in unlimited calling, included
            features, and no need for separate hardware maintenance.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is VoIP and how is it different from traditional phone service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VoIP (Voice over Internet Protocol) uses your internet connection instead of old copper phone lines. It’s cheaper, more flexible, and lets your team use desk phones, mobile apps, or computers under one phone system."
        }
      },
      {
        "@type": "Question",
        "name": "Can I keep my existing business phone numbers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — most numbers can be ported to VoIP. Your business keeps the same published numbers, so your customers won’t notice a change."
        }
      },
      {
        "@type": "Question",
        "name": "What features come with VoIP phone systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Features include call forwarding, voicemail-to-email, auto-attendant, call recording, mobile apps, conference calling, and more. You get enterprise-grade features without expensive hardware."
        }
      },
      {
        "@type": "Question",
        "name": "Is VoIP reliable for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — with a stable internet connection, VoIP is extremely reliable. Many systems also include automatic failover, so calls can be routed to cell phones if your office internet ever goes down."
        }
      },
      {
        "@type": "Question",
        "name": "How much does VoIP cost compared to traditional lines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VoIP service usually costs 30–60% less than traditional phone lines, especially when you factor in unlimited calling, included features, and no need for separate hardware maintenance."
        }
      }
    ]
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.innerHTML = JSON.stringify(schema)
  document.head.appendChild(script)
})
</script>

<style scoped>
.accordion-button {
  font-weight: 600;
}
.accordion-body {
  color: #555;
  line-height: 1.6;
}
</style>
