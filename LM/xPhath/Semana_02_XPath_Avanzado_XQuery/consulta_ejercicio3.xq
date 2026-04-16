(: EJERCICIO 3: ESCENARIO REAL - GENERADOR DE RANKING TOP VENTAS :)

(: El equipo de marketing necesita un feed XML de los libros más vendidos, descartando los que cuesten 20€ o menos para la portada premium. :)

(: TODO Paso 1: Plantea iterar los libros base dentro de todo el documento :)
for $libro in doc("datos.xml")//libro

(: TODO Paso 2: Filtra con 'where' únicamente aquellos libros donde el nodo de precio sea superior a 20 :)
where $libro/precio > 20

(: TODO Paso 3: Ordena usando 'order by' guiándote por el número de ventas de mayor a menor (descendente) :)
order by $libro/ventas descending

(: TODO Paso 4: Devuelve un nodo inventado puro XML llamado <top_ventas> conteniendo dinámicamente SOLO el título y sus ventas del libro procesado :)
return 
    <top_ventas>
        <!-- Evaluamos dinámicamente con llaves e inyectamos: -->
        {$libro/titulo}
        {$libro/ventas}  
    </top_ventas>
