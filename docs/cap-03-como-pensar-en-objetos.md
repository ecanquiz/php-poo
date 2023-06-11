# Cómo Pensar en Objetos

Veremos en este capítulo cómo detectar los objetos sin preocuparnos aún del código.

>"Mucho software hoy día es en cierta medida como una pirámide egipcia con millones de piedras apiladas una encima de otra, sin integridad estructural, construido por fuerza bruta y miles de esclavos." -- Alan Kay (científico de la computación)

## Lo menos importante es el código

Lo más importante –por lo menos al principio- no es jugar con el código (ya que este podrá funcionar, no dará error, pero conceptualmente nuestro sistema no funcionará como un sistema “Orientado a Objetos” ni aprovecharemos todas sus virtudes), es detectar los objetos dentro de un contexto determinado.

>“Todo problema está sujeto a un determinado contexto, no existe un diseño que se adapte a todos los posibles contextos.”

**El código con el que se construyen los objetos es meramente circunstancial,** una vez que tengamos claro el diseño conceptual, luego será seguir la receta a través del manual del lenguaje de turno.

## Un niño pequeño

Empecemos por el diálogo de un niño que recién empieza a hablar (en este caso mi hija):

>Micaela, de 5 años, dice: “mira el perro negro y blanco, se llama Tito, le toco la cabeza y mueve la cola, y si le doy de comer, al rato, hace caca”.

Claramente tenemos un objeto de tipo “Perro” con características bastante definidas (y probablemente con algún problema en sus esfínteres).

>“Más importante que codificar es detectar los objetos sin preocuparnos -aún- del código que los representará” – EP

Tenemos entonces:

- _“un perro”_, el _“objeto”_ propiamente dicho
- _“es de color negro y blanco”_, el color es un atributo del objeto _“perro”_
- _“reacciona si le tocan la cabeza”_, el comportamiento ante un estímulo externo
- _“mueve la cola”_, tiene acciones
- _“come”_, otras acciones relacionadas con su exterior/interior
- _“hace caca”_, tiene otras acciones que están relacionadas con su interior, y que posteriormente se exteriorizan de alguna forma

![cap-03-como-pensar-en-objetos](./img/cap-03-como-pensar-en-objetos-1.jpg)

También es importante destacar, un poco más sutil, que existe **otro objeto** en este escenario y se llama **“Micaela”**, y además existe (aunque no lo veamos) **un contexto** (“todo sistema tiene un contexto, un sistema no puede aplicarse en absolutamente todos los contextos”) donde “viven” los objetos y que permite que se genere una interacción entre ambos.

## El medio de comunicación

De alguna forma u otra, ambos objetos tienen cosas en común: existe un medio que les permite comunicarse, pero a su vez ellos tienen los elementos para generar ese “diálogo”, como así también existen “acciones” que son “internas” e “implícitas” de cada uno:

- **Aunque Micaela –y aún el perro- no lo entienda,** ambos tienen internamente distintos mecanismos de  digestión y ninguno controla el mecanismo del otro.
- **El perro, que sabe que cuando está nervioso mueve la cola,** no logra entender del todo por qué si Micaela lo acaricia, esta también se mueve. Micaela sabe que si lo acaricia su cola se moverá.
- **Micaela tiene una mano y el perro una cabeza, Micaela tiene acceso a su cabeza,** y la cabeza es accesible para que la mano pueda acariciarla.

**Parece tonto y simple, pero así son los objetos,** y en esos temas tenemos que pensar cuando diseñamos:

>El contexto, los objetos, sus atributos, sus acciones, cuáles pueden ser conocidos por otros objetos y cuales son (o deben ser) naturalmente internos del propio objeto, para finalmente hacerlos interactuar como en una obra de teatro o en un cuento, con varios posibles principios y finales según la historia que necesitemos contar.

>Cuando veamos los primeros ejemplos codificados entenderán un poco más de lo que hablo ;-)

>**Nota del Autor:** no, no estoy bajo los efectos de alucinógenos, la POO tiene más de observación de la realidad de lo que normalmente se cree, nunca deben diseñar un sistema que **“no sea coherente con la realidad”.**
