//Домашнее задание к лекции 3 «Массивы»

//Задача 1. Сравнить массивы
function compareArrays(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    } else {
        return arr1.every((item, index) => {
            return item === arr2[index]
        });
    }
}

//Задача 2. Фильтрация и преобразование массива
function getUsersNamesInAgeRange(users, gender) {
    if (users.length !== 0) {
        const genderUsers = users.filter(user => user.gender === gender);

        if (genderUsers.length !== 0) {
            let ageSum = genderUsers.reduce((sum, user) => sum + user.age, 0);

            return ageSum / genderUsers.length;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}