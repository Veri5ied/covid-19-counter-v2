const active = document.getElementById('active');
const cases = document.getElementById('cases');
const critical = document.getElementById('critical');
const deaths = document.getElementById('death');
const recovered = document.getElementById('recovered');
const tests = document.getElementById('tests');


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

fetch("https://corona.lmao.ninja/v2/all?yesterday")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    active.textContent = data.active.toLocaleString();
    cases.textContent = data.cases.toLocaleString();
    critical.textContent = data.critical.toLocaleString();
    deaths.textContent = data.deaths.toLocaleString();
    recovered.textContent = data.recovered.toLocaleString();
    tests.textContent = data.tests.toLocaleString();
})