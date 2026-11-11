const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = new FormData(form);
    const name = [fields.get('prenom'), fields.get('nom')].join(' ');
    const company = fields.get('entreprise');
    const body = [
        fields.get('message'),
        '',
        name,
        company,
        fields.get('email'),
    ].join('\r\n');
    const subject = encodeURIComponent(`Portfolio — ${name}`);

    window.location.href = `mailto:lauryne.blottas@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
});
