# Introducción a UML

De la misma forma que a veces nos apoyamos en un dibujo para tratar de comprender y razonar un problema, muchas veces complejo, considero que **es fundamental contar con una _“herramienta gráfica”_ (para armar _“diagramas”_) que nos permita discutir y elaborar diseños sin tener que distraernos en los superfluos y cirscunstanciales detalles de la codificación según el lenguaje que necesitemos usar.**

Diseñar Orientado a Objetos es independiente del lenguaje de programación, por lo tanto usaremos UML, un lenguaje _“gráfico”_ independiente de la implementación.

>_“En las batallas te das cuenta que los planes son inservibles, pero hacer planes es indispensable”_ -- Dwight E. Eisenhower

Aquí es donde entra el Lenguaje Unificado de Modelado (UML), y a pesar que existe mucho software para documentar usando diagramas, pero bien podemos decantarnos por una opción _“libre”_ como **ArgoUML** (multiplataforma), **StarUML** (win) o **Umbrello** (lin).

## UML, el medio y no el fin en sí mismo

Como bien dice la frase, los diagramas UML son el medio y no el fin, sirven para simplificar notablemente las discusiones sobre _“abstracciones”_ y **mejoran la comunicación entre personas**, ya sean desarrolladores como otros roles dentro de un mismo proyecto. Otra de las ventajas es que atrasa la _“codificación temprana”_ y facilita estar más tiempo en la etapa de diseño.

Existen distintos tipos de diagramas, cada uno más adecuado que el otro según la situación.

:::warning Advertencia
Si tratáramos con el cliente directamente _"los diagramas de _Casos de Uso_ podrían ser lo más indicados"_. Sin embargo, la métodología de gestión de proyectos [**SCRUM**](https://ecanquiz.github.io/scrum/), recomienda utilizar [**Historias de Usuarios**](https://ecanquiz.github.io/scrum/artifacts/user-stories.html) en lugar de diagramas de _Casos de Uso_.
:::

Para lo que a nosotros nos concierne, vamos a apoyarnos en ellos para simplificar nuestro razonamiento y poder detectar más fácilmente cuando un diseño no es correcto y discutir cómo mejorarlo y para ellos nos concentraremos en los **Diagramas de Clases** y **Diagramas de Paquetes**.

## UML y el público objetivo

A pesar que existen reglas para hacer cualquier diagrama UML, **los diseños siempre deben estar sujetos a interpretación y su nivel de detalle dependerá de nuestro _“público objetivo”_.**

Si vamos a usar un diagrama para presentarles a **programadores inexpertos** cómo deberían desarrollar un sistema, este diagrama debería disponer de la mayor cantidad de información y no dar por sobreentendido nada.

Por el contrario, si nuestro público son **desarrolladores _“seniors”_** con experiencia en UML, bastará con detallar solo la información pertinente al problema que se quiere resolver y el resto de información se obviará para evitar _“ruido extra”_.

**Un equipo con experiencia en UML debería poder recibir cualquier diagrama e implementarlo de forma  mecánica sin tener siquiera que razonar el diseño**, lo cual significa que el diagrama siempre se traduce de la misma forma, un elemento del diagrama siempre tendrá la misma traducción en código, no importa el lenguaje que usemos.

## UML es independiente del lenguaje

Como bien lo dice la frase, UML es independiente del lenguaje. Sirve para representar muchas cosas, pero en lo que respecta a la POO, cada dato que se impregne en el diagrama podrá ser traducido a cualquier lenguaje que permita implementar el paradigma de los Objetos. Si el lenguaje de turno no lo soportara en un 100%, habrá que interpretar el diseño UML y hacer los ajustes pertinentes en el código.

**Algunas veces el diagrama no puede representarse exactamente en un lenguaje**, por lo que deberemos ser creativos y quedarnos con el concepto que nos busca transmitir el diseño (este caso lo veremos concretamente con PHP y su problema histórico de representar explicitamente los _“paquetes”_).

## En resumen

Los diagramas UML permiten unificar y simplificar la comunicación en un proyecto, como así también
apoyar el razonamiento en la etapa de diseño de una solución.

Existen gran variedad de diagramas y son tan importantes como los diagramas MER/DER que se usan
para diseñar una base de datos. Nadie que desarrolle un sistema se le ocurriría crear una base de datos directamente en el servidor sin definir anticipadamente una estrategia en un documento. De la misma forma deberíamos pensar a la hora de hacer sistemas Orientado a Objetos.

