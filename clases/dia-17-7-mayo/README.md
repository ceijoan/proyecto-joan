# Media Queries

Declaracion CSS que nos permite definir, Como se va a visualiar nuestra web.

- La sintaxis de un MQ: Se compone de multiples partes: Keyword @media es una palabra clave reservada por el sistema.
- MediaType: un tipo de medida 
    EJ:
        - Screen 
        - print
        - all
- Operadores: EJ: and , not , only
- breackpints: la condicion a cumplirse. EJ: max-width, min-width
- Reglas CSS: Bloque de regelas

## TIPS para usar los MQ

- Deben utilizar los mismos selectores que quieren remplazar
- pensar bien los breakpoints
- Mobile vs Tablet vs Desktop
    - mobile (55%): 320px - 480px
        Reglas mobile first
    - tablets (2%): 768px - 1024px
        Reglas tablet
    - Desktop(43%): 1024px - 1920px - ó más
        Reglas desktop
    VER EJEMPLOS EN HTML
- Podemos utilizar una @media por cada medida y asi no repetir el codigo por cada subelemento

## Uso de MQ en HTML

Podemos utilizar los @media directamente en el HTML utilizando rl atributo "media". Antes que nada , debemos asegurarnos que nuestro html incluya la etiqueta META en el HEAD (<meta name="viewport" content="width=device-width, initial-scale=1.0">)
- EJ: Agregando esta linea en el HEAD:
    <link rel="stylesheet" href=".css/tablet.css" media="screen and (min-width:368px;)">
    <link rel="stylesheet" href=".css/tablet.css" media="screen and (min-width:768px;)">
    <link rel="stylesheet" href=".css/tablet.css" media="screen and (min-width:1024px;)">


    Podria agregarse en la etiqueta Style
        <style media="screen and (min-width:368px;)"></style>

    Podria agregarse en la etiqueta *picture*
        <picture>
            <source media="screen and (min-width:368px;) srcset="img/imagen-mobile">
            <source media="screen and (min-width:768px;) srcset="img/imagen-tablet">
            <img src="imagen-defecto.jpg" alt="Mi Foto">
        </picture>

### Link con información: 
https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries