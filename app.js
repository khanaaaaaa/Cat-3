let count = 0;

async function loadCat() {
    document.getElementById('cat').src = 'https://cataas.com/cat?t=' + Date.now();
    document.getElementById('meow').onplay();
    count++;
    document.getElementById('counter').textContent = 'Cats viewed: ' + count;

    const res = await fetch('https://catfact.ninja/dact');
    const data = await res.json();
    document.getElementById('fact').textContent = '"' + data.fact + '"';
}

loadCat();