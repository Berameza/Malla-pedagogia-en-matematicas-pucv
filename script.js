const ramos = [
  { nombre: "Cálculo 1", deps: [], id: "calculo1" },
  { nombre: "Álgebra", deps: [], id: "algebra" },
  { nombre: "Geometría analítica y vectorial", deps: [], id: "geometriaAnalitica" },
  { nombre: "Antropología cristiana", deps: [], id: "antropologia" },
  { nombre: "Cálculo 2", deps: ["calculo1"], id: "calculo2" },
  { nombre: "Programación", deps: [], id: "programacion" },
  { nombre: "Ética cristiana", deps: [], id: "etica" },
  { nombre: "Formación fundamental 1", deps: [], id: "ff1" },
  { nombre: "Cálculo 3", deps: ["calculo2"], id: "calculo3" },
  { nombre: "Teoría de números", deps: ["algebra"], id: "teoriaNumeros" },
  { nombre: "Métodos numéricos y E.D.", deps: ["calculo2", "programacion"], id: "metodosED" },
  { nombre: "Estrategias discursivas 1", deps: [], id: "estrategias1" },
  { nombre: "Formación fundamental 2", deps: [], id: "ff2" },
  { nombre: "Análisis real", deps: ["calculo3"], id: "analisis" },
  { nombre: "Estructuras algebraicas 1", deps: ["teoriaNumeros"], id: "estructuras1" },
  { nombre: "Práctica docente inicial", deps: [], id: "practicaInicial" },
  { nombre: "Taller adolescente", deps: [], id: "tallerAdolescente" },
  { nombre: "Diversidad", deps: [], id: "diversidad" },
  { nombre: "Didáctica del cálculo", deps: ["analisis"], id: "didacticaCalculo" },
  { nombre: "Didáctica sistemas numéricos", deps: ["estructuras1"], id: "didacticaSistemas" },
  { nombre: "Geometría euclidiana", deps: [], id: "geometriaEuclidiana" },
  { nombre: "Estadística 1", deps: ["calculo2"], id: "estadistica1" },
  { nombre: "Formación fundamental 3", deps: [], id: "ff3" },
  { nombre: "Geometría 3D", deps: ["geometriaEuclidiana"], id: "geometria3D" },
  { nombre: "Didáctica estadística", deps: ["estadistica1"], id: "didacticaEstadistica" },
  { nombre: "Práctica comunitaria", deps: ["practicaInicial", "tallerAdolescente", "diversidad", "didacticaSistemas"], id: "practicaComunitaria" },
  { nombre: "Psicología social", deps: [], id: "psicologia" },
  { nombre: "Filosofía y sociedad", deps: ["practicaInicial"], id: "filosofia" },
  { nombre: "Inglés 1", deps: [], id: "ingles1" },
  { nombre: "Optativo 1", deps: [], id: "optativo1" },
  { nombre: "Didáctica geometría", deps: ["didacticaCalculo", "geometria3D"], id: "didacticaGeometria" },
  { nombre: "Estadística 2", deps: ["estadistica1"], id: "estadistica2" },
  { nombre: "Currículo", deps: [], id: "curriculo" },
  { nombre: "Políticas públicas", deps: [], id: "politicas" },
  { nombre: "Estrategias discursivas 2", deps: ["estrategias1"], id: "estrategias2" },
  { nombre: "Inglés 2", deps: ["ingles1"], id: "ingles2" },
  { nombre: "Uso de tecnología", deps: ["didacticaGeometria", "metodosED"], id: "tecnologia" },
  { nombre: "Didáctica probabilidad", deps: ["didacticaEstadistica", "estadistica2"], id: "probabilidad" },
  { nombre: "Práctica docente intermedia", deps: ["practicaComunitaria", "filosofia"], id: "intermedia" },
  { nombre: "Evaluación", deps: ["curriculo"], id: "evaluacion" },
  { nombre: "Inglés 3", deps: ["ingles2"], id: "ingles3" },
  { nombre: "Optativo 2", deps: [], id: "optativo2" },
  { nombre: "Historia matemática", deps: ["intermedia"], id: "historia" },
  { nombre: "Investigación", deps: ["estrategias2", "probabilidad", "intermedia"], id: "investigacion" },
  { nombre: "Trabajo de título", deps: ["intermedia", "tecnologia"], id: "titulo" },
  { nombre: "Identidad profesional", deps: ["intermedia"], id: "identidad" },
  { nombre: "Inglés 4", deps: ["ingles3"], id: "ingles4" },
  { nombre: "Práctica docente final", deps: ["practicaComunitaria", "titulo", "historia", "investigacion", "identidad"], id: "final" },
];

const contenedor = document.getElementById("malla");

function crearMalla() {
  ramos.forEach(r => {
    const div = document.createElement("div");
    div.className = "ramo disabled";
    div.innerText = r.nombre;
    div.id = r.id;
    div.onclick = () => aprobarRamo(r);
    contenedor.appendChild(div);
  });
  actualizarEstado();
}

function aprobarRamo(ramo) {
  const div = document.getElementById(ramo.id);
  div.classList.add("aprobado");
  div.classList.remove("disabled");
  ramo.aprobado = true;
  actualizarEstado();
}

function actualizarEstado() {
  ramos.forEach(r => {
    const div = document.getElementById(r.id);
    if (r.aprobado) return;
    const depsAprobados = r.deps.every(dep => ramos.find(x => x.id === dep)?.aprobado);
    if (depsAprobados) {
      div.classList.remove("disabled");
    } else {
      div.classList.add("disabled");
    }
  });
}

crearMalla();