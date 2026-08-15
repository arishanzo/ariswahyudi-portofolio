<script setup lang="ts">
const items = [
  {
    period: 'Desember 2022 - Current',
    role: 'Founder Developer Kilat',
    company: 'Devklit Tech',
    desc: "Initiated projects based on client briefs and designed applications using the Waterfall methodology and CI/CD practices. Conducted application testing and validation before delivering projects to clients. Developed e-commerce applications integrated with the Midtrans payment gateway. Developed various other web applications based on business and organizational requirements. Used React.js and Vue.js for frontend development and Laravel, CodeIgniter, and Express.js for backend development."
  
  },
  {
    period: 'April 2026 - September 2026',
    role: 'Fullstack Developer',
    company: 'PT. Eintio Academic & Technology',
    desc: 'Developed and implemented the company landing page using Next.js, with a focus on performance, responsiveness, and user experience. Worked closely with team to deliver several web solutions that meet business requirements, resulting in a 25% increase in project efficiency. Developed technical proposals, workflows, and project documentation that served as essential references, supporting application development and streamlining processes across several initiatives'
  
  },
  
  {
    period: 'Februari 2024 - Mei 2024',
    role: 'Internship Web Developer',
    company: 'CV. Caraka Abadi',
    desc: 'Developed an Inventory Management application to digitize the company’s inventory management processes. Built and implemented features for stock management, incoming and outgoing goods, and profit-and-loss calculations. Designed web-based workflows to streamline inventory recording and improve the efficiency of daily warehouse operations. Developed and integrated user interfaces for inventory-related processes using PHP, JavaScript, AJAX, CSS, and CodeIgniter.' 
  },
   {
    period: 'Desember 2022 - April 2022',
    role: 'STAFF IT',
    company: 'Silmi Fashion',
    desc: 'Developed a Payroll Management application to automate salary calculations based on attendance, overtime, leave, and other payroll components. Improved payroll calculation accuracy to approximately 99% compared with the previous spreadsheet-based process. Provided IT support by troubleshooting computer hardware, network issues, and other operational IT requirements. Coordinated with the HR and management teams to ensure the system met business requirements'
    },
]
</script>


<template>
  <section id="experience" class="py-8 ">
    <div class="max-w-6xl px-6 md:px-0 mx-auto ">
      <!-- Heading -->
      <div class="text-start mb-12">
        <span class="uppercase tracking-wide text-orange-500 font-semibold">Experience</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2">
          My <span class="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Career Journey</span>
        </h2>
        <p class="text-gray-600 mt-4 mx-auto  text-justify">
          From my early beginnings to my current role, each step has been a valuable milestone in my continuous growth as a developer. 
          This timeline highlights the key positions, projects, and achievements that shaped my professional path.
        </p>
      </div>

      <!-- Timeline style -->
      <div class="relative pl-4  space-y-12">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="relative"
        >
          <!-- Card -->
          <div class=" rounded-xl sp-6 hover:border-orange-500 transition">
            <span class="inline-block text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full mb-4">
              {{ item.period }}
            </span>
            <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-1">{{ item.role }}</h3>
            <span class="text-pink-600 font-medium">{{ item.company }}</span>
            <p class="text-gray-400 mt-3 pl-4 text-justify">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
