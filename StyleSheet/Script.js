

ChangeText() {
    var contentText;
    var selectedITem = '';
    var parm = document.getElementById("mySelection");
    selectedITem = parm.options[parm.selectedIndex].text;
    if (selectedITem == 'John Doe"')
        contentText = '<a href="#">john.doe@example.com</a>'
    else if (selectedITem == 'Jane Smith')
        contentText = '<a href="#">jane.smith@example.com</a>'
    else if (selectedITem == 'Alice Johnson')
        contentText = '<a href="#">alice.johnson@example.com</a>'
    else if (selectedITem == 'Bob Brown')
        contentText = '<a href="#">bob.brown@example.com</a>'
    else if (selectedITem == 'Emily Davis')
        contentText = '<a href="#">emily.davis@example.com</a>'


    str = contentText;
    $("#test").html(str);


}

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



document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('#messages-list li');

    messages.forEach(message => {
        message.addEventListener('click', () => {
            const sender = message.querySelector('.message-sender').textContent;
            const subject = message.querySelector('.message-subject').textContent;
            alert(`Selected message:\nSender: ${sender}\nSubject: ${subject}`);

        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('contrast-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
});
