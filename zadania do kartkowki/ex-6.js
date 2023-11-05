const settings = {
    brightness: 50,
    contrast: 70,
    saturation: 40,
};

/*
    Ćwiczenie 6
    Za pomocą spread operator utwórz nowy obiekt o nazwie newSettings, który będzie miał te same ustawienia, ale brightness ma być ustawione na 75.
    PS: Zadanie uruchom z poziomu terminala za pomocą: node ./ex-6.js
  */
const newSetting = {...settings, brightness: 75 };
console.log(newSetting);