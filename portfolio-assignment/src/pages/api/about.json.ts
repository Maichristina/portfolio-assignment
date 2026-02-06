
import type { APIRoute } from 'astro'; //type safety
export const GET: APIRoute = async () => {
  const data={
      el: {
        bio: "Είμαι φοιτήτρια του τμήματος Μηχανικών Υπολογιστών και Πληροφορικής.",
        goals: " θέλω να είμαι senior developer, έχοντας την ευθύνη της τεχνικής καθοδήγησης της ομάδας. Στόχος μου είναι να εισάγω νέες τεχνολογίες αιχμής που θα βελτιώνουν την αποδοτικότητα και την ποιότητα των project μας.",
        interviewImpression: "Αυτό που μου έκανε τη μεγαλύτερη εντύπωση κατά τη διάρκεια της συνέντευξή μας ήταν η ενέργεια της ομάδας σας, οι φιλοδοξίες και η διάθεση για εξέλιξη."
      },
      en: {
        bio: "I am a student of the Computer Science and Engineering.",
        goals: "I want to be a senior developer, holding the responsibility for the team's technical guidance. My goal is to introduce cutting-edge technologies that will enhance the efficiency and quality of our projects.",
        interviewImpression: "The thing that impressed me the most during our interview was the team's vibrant energy, the clear ambition for growth and genuine drive for continuous evolution."
      }
    }
    
   return new Response(JSON.stringify(data), { //object-->string
    status: 200, //ok
    headers: { "Content-Type": "application/json" } //json type
  });
}