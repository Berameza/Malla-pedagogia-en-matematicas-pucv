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
        
        // 4° Semestre
        {
            id: 'analisis-real',
            name: 'Analisis real',
            semester: 4,
            completed: false,
            unlocks: ['didactica-calculo'],
            requirements: ['calculo3']
        },
        {
            id: 'estructuras-algebraicas1',
            name: 'Estructuras algebraicas 1',
            semester: 4,
            completed: false,
            unlocks: ['didactica-sistemas'],
            requirements: ['teoria-numeros']
        },
        {
            id: 'practica-inicial',
            name: 'Practica docente inicial',
            semester: 4,
            completed: false,
            unlocks: ['practica-comunitaria', 'fundamentos-educacion', 'practica-intermedia'],
            requirements: []
        },
        {
            id: 'taller-adolescencia',
            name: 'Taller de aprendizaje y desarrollo adolescente',
            semester: 4,
            completed: false,
            unlocks: ['practica-comunitaria', 'practica-intermedia'],
            requirements: []
        },
        {
            id: 'educar-diversidad',
            name: 'Educar en y para la diversidad',
            semester: 4,
            completed: false,
            unlocks: ['practica-comunitaria', 'practica-intermedia'],
            requirements: []
        },
        
        // 5° Semestre
        {
            id: 'didactica-calculo',
            name: 'Didactica del calculo',
            semester: 5,
            completed: false,
            unlocks: ['didactica-geometria'],
            requirements: ['analisis-real']
        },
        {
            id: 'didactica-sistemas',
            name: 'Didáctica de los sistemas numéricos',
            semester: 5,
            completed: false,
            unlocks: ['practica-comunitaria', 'practica-intermedia'],
            requirements: ['estructuras-algebraicas1']
        },
        {
            id: 'geometria-euclidiana',
            name: 'Geometria euclidiana plana',
            semester: 5,
            completed: false,
            unlocks: ['geometria-3d'],
            requirements: []
        },
        {
            id: 'estadistica1',
            name: 'Estadistica 1',
            semester: 5,
            completed: false,
            unlocks: ['didactica-estadistica', 'estadistica2'],
            requirements: ['calculo2']
        },
        {
            id: 'formacion3',
            name: 'Formacion fundamental 3',
            semester: 5,
            completed: false,
            unlocks: [],
            requirements: []
        },
        
        // 6° Semestre
        {
            id: 'geometria-3d',
            name: 'Geometria 3D/Geometria no euclidiana',
            semester: 6,
            completed: false,
            unlocks: ['didactica-geometria'],
            requirements: ['geometria-euclidiana']
        },
        {
            id: 'didactica-estadistica',
            name: 'Didactica de la estadistica',
            semester: 6,
            completed: false,
            unlocks: ['didactica-probabilidad'],
            requirements: ['estadistica1']
        },
        {
            id: 'practica-comunitaria',
            name: 'Practica comunitaria',
            semester: 6,
            completed: false,
            unlocks: ['practica-final'],
            requirements: ['practica-inicial', 'taller-adolescencia', 'educar-diversidad', 'didactica-sistemas']
        },
        {
            id: 'psicologia-social',
            name: 'Psicología social aplicada en la escuela y su comunidad',
            semester: 6,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'fundamentos-educacion',
            name: 'Fundamentos filosóficos y sociales de la educación',
            semester: 6,
            completed: false,
            unlocks: [],
            requirements: ['practica-inicial']
        },
        {
            id: 'ingles1',
            name: 'Ingles 1',
            semester: 6,
            completed: false,
            unlocks: ['ingles2'],
            requirements: []
        },
        
        // 7° Semestre
        {
            id: 'optativo1',
            name: 'Optativo 1',
            semester: 7,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'didactica-geometria',
            name: 'Didactica de la geometria',
            semester: 7,
            completed: false,
            unlocks: ['tecnologia-ensenanza'],
            requirements: ['didactica-calculo', 'geometria-3d']
        },
        {
            id: 'estadistica2',
            name: 'Estadistica 2',
            semester: 7,
            completed: false,
            unlocks: ['didactica-probabilidad'],
            requirements: ['estadistica1']
        },
        {
            id: 'teoria-planificacion',
            name: 'Teoria y planificacion curricular',
            semester: 7,
            completed: false,
            unlocks: ['evaluacion-aprendizaje'],
            requirements: []
        },
        {
            id: 'politicas-educativas',
            name: 'Politicas publicas eduacativas y gestion escolar',
            semester: 7,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'estrategias-discursivas2',
            name: 'Estrategias discursivas para comunicar y enseñar el conocimiento disciplinar',
            semester: 7,
            completed: false,
            unlocks: ['taller-investigacion'],
            requirements: ['estrategias-discursivas1']
        },
        {
            id: 'ingles2',
            name: 'Ingles 2',
            semester: 7,
            completed: false,
            unlocks: ['ingles3'],
            requirements: ['ingles1']
        },
        
        // 8° Semestre
        {
            id: 'tecnologia-ensenanza',
            name: 'Uso de la tecnologia para la enseñanza y aprendizaje de la matematica',
            semester: 8,
            completed: false,
            unlocks: ['trabajo-titulo'],
            requirements: ['metodos-numericos', 'didactica-geometria']
        },
        {
            id: 'didactica-probabilidad',
            name: 'Didactica de la probabilidad e inferencia',
            semester: 8,
            completed: false,
            unlocks: ['taller-investigacion'],
            requirements: ['didactica-estadistica', 'estadistica2']
        },
        {
            id: 'practica-intermedia',
            name: 'Practica docente intermedia',
            semester: 8,
            completed: false,
            unlocks: ['historia-epistemologia', 'taller-investigacion', 'trabajo-titulo', 'identidad-profesional', 'practica-final'],
            requirements: ['practica-inicial', 'taller-adolescencia', 'educar-diversidad', 'didactica-sistemas']
        },
        {
            id: 'evaluacion-aprendizaje',
            name: 'Evaluacion en y para el aprendizaje',
            semester: 8,
            completed: false,
            unlocks: [],
            requirements: ['teoria-planificacion']
        },
        {
            id: 'ingles3',
            name: 'Ingles 3',
            semester: 8,
            completed: false,
            unlocks: ['ingles4'],
            requirements: ['ingles2']
        },
        
        // 9° Semestre
        {
            id: 'optativo2',
            name: 'Optativo 2',
            semester: 9,
            completed: false,
            unlocks: [],
            requirements: []
        },
        {
            id: 'historia-epistemologia',
            name: 'Historia y epistemologia de la matematica',
            semester: 9,
            completed: false,
            unlocks: ['practica-final'],
            requirements: ['practica-intermedia']
        },
        {
            id: 'taller-investigacion',
            name: 'Taller de investigacion en didactica de la matematica',
            semester: 9,
            completed: false,
            unlocks: ['practica-final'],
            requirements: ['estrategias-discursivas2', 'didactica-probabilidad', 'practica-intermedia']
        },
        {
            id: 'trabajo-titulo',
            name: 'Trabajo de titulo',
            semester: 9,
            completed: false,
            unlocks: ['practica-final'],
            requirements: ['tecnologia-ensenanza', 'practica-intermedia']
        },
        {
            id: 'identidad-profesional',
            name: 'Identidad profesional docente',
            semester: 9,
            completed: false,
            unlocks: ['practica-final'],
            requirements: ['practica-intermedia']
        },
        {
            id: 'ingles4',
            name: 'Ingles 4',
            semester: 9,
            completed: false,
            unlocks: [],
            requirements: ['ingles3']
        },
        
        // 10° Semestre
        {
            id: 'practica-final',
            name: 'Practica docente final',
            semester: 10,
            completed: false,
            unlocks: [],
            requirements: ['practica-comunitaria', 'historia-epistemologia', 'taller-investigacion', 'trabajo-titulo', 'identidad-profesional', 'practica-intermedia']
        }
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
