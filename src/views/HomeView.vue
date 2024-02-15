<script setup>
import { ref, onMounted } from "vue";
import NavigationBar from "@/components/layout/NavigationBar.vue";
import IconCode from "@/components/icons/IconCode.vue";
import IconGlobe from "@/components/icons/IconGlobe.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconGmail from "@/components/icons/IconGmail.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
// onMounted(() => {
//   particlesJS("particles-js", {
//     particles: {
//       number: { value: 125, density: { enable: true, value_area: 1000 } },
//       color: { value: "#06b6d4" },
//       shape: {
//         type: "circle",
//         stroke: { width: 0, color: "#000000" },
//         polygon: { nb_sides: 5 },
//         image: { src: "img/github.svg", width: 100, height: 100 },
//       },
//       opacity: {
//         value: 0.5,
//         random: false,
//         anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//       },
//       size: {
//         value: 3,
//         random: true,
//         anim: { enable: true, speed: 40, size_min: 0.1, sync: false },
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.4,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 8,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: { enable: false, rotateX: 600, rotateY: 1200 },
//       },
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: { enable: true, mode: "repulse" },
//         onclick: { enable: true, mode: "push" },
//         resize: true,
//       },
//       modes: {
//         grab: { distance: 400, line_linked: { opacity: 1 } },
//         bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//         repulse: { distance: 200, duration: 0.4 },
//         push: { particles_nb: 4 },
//         remove: { particles_nb: 2 },
//       },
//     },
//     retina_detect: true,
//   });
// });

const typeValue = ref("");
const typeStatus = ref(false);
const typeArray = ["Web Developer", "Freelancer", "Student"];
const typingSpeed = 150;
const erasingSpeed = 100;
const newTextDelay = 2000;
let typeArrayIndex = 0;
let charIndex = 0;

