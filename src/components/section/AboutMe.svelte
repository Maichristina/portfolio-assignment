<script>
  import { inview } from "svelte-inview";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  export let lang = "el";

  let isInView = false;
  let profileData = null; //for data
  let error = null; //error handling

  const content = {
    el: {
      title: "Λίγα λόγια για μένα",
      who: "Ποια είμαι",
      fiveYears: "Σε 5 χρόνια",
      interview: "Εντυπώσεις Interview",
      loading: "Φόρτωση δεδομένων...",
      errorPrefix: "Σφάλμα",
    },
    en: {
      title: "About Me",
      who: "Who I am",
      fiveYears: "In 5 years",
      interview: "Interview Impressions",
      loading: "Loading data...",
      errorPrefix: "Error",
    },
  };
  const t = content[lang];

  onMount(async () => {
    try {
      const res = await fetch("/api/about.json"); //asychronous data fetching
      if (!res.ok) throw new Error("Failed to fetch"); // if response is successful
      const data = await res.json();
      profileData = data[lang]; //update state.correct language
    } catch (e) {
      //catc any errors during the process
      error = e.message;
    }
  });
</script>

<div
  use:inview={{ unobserveOnEnter: true, rootMargin: "-50px" }}
  on:inview_enter={() => (isInView = true)}
>
  {#if isInView}
    <section
      id="about"
      transition:fly={{ y: 50, duration: 1000 }}
      class="p-4 sm:p-10 bg-gray-100"
    >
      <h2 class="text-3xl font-bold text-gray-900 mb-6">
        {content[lang].title}
      </h2>

      {#if profileData}
        <div class="space-y-4">
          <p>
            <strong class="font-bold text-gray-900">{t.who}:</strong>
            {profileData.bio}
          </p>
          <p>
            <strong class="font-bold text-gray-900">{t.fiveYears}:</strong>
            {profileData.goals}
          </p>
          <p>
            <strong class="font-bold text-gray-900">{t.interview}:</strong>
            {profileData.interviewImpression}
          </p>
        </div>
      {:else if error}
        <p class="text-red-500">{t.errorPrefix}: {t.error}</p>
      {:else}
        <p class="animate-pulse text-gray-500">{t.loading}</p>
      {/if}
    </section>
  {/if}
</div>
