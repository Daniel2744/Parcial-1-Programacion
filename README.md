# Parcial 1 Programacion II Polimorfismo
1.	Explicar y ejemplificar composición y agregación.

**Composición:** Es una forma fuerte de composición donde la vida de la clase contenida debe coincidir con la vida de la clase contenedor. Los componentes constituyen una parte del objeto compuesto. De esta forma, los componentes no pueden ser compartidos por varios objetos compuestos. La supresión del objeto compuesto conlleva la supresión de los componentes.
El símbolo de composición es un diamante de color negro colocado en el extremo en el que está la clase que representa el “todo” (Compuesto).

https://drive.google.com/file/d/1cti0VKbF2uZ4sZVqTPf_NarNtmhk0ogb/view?usp=sharing
 
- Tenemos una clase Empresa.
- Un objeto Empresa está a su vez compuesto por uno o varios objetos del tipo empleado.
- El tiempo de vida de los objetos Empleado depende del tiempo de vida de Empresa, ya que si no existe una Empresa no pueden existir sus empleados.

**Agregación:** La agregación es un tipo de asociación que indica que una clase es parte de otra clase (composición débil). Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas). La destrucción del compuesto no conlleva la destrucción de los componentes. Habitualmente se da con mayor frecuencia que la composición.
La agregación se representa en UML mediante un diamante de color blanco colocado en el extremo en el que está la clase que representa el “todo”.

https://drive.google.com/file/d/1gzoZGFGZYQJaZh0T1gMs7yS3_KPslkv3/view?usp=sharing
 
- Tenemos una clase Empresa.
- Tenemos una clase Cliente.
- Una empresa agrupa a varios clientes.
2.	Explicar que es polimorfismo.

**Polimorfismo:** Es una propiedad de la programación Orientada a Objetos en la cual se da uso de la herencia para compartir atributos y acciones, en el polimorfismo los objetos se comportan de formas distintas ante un mismo llamado, es decir, cada uno se comporta según como es.
3.	Dar un ejemplo de la vida real de polimorfismo. Diagrama de clases y explicación.

**Ejemplo:** Debido a la pandemia de COVID-19 una zapatería quiere concientizar a sus clientes y alentarlos a realizar sus compras mediante su página web permitiéndoles comprar a precios más bajos que en su local. Según su forma de pago su compra tendrá un interés o no.

*Compra mediante página:* 

Pago con tarjeta de débito o pago fácil mediante efectivo tendrá un 15% de descuento. 

Pago con tarjeta de crédito en 1 cuota sin interés, 3 cuotas 12% de interés, 6 cuotas 18% de interés.

*Compra en local:*

Pago con tarjeta de débito o efectivo tendrá un 5% de descuento. 

Pago con tarjeta de crédito en 1 cuota sin interés, 3 cuotas 15% de interés, 6 cuotas 20% de interés,

**Polimorfismo:** Las personas pueden comprar un calzado pero de dos formas distintas, en el local o en la página web del local.
Lo cual también genera distintos descuentos e intereses en su compra.

https://drive.google.com/file/d/1TwBt_-wSjljeaUXCMKLZ2U_JHjxMWZal/view?usp=sharing

4.	Codificar el ejemplo del punto 3 con Javascript.
 
