// Define an array of players with their stats
const players = [
  { name: 'Player 1', points: 20, rebounds: 10, assists: 5 },
  { name: 'Player 2', points: 18, rebounds: 8, assists: 4 },
  { name: 'Player 3', points: 22, rebounds: 6, assists: 6 },
  { name: 'Player 4', points: 16, rebounds: 9, assists: 7 },
  { name: 'Player 5', points: 14, rebounds: 11, assists: 3 }
];

// Function to select the team with the best stats
function selectTeam(players) {
  let selectedTeam = [];
  
  // Sort players by their total points
  const sortedPlayers = players.sort((a, b) => {
    const totalPointsA = a.points + a.rebounds + a.assists;
    const totalPointsB = b.points + b.rebounds + b.assists;
    return totalPointsB - totalPointsA;
  });
  
  // Select the top 3 players
  selectedTeam = sortedPlayers.slice(0, 3);
  
  return selectedTeam;
}

// Call the selectTeam function
const selectedPlayers = selectTeam(players);

// Display the selected players
console.log('Selected Players:');
selectedPlayers.forEach(player => {
  console.log(`Name: ${player.name}, Points: ${player.points}, Rebounds: ${player.rebounds}, Assists: ${player.assists}`);
});
