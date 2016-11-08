A starting template for creating new web applications with Form.io
----------------------------------

This is a starting template for creating new applications with Form.io.  Here is how to get started.

Installation
=============

- Install Gulp and Bower
 
    ```
    npm install -g gulp bower
    ```

- Download this repo locally.

    ```
    git clone git@github.com:formio/formio-app-template.git
    cd formio-app-template
    ```

- Install dependencies

    ```
    bower install
    npm install
    ```

- Run the application.

    ```
    gulp serve
    ```
    
Building
===============
You can build this application for deployment using the following command.

```
gulp build
```

The built application resides within the ***dist*** folder.
