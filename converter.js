document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("convert");
    const convertedAmount = document.getElementById("convertedAmount");
  
    btn.addEventListener("click", function () {
      // Retrieve the values at the time of conversion
      const from_crn = document.getElementById("fromCurrency").value;
      const to_crn = document.getElementById("toCurrency").value;
      const amount = document.getElementById("amount").value;
  
      // Construct the URL with the values
      const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from_crn}&want=${to_crn}&amount=${amount}`;
  
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "30405061f1mshc2fdfa0ef0f6ed4p1281e3jsn7339cb0742c1",
          "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
        },
      };
  
      fetch(url, options)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
          let res = result.new_amount;
          convertedAmount.innerHTML = `<p>${res}</p>`;
        })
        .catch((error) => console.log("error", error));
    });
  });
  