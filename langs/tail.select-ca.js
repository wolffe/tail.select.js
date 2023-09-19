; (function (factory) {
    if (typeof (define) == "function" && define.amd) {
        define(function () {
            return function (select) { factory(select); };
        });
    } else {
        if (typeof (window.tail) != "undefined" && window.tail.select) {
            factory(window.tail.select);
        }
    }
}(function (select) {
    select.strings.register("ca", {
        all: "Tots",
        none: "Cap",
        empty: "No hi ha opcions disponibles",
        emptySearch: "No hi ha opcions",
        limit: "No pots seleccionar més opcions",
        placeholder: "Selecciona una opció...",
        placeholderMulti: "Selecciona fins a :límit opcions...",
        search: "Escriu dins per a buscar...",
        disabled: "Aquest camp està deshabilitat"
    });
    return select;
}));
