const modelCards = document.querySelectorAll('.model-select-card');

if (modelCards.length > 0) {
    modelCards.forEach(card => {
        card.addEventListener('click', () => {
            modelCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const modelKey = card.getAttribute('data-model');
            const data = modelDatabase[modelKey];

            if (data) {
                document.getElementById('showcase-tag').textContent = data.tag;
                document.getElementById('showcase-name').textContent = data.name;
                document.getElementById('showcase-desc').textContent = data.desc;
                document.getElementById('spec-hp').textContent = data.hp;
                document.getElementById('spec-zero').textContent = data.zero;
                document.getElementById('spec-engine').textContent = data.engine;

                const imgElement = document.getElementById('showcase-img');
                imgElement.src = data.img;
                imgElement.style.animation = 'none';
                imgElement.offsetHeight; 
                imgElement.style.animation = 'imageSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards';
            }
        });
    });
}