const typeText = () => {
  if (charIndex < typeArray[typeArrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value += typeArray[typeArrayIndex].charAt(charIndex);
    charIndex += 1;

    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value = typeArray[typeArrayIndex].substring(0, charIndex - 1);
    charIndex -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    typeArrayIndex += 1;
    if (typeArrayIndex >= typeArray.length) typeArrayIndex = 0;

    setTimeout(typeText, typingSpeed + 1000);
  }
};
setTimeout(typeText, newTextDelay + 200);

const languages = ref([
  { id: 1, title: "HTML/CSS" },
  { id: 2, title: "Javascript" },
  { id: 3, title: "PHP" },
]);
const framework = ref([
  { id: 1, title: "Vue JS" },
  { id: 2, title: "Nuxt" },
  { id: 3, title: "Laravel" },
  { id: 4, title: "Tailwind CSS" },
  { id: 5, title: "Bootstrap" },
]);
const database = ref([
  { id: 1, title: "MySql" },
  { id: 2, title: "MongoDB" },
  { id: 3, title: "Postgree SQL" },
  { id: 4, title: "Redis" },
  { id: 5, title: "Supabase" },
]);
const git = ref([
  { id: 1, title: "Github" },
  { id: 2, title: "Gitlab" },
]);
function currentYear() {
  return new Date().getFullYear();
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling animation
  });
}
</script>
<template>
  <div class="flex flex-col sm:flex-row pb-20">
    <NavigationBar />
    <div class="">
      <div id="hero-section" class="">
        <div
          class="absolute top-64 sm:top-0 left-0 h-screen w-full -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-70 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
        <!-- <div
          id="particles-js"
          class="absolute top-0 left-0 z-0 h-screen w-full"
        ></div> -->
        <div class="w-sm flex items-center h-screen relative z-10">
          <div class="flex-col mx-5 sm:px-10 sm:w-full sm:ms-32 xl:ms-42">
            <p
              class="text-xl sm:text-3xl xl:text-4xl text-white font-bold tracking-[5px] uppercase"
            >
              Rangga Firmansyah
            </p>
            <div class="flex flex-col xl:flex-row xl:items-center xl:gap-5">
              <p class="text-6xl sm:text-8xl xl:text-7xl text-white font-bold">
                I'm a
              </p>
              <p class="font-bold text-cyan-400">
                <span
                  class="typed-text text-4xl xl:text-7xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >{{ typeValue }}</span
                >
                <span class="cursor" :class="{ typing: typeStatus }"></span>
              </p>
            </div>
            <p class="text-white font-semibold mt-4 text-lg sm:text-xl">
              Hi there!, good to see you here.
            </p>
          </div>
        </div>
        <div class="absolute bottom-0 w-full">
          <div class="flex flex-col justify-center">
            <div class="mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="text-white h-9 w-9"
              >
                <path
                  d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"
                ></path>
                <path d="M11 6h2v6h-2z"></path>
              </svg>
            </div>
            <p class="text-white mx-auto animate-bounce pt-3">Scroll Down</p>
          </div>
        </div>
      </div>
      <div id="skill-section" class="mx-5 sm:mx-0">
        <div class="w-sm pt-28 mb-20">
          <div class="mx-5 xl:mx-0 sm:px-10 sm:w-full md:ps-32 xl:ps-36">
            <div class="flex justify-start gap-5">
              <p class="text-4xl sm:text-3xl xl:text-4xl text-white font-bold">
                Skills
              </p>
              <div
                class="w-full border-primary border-b border-dashed mx-2"
              ></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-14">
              <div class="mt-5 sm:mt-10">
                <h3 class="text-lg text-white">Languages</h3>
                <ul class="flex flex-wrap gap-5 mt-5 text-gray-400">
                  <li
                    class="border border-primary rounded-full px-4 py-2"
                    v-for="item in languages"
                    :key="item.id"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
              <div class="sm:mt-10">
                <h3 class="text-lg text-white">Framework</h3>
                <ul class="flex flex-wrap gap-5 mt-5 text-gray-400">
                  <li
                    class="border border-primary rounded-full px-4 py-2"
                    v-for="item in framework"
                    :key="item.id"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
              <div class="sm:mt-10">
                <h3 class="text-lg text-white">Database Management System</h3>
                <ul class="flex flex-wrap gap-5 mt-5 text-gray-400">
                  <li
                    class="border border-primary rounded-full px-4 py-2"
                    v-for="item in database"
                    :key="item.id"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
              <div class="sm:mt-10">
                <h3 class="text-lg text-white">Git</h3>
                <ul class="flex flex-wrap gap-5 mt-5 text-gray-400">
                  <li
                    class="border border-primary rounded-full px-4 py-2"
                    v-for="item in git"
                    :key="item.id"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects-section" class="mx-5 sm:mx-0">
        <div class="w-sm pt-28 mb-20">
          <div class="mx-5 xl:mx-0 sm:px-10 sm:w-full md:ps-32 xl:ps-36">
            <div class="flex justify-start gap-5">
              <p class="text-4xl sm:text-3xl xl:text-4xl text-white font-bold">
                Projects
              </p>
              <div
                class="w-full border-primary border-b border-dashed mx-2"
              ></div>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-10"
            >
              <div
                class="sm:mt-0 p-6 rounded-lg shadow bg-gray-800 border-gray-700 mx-auto"
              >
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                    Aksipeduli.id
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-400 line-clamp-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem eveniet id soluta, veniam optio, dolor nemo rem
                  voluptates fuga cupiditate dolore facilis? Quae nemo ratione
                  corrupti natus possimus iusto quibusdam molestiae magnam,
                  error ullam tempore minus.
                </p>
                <div class="flex flex-wrap gap-4 text-white">
                  <p class="text-sm">Vue JS</p>
                  <p class="text-sm">Tailwind CSS</p>
                  <p class="text-sm">Node JS</p>
                  <p class="text-sm">Express JS</p>
                  <p class="text-sm">Pinia</p>
                </div>
                <div class="flex justify-end">
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:text-primary focus:ring-0"
                  >
                    <IconCode />
                  </a>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:text-primary focus:ring-0"
                  >
                    <IconGlobe />
                  </a>
                </div>
              </div>
              <div
                class="sm:mt-0 p-6 rounded-lg shadow bg-gray-800 border-gray-700"
              >
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                    Aksipeduli.id
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-400 line-clamp-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem eveniet id soluta, veniam optio, dolor nemo rem
                  voluptates fuga cupiditate dolore facilis? Quae nemo ratione
                  corrupti natus possimus iusto quibusdam molestiae magnam,
                  error ullam tempore minus.
                </p>
                <div class="flex flex-wrap gap-4 text-white">
                  <p class="text-sm">Vue JS</p>
                  <p class="text-sm">Tailwind CSS</p>
                  <p class="text-sm">Node JS</p>
                  <p class="text-sm">Express JS</p>
                  <p class="text-sm">Pinia</p>
                </div>
                <div class="flex justify-end">
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:text-primary focus:ring-0"
                  >
                    <IconCode />
                  </a>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:text-primary focus:ring-0"
                  >
                    <IconGlobe />
                  </a>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-10">
              <button
                class="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-3 text-white font-semibold px-4 py-2 rounded-lg"
              >
                View more<IconGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-section" class="mx-5 sm:mx-0">
        <div class="w-sm pt-28 mb-28">
          <div class="sm:px-10 sm:w-full md:ps-32 xl:ps-36">
            <div class="flex justify-start gap-5">
              <p class="text-4xl sm:text-3xl xl:text-4xl text-white font-bold">
                Contact
              </p>
              <div
                class="w-full border-primary border-b border-dashed mx-2"
              ></div>
            </div>
            <div class="flex justify-center mt-10">
              <p class="text-xl sm:text-3xl xl:text-4xl text-white font-bold">
                Let's make sure to keep in touch.
              </p>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-white">
              <a
                href="https://www.instagram.com/ranggaafr_/"
                class="w-full border bg-gray-800 hover:bg-gray-900 border-gray-700 hover:border-gray-800 flex items-center justify-center gap-3 text-white text-xs sm:text-sm font-semibold py-2 rounded-lg"
                ><span class="text-[#E4405F]"><IconInstagram size="6" /></span>
                @rangaafr_</a
              >
              <a
                href="mailto:ranggaf758@gmail.com"
                class="w-full border bg-gray-800 hover:bg-gray-900 border-gray-700 hover:border-gray-800 flex items-center justify-center gap-3 text-white text-xs sm:text-sm font-semibold py-2 rounded-lg"
                ><span class="text-[#EA4335]"><IconGmail size="6" /></span>
                ranggaf758@gmail</a
              >
              <a
                href="https://github.com/Ranggafr28"
                class="w-full border bg-gray-800 hover:bg-gray-900 border-gray-700 hover:border-gray-800 flex items-center justify-center gap-3 text-white text-xs sm:text-sm font-semibold py-2 rounded-lg"
                ><span class="text-white"><IconGithub size="6" /></span>
                Ranggafr28</a
              >
              <a
                href="https://www.linkedin.com/in/rangga-firmansyah-8bb941215/"
                class="w-full border bg-gray-800 hover:bg-gray-900 border-gray-700 hover:border-gray-800 flex items-center justify-center gap-3 text-white text-xs sm:text-sm font-semibold py-2 rounded-lg"
                ><span class="text-[#0A66C2]"><IconLinkedin size="6" /></span>
                Rangga Firmansyah</a
              >
            </div>
          </div>
        </div>
      </div>
      <footer id="footer-section" class="mx-5 sm:mx-0">
        <div class="w-sm">
          <div class="sm:px-10 sm:w-full md:ps-32 xl:ps-36">
            <div
              class="flex flex-col sm:flex-row sm:justify-between border-t border-gray-600"
            >
              <div class="flex-col items-start mt-5">
                <p class="text-primary text-center sm:text-start">
                  © {{ currentYear() }}
                  <span class="text-gray-500 hover:underline"
                    >Rangga Firmansyah</span
                  >
                </p>
                <p class="text-gray-500 text-center sm:text-start">
                  ranggaf758@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Back to top button -->
      <button
        class="fixed bottom-10 right-10 bg-gray-800 hover:bg-gray-900 text-white font-bold p-3 rounded-full shadow-xl focus:outline-none focus:ring-0 transition duration-300"
        @click="scrollToTop"
      >
        <IconChevron />
      </button>
    </div>
  </div>
</template>
<style scoped>
span.typed-text {
  color: #06b6d4;
  margin-bottom: 5rem;
}

span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  height: 2.4rem;
  background-color: #000;
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #06b6d4;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
