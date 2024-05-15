# Unidades de Medida en CSS

## PX
- Unidades de medidad de medida absoluta, mide un punto sin importar la pantalla. No se adaptan a diseños responsive, solo se utilizan para elementos con medidas fijas.

## % Porcentaje
- Medida relativa a la medida del elemento padre, son utiles para pantallas responsive y son recomendables para tamaños de contenedores y elementos que deban escalarse proporcionalmente con el tamaño de la ventana o de su padre.

## EM 
- Es una medida relativa al tamaño de la fuente del elemento padre. EJ: Si la caja del padre tiene 16px... el hijo tendria 1em de 16px

Es recomendable utilizar para para textos que se escalen y margenes que escalen con el tamaño de la fuente. Mejorando la Accesibilidad y flexibilidad del diseño.

## REM
- Es una medida es relativa al tamaño de la fuente, no del padre sino del elemento raiz. sin importar los padres o hijos que cuente.

Es recomendable usar REM para tamaños de la fuente principal, margenes y para garantizar coherencia en el sitio.