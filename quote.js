window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

// TODO: Modify to use Fetch API
 async function fetchQuotes(topic, count) {

   // fetching data
   let url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   let response = await fetch(url);
   if  (response.ok){
      let quotes = await response.json();


      if (quotes.error){
         document.querySelector("#quotes").innerHTML = quotes.error;
      }

      else{
         let html = "<ol>";
         for (let c = 1; c <= count; c++) {
            let data = quotes[c - 1]
            console.log(data.quote)
            let quote = data.quote;
            let source = data.source;
            html += `<li>${data.quote} - ${data.source}</li>`;
         }
         html += "</ol>";

         document.querySelector("#quotes").innerHTML = html;
         }
   }
}

