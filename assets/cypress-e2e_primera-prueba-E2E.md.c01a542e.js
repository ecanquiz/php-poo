import{_ as e,c as s,o as a,O as n}from"./chunks/framework.8d330141.js";const o="/vue-tdd/assets/create-new-empty-spec.08c8dab.b5d35e6f.png",r="/vue-tdd/assets/enter-path-for-new-spec.474c3f4.478acad6.png",p="/vue-tdd/assets/new-spec-added-confirmation.bb3adda.5feb0f78.png",l="/vue-tdd/assets/spec-list-with-new-spec.61d015d.655764a8.png",t="/vue-tdd/assets/first-test.2c4181b.83b718d9.png",c="/vue-tdd/assets/first-test-failing.bacd6fe.f935b464.png",i="/vue-tdd/assets/first-test-visit-30fps.629ca43.4363d953.mp4",u="/vue-tdd/assets/first-test-failing-contains.e30e9e1.3ca32bb2.png",d="/vue-tdd/assets/first-test-contains-30fps.d13e431.107d51a0.mp4",q=JSON.parse('{"title":"Escribir su Primera Prueba E2E","description":"","frontmatter":{},"headers":[],"relativePath":"cypress-e2e/primera-prueba-E2E.md"}'),y={name:"cypress-e2e/primera-prueba-E2E.md"},m=n('<h1 id="escribir-su-primera-prueba-e2e" tabindex="-1">Escribir su Primera Prueba E2E <a class="header-anchor" href="#escribir-su-primera-prueba-e2e" aria-label="Permalink to &quot;Escribir su Primera Prueba E2E&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">Lo que aprenderás</p><ul><li>Cómo comenzar a probar un nuevo proyecto en Cypress.</li><li>Cómo se ven las pruebas para aprobar y reprobar.</li><li>Prueba de navegación web, consultas DOM y escritura de aserciones.</li></ul></div><h2 id="agregar-un-archivo-de-prueba" tabindex="-1">Agregar un archivo de prueba <a class="header-anchor" href="#agregar-un-archivo-de-prueba" aria-label="Permalink to &quot;Agregar un archivo de prueba&quot;">​</a></h2><p>Suponiendo que <a href="./../cypress-get-start/instalando-cypress.html">instaló Cypress</a> con éxito y <a href="./../cypress-get-start/abriendo-la-aplicacion.html">abrió Cypress</a>, ahora es el momento de agregar su primera prueba. Vamos a hacer esto con el botón <strong>Create new empty spec</strong>.</p><p><img src="'+o+'" alt="create-new-empty-spec.08c8dab"></p><p>Al hacer clic en él, debería ver un cuadro de diálogo donde puede ingresar el nombre de su nueva <strong>spec</strong>. Simplemente acepte el nombre predeterminado por ahora.</p><p><img src="'+r+'" alt="enter-path-for-new-spec.474c3f4"></p><p>La <strong>spec</strong> recién generada se muestra en un cuadro de diálogo de confirmación. Simplemente continúe y ciérrelo con el botón <code>X</code>.</p><p><img src="'+p+'" alt="new-spec-added-confirmation.bb3adda"></p><p>Una vez que hayamos creado ese archivo, debería verlo inmediatamente en la lista de <strong>specs</strong> de un extremo a otro. Cypress supervisa sus archivos de <strong>specs</strong> en busca de cambios y los muestra automáticamente.</p><p><img src="'+l+`" alt="spec-list-with-new-spec.61d015d"></p><p>Aunque todavía no hemos escrito ningún código, está bien, hagamos clic en su nueva <strong>specs</strong> y veamos cómo Cypress la lanza. Alerta de revelación: probablemente va a FALLAR. ¡No se preocupe, es solo porque aún no ha configurado Cypress para visitar una página en su aplicación! Probemos algo diferente.</p><h2 id="escribe-tu-primera-prueba" tabindex="-1">Escribe tu primera prueba <a class="header-anchor" href="#escribe-tu-primera-prueba" aria-label="Permalink to &quot;Escribe tu primera prueba&quot;">​</a></h2><p>Ahora es el momento de escribir su primera prueba. Iremos a:</p><ol><li>Escriba su primera prueba de aprobación.</li><li>Actualízalo para que falle.</li><li>Mira Cypress recargar en tiempo real.</li></ol><p>Abra su IDE favorito y reemplace el contenido de su especificación con el código a continuación.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">describe</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My First Test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">it</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Does not do much!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equal</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>Una vez que guarde este cambio, debería ver que el navegador se vuelve a cargar.</p><p>Aunque no hace nada útil, ¡esta es nuestra primera prueba de aprobación! ✅</p><p>En el <a href="https://docs.cypress.io/guides/core-concepts/cypress-app#Command-Log" target="_blank" rel="noreferrer">registro de comandos</a>, verá que Cypress muestra la suite, la prueba y su primera afirmación (que debería pasar en verde).</p><p><img src="`+t+`" alt="first-test.2c4181b"></p><blockquote><p>Observe que Cypress muestra un mensaje acerca de que esta es la página predeterminada <a href="https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#Write-your-first-test" target="_blank" rel="noreferrer">en el lado derecho</a>. Cypress supone que querrá salir y <a href="https://docs.cypress.io/api/commands/visit" target="_blank" rel="noreferrer">visitar</a> una URL en Internet, pero también puede funcionar bien sin eso.</p></blockquote><p>Ahora escribamos nuestra primera prueba fallida.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">describe</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My First Test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">it</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Does not do much!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equal</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>Una vez que guarde nuevamente, verá que Cypress muestra la prueba fallida en rojo, ya que <code>true</code> no es igual a <code>false</code>.</p><p>Cypress también muestra el seguimiento de la pila y el marco de código donde falló la aserción (si está disponible). Puede hacer clic en el enlace del archivo azul para abrir el archivo donde ocurrió el error en <a href="https://docs.cypress.io/guides/tooling/IDE-integration#File-Opener-Preference" target="_blank" rel="noreferrer">su abridor de archivos preferido</a>. Para obtener más información sobre la visualización del error, lea sobre <a href="https://docs.cypress.io/guides/guides/debugging#Anatomy-of-an-error" target="_blank" rel="noreferrer">Errores de Depuración</a>.</p><p><img src="`+c+`" alt="first-test-failing.bacd6fe"></p><div class="info custom-block"><p class="custom-block-title">¿Qué son <strong>describe</strong>, <strong>it</strong> y <strong>expect</strong>?</p><p>Todas estas funciones provienen de las <a href="https://docs.cypress.io/guides/references/bundled-libraries" target="_blank" rel="noreferrer">Bibliotecas Agrupadas</a> que Cypress integra.</p><ul><li><code>describe</code> e <code>it</code> vienen de <a href="https://mochajs.org/" target="_blank" rel="noreferrer">Mocha</a>.</li><li><code>expect</code> viene de <a href="https://www.chaijs.com/" target="_blank" rel="noreferrer">Chai</a>.</li></ul><p>Cypress se basa en estas herramientas y <em>frameworks</em> populares con los que, con suerte, ya tienes cierta familiaridad y conocimiento. Si no, también está bien.</p></div><div class="tip custom-block"><p class="custom-block-title">¿Usas ESlint?</p><p>Consulte el <a href="https://github.com/cypress-io/eslint-plugin-cypress" target="_blank" rel="noreferrer">complemento Cypress ESLint</a>.</p></div><h2 id="escribe-una-prueba-real" tabindex="-1">Escribe una prueba <em>real</em> <a class="header-anchor" href="#escribe-una-prueba-real" aria-label="Permalink to &quot;Escribe una prueba _real_&quot;">​</a></h2><p><strong>Una prueba sólida generalmente cubre 3 fases:</strong></p><ol><li>Configure el estado de la aplicación.</li><li>Toma una acción.</li><li>Haga una afirmación sobre el estado de la aplicación resultante.</li></ol><p>También puede ver esto expresado como <em>&quot;Dado, Cuándo, Entonces&quot;</em> o <em>&quot;Arreglar, Actuar, Afirmar&quot;</em>. Pero la idea es: primero coloca la aplicación en un estado específico, luego realiza alguna acción en la aplicación que hace que cambie y, finalmente, verifica el estado de la aplicación resultante.</p><p>Hoy, tomaremos una visión limitada de estos pasos y los asignaremos limpiamente a los comandos de Cypress:</p><ol><li>Visite una página web.</li><li>Consulta por un elemento.</li><li>Interactuar con ese elemento.</li><li>Afirmar sobre el contenido de la página.</li></ol><h2 id="paso-1-visita-una-pagina" tabindex="-1">Paso 1: Visita una página <a class="header-anchor" href="#paso-1-visita-una-pagina" aria-label="Permalink to &quot;Paso 1: Visita una página&quot;">​</a></h2><p>Primero, visitemos una página web. Visitaremos nuestra aplicación <a href="https://docs.cypress.io/examples/examples/applications#Kitchen-Sink" target="_blank" rel="noreferrer">Kitchen Sink</a> en este ejemplo para que pueda probar Cypress sin tener que preocuparse por encontrar una página para probar.</p><p>Podemos pasar la URL que queremos visitar a <a href="https://docs.cypress.io/api/commands/visit" target="_blank" rel="noreferrer"><code>cy.visit()</code></a>. Reemplacemos nuestra prueba anterior con la siguiente que realmente visita una página:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">describe</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My First Test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">it</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Visits the Kitchen Sink</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">visit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.cypress.io</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>Guarde el archivo y vuelva a cambiar a Cypress Test Runner. Es posible que notes algunas cosas:</p><ol><li>El <a href="https://docs.cypress.io/guides/core-concepts/cypress-app#Command-Log" target="_blank" rel="noreferrer">registro de comandos</a> ahora muestra la nueva acción <code>VISIT</code>.</li><li>La aplicación Kitchen Sink se cargó en el panel de <a href="https://docs.cypress.io/guides/core-concepts/cypress-app#Overview" target="_blank" rel="noreferrer">Vista Previa de la Aplicación</a>.</li><li>La prueba es verde, aunque no hicimos afirmaciones.</li><li>La <code>VISIT</code> muestra un <strong>estado pendiente azul</strong> hasta que la página termina de cargarse.</li></ol><p>Si esta solicitud hubiera regresado con un código de estado que no es <code>2xx</code>, como <code>404</code> o <code>500</code>, o si hubiera un error de JavaScript en el código de la aplicación, la prueba habría fallado.</p><video controls><source src="`+i+`"></video><div class="info custom-block"><p class="custom-block-title">Probar Aplicaciones Que No Controlas</p><p>En esta guía estamos probando nuestra aplicación de ejemplo: <a href="https://example.cypress.io" target="_blank" rel="noreferrer">https://example.cypress.io</a>. Sin embargo, debe pensar detenidamente en probar aplicaciones que <strong>no controla</strong>. ¿Por qué?</p><ul><li>Tienen el potencial de cambiar en cualquier momento, lo que romperá las pruebas.</li><li>Pueden hacer pruebas A/B, lo que hace que sea imposible obtener resultados consistentes.</li><li>Pueden detectar que usted es un script y bloquear su acceso.</li><li>Es posible que tengan funciones de seguridad habilitadas que impiden que Cypress funcione.</li></ul><p>En términos generales, el objetivo de Cypress es ser una herramienta que use todos los días para crear y probar sus propias aplicaciones, no una herramienta de automatización web de propósito general. Sin embargo, esta es una guía más que una regla estricta y hay varias buenas razones para hacer excepciones para ciertos tipos de aplicaciones:</p><ul><li>Están diseñados específicamente para integrarse con terceros, p. Proveedores de SSO.</li><li>Le brindan un servicio complementario, p. Paneles de control SaaS o analítica.</li><li>Reutilizan su contenido o proporcionan complementos para una aplicación que usted controla.</li></ul><p>La clave aquí es sopesar cuidadosamente los beneficios de las pruebas en cuestión frente a la posible interrupción y escamas que pueden introducir este tipo de pruebas.</p></div><h2 id="paso-2-consulta-de-un-elemento" tabindex="-1">Paso 2: Consulta de un elemento <a class="header-anchor" href="#paso-2-consulta-de-un-elemento" aria-label="Permalink to &quot;Paso 2: Consulta de un elemento&quot;">​</a></h2><p>Ahora que tenemos una página cargada, debemos realizar alguna acción en ella. ¿Por qué no hacemos clic en un enlace de la página? Suena bastante fácil, vamos a buscar uno que nos guste... ¿qué tal el <code>type</code>?</p><p>Para encontrar este elemento por su contenido, usaremos <a href="https://docs.cypress.io/api/commands/contains" target="_blank" rel="noreferrer">cy.contains()</a>.</p><p>Vamos a agregarlo a nuestra prueba y ver qué sucede:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">describe</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My First Test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">it</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">finds the content &quot;type&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">visit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.cypress.io</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">contains</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>Nuestra prueba ahora debería mostrar <code>CONTAINS</code> en el registro de comandos y seguir siendo verde.</p><p>¡Incluso sin agregar una afirmación, sabemos que todo está bien! Esto se debe a que muchos de los comandos de Cypress están diseñados para fallar si no encuentran lo que esperan encontrar. Esto se conoce como una <a href="https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Default-Assertions" target="_blank" rel="noreferrer">Afirmación Predeterminada</a>.</p><p>Para verificar esto, reemplace el <code>tipe</code> con algo que no esté en la página, como <code>hipe</code>. Notará que la prueba se vuelve roja, ¡pero solo después de unos 4 segundos!</p><p>¿Puedes ver lo que está haciendo Cypress debajo del capó? Está esperando y reintentando automáticamente porque espera que el contenido <strong>finalmente</strong> se encuentre en el DOM. ¡No falla inmediatamente!</p><p><img src="`+u+'" alt="first-test-failing-contains.e30e9e1"></p><div class="warning custom-block"><p class="custom-block-title">Mensajes de Error</p><p>En Cypress nos hemos ocupado de escribir cientos de mensajes de error personalizados que intentan explicar claramente qué salió mal. En este caso, Cypress agotó el tiempo de espera para volver a intentar encontrar el contenido exagerado en toda la página. Para obtener más información sobre la visualización del error, lea sobre <a href="https://docs.cypress.io/guides/guides/debugging#Errors" target="_blank" rel="noreferrer">Errores de Depuración</a>.</p></div><p>Antes de agregar otro comando, hagamos que esta prueba vuelva a pasar. Reemplace el <code>hipe</code> con el <code>type</code>.</p><video controls><source src="'+d+'"></video><h2 id="paso-3-haga-clic-en-un-elemento" tabindex="-1">Paso 3: Haga clic en un elemento <a class="header-anchor" href="#paso-3-haga-clic-en-un-elemento" aria-label="Permalink to &quot;Paso 3: Haga clic en un elemento&quot;">​</a></h2>',58),b=[m];function F(g,D,h,f,C,A){return a(),s("div",null,b)}const _=e(y,[["render",F]]);export{q as __pageData,_ as default};