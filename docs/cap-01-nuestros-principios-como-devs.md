# Nuestros Principios como Desarrolladores

>**Peor que usar un mal estándar o un estándar incorrecto es no seguir ninguno**, de la misma forma, lo peor que podemos hacer es no tener ningún criterio para enfrentar los desarrollos. Para aumentar nuestra productividad, tanto individualmente como en equipo, debemos siempre seguir estándares y fijar criterios de desarrollo. Nuestro objetivo debería ser contar con una “plataforma de desarrollo” que nos evite tener que repensar problemas típicos y cotidianos, y concentrarnos solo en los problemas nuevos.

Empecemos por el principio, por lo más básico y elemental... nuestros principios base.

## 1° Principio: RTFM ("Read The Fucking Manual")

“Lee El Maldito Manual”, algo muy usado en los foros como respuesta hacia los novatos que lo último que hacen es leerlos (lamentablemente *todo* se encuentra ahí).

## 2° Principio: DRY ("Don't Repeat Yourself")

“No Te Repitas” significa algo muy simple: si cuando desarrollas ves que al programar “copias” un código para “pegarlo en otro lado”, es muy probable que estés haciendo algo mal, ya que ese código debería estar aislado y ser usado a través de parámetros.

Generalmente no existe razón para tener que duplicar el código, si estamos muy apurados, seguro, lo pagaremos muy caro dentro de poco.

## 3° Principio: KISS - "Keep It Simple, Stupid!"

Hay una frase que dice “la mejor arquitectura es la sencillez”. La sencillez es escalable, si resolvemos pequeños problemas y luego los unimos, será más fácil que hacer un sistema complejo de entrada.

## 4° Principio: Estándar de Codificación PHP

El lenguaje PHP y su comunidad, por años, no ha tenido ningún referente único para seguir un estándar, por consiguiente los desarrolladores usan o inventan el que más le quede cómodo. Evita crear un estándar propio. (leer sobre **PSR** o **PHP Standar Recomendation**).

:::info Nota
Si prestas atención verás que en todos los ejemplos las llaves `{}` inician a la izquierda cuando es una clase o un método, no se usa el tag de cierre de php `?>`, atributos y métodos privados iniciando con `_`, etcétera.
:::
