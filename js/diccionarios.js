/*
REMPLAZA EL CONTENIDO DE LA PAGINA SEGUN EL INDICE RETURNADO DE LA
FUNCION
*/
const setCourseSimple = () => {
    const imgCourseSimple1 = document.querySelector('#imgCourseSimple1')
    const imgCourseSimple2 = document.querySelector('#imgCourseSimple2')
    const presentationSimple = document.querySelector('.presentationSimple')
    const menuContainerSimple = document.querySelector('.menuContainerSimple')
    return [imgCourseSimple1, imgCourseSimple2, presentationSimple, menuContainerSimple]
}

/* QUITA LA CLASE activeMaterial DE TODOS CURSOS Y LA AGREGA
AL QUE ESTA ACTIVO */
const setActiveCourseSimple = () => {
    for (mat of setCourseSimple()[3].children){
        mat.classList.remove('activeMaterial')
    }
}

/*
COMPRUEBA SI EL CONTENIDO YA SE PUEDE MOSTRAR 
*/
setInterval(() => {
    const showElement = 700
    const menuContainerSimple = document.querySelector('.menuContainerSimple')
    if(menuContainerSimple.getBoundingClientRect().top < showElement){
        menuContainerSimple.style.left= '0'
        menuContainerSimple.style.transition = 'all 1s ease-in-out'
    }

    const imgCourseSimple1 = document.querySelector('#imgCourseSimple1')
    if(imgCourseSimple1.getBoundingClientRect().top < showElement){
        imgCourseSimple1.style.left= '0'
        imgCourseSimple1.style.transition = 'all 1s ease-in-out'
    }

    const imgCourseSimple2 = document.querySelector('#imgCourseSimple2')
    if(imgCourseSimple2.getBoundingClientRect().top < showElement){
        imgCourseSimple2.style.left= '0'
        imgCourseSimple2.style.transition = 'all 1s ease-in-out'
    }

    const imgCourseSimpleGoTo = document.querySelector('#imgCourseSimpleGoTo')
    if(imgCourseSimpleGoTo.getBoundingClientRect().top < showElement){
        imgCourseSimpleGoTo.style.opacity= '1'
        imgCourseSimpleGoTo.style.transition = 'all 1s ease-in-out'
    }

    const description = document.querySelectorAll('.presentationSimple .description')
    for (let i = 0; i < description.length; i++){
        if(description[i].getBoundingClientRect().top < showElement) {
            description[i].style.right = '0'
            description[i].style.transition = 'all 0.8s ease-in-out' 
        }
    }

    const ols = document.querySelector('#ols')
    if(ols.getBoundingClientRect().top < showElement){
        ols.style.left= '0'
        ols.style.transition = 'all 1s ease-in-out'
    }
}, 100);


/*************************************************
GENERA EL CONTENIDO DE CADA UNO DE LOS MATERIALES
**************************************************/


/*
GENERA EL CONTENIDO DEL MATERIAL DICCIONARIO BILINGUE DE 
TERMINOS CONTABLES
*/
const dicContable = () => {
    setActiveCourseSimple()
    setCourseSimple()[3].children[0].classList.add('activeMaterial')
    setCourseSimple()[0].src = "img/courses/diccionarios/diccionarioContable1.png"
    setCourseSimple()[1].src = "img/courses/diccionarios/diccionarioContable2.png"
    setCourseSimple()[2].innerHTML = `
    <p class="description">Diccionario bilingüe en línea, dónde se recopilan los términos más utilizados por profesores, estudiantes y profesionistas de las áreas de contabilidad, negocios, finanzas y más.</p>
    <span id="ols"></span>
    `
}

dicContable();



/*
GENERA EL CONTENIDO DEL MATERIAL DICCIONARIO BILINGUE DE 
TERMINOS JURIDICOS
*/
const dicJuridico = () => {
    setActiveCourseSimple()
    setCourseSimple()[3].children[1].classList.add('activeMaterial')
    setCourseSimple()[0].src = "img/courses/diccionarios/diccionarioTermJuridicos1.png"
    setCourseSimple()[1].src = "img/courses/diccionarios/diccionarioTermJuridicos2.png"
    setCourseSimple()[2].innerHTML = `
    <p class="description">Diccionario bilingüe en línea, dónde se recopilan los términos más consultados en el campo legal. Un instrumento de trabajo útil y sencillo, para estudiantes, profesores y profesionistas</p>
    <span id="ols"></span>
    `
}



/*
GENERA EL CONTENIDO DEL MATERIAL DICCIONARIO BILINGUE DE 
TERMINOS MEDICOS
*/
const dicMedico = () => {
    setActiveCourseSimple()
    setCourseSimple()[3].children[2].classList.add('activeMaterial')
    setCourseSimple()[0].src = "img/courses/diccionarios/diccionarioTermMed1.png"
    setCourseSimple()[1].src = "img/courses/diccionarios/diccionarioTermMed2.png"
    setCourseSimple()[2].innerHTML = `
    <p class="description">El DICCIONARIO BILINGÜE DE TÉRMINOS MÉDICOS está dividido en 15 capítulos.</p>
    <ol id="ols">
        <li>El cuerpo humano.</li>
        <li>Signos y síntomas.</li>
        <li>Exámen médico.</li>
        <li>Instituciones y personal.</li>
        <li>Procedimientos médicos, instrumentos, materiales y medicamentos.</li>
        <li>Enfermedades transmisibles.</li>
        <li>Parásitos, insectos y algunos animales.</li>
        <li>Enfermedades crónicas.</li>
        <li>Atención médica materna e infantil.</li>
        <li>Planificación familiar.</li>
        <li>Nutrición.</li>
        <li>Salud ambiental.</li>
        <li>Salud ocupacional.</li>
        <li>Salud dental.</li>
        <li>Abuso de sustancias.</li>
    </ol>
    `
}
document.querySelector('#dicContable').addEventListener('click', dicContable)
document.querySelector('#dicJuridico').addEventListener('click', dicJuridico)
document.querySelector('#dicMedico').addEventListener('click', dicMedico)



