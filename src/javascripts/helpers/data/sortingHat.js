const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sortingHatHouses = houses[Math.floor(Math.random() * houses.length)];
  return sortingHatHouses;
};

export default sortingHat;
