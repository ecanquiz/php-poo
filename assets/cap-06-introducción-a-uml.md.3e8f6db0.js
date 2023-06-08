import{_ as e,c as a,o,O as r}from"./chunks/framework.a6ecc25e.js";const b=JSON.parse('{"title":"Introducción a UML","description":"","frontmatter":{},"headers":[],"relativePath":"cap-06-introducción-a-uml.md"}'),n={name:"cap-06-introducción-a-uml.md"},s=r('<h1 id="introduccion-a-uml" tabindex="-1">Introducción a UML <a class="header-anchor" href="#introduccion-a-uml" aria-label="Permalink to &quot;Introducción a UML&quot;">​</a></h1><p>De la misma forma que a veces nos apoyamos en un dibujo para tratar de comprender y razonar un problema, muchas veces complejo, considero que <strong>es fundamental contar con una <em>“herramienta gráfica”</em> (para armar <em>“diagramas”</em>) que nos permita discutir y elaborar diseños sin tener que distraernos en los superfluos y cirscunstanciales detalles de la codificación según el lenguaje que necesitemos usar.</strong></p><p>Diseñar Orientado a Objetos es independiente del lenguaje de programación, por lo tanto usaremos UML, un lenguaje <em>“gráfico”</em> independiente de la implementación.</p><blockquote><p><em>“En las batallas te das cuenta que los planes son inservibles, pero hacer planes es indispensable”</em> -- Dwight E. Eisenhower</p></blockquote><p>Aquí es donde entra el Lenguaje Unificado de Modelado (UML), y a pesar que existe mucho software para documentar usando diagramas, pero bien podemos decantarnos por una opción <em>“libre”</em> como <strong>ArgoUML</strong> (multiplataforma), <strong>StarUML</strong> (win) o <strong>Umbrello</strong> (lin).</p><h2 id="uml-el-medio-y-no-el-fin-en-si-mismo" tabindex="-1">UML, el medio y no el fin en sí mismo <a class="header-anchor" href="#uml-el-medio-y-no-el-fin-en-si-mismo" aria-label="Permalink to &quot;UML, el medio y no el fin en sí mismo&quot;">​</a></h2><p>Como bien dice la frase, los diagramas UML son el medio y no el fin, sirven para simplificar notablemente las discusiones sobre <em>“abstracciones”</em> y <strong>mejoran la comunicación entre personas</strong>, ya sean desarrolladores como otros roles dentro de un mismo proyecto. Otra de las ventajas es que atrasa la <em>“codificación temprana”</em> y facilita estar más tiempo en la etapa de diseño.</p><p>Existen distintos tipos de diagramas, cada uno más adecuado que el otro según la situación.</p><div class="warning custom-block"><p class="custom-block-title">Advertencia</p><p>Si tratáramos con el cliente directamente <em>&quot;los diagramas de <em>Casos de Uso</em> podrían ser lo más indicados&quot;</em>. Sin embargo, la métodología de gestión de proyectos <a href="https://ecanquiz.github.io/scrum/" target="_blank" rel="noreferrer"><strong>SCRUM</strong></a>, recomienda utilizar <a href="https://ecanquiz.github.io/scrum/artifacts/user-stories.html" target="_blank" rel="noreferrer"><strong>Historias de Usuarios</strong></a> en lugar de diagramas de <em>Casos de Uso</em>.</p></div><p>Para lo que a nosotros nos concierne, vamos a apoyarnos en ellos para simplificar nuestro razonamiento y poder detectar más fácilmente cuando un diseño no es correcto y discutir cómo mejorarlo y para ellos nos concentraremos en los <strong>Diagramas de Clases</strong> y <strong>Diagramas de Paquetes</strong>.</p><h2 id="uml-y-el-publico-objetivo" tabindex="-1">UML y el público objetivo <a class="header-anchor" href="#uml-y-el-publico-objetivo" aria-label="Permalink to &quot;UML y el público objetivo&quot;">​</a></h2><p>A pesar que existen reglas para hacer cualquier diagrama UML, <strong>los diseños siempre deben estar sujetos a interpretación y su nivel de detalle dependerá de nuestro <em>“público objetivo”</em>.</strong></p><p>Si vamos a usar un diagrama para presentarles a <strong>programadores inexpertos</strong> cómo deberían desarrollar un sistema, este diagrama debería disponer de la mayor cantidad de información y no dar por sobreentendido nada.</p><p>Por el contrario, si nuestro público son <strong>desarrolladores <em>“seniors”</em></strong> con experiencia en UML, bastará con detallar solo la información pertinente al problema que se quiere resolver y el resto de información se obviará para evitar <em>“ruido extra”</em>.</p><p><strong>Un equipo con experiencia en UML debería poder recibir cualquier diagrama e implementarlo de forma mecánica sin tener siquiera que razonar el diseño</strong>, lo cual significa que el diagrama siempre se traduce de la misma forma, un elemento del diagrama siempre tendrá la misma traducción en código, no importa el lenguaje que usemos.</p><h2 id="uml-es-independiente-del-lenguaje" tabindex="-1">UML es independiente del lenguaje <a class="header-anchor" href="#uml-es-independiente-del-lenguaje" aria-label="Permalink to &quot;UML es independiente del lenguaje&quot;">​</a></h2><p>Como bien lo dice la frase, UML es independiente del lenguaje. Sirve para representar muchas cosas, pero en lo que respecta a la POO, cada dato que se impregne en el diagrama podrá ser traducido a cualquier lenguaje que permita implementar el paradigma de los Objetos. Si el lenguaje de turno no lo soportara en un 100%, habrá que interpretar el diseño UML y hacer los ajustes pertinentes en el código.</p><p><strong>Algunas veces el diagrama no puede representarse exactamente en un lenguaje</strong>, por lo que deberemos ser creativos y quedarnos con el concepto que nos busca transmitir el diseño (este caso lo veremos concretamente con PHP y su problema histórico de representar explicitamente los <em>“paquetes”</em>).</p><h2 id="en-resumen" tabindex="-1">En resumen <a class="header-anchor" href="#en-resumen" aria-label="Permalink to &quot;En resumen&quot;">​</a></h2><p>Los diagramas UML permiten unificar y simplificar la comunicación en un proyecto, como así también apoyar el razonamiento en la etapa de diseño de una solución.</p><p>Existen gran variedad de diagramas y son tan importantes como los diagramas MER/DER que se usan para diseñar una base de datos. Nadie que desarrolle un sistema se le ocurriría crear una base de datos directamente en el servidor sin definir anticipadamente una estrategia en un documento. De la misma forma deberíamos pensar a la hora de hacer sistemas Orientado a Objetos.</p>',21),i=[s];function t(l,d,m,c,u,p){return o(),a("div",null,i)}const h=e(n,[["render",t]]);export{b as __pageData,h as default};
