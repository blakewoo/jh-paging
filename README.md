# jh-paging

## What is this?
This project is an open-source pagination function. It aims to provide a pagination that anyone can easily use by simply importing it from the source code.

## How to use

Import modal.css and modal.js from the src/codebase folder for usage.
```html
    <script src="../src/codebase/paging.js"></script>
```

If you want to use the compressed version, please use the code inside the "minimum" folder.
```html
    <script src="../src/minimum/paging.min.js"></script>
```


If you plan to bundle your project using a bundling package like webpack and need to use this project in CommonJS format, you can copy the code from the modal.js file in the codebase folder and paste it into your project. Afterward, insert the following code at the very bottom:
```javascript
exports.JH_paging = JH_paging
```

##Quick start
To create the object for the event where you want the pagination to appear, import the following properties:

```javascript
    let paging = new JH_paging(CONTAINER_DOCUMNET,CURRENT_PAGE,TOTAL_PAGE)
    paging.clickFunction = function (number) {
        // Do what ever you want
    }

```
#### CONTAINER_DOCUMENT
You need to insert the DOM object where page numbers will be displayed.

#### CURRENT_PAGE
You must enter the current page number, which should be less than or equal to the total number of pages by default.

#### TOTAL_PAGE
You need to input the total number of pages.

#### clickFunction function
This is a function that gets called each time you click on a page number. If you want to display database or fetched data on the corresponding page, you can simply override this function.

## License

MIT
