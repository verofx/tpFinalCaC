document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector('#register-form');
    const errorMessage = document.querySelector('#error-message');

    form.addEventListener('submit',(event)=>{
        event.preventDefault();

        const username = form.username.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        let hasError = false;
        //Reseta los mensajes de error
        
        document.getElementById('usernameError').textContent = '';
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        // Validación del campo nombre de usuario
        if (name.trim() === '') {
            document.getElementById('usernameError').textContent = 'El nombre de usuario es obligatorio.';
            hasError = true;
        }
        
        // Validación del campo nombre
        if (name.trim() === '') {
            document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
            hasError = true;
        }

        // Validación del campo correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Por favor, introduce un correo electrónico válido.';
            hasError = true;
        }

        // Validación del campo password
        if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
            hasError = true;
        }

        // Si no hay errores, envía el formulario (aquí solo muestro un alert para demostrar)
        if (!hasError) {
            alert('Formulario enviado exitosamente!');
            // Resetea el formulario
            document.getElementById('register-form').reset();
         }

    })
})