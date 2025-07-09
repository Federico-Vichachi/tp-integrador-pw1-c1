// Script para resaltar el tab de categoría seleccionado

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-categoria');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('tab-categoria-activa'));
            tab.classList.add('tab-categoria-activa');
        });
    });
});
