var attempt = 10;

        function validate() {
            var usuar = document.getElementById("usuar").value;
            var password = document.getElementById("password").value;

            if (usuar === "Coro" && password === "2468") {
                Swal.fire({
                    icon: 'success',
                    title: 'USUARIO CORRECTO',
                    text: 'BIENVENIDO'
                }).then((result) => {
                    if (result.isConfirmed) {
                        showSaveConfirmation();
                    }
                });
                return true;
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salió mal',
                    text: 'Intenta de nuevo'
                });
            }
        }

        function showSaveConfirmation() {
            Swal.fire({
                title: '¿Guardar usuario y contraseña?',
                text: '¿Quieres guardar tu usuario y contraseña para futuros accesos?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'No guardar'
            }).then((result) => {
                if (result.isConfirmed) {
                    saveCredentials();
                } else {
                    // Redirigir a la siguiente página
                    window.location = "../P_secun/Scantos.html";
                }
            });
        }

        function saveCredentials() {
            // Guardar los datos ingresados
            var username = document.getElementById("usuar").value;
            var password = document.getElementById("password").value;

            localStorage.setItem("savedUsername", username);
            localStorage.setItem("savedPassword", password);

            // Redirigir a la siguiente página
            window.location = "../P_secun/Scantos.html";
        }

        document.addEventListener("DOMContentLoaded", function () {
            // Recuperar los datos almacenados si existen
            var savedUsername = localStorage.getItem("savedUsername");
            var savedPassword = localStorage.getItem("savedPassword");

            if (savedUsername) {
                document.getElementById("usuar").value = savedUsername;
            }

            if (savedPassword) {
                document.getElementById("password").value = savedPassword;
            }
        });



