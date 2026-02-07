<script>
  //variables are initialized as empty strings to represent an empty form.
  export let lang = "el";
  //form fields
  let name = "";
  let email = "";
  let message = "";
  const content = {
    el: {
      title: "Επικοινωνία",
      nameLabel: "Ονοματεπώνυμο",
      emailLabel: "Email",
      messageLabel: "Μήνυμα",
      submitBtn: "Υποβολή",
    },
    en: {
      title: "Contact Me",
      nameLabel: "Full Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitBtn: "Submit",
    },
  };
  const t = lang === "en" ? content.en : content.el;
</script>

<section id="contact" class="p-10 bg-gray-50">
  <div
    class="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
  >
    <h2 class="text-2xl font-bold mb-6 text-gray-800">
      {t.title}
    </h2>

    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700" for="name">
          {t.name}
        </label>
        <input
          id="name"
          type="text"
          bind:value={name}
          class="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="email"
          >{t.emailLabel}</label
        >
        <input
          id="email"
          type="email"
          bind:value={email}
          class="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="message">
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          bind:value={message}
          rows="4"
          class="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
        ></textarea>
      </div>

      <button
        type="button"
        class="w-full bg-gray-800 text-white py-2 rounded font-semibold hover:bg-gray-900 transition-colors"
      >
        {t.submitBtn}
      </button>
    </form>
  </div>
</section>
