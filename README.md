tail.select.js - Beautify Select Fields (formerly tail.select)
====================================

![npm](https://img.shields.io/npm/v/tail.select.js?style=flat-square)
![npm](https://img.shields.io/npm/dw/tail.select.js?style=flat-square)
![NPM](https://img.shields.io/npm/l/tail.select.js?style=flat-square)

**Replace** and **Improve** your HTML `<select>` fields with style and without **jQuery**!

The **tail.select** script is back as **tail.select.js**, rewritten in vanilla JavaScript and ready to beautify and extend your HTML `<select>` fields... again! Add a search bar, multi-selection utilities (such as select all or none buttons), deselectability on single select fields, a perfect design and many more user-friendly functions to your web application.

# This library has been taken over and a version `0.6` is in the works. Most of the links below are dead and the documentation is gone. It's a great library which deserves to live on.

# Patches wanted!

# [The new homepage is here!](https://getbutterfly.com/tail-select/)

----------------------------

[Want so see **tail.select** in action?](https://getbutterfly.com/tail-select/)

Support
-------
<p style="text-align: center">
    You really like my <b>tail.select</b> script and want to support me and all of my projects?<br>
    Then I would be extremely grateful for a coffee! (<b>Thanks to all Supporters</b>)<br><br>
    <a href="https://www.buymeacoffee.com/wolffe"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee"></a>
</p>

Features
--------
-   **Beautiful**. 5 different Designs in many color schemes...
-   **Extensive**.
    -   Search bar to find options quickly...
    -   All / None optgroup selection buttons...
    -   Add, Edit, Delete and Modifiy options at any time...
    -   De-selection on single select fields...
    -   ... and way more ...
-   **Configurable**. 36 settings and 3 bindable events...
-   **Translatable**. Already available in 10 languages...
-   **Zero Dependencies**. And written in vanilla JavaScript...
-   **Free/To/Use**. Because it's MIT licensed <3

Install & Embed
---------------
The master branch will always contain the latest Release, which you can download directly here
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
https://cdn.jsdelivr.net/npm/tail.select.js@0.5.19/js/tail.select-full.min.js
```

```markup
https://unpkg.com/browse/tail.select.js@0.5.19/
```

Thanks To
---------
-   [Octicons](https://octicons.github.com/) for the cute Icons
-   [jsCompress](https://jscompress.com/) for the Compressor
-   [prismJS](https://prismjs.com) for the Syntax highlighting library
-   [MenuSpy](https://github.com/lcdsantos/menuspy) for the Menu Navigation

### Translations
-   [Anthony Rabine](https://github.com/arabine) / [French Translation](https://github.com/wolffe/tail.select.js/issues/11)
-   [Igor](https://github.com/igorcm) / [Brazilian Portuguese Translation](https://github.com/wolffe/tail.select.js/pull/34)
-   [Noxludio](https://github.com/noxludio) / [Finnish Translation](https://github.com/wolffe/tail.select.js/pull/35)
-   [Roman Yepanchenko](https://github.com/tizis) / [Russian Translation](https://github.com/wolffe/tail.select.js/issues/38)
-   [elPesecillo](https://github.com/elPesecillo) / [Spanish Translation](https://github.com/wolffe/tail.select.js/issues/41)
-   [Alberto Vincenzi](https://github.com/albertovincenzi) / [Italian Translation](https://github.com/wolffe/tail.select.js/issues/43)
-   [WoxVold](https://github.com/woxwold) / [Norwegish Translation](https://github.com/wolffe/tail.select.js/issues/45)
-   [Spritus](https://github.com/spritus) / [Turkish Translation](https://github.com/wolffe/tail.select.js/issues/48)

Documentation
-------------
The Documentation has been moved to [GitHubs Wiki Pages](https://github.com/wolffe/tail.select.js/wiki),
but I will keep a table of contents list here and some basic instructions.

-   [Install & Embed](https://www.github.com/wolffe/tail.select.js/wiki/instructions)
-   [Default Usage](https://www.github.com/wolffe/tail.select.js/wiki/default-usage)
-   [Public Options](https://www.github.com/wolffe/tail.select.js/wiki/public-options)
-   [Public Methods](https://www.github.com/wolffe/tail.select.js/wiki/public-methods)
-   [Events & Callbacks](https://www.github.com/wolffe/tail.select.js/wiki/events-callbacks)
-   [Internal Variables & Methods](https://www.github.com/wolffe/tail.select.js/wiki/internal)
-   [HowTos, Tips & Tricks](https://www.github.com/wolffe/tail.select.js/wiki/How-Tos)

### Files
The `tail.select` package contains different JavaScript files:

-   `js/tail.select(.min).js` The main JavaScript with `en` tranlation strings only.
-   `js/tail.select-full(.min).js` The main JavaScript with ALL available translations.
-   `langs/tail.select-all(.min).js` Just ALL translation strings itself.
-   `langs/tail.select-{locale}.js` Just the {locale} translation strings.

### Basic Instructions
You can pass up to 2 arguments to the **tail.select** constructor, the first parameter is required
and need to be an `Element`, a `NodeList`, a `HTMLCollection`, an Array with `Element` objects or
just a single selector as `string`, which calls the `querySelectorAll()` method on its own. The
second parameter is optional and, if set, MUST be an object with your *tail.select* options.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link type="text/css" rel="stylesheet" href="css/tail.select-default.css">
</head>
<body>
<script src="js/tail.select.min.js"></script>
<!-- <script src="langs/tail.select-{lang}.js"></script> -->

<select>
    <option>My Option</option>
</select>

<script>
document.addEventListener("DOMContentLoaded", () => {
    tail.select("select", { /* Your Options */ });
});
</script>
</body>
</html>
```

### Default options
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

Copyright & License
-------------------
Published under the MIT-License; Copyright &copy; 2020 - 2021 wolffe
Published under the MIT-License; Copyright &copy; 2014 - 2019 SamBrishes, pytesNET
