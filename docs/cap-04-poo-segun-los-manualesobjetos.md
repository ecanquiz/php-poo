# POO

## Según LOS MANUALES

Dos fuentes que son confiables y que tenemos más a mano son [**Wikipedia**](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos), principalmente para consultar los conceptos fundamentales que se aplican a cualquier lenguaje Orientado a Objetos, y [**el manual oficial de PHP**](https://www.php.net/manual/es/language.oop5.php), que aunque es un manual de programación y no de desarrollo (se concentra más en la sintaxis que en los conceptos), tiene mucho para enseñarnos (el resto lo haremos a través de este libro ;-)).

>"Depurar código es dos veces más difícil que escribir código, por lo tanto si escribes el código tan inteligentemente como te sea posible, por definición no serás lo suficientemente inteligente como para depurarlo."

Luego de haber leído el capítulo original en Wikipedia, quiero resaltar los siguientes puntos fundamentales:

1. **La POO es un paradigma que tiene sus orígenes desde antes de 1990** (a partir de este año se empieza a popularizar). Por lo tanto no es ninguna excusa (menos como Desarrollador PHP) seguir a la fecha desconociendo cómo trabajar con POO o discutiendo si realmente es útil su adopción.

2. _“Los objetos son entidades que combinan **estado, comportamiento e identidad”**._

3. Fundamental, los beneficios que obtenemos usando este paradigma:
    - _“La programación orientada a objetos expresa un programa como un conjunto de estos objetos, que colaboran entre ellos para realizar tareas. Esto permite hacer los programas y módulos más fáciles de escribir, mantener y reutilizar.”_

4. La razón de por qué no es necesario que todos los objetos que creemos tengan un ID como si fuera una clave primaria de una tabla (con el fin de ubicar un objeto en particular):
    - _“De esta forma, **un objeto contiene toda la información que permite definirlo e identificarlo frente a otros objetos pertenecientes a otras clases e incluso frente a objetos de una misma clase,** al poder tener valores bien diferenciados en sus atributos.”_

5. Diferencias con respecto a la Programación Estructurada versus Programación Orientada a Objetos: la primera se pensó como funcionalidad por un lado y datos por otro, es decir, llamar a una función y pasarle constantemente datos para que los procese, mientras que la POO está pensada para tener todo integrado en el mismo objeto.
    - “En la programación estructurada sólo se escriben funciones que procesan datos. Los programadores que emplean éste nuevo paradigma, en cambio, **primero definen objetos para luego enviarles mensajes solicitándoles que realicen sus métodos por sí mismos.”**

6. **Muy importante es tener SIEMPRE en claro los conceptos FUNDAMENTALES,** si no los tienes claros cuando programas OO, algo está mal, seguro errarás el camino que define el paradigma: Clase, Herencia, Objeto, Método, Evento, Mensaje, Atributo, Estado Interno, Componentes de un objeto y Representación de un objeto. No dudes en volver a repasarlos todas las veces que lo necesites, por más experto que te consideres, siempre viene bien una relectura de nuestras bases.

7. **Características de la POO:** igual que el punto anterior, es fundamental tener claros estos conceptos cada vez que desarrollamos, con principal énfasis en el Principio de Ocultación (que es muy común confundir con Encapsulamiento), lo que explica **por qué no deberían existir los atributos públicos ni abusar de los setter/getter** (tema que veremos más adelante).

Si alguno de estos puntos no quedaron claros, sugiero su relectura en la [Wikipedia](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos).

## Según el manual Oficial de PHP

De la misma forma que en el punto anterior, es muy importante hacer una lectura de Referencias del Lenguaje (la base para empezar a comprender PHP) y posteriormente del capítulo sobre POO en el manual oficial, **aunque algunos capítulos no aborden en profundidad cada tema** (lo cual es entendible si comprendemos que hablamos de **un manual de sintaxis** y no un tutorial para aprender a programar).

Todos estos temas los veremos más adelante y haré todas las referencias oportunas al manual oficial, pero aquí la lista de temas básicos que trata.

- [Introducción](https://www.php.net/manual/es/oop5.intro.php)
- [Lo básico](https://www.php.net/manual/es/language.oop5.basic.php)
- [Propiedades](https://www.php.net/manual/es/language.oop5.properties.php)
- [Constantes de clases](https://www.php.net/manual/es/language.oop5.constants.php)
- [Autocarga de clases](https://www.php.net/manual/es/language.oop5.autoload.php)
- [Constructores y destructores](https://www.php.net/manual/es/language.oop5.decon.php)
- [Visibilidad](https://www.php.net/manual/es/language.oop5.visibility.php)
- [Herencia de Objetos](https://www.php.net/manual/es/language.oop5.inheritance.php)
- [Operador de Resolución de Ámbito (::)](https://www.php.net/manual/es/language.oop5.paamayim-nekudotayim.php)
- [La palabra reservada 'static'](https://www.php.net/manual/es/language.oop5.static.php)
- [Abstracción de clases](https://www.php.net/manual/es/language.oop5.abstract.php)
- [Interfaces de objetos](https://www.php.net/manual/es/language.oop5.interfaces.php)
- [Rasgos (Traits)](https://www.php.net/manual/es/language.oop5.traits.php)
- [Clases anónimas](https://www.php.net/manual/es/language.oop5.anonymous.php)
- [Sobrecarga](https://www.php.net/manual/es/language.oop5.overloading.php)
- [Iteración de objetos](https://www.php.net/manual/es/language.oop5.iterations.php)
- [Métodos mágicos](https://www.php.net/manual/es/language.oop5.magic.php)
- [Palabra clave Final](https://www.php.net/manual/es/language.oop5.final.php)
- [Clonación de Objetos](https://www.php.net/manual/es/language.oop5.cloning.php)
- [Comparación de Objetos](https://www.php.net/manual/es/language.oop5.object-comparison.php)
- [Enlaces estáticos en tiempo de ejecución](https://www.php.net/manual/es/language.oop5.late-static-bindings.php)
- [Objetos y referencias](https://www.php.net/manual/es/language.oop5.references.php)
- [Serialización de objetos](https://www.php.net/manual/es/language.oop5.serialization.php)
- [Covarianza y Contravarianza](https://www.php.net/manual/es/language.oop5.variance.php)
- [Registro de cambios de la POO](https://www.php.net/manual/es/language.oop5.changelog.php)

>_"Medir el progreso de programación en líneas de código es como medir el progreso de construcción de un avión en peso" – Bill Gates._

