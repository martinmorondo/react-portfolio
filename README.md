# Martín Morondo | Frontend Developer Portfolio

Portfolio personal interactivo y moderno, diseñado y desarrollado desde cero para presentar mi experiencia profesional, formación académica, habilidades técnicas y proyectos dentro del ecosistema del desarrollo web.

El proyecto fue construido con un enfoque especial en **experiencia de usuario (UX), rendimiento, diseño responsive y código limpio y mantenible**.

---

## Características principales

* **🎨 Diseño moderno y premium:** Interfaz basada en una estética *dark mode*, efectos de *glassmorphism*, acentos de color y tipografía adaptable mediante `clamp()`.
* **💼 Proyectos interactivos:** Tarjetas de proyectos con modales para visualizar información detallada, tecnologías utilizadas y enlaces al proyecto en producción y repositorio de GitHub.
* **📚 Experiencia y formación:** Secciones dinámicas mediante líneas de tiempo y grillas interactivas para presentar experiencia laboral, educación y conocimientos.
* **📩 Formulario de contacto:** Formulario completamente funcional integrado con **EmailJS**, incluyendo validación de campos y notificaciones *toast*.
* **📱 Diseño responsive:** Adaptación completa a dispositivos móviles, tablets y ordenadores de escritorio.
* **⚡ Buen rendimiento:** Construido con Vite para aprovechar un entorno de desarrollo rápido y una compilación optimizada para producción.
* **🧩 Componentización:** Arquitectura basada en componentes reutilizables para facilitar el mantenimiento y la escalabilidad del proyecto.

---

## 🛠️ Tecnologías utilizadas

### Frontend

* React
* JavaScript (ES6+)
* HTML5
* CSS3

### Estilos y UI

* Styled-Components
* React Icons
* Font Awesome Icons
* Simple Icons

### Herramientas y ecosistema

* Vite
* EmailJS
* Git
* GitHub
* npm

### Conocimientos complementarios

Además de las tecnologías utilizadas directamente en este proyecto, cuento con conocimientos en:

* Node.js
* Express.js
* Python
* TypeScript
* Next.js
* PHP
* MySQL

---

## 📦 Instalación

Si querés ejecutar el proyecto en tu entorno local, seguí estos pasos.

### 1. Clonar el repositorio

```bash
git clone https://github.com/martinmorondo/portfolio.git
```

### 2. Ingresar al directorio

```bash
cd portfolio
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Creá un archivo `.env` en la raíz del proyecto y agregá las credenciales correspondientes de EmailJS:

```env
VITE_APP_SERVICE_ID=tu_service_id
VITE_APP_TEMPLATE_ID=tu_template_id
VITE_APP_USER_ID=tu_public_key
```

> **Importante:** No publiques credenciales privadas ni archivos `.env` en el repositorio.

### 5. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Una vez iniciado, Vite mostrará en la terminal la URL local desde la que podrás acceder al proyecto.

---

## 🏗️ Build para producción

Para generar una versión optimizada para producción:

```bash
npm run build
```

Para comprobar localmente la versión de producción:

```bash
npm run preview
```

---

## 📂 Estructura general

La estructura del proyecto está organizada para mantener una separación clara entre componentes, estilos, recursos y lógica de la aplicación.

```text
portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── sections/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> La estructura puede variar según la versión actual del proyecto.

---

## 📬 Contacto

Si querés conocer más sobre mi trabajo, proyectos o experiencia profesional, podés contactarme a través de los siguientes medios:

**📧 Email:** [martinmorondo@gmail.com](mailto:martinmorondo@gmail.com)

**📍 Ubicación:** Tandil, Buenos Aires, Argentina

**💼 LinkedIn:**
https://www.linkedin.com/in/martin-morondo/

**💻 GitHub:**
https://github.com/martinmorondo

---

## 👨‍💻 Sobre mí

Soy **Frontend Developer** enfocado en la creación de interfaces web modernas, funcionales y orientadas a una buena experiencia de usuario.

Me interesa combinar **desarrollo, diseño y creatividad** para construir productos digitales que no solo funcionen correctamente, sino que también comuniquen una identidad clara y profesional.

Actualmente continúo ampliando mis conocimientos en desarrollo de software, arquitectura, nuevas tecnologías y buenas prácticas para seguir evolucionando como desarrollador.

---

⭐ Si este proyecto te resulta interesante, ¡no dudes en darle una estrella al repositorio!
