const personArray = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

//zadanie 1

function addNickName(array) {
  for (person of array) {
    const firstName = person.firstName;
    const lastName = person.lastName;
    if (
      typeof firstName === "string" &&
      firstName.length >= 3 &&
      typeof lastName === "string" &&
      lastName.length >= 3
    ) {
      const lettersFirstName = firstName
        .slice(-3, firstName.length)
        .split("")
        .reverse()
        .join("");
      const lettersLastName = lastName.slice(0, 3).split("").reverse().join("");
      let nickName = lettersFirstName + lettersLastName;
      nickName = nickName.toLowerCase().split("");
      nickName[0] = nickName[0].toUpperCase();
      nickName = nickName.join("");
      person.nickName = nickName;
    }
  }
  return array;
}
const firstTaskArray = addNickName(personArray);

//zadanie 2

function addAge(array) {
  const onlyNickName = array.filter((element) => {
    return typeof element.nickName !== "undefined";
  });

  onlyNickName.forEach((item, index) => {
    const lettersSum = item.firstName.length + item.lastName.length;

    if (lettersSum % 2 === 0) {
      item.age = lettersSum;
    } else {
      const keysArray = Object.keys(item);
      const keysSumLetters = keysArray.reduce((acc, key) => {
        return (acc += key.length);
      }, 0);

      if (index === 0) {
        item.age = keysSumLetters;
      } else {
        item.age = Math.ceil(keysSumLetters / index);
      }
    }
  });
  return onlyNickName;
}
const secondTaskArray = addAge(firstTaskArray);

//zadanie 3

function mostCommonLetter(array) {
  array.forEach((person, index) => {
    let letters = [];
    for (const property in person) {
      if (typeof person[property] === "string") {
        letters.push(person[property].split(""));
      }
    }

    letters = letters.flat();

    for (index in letters) {
      letters[index] = letters[index].toLowerCase();
    }

    let countLetterArray = [];
    letters.forEach((letter, index) => {
      const findLetter = letter.toLowerCase();

      if (
        !countLetterArray.some((innerArray) => innerArray.includes(findLetter))
      ) {
        const sumLetters = letters.reduce((accu, value) => {
          if (value === findLetter) {
            accu++;
            return accu;
          } else {
            return accu;
          }
        }, 0);

        countLetterArray.push([findLetter, sumLetters]);
      }
    });

    let quantity = 0;
    let char = "";
    countLetterArray.forEach(([letter, count], index) => {
      if (count > quantity) {
        quantity = count;
        char = letter;
      } else if (quantity === count) {
        char.charCodeAt(0) > letter.charCodeAt(0)
          ? (char = letter)
          : (letter = letter);
      }
    });

    person.mostCommonLetter = { letter: char, count: quantity };
  });
  return array;
}

console.log(mostCommonLetter(secondTaskArray));
