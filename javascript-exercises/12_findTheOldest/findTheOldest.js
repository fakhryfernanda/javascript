const findTheOldest = function(people) {
    let oldestAge = 0;
    let age;
    let indexOldest = 0;
    for (let i = 0; i < people.length; i++) {
        // Check if the person still alive
        yearOfDeath = 2022;
        if ('yearOfDeath' in people[i]) {
            yearOfDeath = people[i].yearOfDeath;
        }

        age = yearOfDeath - people[i].yearOfBirth;
        if (oldestAge < age) {
            oldestAge = age;
            indexOldest = i;
        };
    };
    return people[indexOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
