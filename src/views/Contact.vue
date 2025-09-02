<template>

    
    <section class="container py-5">
        <h2 class="text-center mb-4">Contact Us</h2>
        <p class="lead text-center mb-5">
            Have questions or want to get started? Fill out the form below:
        </p>

        <!-- Success message -->
        <div v-if="submitted" class="alert alert-success mx-auto" style="max-width:640px" role="alert">
            Thanks! Your message was sent. We will get back to you shortly.
        </div>

        <form v-else :action="formAction" method="POST" target="hidden_iframe" @submit="onSubmit" class="mx-auto"
            style="max-width:640px" novalidate>
            <!-- Name -->
            <div class="mb-3">
                <label for="cname" class="form-label">Your Name<span class="required">*</span></label>
                <input id="cname" class="form-control" type="text" name="entry.1156664561" required />
            </div>

            <!-- Email -->
            <div class="mb-3">
                <label for="cemail" class="form-label">Email<span class="required">*</span></label>
                <input id="cemail" class="form-control" type="email" name="entry.519862004" required />
            </div>

            <div class="mb-4">
                <label for="cmsg" class="form-label">Phone</label>
                <input id="cmsg" class="form-control" type="tel" name="entry.1472049073" rows="5"></input>
            </div>

            <!-- Optional hidden UTM fields (stored in the Google Form) -->
            <input type="hidden" name="entry.utm_source" :value="utm.source" />
            <input type="hidden" name="entry.utm_campaign" :value="utm.campaign" />
            <input type="hidden" name="entry.utm_medium" :value="utm.medium" />

            <!-- (Optional) Spam honeypot -->
            <input type="text" name="company" autocomplete="off" tabindex="-1" style="position:absolute;left:-9999px" />

            <div class="d-grid d-sm-flex gap-2">
                <button class="btn btn-dark" type="submit" :disabled="isSubmitting">
                    <i class="bi bi-send me-1"></i>
                    {{ isSubmitting ? 'Sending…' : 'Send' }}
                </button>
                <button class="btn btn-outline-secondary" type="reset" :disabled="isSubmitting">
                    Reset
                </button>
            </div>

            <!-- Hidden iframe prevents redirect to Google confirmation page -->
            <iframe name="hidden_iframe" style="display:none" @load="onIframeLoad"></iframe>
        </form>
    </section>
    <div class="row justify-content-center mb-5">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-center mb-3">Moolah-la Solutions LLC</h5>
            <ul class="list-unstyled text-muted mb-0">
              <li class="mb-2">
                <i class="bi bi-geo-alt-fill me-2 text-dark"></i>
                2340 E. Trinity Mills, Suite 329<br />
                Carrollton, TX 75006<br />
                United States
              </li>
              <li class="mb-2">
                <i class="bi bi-telephone-fill me-2 text-dark"></i>
                <a href="tel:+14696446738" class="text-muted">469-644-6738</a>
              </li>
              <li>
                <i class="bi bi-envelope-fill me-2 text-dark"></i>
                <a href="mailto:admin@moolah-la.com" class="text-muted">admin@moolah-la.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const FORM_ID = '1FAIpQLScbBGHpm0N15P9geztYOUmWqI-1JZK8SFkj-vaTMheK71-eTw' 

const formAction = computed(() => `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`)

// 2) Simple success-flow state
const submitted = ref(false)
const isSubmitting = ref(false)
const pendingSubmit = ref(false) // used to ignore the iframe's initial load

function onSubmit() {
    isSubmitting.value = true
    pendingSubmit.value = true
}

function onIframeLoad() {
    // The hidden iframe loads once initially and then again after submit.
    // Only flip to 'submitted' if we were actually submitting.
    if (pendingSubmit.value) {
        submitted.value = true
        isSubmitting.value = false
        pendingSubmit.value = false
    }
}


const params = new URLSearchParams(window.location.search)
const utm = {
    source: params.get('utm_source') || 'direct',
    campaign: params.get('utm_campaign') || '',
    medium: params.get('utm_medium') || ''
}
</script>
<style scoped>
.required {
    color: red;
    font-weight: bolder;
}
</style>