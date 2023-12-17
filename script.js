console.log('connecté !');

const form = document.getElementById('form');

const pays = document.getElementById('pays');
const start = document.getElementById('start');
const end = document.getElementById('end');
const liste = document.querySelector('.liste');

const voyages = [
    {
        pays : "La Réunion",
        prix : 1790,
        voyageurs : 4
    },
    {
        pays : "Martinique",
        prix : 2290,
        voyageurs : 4
    },
    {
        pays : "Tahiti",
        prix : 1490,
        voyageurs : 3
    },
    {
        pays : "Guyane",
        prix : 1790,
        voyageurs : 4
    },
    {
        pays : "Philippines",
        prix : 1390,
        voyageurs : 4
    },
]
