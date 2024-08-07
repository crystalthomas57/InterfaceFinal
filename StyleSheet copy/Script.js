// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('contactSearch');
    const contactList = document.getElementById('contacts-list');

    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const contacts = contactList.getElementsByTagName('li');

        Array.from(contacts).forEach(contact => {
            const name = contact.querySelector('.contact-name').textContent.toLowerCase();
            const email = contact.querySelector('.contact-email').textContent.toLowerCase();

            if (name.includes(searchText) || email.includes(searchText)) {
                contact.style.display = '';
            } else {
                contact.style.display = 'none';
            }
        });
    });
});

// script.js messaging

document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('#messages-list li');

    messages.forEach(message => {
        message.addEventListener('click', () => {
            const sender = message.querySelector('.message-sender').textContent;
            const subject = message.querySelector('.message-subject').textContent;
            alert(`Selected message:\nSender: ${sender}\nSubject: ${subject}`);
            // Here you could load the full message content or perform other actions
        });
    });
});
