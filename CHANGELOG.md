CHANGELOG
===========

Version 0.5.23
--------------
- Fix "Undefined 'key'" error
- Add getAll and removeAll methods to options object

Version 0.5.22
--------------
- Add option deselect using the ENTER key
- Add Romanian (RO) translation
- Add Greek (GR) translation

Version 0.5.21
--------------
- Remove CSS mappings
- Remove Bootstrap themes
- Fix Safari issue with unselectable input field
- Start cleaning up the code and assessing ES6 migration
- Start implementing CSS variables

Version 0.5.20
--------------
- Add `.label-count--selected` class to count when count is higher than 0.
- Add a reset function to restore a tail.select instance to the state it had when created. The built-in reload function only clears the underlying select element and rebuilds itself, leaving the actual instance in memory. Doing a repeated reload on the same select element lead to tail.select not picking up the selected option from the select anymore.
- Transfer `title` attribute from `option` tag to tail.select entry.

Version 0.5.19
--------------
- Remove `less` dependency
- Remove `clean-css` dependency
- Fix `package.json` typo

Version 0.5.18
--------------
- New repository

Version 0.5.17
--------------
- New repository

Version 0.5.15 - Beta
---------------------
-   Update: Support for `hidden` options (didn't get queried).
    - Thanks to [#67](https://github.com/pytesNET/tail.select/issues/67).
-   Update: Differentiate .disabled and .hover colors.
    - Thanks to [#79](https://github.com/pytesNET/tail.select/issues/79),
    - Thanks to [#81](https://github.com/pytesNET/tail.select/pull/81) (Pull Request).
-   Bugfix: Typo in `searchConfig` option key.
-   Bugfix: Using `this.rebuild` instead of `rebuild` in the `.config()` method.
-   Bugfix: Using the olf method `._replaceTypo` on the `.invert()` method (options class).
-   Bugfix: The `.query()` method doesn't handle false as item return [ES6 only].
-   Bugfix: Missing minified JavaScript files.
    - Thanks to [#77](https://github.com/pytesNET/tail.select/issues/77).
-   Bugfix: Some Less styling issues.
    - Thanks to [#74](https://github.com/pytesNET/tail.select/issues/74),
    - Thanks to [#78](https://github.com/pytesNET/tail.select/issues/78),
    - Thanks to [#75](https://github.com/pytesNET/tail.select/pull/75) (Pull Request).
-   Bugfix: Bootstrap 4 Theme Icon Issue in Chrome.
    - Thanks to [#82](https://github.com/pytesNET/tail.select/issues/82).

Version 0.5.14 - Beta
---------------------
-   Hotfix: Unable to select options with apostrophes.
    - Thanks to [#53](https://github.com/pytesNET/tail.select/issues/53),
    - Thanks to [#55](https://github.com/pytesNET/tail.select/pull/55) (Pull Request).

Version 0.5.13 - Beta
---------------------
-   Add: The new public method `.value()` to get the current selected option value(s).
-   Add: Allow to change the minimum search length with the new `searchMinLength` option.
    - Thanks to [#60](https://github.com/pytesNET/tail.select/pull/60).
-   Add: A new public `.applyLinguisticRules()` method on the options class.
    - Thanks to [#63](https://github.com/pytesNET/tail.select/pull/63).
-   Update: A new search function, configurable with `searchConfig`.
    - Thanks to [#63](https://github.com/pytesNET/tail.select/pull/63).
-   Update: Using window on the main factory function (required for Webpack / VueJS).
-   Update: The internal helper methods `cHAS()`, `cADD()` and `cREM()`.
-   Bugfix: The helper method `clone()` use an IE-unsupported function called `Object.assign`.
-   Update: The translations `actionAll` and `actionNone` has been removed completely.
-   Update: Select the latest added option on single select fields.
-   Bugfix: The `.scrollBy()` function isn't available in IE10+.
    - Thanks to [#56](https://github.com/pytesNET/tail.select/issues/56).
-   Bugfix: Up-Arrow doesn't work when last option is disabled.
    - Thanks to [#66](https://github.com/pytesNET/tail.select/issues/66).
-   Bugfix: Adding a selected option doesn't work.
    - Thanks to [#52](https://github.com/pytesNET/tail.select/issues/52),
    - Thanks to [#65](https://github.com/pytesNET/tail.select/issues/65),
    - Thanks to [#64](https://github.com/pytesNET/tail.select/pull/64) (Pull Request).
-   Bugfix: Escaping bad characters for search RegExp.
    - Thanks to [#53](https://github.com/pytesNET/tail.select/issues/53),
    - Thanks to [#59](https://github.com/pytesNET/tail.select/issues/59),
    - Thanks to [#61](https://github.com/pytesNET/tail.select/issues/61),
    - Thanks to [#63](https://github.com/pytesNET/tail.select/pull/63) (Pull Request).

### Less / CSS Changes
-   Add: A new node.js script to compile the Less files.
-   Add: Minified Stylesheets and Source Maps (for both types).
-   Update: The complete Less stylesheet structure.
-   Update: A few design changes on all designs.
-   Update: Each single CSS color scheme contains now the complete styles instead of "imports".
-   Update: The `dropdown-actions` container has been moved over the search field.
-   Update: The `All` and `None` buttons are only visible on hover of the respective optgroup.
-   Update: Change the color of selected items.
-   Update: Bootstrap* - Change table-structured label into `display: inline-block;`s.
-   Update: Bootstrap2 - The new `funky` (Pink) and `mystery` (Purple) bootstrap2 color schemes.
-   Update: Bootstrap3 - Line-Through on disabled options.
-   Update: Bootstrap4 - The new `default` (White) and the moved `secondary` (Grey) schemes.
-   Update: Bootstrap4 - The new color schemes `funky`. `myster`, `indigo`, `teal` and `orange`.
-   Remove: All obsolete (not required) `-o-` and `-moz-` vendor-prefixed CSS properties.
-   Bugfix: Flickering outline on focus (Google Chrome).
    - Thanks to [#51](https://github.com/pytesNET/tail.select/issues/51).
-   Bugfix: Too long values destroy label.
    - Thanks to [#51](https://github.com/pytesNET/tail.select/issues/51).
-   Bugfix: Enabled user selection on the select elements.
    - Thanks to [#51](https://github.com/pytesNET/tail.select/issues/51).

Version 0.5.12 - Beta
---------------------
-   Info: This is the first version, which drops IE 9 support!
-   Add: Support for module exporting, tested with browserify.
-   Add: New german linguistic rules for `ä`, `ö`, `ü` and `ß`.
-   Add: The new `browser` package variable pointing to `js/tail.select-full.js`.
-   Update: Using `classList` to add / remove / check class names.
-   Update: Using `Object.assign` only to merge / clone object properties.
-   Rename: The internal `tailSelect` variable has been renamed into `select`.
-   Rename: The internal `tailOptions` variable has been renamed into `options`.
-   Remove: Support for Internet Explorer 9.
-   Bugfix: Add correct file to the `main` bower variable.
-   Bugfix: Add correct file to the `jsdelivr` package variable.

### Changes in ES6 Version
-   Add: Missing `searchDisabled` default option within the storage.
-   Update: Use internal `select` (former `tailSelect`) variable as constant.
-   Update: Use internal `options` (former `tailOptions`) variable as constant.
-   Update: Use global `w` and `d` variables as constants.

Version 0.5.11 - Beta
---------------------
-   Add: The new Turkish Translation.
    - Thanks to [#48](https://github.com/pytesNET/tail.select/issues/48).
-   Add: Support for `tabindex` (using Tab to move from input field to input field).
    - Thanks to [#47](https://github.com/pytesNET/tail.select/issues/47).
-   Add: Key-Support for Space to open the current focused select field.
-   Bugfix: Replace classnames with an Space to prevent missing space between class names.

Version 0.5.10 - Beta
---------------------
-   Add: The new Italian Translation.
    - Thanks to [#43](https://github.com/pytesNET/tail.select/issues/43).
-   Add: The new Norwegish Translation.
    - Thanks to [#45](https://github.com/pytesNET/tail.select/issues/45).

Version 0.5.9 - Beta
--------------------
-   Add: The new Spanish Translation.
    - Thanks to [#41](https://github.com/pytesNET/tail.select/issues/41).
-   Add: The new experimental `linguisticRules` options, which allows to regex letters, which are
    (used) similiar. 
    - Thanks to ([#42](https://github.com/pytesNET/tail.select/issues/42)).
-   Update: **ES6** Changed the last `var` variables into `let`.

Version 0.5.8 - Beta
--------------------
-   Add: The new Russian Translation.
    - Thanks to [#38](https://github.com/pytesNET/tail.select/issues/38).
-   Add: Allow callback functions as strings to allow a deeper translation.
-   Add: The new internal method `_e`, which handles the translations.
-   Bugfix: Invalid `bower.json` file.

Version 0.5.7 - Beta
--------------------
-   Info: It isn't longer possible to get an option using the internal option number!
-   Add: The new Finnish Translation.
    - Thanks to [#35](https://github.com/pytesNET/tail.select/pull/35).
-   Remove: The internal-Array storage has been completely removed.
-   Bugfix: The `.remove()` method on the options hasn't worked on the internal-Array storage.
-   Bugfix: The ECMAScript 6 Version returns an Array, while the default version does not.
-   Bugfix: TypeError: Cannot convert undefined or null to object.
    - Thanks To [#32](https://github.com/pytesNET/tail.select/issues/32).
-   Bugfix: Remove default options sorting.
    - Thanks To [#37](https://github.com/pytesNET/tail.select/issues/37).

Version 0.5.6 - Beta
--------------------
-   Add: The new Brazilian Portuguese Translation.
    - Thanks to [#34](https://github.com/pytesNET/tail.select/pull/34).
-   Update: the `bower.json` and `package.json` files
-   Update: Add 2019 to all Copyright notes.

Version 0.5.5 - Beta
--------------------
-   Add: The new `searchDisabled` option, which allows to exclude disabled options on the search.
-   Update: The `.finder()` method depends now on the `.find()` method.
-   Bugfix: Wrong Version Number on the main object.
-   Bugfix: Options floats over the dropdown field.
    - Thanks to [#28](https://github.com/pytesNET/tail.select/issues/28).
-   Bugfix: Terrible performance of search when descriptions included.
    - Thanks to [#27](https://github.com/pytesNET/tail.select/issues/27).
-   Bugfix: Search functionality hangs exponentially when regular expression matches against larger 
    source options.
    - Thanks to [#25](https://github.com/pytesNET/tail.select/issues/24).

Version 0.5.4 - Beta
--------------------
-   Add: The new `modify()` method on the string Storage to change the strings globally.
    - Thanks to [#20](https://github.com/pytesNET/tail.select/issues/20).
-   Update: The `.register()` method checks now if locale is a string and object a object.
-   Update: The `.register()` method returns now `true` on success and `false` on failure.
-   Bugfix: **ES6** The "Select All" Button doesn't work on Search (All options gets selected).
-   Bugfix: Z-Index CSS Styling bug (:hover).
    - Thanks to: [#19](https://github.com/pytesNET/tail.select/issues/19).
-   Bugfix: Unnecessary Scrollbar (during a wrong calculation of the dropdown field).
    - Thanks to: [#19](https://github.com/pytesNET/tail.select/issues/19).
-   Bugfix: "Select All" Button selects more items as shown on search results.
    - Thanks to [#21](https://github.com/pytesNET/tail.select/issues/21).
-   Bugfix: Search functionality breaks when source select's options contain hyphenated attributes.
    - Thanks to [#23](https://github.com/pytesNET/tail.select/pull/23).

Version 0.5.3 - Beta
--------------------
-   Add: The new `.walk()` method on the tailOptions class to "loop" multiple items.
-   Add: The new internal variable `_query` for the current query.
-   Update: Changed the RegExp `\b`, because it isn't accurate enough.
-   Update: The complete `sourceBind` listener function has been renewed / fixed.
-   Update: The `.enable()` and `.disable()` methods allows now a single parameter, which controls
    the new rendering if the respective DOM Elements.
-   Update: Support also [{ key: <>, [...] }] array objects.
-   Remove: Unused variable `_pos`.
-   Bugfix: The "(Un)Select All" buttons were not limited to the current query!
-   Bugfix: The `.en/disable()` methods doesn't sets the configuration correctly.
-   Bugfix: The `description` property on the `items` option is required.
    - Thanks to [#15](https://github.com/pytesNET/tail.select/issues/15).
-   Bugfix: Only the last item gets unchecked after pressing "Unselect All" on specific conditions.
    - Thanks to [#16](https://github.com/pytesNET/tail.select/issues/16).
-   Bugfix: When the `sourceBind` option is `true`, the dropdown becomes unusable.
    - Thanks to [#17](https://github.com/pytesNET/tail.select/issues/17).
-   Bugfix: Throws `TypeError` on "(Un)Select All" buttons on Search Queries.
    - Thanks to [#18](https://github.com/pytesNET/tail.select/issues/18).
-   Bugfix: Wrong `.en/disable()` and `.config(disabled, true|false)` order.
    - Thanks to [#12](https://github.com/pytesNET/tail.select/issues/12#issuecomment-442318722).

Version 0.5.2 - Beta
--------------------
-   Hotfix: Trigger hasn't triggered on each call!

Version 0.5.1 - Beta
--------------------
-   Hotfix: Wrong If-Condition for `sourceHide`.
-   Hotfix: Wrong attribute assignment on the tail.select field for `sourceHide`.

Version 0.5.0 - Beta
--------------------
-   Info: The ES6 Edition is just a "REALLY experimental" version.
-   Info: The Priority has changed: Defined Settings > Element Attributes.
-   Add: The new French Translation.
    - Thanks to [#11](https://github.com/pytesNET/tail.select/issues/11).
-   Add: The origin select fields gets now also triggered on any `change` / `input` event.
    - Thanks to [#10](https://github.com/pytesNET/tail.select/issues/10).
-   Add: Three new designs "Bootstrap2", "Bootstrap3" and "Bootstrap4" (+ Multiple Color Schemes).
-   Add: A IE incompatible, highly modern ECMAScript 2015 (6) edition (as \*-es6.js).
-   Add: The new script version `tail.select-full(.min).js`, which contains also all language strings.
-   Add: The new additional file `langs/tail.select-all(.min).js` which contains all language strings.
-   Add: Key Listener: Use the Arrow Keys (Down, Up) to scroll through the opened dropdown list.
-   Add: Key Listener: Use the Enter / Return Key to "click" on the focused option.
-   Add: Key Listener: Use the Escape Key to close the dropdown list.
-   Add: The new helper method `create()`.
-   Add: The new option `locale`, to change the shown language strings.
-   Add: The new option `disabled`, which disables the complete tail.select instance.
-   Add: The new option `multiShowLimit`, which shows the max. number of selectable options.
-   Add: The new option `sourceBind` and `sourceHide` replaces the deprecated methods
    `bindSourceSelect` and `hideSelect` respectively.
-   Add: The new callback option `cbComplete`, which fires when the tail.select instance
    has been completely rendered.
-   Add: The new option `multiPinSelected`, which "pins" selected options to the top of the
    dropdown list.
-   Add: The new public methods `enable()` and `disable()` to en/dis -able the complete field.
    - Thanks to [#12](https://github.com/pytesNET/tail.select/issues/12).
-   Add: The new tailOptions methods `.select()`, `.unselect()`, `.enable()` and `.disable()`.
-   Add: The new tailOptions methods `.toggle()`, `.invert()` and `.all()`.
-   Add: The new tailOptions methods `.move()` to change the optgroup of an option.
-   Update: The helper methods.
-   Update: The `sourceBind` event listener has been optimized and renewed.
-   Update: The `tailOptions` class is now an ArrayLike object.
-   Update: The settings are higher ranked then the select attributes.
-   Update: Switched from SASS (SCSS) to LESS.
-   Update: Language Files and Locale / Translation System.
-   Update: The new language files are now compatible with AMD.
-   Update: Many design changes on the default and modern theme.
-   Update: Some Changes on the main RegExp on the search function.
    - Thanks to [You've been Haacked](https://haacked.com/archive/2004/10/25/usingregularexpressionstomatchhtml.aspx).
-   Update: The tail.select container will be inserted AFTER the source select field.
-   Update: Check the source select field stylings.
-   Update: A new animation flow, using `setTimeout()`.
-   Update: The `bind()` method binds global events only and gets called by the constructor.
-   Update: The internal `_replaceTypo` method has been renamed into `_r`.
-   Update: The internal `build()` method has been replaced by the API method `query()`.
-   Update: Remove the `name` attribute on the source select field when using `csvOutput`.
-   Update: The option `width` now also supports other length units next to "px".
-   Update: The option `multiContainer` allows now also "true" as value, to move selected
    options to the label element of the respective tail.select instance.
-   Update: The main callback function `cbLoopItem` can now also return `null` to skip the item
    and false to "skip / escape" the complete render Loop.
-   Update: The public method `.config()` allows now an object as first parameter to set
    multiple settings at once.
-   Update: The public method `.config()` allows now a third parameter, which prevents the
    rebuilding of the selection field, if you change any option.
-   Update: The `update*()` API methods replaces all `set*()` API methods.
-   Remove: The `tail.animate()` helper function.
-   Remove: The `bindSourceSelect` and `hideSelect` options has been replaced.
-   Remove: The `.walk()` method has been removed (use `walker()` instead).
-   Remove: The `.build()` method has been removed (use `query()` instead).
-   Remove: The `.choose()` method has been removed (use the tail options API instead).
-   Bugfix: The `placeholder` attribute is used with `.getAttribute()`, because its invalid HTML 5.
-   Bugfix: The custom group sorting hasn't worked due to an faulty statement.
-   Bugfix: The HTML option structure was invalid (`ul ul li` instead of `ul li ul li`).
-   Bugfix: The hidden csvInput field functions didn't work on specific cases.
-   Bugfix: The `clone` helper function didn't worked on the IE 9+ browsers.
-   Bugfix: Tags duplicated when preselected.
    - Thanks to [#14](https://github.com/pytesNET/tail.select/issues/14).
-   Bugfix: Non-Source Options gets duplicated.
    - Thanks to [#13](https://github.com/pytesNET/tail.select/issues/13).
-   Bugfix: The hidden csvInput field is rendered, even if the option is disabled
    - Thanks to [#12](https://github.com/pytesNET/tail.select/issues/12).
-   Bugfix: The instance ignores the disabled attribute on the main source element.
    - Thanks to [#12](https://github.com/pytesNET/tail.select/issues/12).
-   Bugfix: Check the visibility of the source select field.
    - Thanks to [#10](https://github.com/pytesNET/tail.select/issues/10).

Version 0.4.2 - Beta
--------------------
-   Bugfix: Search problem.
    - Thanks to [#8](https://github.com/pytesNET/tail.select/issues/8).

Version 0.4.1 - Beta
--------------------
-   Add: The new design `modern-white` as additional stylesheet `tail.select-modern-white.css`.
-   Add: The `.scss` preprocessor stylesheet(-ing) (I'm new at pre-processing, and I'm not sure
    if i'm using it right :/).
-   Update: Many design changed and optimizations.
-   Bugfix: Ignoring `selected` attribute.
    - Thanks to [#6](https://github.com/pytesNET/tail.select/issues/6).

Version 0.4.0 - Beta
--------------------
-   Info: First Beta Version
-   Add: A custom event listener which allows more details / arguments.
-   Add: The new `on()` method to use the new custom event listener.
-   Add: The new `config()` method to get and set configurations after init.
-   Add: The new `setCSVInput()` method to handle the CSV Input field.
-   Add: The new internal `trigger()` method which handles the events.
-   Add: The new default `createGroup()` and `createItem()` callback methods.
-   Add: The new `cbLoopItem` and `cbLoopGroup` options, which allows to use a custom callback
    function for the creation of options and groups within the dropdown list.
-   Add: The new `multiSelectAll` and `multiSelectGroup` options, which allows to (un)select all
    options or all options within a group!
-   Add: The new `walker()` function which replaces `walk()`.
-   Add: The additional class name `in-search` on search-results.
-   Update: The jQuery and MooTools Bindings.
-   Update: The `init()` method on `tailOptions` uses now also `set()`.
-   Update: The `reload()` method uses the same instance instead of creating a new one.
-   Update: The `open()`, `close()` and `toggle()` method accepts now one parameter, which disables
    the animation (if turned on).
-   Update: The Group will also be shown on search-results.
-   Update: New strings including a new string-key structure (+ updated translations).
-   Update: Assign HTML String method instead of Single Element Creation on `init()`.
-   Update: The default option for `height` has been changed to 350 (px) according to the new
    `maxHeight` JS-based setup (replaces the CSS setup).
-   Update: The sort callback on the `walker()` method is now called directly instead as
    callback within the `sort()` function.
-   Update: The CSS design has been modified and adapted to the new features.
-   Codacy: Expected '!==' and instead saw '!='. (eqeqeq).
-   Codacy: Avoid assignments in operands. (At least on if).
-   Codacy: 'tailOptions' was used before it was defined. (no-use-before-define).
-   Codacy: 'i' is already defined. (no-redeclare)
-   Rename: The internval variable `tailSelect.instances` has been renamed into `tailSelect.inst`.
-   Bugfix: Displaying of tail.select out of viewport
    - Thanks to [#4](https://github.com/pytesNET/tail.select/issues/4).
-   Bugfix: The `items` option object doesn't added a option description.
-   Bugfix: Don't close the dropdown list, when playing with the `multiContainer` element.
-   Bugfix: Already selected items can be selected again.
-   Bugfix: Load Items into the `multiContainer` and `csvInput` field on soft reloads.
-   Deprecated: The `walk()` function has been marked as deprecated and gets removed in the future.

Version 0.3.6 - Alpha
---------------------
-   Hotfix: Mismatching / Faulty Search Regex on different HTML conditions.

Version 0.3.5 - Alpha
---------------------
-   Update: Change for loop expression.
-   Codacy: 'ev' is already defined. (no-redeclare).
-   Codacy: 'ev' used outside of binding context. (block-scoped-var).
-   Bugfix: Constructor Instance check.
-   Bugfix: Wrong Version Number.
-   Hotfix: Searching when data-description containes > char
    - Thanks to [#2](https://github.com/pytesNET/tail.select/issues/2).

Version 0.3.4 - Alpha
---------------------
-   Info: I don't understand why some JS window/DOM-depended libraries exports their library to
    nodeJS using `module.exports`, so I'll just offer AMD only for the moment!
-   Add: The options `csvOutput` and `csvSeparator` as well as a hidden CSV input method.
-   Add: Support as Asynchronous Module Definition, tested with requireJS (I'm new with AMD).
-   Update: The `animate` option is now set to `true` per default!
-   Update: Correct use of the labels / placeholders.
-   Update: The string-keys (+ the german translation).
-   Bugfix: Escape RegExp Characters in Search string.

Version 0.3.3 - Alpha
---------------------
-   Hotfix: Nothing can be selected anymore when using the search function
    - Thanks to [#1](https://github.com/pytesNET/tail.select/issues/1).

Version 0.3.2 - Alpha
---------------------
-   Add: jQuery bindings, tested with jQuery v.1.12.4 only!
-   Add: MooTools bindings, text with MooTools 1.5.2 only!
-   Update: The helper method `animate()` is now backward compatible with IE >= 9.
-   Update: Add `Object.assign` check directly to the `clone()` method.
-   Codacy: Avoid assignments in operands.
-   Codacy: Use ===/!== to compare with true/false or Numbers.
-   Codacy: Always provide a base when using parseInt() functions.
-   Codacy: Unsafe assignment to innerHTML.
-   Codacy: Move the invocation into the parens that contain the function.
-   Bugfix: Wrong key assignment on the helper method `clone()`.
-   Bugfix: The `searchFocus` option doesn't work on animated dropdown elements!
-   Bugfix: Wrong return variable on the mein IIFE function wrapper.

Version 0.3.1 - Alpha
---------------------
-   Info: Official support for IE >= 9 starts now :(
-   Add: New `clone()` helper function as Fallback for IE >= 9.
-   Add: New `.IE` helper variable for Fallback use for IE >= 9.
-   Bugfix: Almost complete IE >= 9 support, except the `animate` option.

Version 0.3.0 - Alpha
---------------------
-   Info: The complete script has been re-written from scratch and doesn't depend on jQuery anymore!
-   Info: The default design uses vectors from GitHubs [Octicons](https://octicons.github.com/).
-   Info: The minified version is compressed with [jsCompress](https://jscompress.com/).
-   Add: A search function / field within the dropdown area, which is partly still in a test phase.
-   Add: A complete new interface and a complete new design (including a new demonstration).
-   Add: The tail helper methods: `hasClass()`, `addClass()`, `removeClass()`, `trigger()` and
    `animate()`.
-   Add: The `tailSelect` prototype class handles all tail.select elements and the communication
    between the user and the elements as well as between the `tailOptions` class.
-   Add: The `tailOptions` prototyping class, which manages the original options and items. This new
    class is only responsible for the main item object collections as well as the original select 
    field. The tail.select elements are handled by the main `tailSelect` class only!
-   Add: A `search`, `searchFocus` and `searchMarked` option to configure the new search feature.
-   Add: The new `bindSourceSelect` option, which allows to still use the source select field.
-   Add: The new `hideSelect` option to hide the source select field.
-   Add: The new `stayOpen` and `startOpen` option to manipulate the dropdown field.
-   Add: The new `items` option to add some additional options during the initialization, the new
    structure allows you to add and remove options also during the runtime. Use therefore the 
    methods of the `tailOptions` prototype class.
-   Add: The new `sortItems` and `sortGroups` options, to sort the order of the options and the
    option groups in the dropdown field.
-   Add: The new `animate` and `openAbove` methods to control the dropdown behavior.
-   Add: The new strings `searchField`, `searchEmpty`, and`selectLimit` has been added.
-   Add: A german locale file.
-   Update: The events has been changed into 'tail.select::open', 'tail.select::close', and
    'tail.select::{state}'
-   Update: The complete HTML / ClassNames and CSS structure has been changed.
-   Update: The `copy_class` option has been renamed into `classNames` and allows now also a
    string as well as an array parameter. (You can still use `true` to copy the class names from the 
    source select field.)
-   Update: The `single_deselect` option has been renamed into `deselect`, the behavior is the same.
-   Update: The `multi_limit` option has been renamed into `multiLimit` and requires now `-1` as
    parameter to enable the "unlimited" selection option (-1 is the default option!).
-   Update: The `multi_show_count` option has been renamed into `multiShowCount`, the behavior is
    the same.
-   Update: The `multi_move_to` option has been renamed into `multiContainer` and does now ONLY
    offer the possibility to "move" the selected options (in the form of handles) into the (with an 
    plain selector linked) container. The possibility to "move" selected options to the top of the 
    dropdown list has been removed!
-   Update: The `multi_hide_selected` option has been renamed into `hideSelected` and doesn't
    require a multiple select field anymore, the rest of the behavior is the same.
-   Update: The `description` option has been renamed into `descriptions`, the behavior is the same.
-   Update: The `hide_disabled` option has been renamed into `hideDisabled`, the behavior is almost
    the same, except that `hideDisabled` and `hideSelected` just add a new CSS class name to the 
    main tail.select element.
-   Update: The `width` option keeps his name, but allows now 'auto' (to calculate the width from
    the source select element) and `null`, to set no width at all (default).
-   Update: The `height` option keeps his name, but allows now also `null` to set no maxHeight at
    all (which is also the default, it's may better to handle this with pure CSS).
-   Update: The string options `text_empty`, `text_limit` and `text_placeholder` has been moved
    to and own core object, which is accessible through the `tail.select.strings` variable.
-   Remove: The jQuery support has been completely removed.
-   Remove: The jQuery `mousewheel` plugin has been removed.
-   Remove: The option and functionality behind `hide_on_mobile` and `hide_on_supported` has been
    completely removed. There will be probably no substitute for this.
-   Remove: The feather icons has been replaced with the GitHub Octicons.

Version 0.2.0 - Alpha
---------------------
-   Info: Tested with and Includes now jQuery 1.4.0, 1.6.0 and 1.11.2.
-   Add: (option) Specify a width.
-   Add: (option) Auto-Disable on Mobile browsers.
-   Add: (option) Auto-Disable on Unsupported browsers.
-   Add: (option) Take class names from select fields.
-   Add: 4 other functions: reload, open, close and remove.
-   Add: Extended Class Names for each tail.Select status.
-   Add: Prevent multi-selections on single select fields.
-   Add: Open the select field ONLY if the left mouse button is pressed.
-   Update: The tail.Select design.
-   Update: The tail.Select configuration.
-   Update: The tail.Select HTML structure.
-   Update: Embeds now the complete Feather icon font.
-   Update: Feather icons are used now only via css (+ new icons are used).
-   Update:	A better and bigger demonstration (./demo/index.html).
-   Update:	Change placeholder attribute to data-placeholder.
-   Bugfix: Open above Bug.
-   Bugfix: Pull-Down / Pull-Up Switch-Icon Bug.
-   Bugfix: Faulty De-Selection on Single-Select fields with optgroup.
-   Remove: (function) "stringArray".
-   Remove: (function) "getIcon" and "switchIcon".
-   Remove: (function) Some other unused functions.
-   Remove: (option) "icons".
-   Remove: (option) "multi_hide_selected".

Version 0.1.1 - Alpha
---------------------
-   Update: Some jQuery 1.4+ Compatibility fixes.
-   Update: New render function with Compatibility to jQuery 1.4+.
-   Bugfix: Optgroup-Sorting Bug.
-   Bugfix: Few small Bugs.

Version 0.1.0 - Alpha
---------------------
-   Initial Release
