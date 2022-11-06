function creatGame(player1, hour, player2) {
  return `   
    <li> 
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
`;
}

let delay = -0.4
function creatCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>
    `;
}

document.querySelector("#cards").innerHTML =

creatCard("20/11","domingo", creatGame("qatar", "13:00", "equador"))+
creatCard(
    "24/11",
    "quinta",
    creatGame("Switzerland", "07:00", "Cameroon") +
      creatGame("Uruguay", "10:00", "North-Korea") +
      creatGame("Portugal", "13:00", "Gana") +
      creatGame("Brazil", "16:00", "Serbia")
  ) +
  creatCard("28/11", "segunda", creatGame("Brazil", "13:00", "Switzerland")) +
  creatCard("02/11", "sexta", creatGame("Brazil", "16:00", "Cameroon"));
