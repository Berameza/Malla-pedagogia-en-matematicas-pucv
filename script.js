document.addEventListener('DOMContentLoaded', function() {
    // Datos de los cursos
    const coursesData = [
        // 1° Semestre
        {
            id: 'calculo1',
            name: 'Cálculo 1',
            semester: 1,
            completed: false,
            unlocks: ['calculo2'],
            requirements: []
        },
        {
            id: 'algebra',
            name: 'Álgebra',
            semester: 1,
            completed: false,
            unlocks: ['algebra-lineal1', 'teoria-numeros'],
            requirements: []
        },
        {
            id: 'geometria-analitica',
            name: 'Geometria analitica y vectorial',
            semester: 1,
            completed: false,
            unlocks: ['algebra-lineal1'],
            requirements: []
        },
        {
            id: 'antropologia',
            name: 'Antropologia cristiana',
            semester: 1,
            completed: false,
            unlocks: [],
            requirements: []
        },
        
        // 2° Semestre (corregido según lo indicado)
        {
            id: 'calculo2',
            name: 'Calculo 2',
            semester: 2,
            completed: false,
            unlocks: ['calculo3', 'estadistica1', 'metodos-numericos'],
            requirements: ['calculo1']
        },
        {
            id: 'algebra-lineal1',
            name: 'Algebra Lineal 1',
            semester: 2,
            completed: false,
            unlocks: [],
            requirements: ['algebra', 'geometria-analitica']
        },
        {
            id: 'programacion',
            name: 'Programacion',
            semester: 2,
            completed: false,
            unlocks: ['metodos-numericos'],
            requirements: []
        },
        {
            id: 'etica',
            name: 'Etica cristiana',
            semester: 2,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'formacion1',
            name: 'Formacion fundamental 1',
            semester: 2,
            completed: false,
            unlocks: [],
            requirements: []
        },
        
        // 3° Semestre
        {
            id: 'calculo3',
            name: 'Calculo 3',
            semester: 3,
            completed: false,
            unlocks: ['analisis-real'],
            requirements: ['calculo2']
        },
        {
            id: 'teoria-numeros',
            name: 'Teoria de numeros',
            semester: 3,
            completed: false,
            unlocks: ['estructuras-algebraicas1'],
            requirements: ['algebra']
        },
        {
            id: 'metodos-numericos',
            name: 'Metodos numericos y ecuaciones diferenciales',
            semester: 3,
            completed: false,
            unlocks: ['tecnologia-ensenanza'],
            requirements: ['calculo2', 'programacion']
        },
        {
            id: 'estrategias-discursivas1',
            name: 'Estrategias discursivas para acceder al conocimiento disciplinar',
            semester: 3,
            completed: false,
            unlocks: ['estrategias-discursivas2'],
            requirements: []
        },
        {
            id: 'formacion2',
            name: 'Formacion fundamental 2',
            semester: 3,
            completed: false,
            unlocks: [],
            requirements: []
        },
        
        // Resto de los semestres (4° a 10°)
        // ... (mantener el resto de los semestres como en el código original)
    ];

    // Elementos del DOM
    const semestersContainer = document.getElementById('semesters-container');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Cargar datos guardados
    let savedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Inicializar tema
    function initTheme() {
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️ Tema Claro';
        } else {
            body.removeAttribute('data-theme');
            themeToggle.textContent = '🌙 Tema Oscuro';
        }
    }

    // Alternar tema
    function toggleTheme() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙 Tema Oscuro';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️ Tema Claro';
        }
    }

    // Marcar cursos completados
    function markCompletedCourses() {
        savedCourses.forEach(courseId => {
            const course = coursesData.find(c => c.id === courseId);
            if (course) {
                course.completed = true;
            }
        });
    }

    // Renderizar semestres
    function renderSemesters() {
        semestersContainer.innerHTML = '';
        
        const semesters = {};
        coursesData.forEach(course => {
            if (!semesters[course.semester]) {
                semesters[course.semester] = [];
            }
            semesters[course.semester].push(course);
        });
        
        for (let i = 1; i <= 10; i++) {
            if (semesters[i]) {
                const semesterElement = document.createElement('div');
                semesterElement.className = 'semester';
                
                const semesterHeader = document.createElement('div');
                semesterHeader.className = 'semester-header';
                
                const semesterTitle = document.createElement('h2');
                semesterTitle.className = 'semester-title';
                semesterTitle.textContent = `${i}° Semestre`;
                
                semesterHeader.appendChild(semesterTitle);
                semesterElement.appendChild(semesterHeader);
                
                const coursesContainer = document.createElement('div');
                coursesContainer.className = 'semester-courses';
                
                semesters[i].forEach(course => {
                    const courseElement = createCourseElement(course);
                    coursesContainer.appendChild(courseElement);
                });
                
                semesterElement.appendChild(coursesContainer);
                semestersContainer.appendChild(semesterElement);
            }
        }
    }

    // Crear elemento de curso
    function createCourseElement(course) {
        const courseElement = document.createElement('div');
        courseElement.className = 'course';
        courseElement.id = course.id;
        
        const isLocked = course.requirements.length > 0 && 
                         !course.requirements.every(reqId => {
                             const reqCourse = coursesData.find(c => c.id === reqId);
                             return reqCourse && reqCourse.completed;
                         });
        
        if (isLocked && !course.completed) {
            courseElement.classList.add('locked');
        } else if (!course.completed && !isLocked) {
            courseElement.classList.add('unlocked');
        } else if (course.completed) {
            courseElement.classList.add('completed');
        }
        
        const courseName = document.createElement('h3');
        courseName.className = 'course-name';
        courseName.textContent = course.name;
        courseElement.appendChild(courseName);
        
        if (course.requirements.length > 0) {
            const courseReqs = document.createElement('p');
            courseReqs.className = 'course-requirements';
            
            const reqNames = course.requirements.map(reqId => {
                const reqCourse = coursesData.find(c => c.id === reqId);
                return reqCourse ? reqCourse.name : '';
            }).filter(name => name !== '');
            
            courseReqs.textContent = `Requisitos: ${reqNames.join(', ')}`;
            courseElement.appendChild(courseReqs);
        }
        
        const courseButton = document.createElement('button');
        courseButton.className = 'course-button';
        courseButton.textContent = course.completed ? 'Aprobado' : 'Aprobar ramo';
        
        if (course.completed) {
            courseButton.classList.add('completed');
        } else if (isLocked) {
            courseButton.classList.add('locked');
            courseButton.disabled = true;
        }
        
        courseButton.addEventListener('click', () => {
            toggleCourseCompletion(course);
        });
        
        courseElement.appendChild(courseButton);
        
        if (course.unlocks.length > 0) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = 'i';
            
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltip-text';
            
            const unlockNames = course.unlocks.map(unlockId => {
                const unlockCourse = coursesData.find(c => c.id === unlockId);
                return unlockCourse ? unlockCourse.name : '';
            }).filter(name => name !== '');
            
            tooltipText.textContent = `Desbloquea: ${unlockNames.join(', ')}`;
            tooltip.appendChild(tooltipText);
            courseElement.appendChild(tooltip);
        }
        
        return courseElement;
    }

    // Alternar estado de completado de un curso
    function toggleCourseCompletion(course) {
        course.completed = !course.completed;
        
        const completedCourses = coursesData
            .filter(c => c.completed)
            .map(c => c.id);
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
        
        renderSemesters();
        updateProgress();
    }

    // Actualizar barra de progreso
    function updateProgress() {
        const completedCount = coursesData.filter(c => c.completed).length;
        const totalCount = coursesData.length;
        const percentage = Math.round((completedCount / totalCount) * 100);
        
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% completado (${completedCount}/${totalCount} ramos)`;
    }

    // Inicializar la aplicación
    function initApp() {
        initTheme();
        markCompletedCourses();
        renderSemesters();
        updateProgress();
        
        // Event listeners
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Iniciar
    initApp();
});
