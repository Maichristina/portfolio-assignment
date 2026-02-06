<script>
  //renders an interactive style of projects
  import { slide, fly } from "svelte/transition";
  export let lang = "el"; //astro-svelte for lang

  const projects = [
    {
      id: 1,
      title: { el: "Project 1", en: "Project 1" },
      desc: {
        el: "Ευρετικές Προσεγγίσεις για την Ανίχνευση Καταδιωκτών σε Αστικά Περιβάλλοντα",
        en: "Heuristic Approaches to Stalker Detection in Urban Environments",
      },
      tags: ["Python"],
    },
    {
      id: 2,
      title: { el: "Project 2", en: "Project 2" },
      desc: {
        el: "Διαδραστική Διαδικτυακή Εφαρμογή για Εκπαιδευτικούς με Πληροφορίες Σχετικά με Μαθήματα, Βαθμολογίες και Μαθητές",
        en: "Interactive Web Application for Teachers Containing Details about Courses,Grades, Students",
      },
      tags: ["Java", "SQL", "HTML"],
    },
    {
      id: 3,
      title: { el: "Project 3", en: "Project 3" },
      desc: {
        el: "Διαδραστική Εφαρμογή Οδηγού για το Μουσείο Παύλου Βρέλλη",
        en: "Interactive Guide App for the Pavlos Vrellis Museum",
      },
      tags: ["Unity"],
    },
  ];

  let selectedId = null; //which project is open

  //If the clicked project is already open, it closes it
  function toggle(id) {
    selectedId = selectedId === id ? null : id;
  }
</script>

//renders
<section id="projects" class="mt-10 p-10 bg-gray-100">
  <h2 class="text-3xl font-bold text-gray-900">
    {lang === "en" ? "My Projects" : "Τα Projects μου"}
  </h2>

  <div class="mt-4 space-y-4">
    {#each projects as project}
      <button
        type="button"
        class="w-full text-left p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-all hover:shadow-md {selectedId ===
        project.id
          ? 'bg-blue-50 border-blue-400'
          : 'bg-white'}"
        on:click={() => toggle(project.id)}
      >
        <div class="flex justify-between items-center">
          <span class="font-bold text-xl text-gray-4000"
            >{project.title[lang]}</span
          >
          <span class="text-gray-500"
            >{selectedId === project.id ? "−" : "+"}</span
          >
        </div>

        {#if selectedId === project.id}
          <div
            transition:slide={{ duration: 300 }}
            class="mt-4 pt-4 border-t border-gray-100"
          >
            <p class="text-gray-600 leading-relaxed mb-4">
              {project.desc[lang]}
            </p>
            <div class="flex gap-2">
              {#each project.tags as tag}
                <span
                  class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        {/if}
      </button>
    {/each}
  </div>
</section>
