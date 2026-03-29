let count = 0;
let loading = false;
const img = document.getElementById('cat');
const btn = document.querySelector('button');

async function loadCat() {
    if (loading) return;
    loading = true;
    btn.disabled = true;

    img.style.opacity = '0.3';
    img.src = 'https://cataas.com/cat?t=' + Date.now();

    img.onload = () => {
        img.style.opacity = '1';
        loading = false;
        btn.disabled = false;
    };

    count++;
    document.getElementById('counter').textContent = 'Cats viewed: ' + count;

    try {
        const meow = document.getElementById('meow');
        meow.load();
        await meow.play();
    } catch (e) {}

    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    document.getElementById('fact').textContent = '"' + data.fact + '"';
}

loadCat();
