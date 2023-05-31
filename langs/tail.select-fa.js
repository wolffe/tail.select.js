/*
 |  tail.select - The vanilla solution to make your HTML select fields AWESOME!
 |  @file       ./langs/tail.select-pt_BR.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.5.15 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.select
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2014 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */
/*
 |  Translator:     imun - (https://github.com/imaun)
 |  GitHub:         https://github.com/wolffe/tail.select.js/issues/27
 */
 ;(function(factory){
    if(typeof(define) == "function" && define.amd){
        define(function(){
            return function(select){ factory(select); };
        });
    } else {
        if(typeof(window.tail) != "undefined" && window.tail.select){
            factory(window.tail.select);
        }
    }
 }(function(select){
     select.strings.register("pt_BR", {
         all: "همه",
         none: "هیچکدام",
         empty: "گزینه ای موجود نیست",
         emptySearch: "حذف انتخاب",
         limit: "نمی توانید گزینه های بیشتری انتخاب کنید",
         placeholder: "انتخاب کنید...",
         placeholderMulti: "انتخاب محدود به :limit گزینه...",
         search: "جستجوی ...",
         disabled: "این فیلد غیدفعال است"
     });
     return select;
 }));
 