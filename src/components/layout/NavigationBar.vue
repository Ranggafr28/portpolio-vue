<script setup>
import IconHamburger from "@/components/icons/IconHamburger.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconGmail from "@/components/icons/IconGmail.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import { ref } from "vue";
const hamburger = ref(false);
function hamburgerToggle() {
  hamburger.value = !hamburger.value;
  console.log(hamburger.value);
}
</script>
<template>
  <nav class="backdrop-blur-sm z-[9999] fixed top-0 md:left-0 w-full md:w-auto">
    <div class="mx-auto max-w-7xl md:max-w-80 px-2 sm:px-6 lg:px-8 pt-10 sm:pt-0">
      <div
        class="relative md:fixed flex h-16 md:h-screen items-center md:items-start md:justify-center justify-between"
      >
        <div
          class="flex md:flex-col md:space-y-5  items-center justify-between sm:items-stretch sm:justify-start z-40"
        >
          <div
            class="flex flex-shrink-0 ms-5 items-center md:justify-center md:my-28 lg:my-24 xl:my-10"
          >
            <img
              class="h-12 sm:h-18 w-auto"
              src="/img/RF-white.png"
              alt="Your Company"
            />
          </div>
          <div class="hidden md:h-auto md:py-10 sm:block">
            <div
              class="flex md:flex-col md:items-center space-x-4 md:space-x-0 md:space-y-20 md:mx-auto"
            >
              <a
                href="#hero-section"
                class="text-gray-300 hover:text-primary sm:text-lg rounded-md px-3 py-2 text-sm font-medium md:-rotate-90"
                >Home</a
              >
              <a
                href="#skill-section"
                class="text-gray-300 hover:text-primary sm:text-lg rounded-md px-3 py-2 text-sm font-medium md:-rotate-90"
                >Skills</a
              >
              <a
                href="#projects-section"
                class="text-gray-300 hover:text-primary sm:text-lg rounded-md px-3 py-2 text-sm font-medium md:-rotate-90"
                >Projects</a
              >
              <a
                href="#contact-section"
                class="text-gray-300 hover:text-primary sm:text-lg rounded-md px-3 py-2 text-sm font-medium md:-rotate-90"
                >Contact</a
              >
            </div>
          </div>
        </div>
        <!-- button triger hamburger -->
        <div
          class="absolute inset-y-0 right-0 me-5 flex items-center sm:hidden z-40"
        >
          <!-- Mobile menu button-->
          <button
            @click="hamburgerToggle()"
            type="button"
            class="block absolute right-5"
            :class="{ 'hamburger-active': hamburger }"
            data-drawer-target="drawer-top-example"
            data-drawer-show="drawer-top-example"
            data-drawer-placement="top"
            aria-controls="drawer-top-example"
            data-drawer-backdrop="false"
          >
            <IconHamburger />
          </button>
        </div>
      </div>
      <div class="absolute inset-0 bg-slate-950 opacity-85 blur"></div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <!-- drawer component -->
    <div
      id="drawer-top-example"
      class="fixed top-0 left-0 right-0 z-30 w-full p-4 transition-transform -translate-y-full min-h-screen h-auto"
      :class="{ hidden: !hamburger }"
    >
      <div
        class="flex flex-col items-center justify-center h-screen relative z-10"
      >
        <div class="flex flex-col gap-10">
          <a
            href="#hero-section"
            class="my-2 w-full text-center text-white font-medium text-lg"
            >Home</a
          >
          <a
            href="#skill-section"
            class="my-2 w-full text-center text-white font-medium text-lg"
            >Skills</a
          >
          <a
            href="#projects-section"
            class="my-2 w-full text-center text-white font-medium text-lg"
            >Projects</a
          >
          <a
            href="#contact-section"
            class="my-2 w-full text-center text-white font-medium text-lg"
            >Contact</a
          >
        </div>
        <div class="flex flex-row gap-8 mt-10">
          <a
            href="https://github.com/Ranggafr28"
            class="my-2 w-full text-center text-white font-medium text-lg"
            ><IconGithub
          /></a>
          <a
            href="https://www.instagram.com/ranggaafr_/"
            class="my-2 w-full text-center text-white font-medium text-lg"
            ><IconInstagram
          /></a>
          <a
            href="mailto:ranggaf758@gmail.com"
            class="my-2 w-full text-center text-white font-medium text-lg"
            ><IconGmail
          /></a>
          <a
            href="https://www.linkedin.com/in/rangga-firmansyah-8bb941215/"
            class="my-2 w-full text-center text-white font-medium text-lg"
            ><IconLinkedin
          /></a>
        </div>
      </div>
      <div class="absolute inset-0 bg-slate-950 opacity-85 blur"></div>
    </div>
  </nav>
</template>
