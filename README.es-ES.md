

# EVALUACIÓN DE LA CALIDAD DE IMÁGENES

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/aiman-al-masoud/image_quality_assessment/blob/main/LICENSE)
![](https://komarev.com/ghpvc/?username=SIQA&label=Views&style=plastic&color=brightgreen)

![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Introducción
Este es el sitio web de un proyecto grupal destinado a evaluar la calidad de las imágenes mediante un enfoque subjetivo (basado en calificaciones).

Nuestro sitio web <a href="https://siqa.pythonanywhere.com" target="_blank"><strong>https://siqa.pythonanywhere.com</strong></a> está actualmente en línea y accesible. 

- <a href="https://drive.google.com/file/d/1po_hfQ2VX5T3M6yyfkS1bZNUnFE1JP2z/view?usp=sharing" target="_blank"><strong>VIDEO DE VISTA PREVIA</strong></a>
- <a href="https://www.icloud.com/keynote/096lgsw1LvNqKepOOXn8xfM0g#Presentazione_SIQA" target="_blank"><strong>PRESENTACIÓN</strong></a>

![all-devices-black](https://user-images.githubusercontent.com/80333091/147682077-4fb7e86a-fec7-421f-bec7-be3113c729d3.png)

***

**Tenga MUCHO CUIDADO al subir cualquier cosa a este repositorio, ya que el WEBHOOK QUE ACTUALIZA AUTOMÁTICAMENTE EL SERVIDOR puede estar activo en cualquier momento.**

***

## Otros

<details>
  <summary><b><strong>AVISO IMPORTANTE (sobre flask, léalo por favor)</strong></b></summary>
  <br> 

<a href="https://en.wikipedia.org/wiki/Flask_(web_framework)" target="_blank">Flask</a> es el marco de trabajo web de Python que actualmente se utiliza para desarrollar el backend de este sitio web. Es simple y fácil de usar si tiene conocimientos básicos de Python. 

(Pero si alguien tiene alguna propuesta mejor para un marco de trabajo web en Python o Java, por favor notifíquelo al resto).

## Vinculación de recursos:

Flask requiere una sintaxis especial para vincular recursos estáticos a las plantillas HTML. 

Todos los recursos estáticos deben colocarse en la carpeta 'static' y, eventualmente, en subcarpetas.

Ejemplo (vincular un archivo css en html):

```
<link href="{{url_for('static', filename='stylesheets/general.css')}}" rel="stylesheet" type="text/css">
```

(Esto indicará a Flask que obtenga general.css en la ubicación especificada dentro de la carpeta static).

## Enlaces (hrefs): 

Los enlaces relativos a cualquier parte de este sitio web deben especificarse según los nombres definidos en los decoradores de Python para los métodos en app.py.

Ejemplos:

```
# this gets called when the homepage (plain web-address) is requested.
@app.route("/")
def on_index():
  pass

```


```
# this gets called when: webaddress/take_test is requested.
@app.route("/take_test")
def on_take_test():
   pass

```

## Más sobre Flask:
https://flask-restful.readthedocs.io/en/latest/quickstart.html

(o Stackoverflow).



**¡Eso es todo, gracias por tomarse el tiempo de leer esto!**

</details>

<details>
  <summary><b><strong>CONFIGURACIÓN DE UN ENTORNO LOCAL DE PRUEBAS</strong></b></summary>

## 1) Clonar este repositorio
...y navegar a su directorio raíz.

## 2) Crear un entorno virtual de Python 
...llamándolo '.my_env' 

(Por razones relacionadas con gitignore).

```
$ python3 -m venv .my_env
```

(Se le pedirá que instale el módulo 'venv' si aún no lo tiene).

## 3) Activar el entorno virtual:

```
$ source ./my_env/bin/activate
```

Si este comando no funciona, pruebe con:

```
$ . .my_env/bin/activate
```

(Debería notar que la consola comienza a mostrar el nombre del entorno virtual antes de su nombre de usuario y del signo de dólar).


## 4) Instalar las dependencias de esta aplicación 
... en el entorno virtual que acaba de crear:

```
(.my_env)$ pip install -r requirements.txt
```
## 5) ¡Ejecutar la aplicación en localhost!

```
(.my_env)$ python3 -m flask run
```

#### Ejemplo de salida:

```
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

Haga clic en el enlace y la página de inicio se abrirá en su navegador predeterminado.

</details>

<details>
   <summary><b><strong>CONSEJOS</strong></b></summary>
   <br> 

Para evitar mucha frustración mientras depura esto, intente desactivar la caché en su navegador favorito:
 - https://www.webinstinct.com/faq/how-to-disable-browser-cache
 - https://nicholasbering.ca/tools/2016/10/09/devtools-disable-caching/

</details>
