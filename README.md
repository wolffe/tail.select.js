tail.select.js - Beautify Select Fields
====================================

![npm](https://img.shields.io/npm/v/tail.select.js?style=flat-square)
![npm](https://img.shields.io/npm/dw/tail.select.js?style=flat-square)
![NPM](https://img.shields.io/npm/l/tail.select.js?style=flat-square)

**Replace** and **Improve** your HTML `<select>` fields with style and without **jQuery**!

The **tail.select** script is back, rewritten in vanilla JavaScript and ready to beautify and extend your HTML `<select>` fields... again! Add a search bar, multi-selection utilities (such as select all or none buttons), a perfect design and many more user-friendly functions to your web application.

**NOTE #1**: If you want to use the latest version and your implementation is simple, or if you are starting a new project from scratch, then you can use the `1.x` branch. This branch is actively maintained.

**NOTE #2**: Version `0.5.23` is the last one in the `0.5.x` branch. The next version is `1.x` and contains breaking changes. If you have an older implementation, and you use custom code, please stick to the `0.5.x` branch. This branch is no longer maintained, but it's stable.

----------------------------

[Want to see **tail.select** in action?](https://getbutterfly.com/tail-select/)

Support
-------
<p style="text-align: center">
    You really like my <b>tail.select</b> script and want to support me and all of my projects?<br>
    Then I would be extremely grateful for a coffee! (<b>Thanks to all Supporters</b>)<br><br>
    <a href="https://www.buymeacoffee.com/wolffe"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee"></a>
</p>

Features
--------
-   **Beautiful**. 2 different designs (light and dark)
-   **Extensive**.
    -   Search bar to find options quickly...
    -   All / None optgroup selection buttons...
-   **Translatable**.
-   **Zero dependencies**. And written in vanilla JavaScript...
-   **Ajax request**
-   **Free to use**. Because it's MIT licensed <3

Install & Embed
---------------
The master branch will always contain the latest release, which you can download directly here
as [.tar](https://github.com/wolffe/tail.select.js/tarball/master) or as [.zip](https://github.com/wolffe/tail.select.js/zipball/master)
archive, or just visit the [Releases](https://github.com/wolffe/tail.select.js/releases) Page
on GitHub directly. You can also be cool and using npm, Yarn or bower:

```markup
npm install tail.select.js --save
```

```markup
yarn add tail.select.js --save
```

```markup
bower install tail.select.js --save
```

### Using a CDN
You can also use the awesome CDN services from jsDelivr or UNPKG.

```markup
https://www.npmjs.com/package/tail.select.js
```

```markup
https://cdn.jsdelivr.net/npm/tail.select.js@1.0.0/js/tail.select.min.js
```

```markup
https://unpkg.com/browse/tail.select.js@1.0.0/
```

### Thanks To (`0.5.x` Branch)
-   SamBrishes, pytesNET (Copyright &copy; 2014-2019) 
-   [Octicons](https://octicons.github.com/) for the cute Icons

### Translations (`0.5.x` Branch)
-   [Anthony Rabine](https://github.com/arabine) / [French Translation](https://github.com/wolffe/tail.select.js/issues/11)
-   [Igor](https://github.com/igorcm) / [Brazilian Portuguese Translation](https://github.com/wolffe/tail.select.js/pull/34)
-   [Noxludio](https://github.com/noxludio) / [Finnish Translation](https://github.com/wolffe/tail.select.js/pull/35)
-   [Roman Yepanchenko](https://github.com/tizis) / [Russian Translation](https://github.com/wolffe/tail.select.js/issues/38)
-   [elPesecillo](https://github.com/elPesecillo) / [Spanish Translation](https://github.com/wolffe/tail.select.js/issues/41)
-   [Alberto Vincenzi](https://github.com/albertovincenzi) / [Italian Translation](https://github.com/wolffe/tail.select.js/issues/43)
-   [WoxVold](https://github.com/woxwold) / [Norwegish Translation](https://github.com/wolffe/tail.select.js/issues/45)
-   [Spritus](https://github.com/spritus) / [Turkish Translation](https://github.com/wolffe/tail.select.js/issues/48)
-   [5ergiu](https://github.com/5ergiu) / [Romanian Translation](https://github.com/wolffe/tail.select.js/issues/10)
-   [achatzi78](https://github.com/achatzi78) / [Greek Translation](https://github.com/wolffe/tail.select.js/issues/8)

Documentation (`0.5.x` Branch)
-------------
The documentation has been moved to [GitHubs Wiki Pages](https://github.com/wolffe/tail.select.js/wiki),
but I will keep a table of contents list here and some basic instructions.

-   [Install & Embed](https://www.github.com/wolffe/tail.select.js/wiki/instructions)
-   [Default Usage](https://www.github.com/wolffe/tail.select.js/wiki/default-usage)
-   [Public Options](https://www.github.com/wolffe/tail.select.js/wiki/public-options)
-   [Public Methods](https://www.github.com/wolffe/tail.select.js/wiki/public-methods)
-   [Events & Callbacks](https://www.github.com/wolffe/tail.select.js/wiki/events-callbacks)
-   [Internal Variables & Methods](https://www.github.com/wolffe/tail.select.js/wiki/internal)
-   [HowTos, Tips & Tricks](https://www.github.com/wolffe/tail.select.js/wiki/How-Tos)

### Files (`0.5.x` Branch)
The `tail.select` package contains different JavaScript files:

-   `js/tail.select(.min).js` The main JavaScript with `en` tranlation strings only.
-   `js/tail.select-full(.min).js` The main JavaScript with ALL available translations.
-   `langs/tail.select-all(.min).js` Just ALL translation strings itself.
-   `langs/tail.select-{locale}.js` Just the {locale} translation strings.

### Basic Instructions (`0.5.x` Branch)
You can pass up to 2 arguments to the **tail.select** constructor, the first parameter is required
and need to be an `Element`, a `NodeList`, a `HTMLCollection`, an Array with `Element` objects or
just a single selector as `string`, which calls the `querySelectorAll()` method on its own. The
second parameter is optional and, if set, MUST be an object with your *tail.select* options.

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link type="text/css" rel="stylesheet" href="css/tail.select-default.css">
</head>
<body>
<script src="js/tail.select.min.js"></script>
<!-- <script src="langs/tail.select-{lang}.js"></script> -->

<select>
    <option>My First Option</option>
    <option>My Second Option</option>
    <option>My Third Option</option>
</select>

<script>
document.addEventListener('DOMContentLoaded', () => {
    tail.select('select', {
        // Your options here
    });
});
</script>
</body>
</html>
```

### Default options (`0.5.x` Branch)
Please check out [GitHubs Wiki Pages](https://github.com/wolffe/tail.select.js/wiki) to read more
about each single option!

```javascript
tail.select("select", {
    animate: true,              // [0.3.0]      Boolean
    classNames: null,           // [0.2.0]      Boolean, String, Array, null
    csvOutput: false,           // [0.3.4]      Boolean
    csvSeparator: ",",          // [0.3.4]      String
    descriptions: false,        // [0.3.0]      Boolean
    deselect: false,            // [0.3.0]      Boolean
    disabled: false,            // [0.5.0]      Boolean
    height: 350,                // [0.2.0]      Integer, null
    hideDisabled: false,        // [0.3.0]      Boolean
    hideSelected: false,        // [0.3.0]      Boolean
    items: {},                  // [0.3.0]      Object
    locale: "en",               // [0.5.0]      String
    linguisticRules: {          // [0.5.9]      Object
        "е": "ё",
        "a": "ä",
        "o": "ö",
        "u": "ü",
        "ss": "ß"
    },
    multiple: false,            // [0.2.0]      Boolean
    multiLimit: Infinity,       // [0.3.0]      Integer, Infinity
    multiPinSelected: false,    // [0.5.0]      Boolean
    multiContainer: false,      // [0.3.0]      Boolean, String
    multiShowCount: true,       // [0.3.0]      Boolean
    multiShowLimit: false,      // [0.5.0]      Boolean
    multiSelectAll: false,      // [0.4.0]      Boolean
    multiSelectGroup: true,     // [0.4.0]      Boolean
    openAbove: null,            // [0.3.0]      Boolean, null
    placeholder: null,          // [0.2.0]      String, null
    search: false,              // [0.3.0]      Boolean
    searchConfig: [             // [0.5.13]     Array
        "text", "value"
    ],
    searchFocus: true,          // [0.3.0]      Boolean
    searchMarked: true,         // [0.3.0]      Boolean
    searchMinLength: 1,         // [0.5.13]     Integer
    searchDisabled: true,       // [0.5.5]      Boolean
    sortItems: false,           // [0.3.0]      String, Function, false
    sortGroups: false,          // [0.3.0]      String, Function, false
    sourceBind: false,          // [0.5.0]      Boolean
    sourceHide: true,           // [0.5.0]      Boolean
    startOpen: false,           // [0.3.0]      Boolean
    stayOpen: false,            // [0.3.0]      Boolean
    width: null,                // [0.2.0]      Integer, String, null
    cbComplete: undefined,      // [0.5.0]      Function
    cbEmpty: undefined,         // [0.5.0]      Function
    cbLoopItem: undefined,      // [0.4.0]      Function
    cbLoopGroup: undefined      // [0.4.0]      Function
});
```

### Ajax functionality 
```
 tail.select('#tail-select', {ajaxUrl: url});
```
Widget makes a request to the backend and waits for object like this 
```
{
    "results": [
        {
            "id": 1,
            "text": "Boston"
        },
        {
            "id": 2,
            "text": "Seatle"
        },
        {
            "id": 3,
            "text": "New York"
        },
        {
            "id": 4,
            "text": "Chicago"
        },
        {
            "id": 5,
            "text": "Washington"
        },
        {
            "id": 6,
            "text": "San Diego"
        }
    ]
}
```
