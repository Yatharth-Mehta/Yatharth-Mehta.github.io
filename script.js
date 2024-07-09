document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const message = document.createElement('div');
    message.className = 'form-message';
    message.textContent = 'Form submitted successfully!';
    
    form.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => form.removeChild(message), 1000);
    }, 2000);
});
