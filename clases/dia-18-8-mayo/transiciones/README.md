# Transiciones en CSS
## Que son
Forma de cambiar los valores de las propiedad de un elemento  de manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepte valores númericos yo de color.

EJ:

![imagen de transicion](https://storage.stfalcon.com/uploads/images/5881e0b98e717.webp)


[Manual oficial de transiciones CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

Sin embargo , una forma de rápida de identificar propiedades transicionales; es buscar  propiedad que acepten valores 

Propiedades Transicionales
- width
- padding
- margin
- border-width
- opacity
- transform (pop como Scale, rotate, translate, etc..)

Propiedades de Color:
- color
- background-color
- border-color
- box-shadow
- text-shadow

##Como se define una transicion:
Las trabnsiciones se definen mediante la propiedad `transition` y se puede personalizar con las subpropiedades: 
- `transition-property`         : Especifica la propiedad que se anima 
- `transition-duration`         : Especifica la duración de la animación
- `transition-timing-function`  : Especifica la funcion del temporizador de la animacion
- `trabsition-delay`            : Especifica el retraso antes de comenzar la animacion

EJ:
```css
/*Segmentar la transicion en distintas reglas --- NO RECOMENDAD*/
.elemento{
    transition-property: font-size ;
    transition-duration:4s ;
    transition-timing-function:ease-in-out;
    transition-delay: 2s;
}

/*Segmentar la transicion en distintas reglas --- RECOMENDADA*/
.elemento{
    transition:font-size 4s ease-in-out 2s ;
}
```

## Transition Property
- all:      Todas las propiedades
- none:     resetear las propiedades
- property: una o mas separadas por coma

```css
div{
    transition: all 2s;
    transition: none;
    transition: width 2s, height 3s, backgound-color 2s; 
}

```
## Transition Duration y delay

>`Duration` : Tiempo que dura la transicion.

>`delay` : Tiempo que retarda la animacion en comenzar

## Timing function

- `ease`            : Velocidad lenta - rápida - lenta  (Pordefecto)
- `linear`          : Velocidad constante
- `ease-in`         : Velocidad lenta luego rapida
- `ease-out`        : Velocidad rapida luego lenta
- `ease-in-out`     : Velocidad lenta - rápida - lenta (mix entre easy-in easy-out pero un poco mas brusca )
- `cubic-bazier()`  :
