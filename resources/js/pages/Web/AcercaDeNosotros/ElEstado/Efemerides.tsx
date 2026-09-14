import { Head } from '@inertiajs/react';
import { useState } from 'react';
import WebLayout from '@/layouts/WebLayout';
import AcercaDeNosotrosNav from '@/components/Web/AcercaDeNosotrosNav';
import { CalendarDays, ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Efemerides() {
    type Efemeride = [string, string[]];

    type Mes = {
        nombre: string;
        efemerides: Efemeride[];
    };

    const meses = [
        {
            nombre: 'Enero',
            efemerides: [
                ['1 de enero', ['Año Nuevo.', 'Día Internacional de la Paz.', 'Por disposición del presidente del Estado Bermúdez, el General Barcelonés Nicolás Rolando, llamado el Guzmán Blanco de Oriente, crea la Banda Musical del actual estado Anzoátegui. Días más tarde, con la primera presentación en público bajo la dirección de Don Nicolás Constantino, quedó oficialmente inaugurada (1895).', 'El Gobernador Dr. Alí Montilla Carreyó decreta la creación de la Escuela de Teatro “Teófilo Leal”, bajo la dirección del profesor y actor Luis Julio Bermúdez (1962).', 'Se nacionaliza la Industria Petrolera Venezolana (1976).']],
                ['2 de enero', ['El Galeno Ovidio González, ante un nutrido público, es juramentado como el primer Gobernador electo por el voto popular en el estado Anzoátegui (1990).']],
                ['6 de enero', ['Se inaugura el Puente de Angostura sobre el río Orinoco (1967).', 'Día de los Reyes Magos.', 'Día Nacional del Deporte.']],
                ['10 de enero', ['Siembra de Ezequiel Zamora (1860) | Militar y político venezolano.', 'Día Mundial de las Aves.']],
                ['12 de enero', ['Nace Juana Ramírez La Avanzadora (1790) | Militar y heroína venezolana.', 'Siembra de Diego Bautista Urbaneja (1856) | Abogado y militar venezolano.']],
                ['13 de enero', ['Día Mundial de la Lucha contra la Depresión.', 'Día del Artista Nacional.']],
                ['15 de enero', ['Día de la Maestra y el Maestro.', 'Día de la y el Compositor.']],
                ['20 de enero', ['Día del Pediatra.']],
                ['21 de enero', ['Día Internacional del Abrazo.', 'Un grupo de estudiantes del Liceo Briceño Méndez del Tigre marcha desde la población de El Tigre hasta la Plaza Bolívar contra el dictador Marcos Pérez Jiménez (1958).']],
                ['22 de enero', ['En el Hospital Luis Razetti de Barcelona, el ministro de Sanidad Dr. Antonio Parra León, acompañado de representantes del Ejecutivo Regional, inaugura la primera Unidad Cardiopulmonar del país (1977).']],
                ['23 de enero', ['Fin de la dictadura de Marcos Pérez Jiménez. A la una de la madrugada, el Padre Quinto Antonio de la Bianca sube a la torre de la Catedral y, utilizando un altoparlante, anuncia al pueblo de Puerto La Cruz: “¡Somos Libres!”, tras la huida del tirano Gral. Marcos Pérez Jiménez (1958).', 'Día Nacional de la Democracia.']],
                ['24 de enero', ['Muere el Prof. Luis Galves Moreral, uno de los fundadores del Diario El Tiempo. En 1958 entró a trabajar en el Diario “La Voz del Caribe”, más tarde fue director del Diario La Prensa y fundador del desaparecido Diario “Barcelona” (1987).']],
                ['25 de enero', ['El Gobernador del estado Dr. Francisco Arreaza Arreaza, acompañado del presidente del Consejo Municipal Dr. Oscar Falcón Briceño, inaugura la Plaza Enrique Pérez Valencia, destacado poeta y compositor del Himno del Estado (1973).']],
                ['26 de enero', ['Mediante la Gaceta Oficial N° 11.533 es nombrado el joven Rómulo Gallegos director del Colegio Federal de Barcelona (1909).', 'Es inaugurada la Biblioteca Pública Dr. Julián Temístocles Maza (1944).', 'Día Mundial de la Educación Ambiental.']],
                ['27 de enero', ['Nace en la ciudad de Barcelona el Gral. Nicolás Rolando Monteverde (1857).']],
                ['28 de enero', ['El presidente Raúl Leoni realiza una gira en el estado Anzoátegui, inaugurando varias obras: la Avenida Winston Churchill de El Tigre, el acueducto de Guanta, 400 viviendas ubicadas en el barrio Palotal de Barcelona, el auditorio de la Casa Sindical, entre otras. Igualmente colocó la primera piedra del Polideportivo Luis Ramos (1965).', 'Día Nacional del Cine.']],
                ['29 de enero', ['Muere en París el poeta y Gral. Baltazar Vallenilla Lanz, primer Gobernador del estado Anzoátegui (1913).', 'Día del Trabajador Social.']],
                ['30 de enero', ['Se inaugura en Puerto La Cruz el Colegio Salesiano “Pío XII”. El acto lo presidió el Gobernador del estado Dr. Manuel José Arreaza y la bendición la impartió Monseñor José Humberto Paparoni (1956).', 'Día Escolar de la No Violencia y la Paz.']],
                ['31 de enero', ['Es nombrado oficialmente párroco de Chamariapa, en la población de Cantaura, Fray Nicolás de Odena, quien por más de 50 años estuvo al frente de dicha parroquia (1844).', 'Muere José Félix Ribas (1815) | Militar venezolano.']],
            ],
        },
        {
            nombre: 'Febrero',
            efemerides: [
                ['1 de febrero', ['Nace Ezequiel Zamora (1817) | Militar y político venezolano.', 'Llega a Barcelona Don Rómulo Gallegos para hacerse cargo del Colegio Nacional de Barcelona (1912).']],
                ['2 de febrero', ['Gracias a la iniciativa de los miembros del Club de Leones de Barcelona, el Gobernador del estado Dr. Tabata Guzmán y el ministro de Sanidad Dr. Antonio Parra León dejan inaugurado el asilo de ancianos “Dr. José Gregorio Hernández”, ubicado en el sector Pica de Maurica de Barcelona (1976).', 'Día de la Virgen de La Candelaria.', 'Aniversario de la juramentación del Comandante Hugo Chávez Frías como Presidente de la República (1999).']],
                ['3 de febrero', ['Nacimiento del Mariscal Antonio José de Sucre (1795) | Militar y político venezolano.', 'Aniversario de la fundación del Teatro Cajigal en Barcelona. El Barcelonés Gral. Nicolás Rolando Monteverde, Presidente del Gran Estado Bermúdez, inaugura el Teatro Cajigal de Barcelona conmemorando el centenario del Gran Mariscal de Ayacucho Antonio José de Sucre (1895).', 'El profesor Juan Medina Lugo es juramentado como Gobernador del Estado Anzoátegui (1984).']],
                ['4 de febrero', ['Nuestro héroe epónimo José Antonio Anzoátegui, al lado del Gral. José Antonio Páez, participa en el combate de Carvajal, escenificado en el paso Marrereño, en el hoy Estado Apure, donde las tropas realistas del Gral. Pablo Morillo fueron vencidas por el ejército patriota (1819).', 'El Gobernador Dr. Rafael A. Fernández Padilla inaugura 48 km de recorrido del tramo vial agrícola Uverito–Santa Cruz, para unir estas importantes comunidades agropecuarias del Municipio Monagas (1965).', 'Día Mundial contra el Cáncer.', 'Día de la Dignidad Nacional.']],
                ['5 de febrero', ['En la ciudad de Caracas, como sucesor de su hermano Gral. José Tadeo Monagas, se juramenta el Gral. José Gregorio Monagas como nuevo presidente de la República para el período 1851-1859, convirtiéndose en el primer mandatario nacional nacido en el hoy Edo. Anzoátegui, recordado como el “Libertador de los esclavos” (1851).']],
                ['6 de febrero', ['Con la celebración de un concurrido acto llevado a cabo en la zona Industrial Los Montones, en las afueras de Barcelona, el Presidente Raúl Leoni, acompañado del Gobernador José Tomás Heredia, Ministro de Obras Públicas Leopoldo Sucre Figarella y Juan José Domínguez, Ministro de Comunicaciones, dan el pitazo para la construcción de la autopista Barcelona–El Tigre (1968).']],
                ['7 de febrero', ['En el populoso sector de P.L.C. Chuparín el Gobernador Ing. Diego Peñalver Gómez inaugura el Grupo Escolar “Tomás Celestino Mogna”, bautizado para honrar la memoria de un distinguido educador, escritor y periodista de la urbe Barcelonesa (1979).']],
                ['8 de febrero', ['Por resolución Presidencial, el pueblo de Caigua pasa a formar parte de la jurisdicción barcelonesa al ser separado oficialmente de “El Pilar” (1838).']],
                ['9 de febrero', ['El joven barcelonés José Antonio Anzoátegui participa en la histórica Batalla de Barquisimeto, donde demostró una vez más su destreza y temple militar al enfrentarse con la tropa del ejército realista (1814).']],
                ['10 de febrero', ['Siembra de Juan Manuel Cajigal (1856) | Ingeniero, militar, matemático y periodista venezolano.']],
                ['11 de febrero', ['Muere en Barcelona, en una casa ubicada en Palotal, identificada con el número 4-28, el popular personaje Jesús Reyes, conocido en la urbe como Bom-Bom (1980).']],
                ['12 de febrero', ['Aniversario de la fundación de Barcelona. En la margen izquierda del Río Neverí, el conquistador Don Juan de Urpín, tras su retirada de la población de los Cumanagotos, funda el pueblo de Santa Eulalia de la Nueva Barcelona, dando paso posteriormente a la fundación definitiva de la Capital del Estado Anzoátegui (1638).', 'Día Nacional del Nadador.', 'Día de la Juventud.', 'Batalla de la Victoria (1902).']],
                ['13 de febrero', ['En el colonial pueblo de San José de Curataquiche se enfrentan las tropas patriotas comandadas por el General José T. Monagas y las realistas lideradas por José Tomás Morales (1817).', 'Día Nacional del Guardaparques.', 'Día Mundial de la Radio.']],
                ['14 de febrero', ['Una real cédula intenta anular la fundación de la Nueva Barcelona del Dulce Nombre de Jesús, hoy simplemente Barcelona (1673).', 'Día del Amor y la Amistad.']],
                ['15 de febrero', ['Después de tres años de labores, se culminan los trabajos de construcción de la primera etapa de la línea férrea Puerto de Guanta–Capiricual, con 18 kilómetros de recorrido entre el Puerto de Guanta y la estación de Palotal (1892).', 'Día Internacional contra el Cáncer Infantil.']],
                ['16 de febrero', ['Nace en el pueblo de San Pablo el Educador, Agricultor, Empresario e Historiador Miguel José Romero Bastardo (1828).', 'Siembra de Alí Primera (1985) | Cantante, poeta y activista político venezolano.']],
                ['17 de febrero', ['El Morro de Barcelona es fuertemente atacado por las tropas realistas, que logran apoderarse de ese importante punto estratégico y detener una columna del ejército patriota dirigida por el Libertador Simón Bolívar, quien posteriormente recuperó dicha posición (1817).']],
                ['18 de febrero', ['El Presidente de la República Doctor Rafael Caldera, acompañado del empresario Eugenio Mendoza, Presidente de la C.A. Venezolana de Cementos “VENCEMOS”, el Gobernador del Estado Anzoátegui Dr. Francisco Arreaza Arreaza y otras personalidades, inauguran la planta Pertigalete II (1974).']],
                ['19 de febrero', ['Tras culminar sus estudios en la Universidad Central de Venezuela, el joven trovador José Tadeo Calatrava, nativo de Aragua de Barcelona, recibe el título de Doctor en Ciencias Políticas (1907).', 'Los restos mortales del poeta y estadista Baltazar Vallenilla Lanz son trasladados desde Francia a Caracas (1913).', 'Muere en Caracas la poetisa cantaurense Mercedes Guevara Rojas de Pérez Freites (1921).']],
                ['20 de febrero', ['Aniversario de la fundación de Aragua de Barcelona (1734).', 'El general José Ruperto Monagas, nativo de Aragua de Barcelona, es nombrado presidente provisional de Venezuela (1869).']],
                ['21 de febrero', ['Mediante disposición número 12 del Ejecutivo Regional, encabezado por Guillermo Álvarez Bajares, es creado el Cuerpo de Bomberos del estado Anzoátegui (1980).', 'Día Internacional del Guía de Turismo.']],
                ['22 de febrero', ['Las tropas patrióticas se atrincheran nuevamente en la Casa Fuerte y en la Catedral local. El jefe de la escuadra realista José Guerrero se apodera nuevamente de la guarnición del Morro de Barcelona gracias a refuerzos traídos desde Cumaná (1817).']],
                ['23 de febrero', ['Aniversario de la fundación de la ciudad de El Tigre. Nace una nueva ciudad y comienza la actividad petrolera en el estado con los trabajos de perforación del pozo OG-1 (1933).']],
                ['24 de febrero', ['Por disposición del Ejecutivo del estado Anzoátegui se crea una comisión y una junta administradora para la formación de la actual Biblioteca Pública Central de Barcelona “Julián Temístocles Maza” (1944).']],
                ['25 de febrero', ['El periódico “Voz Caribe”, fundado en 1951, deja de ser un semanario y pasa a convertirse en diario (1954).', 'El Gobernador del estado Anzoátegui profesor Juan Medina Lugo inaugura el monumento cincuentenario de la ciudad de El Tigre (1958).']],
                ['26 de febrero', ['En el complejo turístico El Morro de Puerto La Cruz, el gobernador Otto Padrón Guevara y el presidente de Caztor Freddy Mogna Cruz inauguran el sector C de las Casas Bote (1987).']],
                ['27 de febrero', ['El día que nació la Revolución Bolivariana.', '27 de febrero de 1989: El Caracazo.', 'Muere en Barcelona Anita Medina, una de las mujeres más longevas de las que se tengan noticias en la región (1972).']],
                ['28 de febrero', ['Por disposición del Rey de España, el gobernador de la Provincia de Cumaná Don Carlos Sucre funda el pueblo de Nuestra Señora de Belén de Aragua de Barcelona (1734).', 'Primera Batalla de San Mateo (1814).', 'Siembra de Simón Rodríguez (1854) | Educador, filósofo, escritor y político venezolano.', 'Es creado el Concejo Estadal de Turismo del Estado Anzoátegui (1987).']],
            ],
        },
        {
            nombre: 'Marzo',
            efemerides: [
                ['1 de marzo', ['Día Mundial del Reciclador de Base.', 'Día Internacional de la Protección Civil.']],
                ['3 de marzo', ['Día Mundial de la Vida Silvestre.', 'Día Mundial de la Naturaleza.']],
                ['5 de marzo', ['Siembra del Comandante Hugo Chávez (2013) | Militar y político venezolano.', 'Día del Campesino.']],
                ['7 de marzo', ['Nace Gustavo Pereira (1941) | Poeta y crítico literario venezolano.']],
                ['8 de marzo', ['Día Internacional de la Mujer.']],
                ['10 de marzo', ['Nace Juan José Landaeta (1780) | Compositor venezolano. Autor de la música del Himno Nacional de Venezuela.', 'Nace José María Vargas (1786) | Médico, científico y catedrático venezolano.', 'Día del Médico.']],
                ['13 de marzo', ['Día de la Industria Nacional.']],
                ['14 de marzo', ['Día Nacional del Pescador y el Pescador Artesanal.']],
                ['15 de marzo', ['El Joropo venezolano es declarado Patrimonio Cultural de la Nación (2014).']],
                ['17 de marzo', ['Día Mundial del Mar.']],
                ['18 de marzo', ['Día Nacional del Niño Indígena.']],
                ['20 de marzo', ['Día Internacional de la Felicidad.']],
                ['22 de marzo', ['Día Mundial del Agua.']],
                ['24 de marzo', ['Siembra de José Antonio Abreu (2018) | Músico, economista, político y educador venezolano.']],
                ['26 de marzo', ['Aniversario del Plan Más Años, Más Amor (2024).']],
                ['27 de marzo', ['Día Internacional del Teatro.']],
                ['28 de marzo', ['Día Nacional del Patrimonio Cultural.']],
            ],
        },
        {
            nombre: 'Abril',
            efemerides: [
                ['1 de abril', ['Día Mundial de la Educación.']],
                ['2 de abril', ['Día Mundial de la Concientización sobre el Autismo.', 'Día Internacional del Libro Infantil y Juvenil.']],
                ['5 de abril', ['Siembra de Rómulo Gallegos.']],
                ['6 de abril', ['Día Internacional del Deporte para el Desarrollo y la Paz.', 'Día Mundial de la Actividad Física.']],
                ['7 de abril', ['Día Mundial de la Salud.', 'Aniversario de la fundación del municipio Manuel Ezequiel Bruzual (1594).']],
                ['10 de abril', ['Día Mundial de la Ciencia y la Tecnología.']],
                ['11 de abril', ['Aniversario del Golpe de Estado contra el Comandante Hugo Chávez (2002).']],
                ['12 de abril', ['Día del Obstetra.']],
                ['13 de abril', ['Día de la Milicia Nacional Bolivariana del Pueblo en Armas y de la Revolución de Abril.', 'Día de la Dignidad Nacional. ¡Todo 11 tiene su 13!']],
                ['14 de abril', ['Aniversario de la elección de Nicolás Maduro como Presidente de Venezuela (2013).', 'El Comandante Hugo Chávez retoma la presidencia de Venezuela después del fracasado golpe de Estado del 11 de abril de 2002.', 'Día del Panamericanismo.']],
                ['15 de abril', ['Día Mundial del Ciclista.', 'Día Mundial del Arte.']],
                ['16 de abril', ['Día Mundial contra la Esclavitud Infantil.', 'Día Mundial del Emprendimiento.', 'Aniversario de la creación de la Misión Barrio Adentro (2003).']],
                ['17 de abril', ['Día Internacional de la Lucha Campesina.']],
                ['18 de abril', ['Día de la Ciudadanía.', 'Día Internacional de los Monumentos y Sitios.']],
                ['19 de abril', ['Proclamación de la Independencia de Venezuela.']],
                ['21 de abril', ['Día Mundial de la Creatividad y la Innovación.']],
                ['22 de abril', ['Día de la Tierra.', 'Siembra de Luis Beltrán Prieto Figueroa (1993).']],
                ['24 de abril', ['Día del Caficultor.']],
                ['25 de abril', ['Día del Bioanalista.', 'Día Mundial contra el Paludismo.', 'Día Internacional contra el Maltrato Infantil.']],
                ['27 de abril', ['Día Mundial del Diseñador Gráfico.', 'Siembra del Profesor Aristóbulo Istúriz (2020).']],
                ['28 de abril', ['Día de la Industria Nacional del Hierro y el Petróleo.']],
                ['29 de abril', ['Día Internacional de la Danza.']],
            ],
        },
        {
            nombre: 'Mayo',
            efemerides: [
                ['1 de mayo', ['Día Internacional del Trabajador.']],
                ['2 de mayo', ['Día Internacional contra el Acoso Escolar.']],
                ['3 de mayo', ['Día de la Cruz de Mayo.']],
                ['6 de mayo', ['Día del Reportero Gráfico.']],
                ['7 de mayo', ['Siembra de Fernando Peñalver (1837) | Político y estadista venezolano.', 'Aniversario de la fundación del municipio Anaco (1944).', 'Nace José Antonio Abreu.']],
                ['10 de mayo', ['Día de la Afrovenezolanidad (2005).']],
                ['11 de mayo', ['Día de las Madres.']],
                ['12 de mayo', ['Día Internacional de las Enfermeras.']],
                ['14 de mayo', ['Fallece Luis Razetti (1932) | Médico venezolano.', 'Día Nacional de la Dramaturgia.']],
                ['15 de mayo', ['Día Internacional de la Familia.']],
                ['16 de mayo', ['Día del Compositor Venezolano.', 'Día Internacional de la Convivencia en Paz.']],
                ['17 de mayo', ['Día Nacional de la Poesía.', 'Día Nacional contra la Homofobia, Transfobia y Bifobia.', 'Día Internacional del Reciclaje.', 'Día Mundial de las Telecomunicaciones y la Sociedad de la Información.']],
                ['18 de mayo', ['Nace Josefa Camejo (1791) | Heroína venezolana.', 'Día Internacional de los Museos.']],
                ['19 de mayo', ['Día Mundial del Médico de Familia.']],
                ['20 de mayo', ['Día de la Radio en Venezuela.', 'Día del Publicista.']],
                ['21 de mayo', ['Día Mundial de la Diversidad Cultural para el Diálogo y el Desarrollo.', 'Siembra de Andrés Eloy Blanco.']],
                ['23 de mayo', ['Se declara la orquídea como flor nacional de Venezuela (1951).', 'Se declara el turpial como ave nacional de Venezuela (1958).']],
                ['24 de mayo', ['Día Internacional de las Mujeres por la Paz y el Desarme.']],
                ['25 de mayo', ['Día del Himno Nacional.']],
                ['28 de mayo', ['Día Mundial de la Nutrición.']],
                ['29 de mayo', ['Se declara el Araguaney como Árbol Nacional (1948).', 'Día Nacional del Adulto Mayor.']],
                ['31 de mayo', ['Cumpleaños de Luis Marcano, Gobernador del estado Anzoátegui.']],
            ],
        },
        {
            nombre: 'Junio',
            efemerides: [
                ['2 de junio', ['Siembra de Luisa Cáceres de Arismendi (1866) | Heroína venezolana.']],
                ['4 de junio', ['Siembra de Antonio José de Sucre (1830) | Militar y político venezolano.']],
                ['5 de junio', ['Día Mundial del Medio Ambiente.']],
                ['6 de junio', ['Día de la Radiodifusión.']],
                ['8 de junio', ['Día Mundial del Terapista del Lenguaje.', 'Día Mundial de los Océanos.']],
                ['12 de junio', ['Día Mundial contra el Trabajo Infantil.']],
                ['13 de junio', ['Día del Ganadero Venezolano.', 'Día de San Antonio de Padua.']],
                ['14 de junio', ['Día Mundial del Donante de Sangre.']],
                ['15 de junio', ['Día Mundial de Toma de Conciencia de Abuso y Maltrato en la Vejez.', 'Día del Padre.']],
                ['18 de junio', ['Día del Orgullo Autista.']],
                ['21 de junio', ['Día del Apicultor.', 'Día Mundial de la Patineta.', 'Día de la Marina Mercante en Venezuela.', 'Aniversario de la Fundación del municipio Guanta (1991).', 'Aniversario de la Fundación del municipio Miranda (1744).', 'Siembra de Fabrico Ojeda.']],
                ['23 de junio', ['Día del Abogado.']],
                ['24 de junio', ['Batalla de Carabobo (1821).', 'Muere Pedro Camejo, conocido como el Negro Primero (1821) | Militar venezolano.', 'Día del Ejército Nacional de Venezuela.']],
                ['25 de junio', ['Día de la Gente de Mar.']],
                ['26 de junio', ['Día Mundial de la Lucha contra las Drogas.']],
                ['27 de junio', ['Día Nacional de la y el Periodista.', 'Aniversario de la Fundación del municipio Mac Gregor (1995).', 'Aniversario de la Fundación del municipio Capistrano (1995).', 'Aniversario de la Fundación del municipio Santa Ana (1995).']],
                ['28 de junio', ['Día Internacional de la Diversidad Sexual.', 'Día Nacional del Teatro.', 'Día Nacional del Telecomunicador.']],
                ['29 de junio', ['Paso a la inmortalidad del Dr. José Gregorio Hernández.', 'Día Mundial del Árbol.']],
                ['30 de junio', ['Día Internacional del Parlamentarismo.', 'Día Mundial de las Redes Sociales.']],
            ],
        },
        {
            nombre: 'Julio',
            efemerides: [
                ['1 de julio', ['Aniversario de la creación de la Misión Robinson (2003).']],
                ['5 de julio', ['Día de la Independencia de Venezuela.', 'Siembra de Josefa Camejo (1862) | Heroína venezolana.']],
                ['10 de julio', ['Nace Argelia Laya (1926) | Docente, filósofa y política venezolana.']],
                ['11 de julio', ['Nace Eneas Perdomo (1930) | Cantante y compositor venezolano.']],
                ['12 de julio', ['Nace Gualberto Ibarreto (1947) | Músico y cantante venezolano de música popular.']],
                ['13 de julio', ['Siembra de José María Vargas (1854) | Médico, científico y catedrático venezolano.']],
                ['15 de julio', ['Siembra de José Gregorio Monagas (1858) | Militar y político venezolano.', 'Nace Argimiro Gabaldón (1919) | Pintor y poeta venezolano.']],
                ['16 de julio', ['Día del Defensor Público.', 'Día Nacional del Policía en Venezuela.', 'Día del Fútbol en Venezuela.', 'Día de la Virgen del Carmen.']],
                ['20 de julio', ['Día Internacional del Ajedrez.', 'Día de la Niña y el Niño.']],
                ['21 de julio', ['Día Mundial del Perro.', 'Día del Médico Veterinario.']],
                ['24 de julio', ['Nace El Libertador Simón Bolívar (1783) | Político y militar venezolano.', 'Día de la Armada Venezolana.']],
                ['25 de julio', ['Día Internacional de la Mujer Afrodescendiente.']],
                ['26 de julio', ['Día del Abuelo.']],
                ['27 de julio', ['Día Nacional del Bibliotecólogo y Archivólogo.']],
                ['28 de julio', ['Siembra de Antonio Guzmán Blanco (1899) | Militar y político venezolano.', 'Nace Hugo Rafael Chávez Frías (1954) | Militar y político venezolano.']],
                ['31 de julio', ['Día Mundial de los Guardaparques y los Guardabosques.']],
            ],
        },
        {
            nombre: 'Agosto',
            efemerides: [
                ['1 de agosto', ['Día Mundial de la Alegría.', '1 al 7 de agosto: Semana Mundial de la Lactancia Materna.']],
                ['2 de agosto', ['Nace Rómulo Gallegos (1884) | Novelista y político venezolano.']],
                ['3 de agosto', ['Día de la Bandera Nacional.']],
                ['4 de agosto', ['Día de la Guardia Nacional Bolivariana.']],
                ['6 de agosto', ['Nace Andrés Eloy Blanco (1896) | Poeta, escritor, humorista y político venezolano.']],
                ['7 de agosto', ['Batalla de Boyacá (1819).']],
                ['8 de agosto', ['Día Internacional del Gato.', 'Nace Alberto Lovera (1923).']],
                ['9 de agosto', ['Día Internacional de los Pueblos Indígenas.']],
                ['10 de agosto', ['Nace Juan Manuel Cajigal (1803) | Ingeniero, militar, matemático y periodista venezolano.']],
                ['12 de agosto', ['Día Internacional de la Juventud.']],
                ['15 de agosto', ['Promulgación de la Ley Orgánica de Educación (2009).']],
                ['19 de agosto', ['Día Mundial del Fotógrafo.', 'Día Mundial de la Fotografía.']],
                ['20 de agosto', ['Día Nacional del Bombero.', 'Aniversario de la Fundación del Municipio Freites (1855).']],
                ['22 de agosto', ['Día del Folklore.']],
                ['24 de agosto', ['Día de los Parques Nacionales.']],
                ['31 de agosto', ['Día Nacional del Perro Mucuchíes.', 'Día Internacional del Afrodescendiente.']],
            ],
        },
        {
            nombre: 'Septiembre',
            efemerides: [
                ['2 de septiembre', ['Día de la Industria.']],
                ['4 de septiembre', ['Día del Empleado Público.', 'Día Internacional del Taekwondo.', 'Día Mundial de la Salud Sexual.']],
                ['5 de septiembre', ['Día de la Mujer Indígena.']],
                ['6 de septiembre', ['Simón Bolívar escribe la Carta de Jamaica (1815).']],
                ['7 de septiembre', ['Día de los Derechos Cívicos de la Mujer.']],
                ['8 de septiembre', ['Día Mundial de la Alfabetización.', 'Día de la Virgen del Valle.']],
                ['9 de septiembre', ['Día Mundial de la Agricultura.']],
                ['10 de septiembre', ['Nace Luis Razetti (1862) | Médico venezolano.']],
                ['11 de septiembre', ['Nace Jacinto Convit (1913) | Médico y científico venezolano.', 'Día de la Virgen de Coromoto.']],
                ['15 de septiembre', ['Día Mundial de las Playas.']],
                ['18 de septiembre', ['Siembra de Armando Reverón (1954).']],
                ['19 de septiembre', ['Nace José Félix Ribas (1775) | Militar venezolano.']],
                ['21 de septiembre', ['Día Internacional de la Paz.']],
                ['22 de septiembre', ['Día Nacional del Electricista.']],
                ['25 de septiembre', ['Nace Luisa Cáceres de Arismendi (1799).']],
                ['27 de septiembre', ['Día Mundial del Turismo.']],
                ['29 de septiembre', ['Día de la Aviación Civil Venezolana.']],
            ],
        },
        {
            nombre: 'Octubre',
            efemerides: [
                ['1 de octubre', ['Día Internacional de la Música.']],
                ['3 de octubre', ['Se crea el Instituto Nacional de Parques de Venezuela (Inparques) (1973).']],
                ['6 de octubre', ['Día Internacional del Agua.']],
                ['7 de octubre', ['Hugo Chávez es reelecto como presidente de Venezuela (2012).', 'Día de la Victoria Perfecta.']],
                ['8 de octubre', ['Día del Médico y la Médica Integral Comunitarios.']],
                ['10 de octubre', ['Día del Soldado Venezolano.']],
                ['12 de octubre', ['Día de la Resistencia Indígena.']],
                ['15 de octubre', ['Siembra de Andrés Bello (1865).']],
                ['16 de octubre', ['Día Mundial de la Alimentación.']],
                ['19 de octubre', ['Día Mundial contra el Cáncer de Mama.']],
                ['20 de octubre', ['Día del Pediatra.']],
                ['23 de octubre', ['Siembra de Juana Ramírez La Avanzadora (1856) | Militar y heroína venezolana.']],
                ['26 de octubre', ['Nace José Gregorio Hernández (1864) | Médico, científico, profesor y filántropo venezolano.']],
                ['28 de octubre', ['Nace Simón Rodríguez (1769) | Educador, escritor, ensayista y filósofo venezolano.']],
                ['29 de octubre', ['Día Nacional Escolar para la Prevención del Embarazo en Adolescentes.']],
                ['31 de octubre', ['Nace Alí Primera (1941) | Cantante, poeta y activista político venezolano.']],
            ],
        },
        {
            nombre: 'Noviembre',
            efemerides: [
                ['1 de noviembre', ['Día Mundial de la Ecología.', 'Día de Todos los Santos.']],
                ['2 de noviembre', ['Día de los Fieles Difuntos.']],
                ['5 de noviembre', ['Siembra del Cacique Guaicaipuro (1568) | Nativo indígena venezolano, jefe de varias tribus Caribes.']],
                ['7 de noviembre', ['Día del Obrero Educacional.', 'Día del Periodista Deportivo.']],
                ['8 de noviembre', ['Día Mundial de la Radiología.', 'Día Mundial del Urbanismo.']],
                ['9 de noviembre', ['Día Internacional del Inventor.', 'Día Internacional contra el Fascismo y el Antisemitismo.']],
                ['10 de noviembre', ['Día Mundial de la Ciencia para la Paz y el Desarrollo.']],
                ['14 de noviembre', ['Nace José Antonio Anzoátegui (1789) | Militar venezolano.']],
                ['15 de noviembre', ['Siembra de José Antonio Anzoátegui (1819) | Militar venezolano.']],
                ['17 de noviembre', ['Día del Economista.']],
                ['18 de noviembre', ['Día de la Alimentación en Venezuela.']],
                ['19 de noviembre', ['Día Internacional del Hombre.', 'Día Mundial para la Prevención del Abuso contra los Niños.']],
                ['20 de noviembre', ['Simón Bolívar decreta la octava estrella en la Bandera Nacional (1817).', 'El Sistema de Orquestas Infantiles y Juveniles de Venezuela recibe el certificado oficial del Récord Guinness como la orquesta más grande del mundo (2021).', 'Día Internacional de los Derechos del Niño o Día Universal del Niño.', 'Día Nacional de la Historia Insurgente y de los Derechos Soberanos del Pueblo Venezolano.']],
                ['21 de noviembre', ['Se funda la Universidad de Oriente (UDO) (1958).', 'Día Mundial de la Televisión.', 'Día del Estudiante Universitario.']],
                ['22 de noviembre', ['Día del Psicólogo en Venezuela.', 'Día Internacional del Músico.']],
                ['23 de noviembre', ['Nace Nicolás Maduro (1962) | Político, diplomático y dirigente sindical venezolano.', 'Día Nacional del Transportista.']],
                ['25 de noviembre', ['Siembra de Fidel Castro (2016) | Abogado, militar y político cubano.', 'Siembra de Diego Armando Maradona (2020) | Futbolista y director técnico argentino.', 'Día Internacional de la Eliminación de la Violencia contra la Mujer.']],
                ['27 de noviembre', ['Día de la Aviación Militar Nacional Bolivariana.']],
                ['29 de noviembre', ['Nace Andrés Bello (1781) | Filósofo, poeta, ensayista, educador y político venezolano.', 'Día del Escritor.', 'Día Internacional de Solidaridad con el Pueblo Palestino.', 'Día Internacional de las Defensoras de Derechos Humanos.']],
            ],
        },
        {
            nombre: 'Diciembre',
            efemerides: [
                ['2 de diciembre', ['Día Internacional para la Abolición de la Esclavitud.']],
                ['3 de diciembre', ['Día Internacional del Médico.', 'Aniversario de la gestión del gobernador Luis Marcano (2021).']],
                ['5 de diciembre', ['Batalla de Urica (1814).', 'Día del Profesor Universitario.', 'Día de la Sonrisa.', 'Día Internacional de los Voluntarios.', 'Día Mundial del Suelo.']],
                ['8 de diciembre', ['Nace el Cacique Guaicaipuro (1530) | Nativo indígena venezolano, jefe de varias tribus Caribes.', 'Día del Amor y la Lealtad al Comandante Hugo Chávez. El Presidente Hugo Chávez realiza su última aparición en público (2012).', 'Día de la Inmaculada Concepción.']],
                ['9 de diciembre', ['Batalla de Ayacucho (1824).']],
                ['10 de diciembre', ['Última Proclama del Libertador Simón Bolívar (1830).', 'Batalla de Santa Inés (1859).', 'Día Internacional de los Derechos Animales.', 'Día de la Declaración Universal de los Derechos Humanos.']],
                ['11 de diciembre', ['Día Nacional del Juez.', 'Día Nacional del Locutor.']],
                ['13 de diciembre', ['Siembra de Argimiro Gabaldón (1964) | Poeta, pintor y educador venezolano.']],
                ['15 de diciembre', ['Día del Poder Popular Constituyente.']],
                ['16 de diciembre', ['Nace Diego Bautista Urbaneja (1782) | Abogado y militar venezolano.', 'Aniversario de la fundación del Partido Socialista Unido de Venezuela PSUV (2006).']],
                ['17 de diciembre', ['Simón Bolívar decreta la creación de la Gran Colombia (1819).', 'Siembra del Libertador Simón Bolívar (1830) | Político y militar venezolano.', 'Aniversario de la fundación del municipio Píritu (1991).']],
                ['19 de diciembre', ['Aniversario de la creación del Parque Nacional Mochima (1973).']],
                ['20 de diciembre', ['Aniversario de la creación del Cuerpo de Policía Nacional Bolivariana CPNB (2009).']],
                ['25 de diciembre', ['Navidad.']],
                ['28 de diciembre', ['Día de los Santos Inocentes.']],
            ],
        },
    ];

    const [mesActivo, setMesActivo] = useState<string>('');

    return (
        <>
            <Head title="Efemérides" />
            <WebLayout>
                <AcercaDeNosotrosNav seccion="elEstado" activo="efemerides" />

                <div className="page-enter">
                    {/* HERO */}
                    <section className="relative overflow-hidden bg-blue-950">
                        <div className="absolute inset-x-0 bottom-0 flex h-2">
                            <div className="w-1/3 bg-blue-600" />
                            <div className="w-1/3 bg-yellow-400" />
                            <div className="w-1/3 bg-green-600" />
                        </div>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="relative max-w-4xl">
                                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">El Estado</p>
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Efemérides</h1>
                                <div className="mt-7 h-1 w-24 bg-yellow-400" />
                                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                    Fechas, acontecimientos y personajes que forman parte de la memoria histórica,
                                    cultural e institucional de Venezuela y del Estado Anzoátegui.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* INTRODUCCIÓN */}
                    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                        <CalendarDays className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Memoria histórica</p>
                                </div>
                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">Un recorrido por el calendario</h2>
                                <div className="mt-5 h-1 w-16 bg-yellow-400" />
                                <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600">
                                    Consulta las efemérides organizadas por mes y descubre acontecimientos históricos,
                                    fechas conmemorativas y personajes vinculados con la historia y la identidad venezolana
                                    y anzoatiguense.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Calendario</p>
                                <p className="mt-2 text-4xl font-bold text-slate-900">{meses.length}</p>
                                <p className="mt-1 text-sm text-slate-500">meses del año</p>
                            </div>
                        </div>
                    </section>

                    {/* MESES */}
                    <section id="meses" className="border-y border-slate-200 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                                {meses.map((mes, index) => {
                                    const activo = mesActivo === mes.nombre;

                                    return (
                                        <button
                                            key={mes.nombre}
                                            type="button"
                                            onClick={() => setMesActivo(activo ? '' : mes.nombre)}
                                            className={`rounded-xl border px-4 py- text-center shadow-sm transition-all duration-200 ${activo ? 'border-blue-200 bg-blue-50 shadow-md' : 'border-slate-200 bg-white hover:border-blue-100 hover:shadow-md'}`}
                                        >
                                            <div className="flex flex-col items-center gap-3">
                                                <span className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-colors ${activo ? 'bg-blue-700 text-white' : 'bg-blue-50 text-blue-700'}`}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <div>
                                                    <h3 className="font-bold text-slate-900">{mes.nombre}</h3>
                                                    <p className="mt-0.5 text-xs text-slate-500">{mes.efemerides.length} fechas</p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            <Accordion type="single" collapsible value={mesActivo} onValueChange={setMesActivo} className="mt-5">
                                {meses.map((mes) => (
                                    <AccordionItem key={mes.nombre} value={mes.nombre} className="border-0">
                                        <AccordionTrigger className="hidden" />
                                        <AccordionContent className="rounded-2xl border border-slate-200 bg-white px-5 py-7 shadow-md sm:px-7 lg:px-10">
                                            <div className="mb-7 flex items-center gap-3 border-b border-slate-100 pb-5">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                                                    <CalendarDays className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold text-slate-900">{mes.nombre}</h2>
                                                    <p className="text-sm text-slate-500">{mes.efemerides.length} fechas conmemorativas</p>
                                                </div>
                                            </div>

                                            <div className="space-y-7">
                                                {mes.efemerides.map(([fecha, eventos]) => (
                                                    <article key={fecha} className="border-l-2 border-blue-100 pl-5">
                                                        <p className="mb-3 text-sm font-bold text-blue-700">{fecha}</p>
                                                        <ul className="space-y-3">
                                                            {eventos.map((evento, i) => (
                                                                <li key={i} className="flex gap-3 text-sm leading-7 text-slate-600">
                                                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                                                                    <span>{evento}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </article>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>

                    {mesActivo && (
                        <button
                            type="button"
                            onClick={() => document.getElementById('meses')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            className="fixed bottom-6 right-4 z-50 flex items-center gap-2 rounded-full bg-blue-950 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-blue-800 sm:right-6"
                            title="Seleccionar otro mes"
                        >
                            <ChevronUp className="h-4 w-4" />
                            <span>Seleccionar mes</span>
                        </button>
                    )}

                    {/* CIERRE */}
                    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
                        <div className="rounded-2xl bg-blue-950 px-8 py-10 text-center shadow-sm sm:px-12">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">Memoria e identidad</p>
                            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
                                Las efemérides permiten preservar acontecimientos, personajes y fechas que forman parte de la
                                <strong className="font-semibold text-white"> memoria histórica y cultural</strong>, manteniendo
                                presente el legado que contribuye a la identidad de Venezuela y del Estado Anzoátegui.
                            </p>
                        </div>
                    </section>
                </div>
            </WebLayout>
        </>
    );
}
