let backendResponse = {
    msg: "success",
    result: {
      total: 2,
      data: [
        {
          name: "kiwi",
          scientificName: "k-wrong-xyz",
          prices: [
            {
              country: "us",
              price: 1,
            },
            {
              country: "nepal",
              price: 1, // change this to 100
            },
          ],
        },
        {
          name: "orange",
          scientificName: "k-xyz",
          prices: [
            {
              country: "us",
              price: 2,
            },
            {
              country: "nepal",
              price: 200,
            },
            {
              country: "cad",
              price: 200,
            },
          ],
        },
      ],
    },
  }

  console.log(backendResponse.result.data[0].prices[1].price)
  backendResponse.result.data[0].prices[1].price = 100;
  console.log(backendResponse.result.data[0].prices[1].price)

  console.log(backendResponse.result.data[0].prices)
  
  backendResponse.result.data[0].prices = {country:"canada",price:120}

  console.log(backendResponse.result.data[0].prices)

  console.log(backendResponse);
  