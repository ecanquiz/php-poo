import{_ as e,c as o,o as a,O as s}from"./chunks/framework.a6ecc25e.js";const r="/php-poo/assets/cap-05-empezar-a-plasmar-los-objetos-en-un-diseno-1.d373014e.png",n="/php-poo/assets/cap-05-empezar-a-plasmar-los-objetos-en-un-diseno-2.847b9f96.png",y=JSON.parse('{"title":"Empezar a plasmar los objetos en un diseño","description":"","frontmatter":{},"headers":[],"relativePath":"cap-05-empezar-a-plasmar-los-objetos-en-un-diseno.md"}'),t={name:"cap-05-empezar-a-plasmar-los-objetos-en-un-diseno.md"},i=s('<h1 id="empezar-a-plasmar-los-objetos-en-un-diseno" tabindex="-1">Empezar a plasmar los objetos en un diseño <a class="header-anchor" href="#empezar-a-plasmar-los-objetos-en-un-diseno" aria-label="Permalink to &quot;Empezar a plasmar los objetos en un diseño&quot;">​</a></h1><p>En este capítulo empezaremos a ver cómo transformar los objetos que detectamos en nuestra observación de la <em>“realidad”</em> en algo <em>“informáticamente”</em> palpable.</p><blockquote><p><em>&quot;Hay dos maneras de diseñar software: una es hacerlo tan simple que sea obvia su falta de deficiencias, y la otra es hacerlo tan complejo que no haya deficiencias obvias&quot;</em> -- C.A.R. Hoare</p></blockquote><h2 id="como-representar-la-estructura-de-los-objetos" tabindex="-1">Cómo representar la estructura de los objetos <a class="header-anchor" href="#como-representar-la-estructura-de-los-objetos" aria-label="Permalink to &quot;Cómo representar la estructura de los objetos&quot;">​</a></h2><p>En un capítulo anterior habíamos hablado de una situación de la realidad donde una niña (mi hija) interactuaba con un perro, <strong>así que vamos a ir por partes y tratar de representar lo que podemos interpretar del texto</strong> que está en un lenguaje natural y nos describe claramente los objetos y sus relaciones:</p><blockquote><p>Micaela, de 5 años, dice: <em>“mira el perro negro y blanco, se llama Tito, le toco la cabeza y mueve la cola, y si le doy de comer, al rato, hace caca”</em>.</p></blockquote><p>Si nos concentramos en el perro, tenemos que:</p><p><strong>Atributos</strong></p><ul><li>Color</li><li>Nombre</li></ul><p><strong>Comportamiento</strong></p><ul><li>Se le puede tocar la cabeza</li><li>Mueve la cola</li><li>Puede comer</li><li>Sabe hacer sus necesidades</li></ul><p>Y se desprende prestando atención a la lectura del texto que define nuestro contexto.</p><ol><li><p><strong><em>“Los Objetos tienen Atributos, Comportamientos y Estados”</em></strong></p><p>Todos los objetos tienen “atributos”,”comportamientos” (“métodos”) y un “estado”. Este último no es más que la información que tienen los atributos en un momento dado.</p></li><li><p><strong><em>Un perro se llamará “Tito” y otro “Ruffo”</em></strong>, pero el atributo es el mismo (<em>“nombre”</em>). Si mañana el perro cambia de nombre, lo que cambia es <em>“su estado”</em> y el mecanismo para cambiar el estado serán sus métodos (<em>“cambiar el nombre”</em>).</p></li><li><p><strong><em>“La clase, un molde para construir objetos”</em></strong></p><p>Este ejemplo es muy usado para tratar de transmitir el concepto que hay detrás. <strong>Podríamos decir que si <em>“jugáramos a ser Dios”</em>, primero definiríamos un diseño de cómo va a ser la criatura que queremos crear</strong>, haríamos un <em>“molde”</em> a partir de ese diseño, y posteriormente podríamos crear <em>“vida”</em> con similares características, pero que siempre serán <em>“objetos únicos”</em>.</p></li></ol><p><strong>“Crear Personas”</strong></p><p>Por ejemplo, si quiero crear <em>“Personas”</em> diría que todas tendrán un sexo (masculino / femenino), dos piernas, dos brazos, una cabeza y pelo sobre ella (es un diseño simple para un contexto simple, si fuera otro el contexto, muy probablemente debería cambiar mi diseño).</p><p><strong>“Crear Perros”</strong></p><p>Por ejemplo, podría decir que los <em>“Perros”</em> también tendrían un sexo, pero ahora tendrían cuatro patas, una cabeza y pelo sobre todo su cuerpo.</p><p>Para ambos ejemplos <strong>ya cuento con dos moldes, el de Personas y el de Perros</strong>, por lo tanto ahora puedo crear a Micaela y a Tito, pero también podría crear a Martina y a Ruffo, por lo que tendríamos dos personas y dos perros, con características similares, pero que serían a su vez criaturas únicas, identificables y distinguibles entre las demás criaturas, aún entre las criaturas del mismo tipo (aunque se llamaran igual y tuvieran los mismos rasgos, serían solo parecidos).</p><ol start="4"><li><p><strong><em>“Los atributos y comportamientos pueden ser públicos o privados”</em></strong></p><p>Existirá información y comportamientos que serán conocidos por otros objetos (<strong><em>“acceso público”</em></strong>) y esto permitirá que se pueda generar una interacción entre ellos. También existirá información y comportamientos que serán internos de cada objeto (<strong><em>“acceso privado”</em></strong>) y no serán conocidos por los demás objetos.</p></li></ol><p>Un diseño posible para nuestro Perro podría ser:</p><p><img src="'+r+'" alt="cap-05-empezar-a-plasmar-los-objetos-en-un-diseno"></p><p><strong>Cómo se debería leer este diagrama:</strong></p><ul><li><strong>Todo lo que se encuentre dentro de la representación <em>“Perro”</em> es <em>“interno y privado”</em></strong> (invisible para el exterior) y lo que se encuentre <strong><em>“una parte dentro y otra afuera”</em> será nuestra <em>“interfaz”</em> con el exterior, los <em>“comportamientos públicos”</em></strong> del objeto que serán invocados por los <em>“mensajes”</em> enviados por otro objeto que quiere interactuar con nosotros.</li><li>Un objeto de tipo <em>“Perro”</em> tiene como atributos su <em>“color”</em> y su <em>“nombre”</em></li><li>Dentro de los posibles comportamientos públicos de nuestro perro podrían ser <em>“comer”</em>, <em>“recibir una caricia”</em>, etc.</li><li>Dentro de los posibles comportamientos privados de nuestro perro podría ser <em>“hacer la digestión”</em>, que muy probablemente será activada a través de otros métodos (como <em>“comer”</em>).</li></ul><p><strong>Qué es lo que vería Micaela desde el exterior:</strong></p><p><img src="'+n+'" alt="cap-05-empezar-a-plasmar-los-objetos-en-un-diseno"></p><p>Solo podríamos interactuar con lo que es <em>“público”</em> del diseño, como así lo decidimos. Ahora la pregunta sería <strong><em>“¿Qué debería ser público y qué debería ser privado?”</em></strong>, bueno, intentemos usar el sentido común:</p><ul><li><strong>El perro necesita poder interactuar con su exterior de alguna forma</strong>, pero existirán <em>“detalles”</em> que no conciernen al exterior ni nos interesa que otro objeto pueda modificar a su antojo.</li></ul><p>Por ejemplo, <strong>Micaela no tiene por qué saber cómo es el mecanismo de digestión de un perro</strong>, qué órganos entran en juego durante todo el proceso, es más, por la vida del perro creo que <strong>tampoco Micaela debería poder tener la potestad para cambiarlo a su antojo</strong> (ya que seguro estaría en peligro la vida del perro).</p><p>Lo que sí sucederá es que <strong>Micaela generará indirectamente que se active el mecanismo interno de digestión al darle de comer al Perro</strong> (<em>“Micaela le dice al perro que coma”</em>, lo que se debe traducir como <em>“Micaela le envió un mensaje al perro”</em>), pero esto ocurrirá sin que Micaela sepa que sucede, solo podrá apreciar sus resultados cuando el perro haga sus necesidades (ya que las necesidades no salen solas).</p><p>Ahora bien, <strong>¿de quién es la responsabilidad de definir todas estas reglas?</strong></p><p>Si, obviamente, la responsabilidad es nuestra, y un diseño será más débil o más robusto de acuerdo a cómo nosotros pensemos que deben reaccionar nuestros objetos a los mensajes que recibirán del exterior y cuanto oculten de sus propios detalles de implementación.</p><p><strong>Nota del Autor</strong>: esto es un ejemplo teórico para tratar de transmitir varios conceptos, como todo diseño, tendrá debilidades y fortalezas, y si cambiamos de contexto, muy probablemente este diseño no servirá (no dudo que en este momento estarán pensando <strong><em>“que pasaría si...”</em></strong> y muy probablemente se encuentren con que algo no se puede hacer... bueno, vayamos paso a paso y veremos de a poco el horizonte, pero ya les voy adelantando: <strong>no existen diseños que pueda funcionar en absolutamente todos los contextos posibles</strong>, por esta razón es importante definir <em>“el contexto”</em> de nuestro sistema.</p><blockquote><p><strong>Nota</strong>: a menos que estemos hablando concretamente de patrones de diseño, pero aún así se define en qué contextos se podrían aplicar y en cuales no.</p></blockquote><p><strong>Por ejemplo:</strong> el diseño de una clase Persona no será exactamente el mismo si estamos hablando de un sistema de reserva de películas, una universidad con alumnos o un sistema de salud. Tendrán cosas comunes, pero su diseño no será necesariamente el mismo.</p><p>En mi opinión no existe el <strong><em>“100% de reuso puro”</em></strong>, existirán componentes que dada su naturaleza sí podrán usarse en distintos contextos y otros directamente no, a menos tal vez que hayamos pensado de entrada que así debíamos diseñar nuestros componetes: <em>“reusables en varios contextos”</em>, aunque esto podría aumentar exponencialmente la complejidad del componente o de los sistemas.</p><p>Para más información sobre el apasionante tema sobre <em>“diseño”</em> se recomienda leer el siguiente artículo de Martín Fowler: <a href="https://www.martinfowler.com/articles/designDead.html" target="_blank" rel="noreferrer"><strong><em>“¿Ha muerto el diseño?”</em></strong></a></p><h2 id="en-resumen" tabindex="-1">En Resumen <a class="header-anchor" href="#en-resumen" aria-label="Permalink to &quot;En Resumen&quot;">​</a></h2><p><strong>Las clases se construyen en la etapa de diseño</strong> donde definimos qué es lo que queremos crear. Lo que creamos a partir de ellas es un objeto que <em>“tendrá vida”</em> (será lo que verdaderamente se ejecutará en nuestro sistema) y a la vez <em>“único”</em> (podrán existir muchos objetos del mismo tipo, pero podremos interactuar con ellos e identificarlos de forma única).</p><p>Dentro de las definiciones de la clase <strong>tenemos los atributos y los comportamientos</strong> que tendrá nuestra creación, algunos de ellos <strong>serán públicos y otros serán privados</strong>. Todo lo que definamos como público será nuestra <em>“conexión”</em> con el exterior y permitirá la interacción entre los objetos. Esta interacción se dará a través de <strong>envíos de mensajes entre objetos</strong>, como por ejemplo <em>“Micaela le da de comer al perro”</em>, por lo que existirán dos objetos, uno que puede <em>“comer”</em> y otro que puede decirle al otro <em>“que coma”</em> (si no existen estos métodos, el perro directamente no hará nada y estará desconectado con el exterior).</p><p><strong>Esto se clarificará cuando empecemos a usar los diagramas UML</strong> (similares al diagrama presentado anteriormente) y a traducirlos en código concreto y ejecutable.</p><blockquote><p><em>&quot;Codifica siempre como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde vives&quot;</em> -- Martin Golding</p></blockquote>',41),m=[i];function l(d,p,c,u,b,g){return a(),o("div",null,m)}const j=e(t,[["render",l]]);export{y as __pageData,j as default};