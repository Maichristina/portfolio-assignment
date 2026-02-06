<script>
  import { onMount } from "svelte";
  export let lang = "el";

  let profileData = null; //for data
  let error = null; //error handling
  //lifecycle hook,run when the component is first rendered in the browser
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

<section id="about" class="p-10 bg-gray-100">
  <h2 class="text-3xl font-bold">
    {lang === "en" ? "About Me" : "Λίγα λόγια για μένα"}
  </h2>

  {#if profileData}
    <div class="mt-4">
      <p>
        <strong>{lang === "en" ? "Who I am" : "Ποια είμαι"}:</strong>
        {profileData.bio}
      </p>
      <p>
        <strong>{lang === "en" ? "In 5 years" : "Σε 5 χρόνια"}</strong>
        {profileData.goals}
      </p>
      <p>
        <strong
          >{lang === "en"
            ? "Interview Impressions"
            : "Εντυπώσεις Interview"}:</strong
        >
        {profileData.interviewImpression}
      </p>
    </div>
  {:else if error}
    <p class="text-red-500">Σφάλμα: {error}</p>
  {:else}
    <p class="animate-pulse">Φόρτωση δεδομένων...</p>
  {/if}
</section>
