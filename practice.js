const seats = [
    {
      id: "#123",
      name: "A1",
      position: { x: 0, y: 0 },
      rate: 100,
      status: "vacant",
    },
    {
      id: "#124",
      name: "A2",
      position: { x: 0, y: 0 },
      rate: 100,
      status: "occupied",
    },
    {
      id: "#125",
      name: "A3",
      position: { x: 0, y: 0 },
      rate: 100,
      status: "vacant",
    },
  ]

  //updateOne , updateMany , addOne , addMany 
  function updateSeatStatus(id,changes){
      //Find Index using unique key
      const index = seats.findIndex((seat)=>seat.id===id);
      seats[index] = {...seats[index],...changes};
  }

  updateSeatStatus("#125",{status:"selected",rate:200});

  console.log(seats)