/*
Decomposition make responsibilities of each function explicit.
It helps us to isolate processes and make testing easier
 */
const getData = () => ([

  {
    name: 'Kevin Durant',
    type: 'Snake',
  },
  {
    name: 'Jimmy Butler',
    type: 'Snake',
  },
  {
    name: 'Paul Pierce',
    type: 'Truth',
  },
  {
    name: 'Kevin Garnett',
    type: 'Big Ticket',
  },

]);


const undecomposed = () => {
  const data = getData();
  // change any player with the name kevin to Broseph Baller
  data.forEach((player) => {
    if (player.name.includes('Kevin')) {
      player.name = 'Broseph Baller';
    }
  });
  // print out the all the names with type of snake
  data.forEach((player) => {
    if (player.type === 'Snake') {
      console.log(player.name);
    }
  });
};

// decomposed
const ChangeName = (player, oldName, newName) => {
  if (player.name.includes(oldName)) {
    player.name = newName;
  }
};

const ListoutTypeofPlayer = (player, type) => {
  if (player.type === type) {
    console.log(player.name);
  }
};


const decomposed = (data) => {
  data.forEach(player => ChangeName(player, 'Kevin', 'Broseph Baller'));
  data.forEach(player => ListoutTypeofPlayer(player, 'Snake'));
};

// undecomposed();
decomposed(getData());
