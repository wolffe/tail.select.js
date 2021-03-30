/*
 |  THIS IS A NODEJS SCRIPT TO COMPILE  ALL THE LESS
 |  FILES INTO THE CSS FILES USING OUR CODING STYLES
 */
const file = require("fs");
const path = require("path");
const less = require("less");
const clean = require("clean-css");

/*
 |  PREPARE RENDERING
 */
const headerCSS = `@charset "UTF-8";
/*
 |  tail.select - The vanilla solution to make your HTML select fields AWESOME!
 |  @file       ./css/{design}/tail.select-{color}.css
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.5.15 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.select
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2014 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */

{css}
/*# sourceMappingURL={source} */
`; // Empty Last Line

const headerMIN = `@charset "UTF-8"; /* pytesNET/tail.select v.0.5.15 */
/* @author SamBrishes, pytesNET <sam@pytes.net> | @license MIT */
{css}
/*# sourceMappingURL={source} */`;

/*
 |  LESS RENDERING
 */
const optionsLess = {
   sourceMap: {
       outputFilename: "tail.select-source.map"
   }
};

// Render Process
const renderLess = function(content, design, color){
    less.render(content, optionsLess).then((data) => {
        let css = compileLess(data.css);
        let min = new clean({ sourceMap: true }).minify(data.css);

        let writeCSS = headerCSS.replace("{design}", design).replace("{color}", color);
            writeCSS = writeCSS.replace("{source}", `tail.select-${color}.map`);
            writeCSS = writeCSS.replace("{css}", css);
        let writeMIN = headerMIN.replace("{design}", design).replace("{color}", color);
            writeMIN = writeMIN.replace("{source}", `tail.select-${color}.min.map`);
            writeMIN = writeMIN.replace("{css}", min.styles);
            writeMIN = writeMIN.replace(/    /g, "");

        // Write Files
        file.writeFile(`../css/${design}/tail.select-${color}.css`, writeCSS, "utf8", (err) => {
            if(err) throw err;
        });
        file.writeFile(`../css/${design}/tail.select-${color}.map`, data.map, "utf8", (err) => {
            if(err) throw err;
        });

        // Write Min Files
        file.writeFile(`../css/${design}/tail.select-${color}.min.css`, writeMIN, "utf8", (err) => {
            if(err) throw err;
        });
        file.writeFile(`../css/${design}/tail.select-${color}.min.map`, min.sourceMap, "utf8", (err) => {
            if(err) throw err;
        });
    }, (err) => {
        console.log(err);
    });
};

// Compile CSS Process
const compileLess = function(css){
    css = css.replace(/^([  ]+)([^ ])/gm, (string, space, item) => {
        return " ".repeat(space.length*2) + item;
    });
    css = css.replace(/((^[\*\.\:\#\[\w]+[^\n|{]*)(\,\n|))+(\{)/gm, (string, selectors) => {
        var _return = [], current = -1, count = 0;

        string.split("\n").forEach((item, num) => {
            if(num == 0){
                _return.push("");
                current++;
            }
            item = item.trim();

            if(_return[current].length + item.length > 100){
                if(_return[current].length == 0){
                    _return[current] = item;
                } else {
                    _return.push(item);
                    current++;
                }
                count = 0;
            } else {
                _return[current] = (_return[current] + " " + item).trim();
                count += item.length;
            }
        });
        return (_return.length > 0)? _return.join("\n"): string;
    });
    css = css.replace(/ {/gm, "{");
    return css.replace(/\*\/\n\/\*/gmi, "\*\/\n\n\/\*");
};


/*
 |  START RENDERING
 */
file.readdir("./", "utf-8", (err, files) => {
    if(err) throw err;

    files.forEach((filename) => {
        console.log('Render:', filename);
        if(filename.indexOf("tail.select-") !== 0){
            return false;
        }

        // Bootstrap2 Design
        if(filename.indexOf("tail.select-bootstrap2") === 0){
            file.readFile("./" + filename, "utf-8", (err, content) => {
                if(err) throw err;

                renderLess(content + `\n@color: default;`, 'bootstrap2', 'default');
                renderLess(content + `\n@color: primary;`, 'bootstrap2', 'primary');
                renderLess(content + `\n@color: info;`, 'bootstrap2', 'info');
                renderLess(content + `\n@color: success;`, 'bootstrap2', 'success');
                renderLess(content + `\n@color: warning;`, 'bootstrap2', 'warning');
                renderLess(content + `\n@color: danger;`, 'bootstrap2', 'danger');
                renderLess(content + `\n@color: funky;`, 'bootstrap2', 'funky');
                renderLess(content + `\n@color: mystery;`, 'bootstrap2', 'mystery');
                renderLess(content + `\n@color: invert;`, 'bootstrap2', 'invert');
            });
        }

        // Bootstrap3 Design
        if(filename.indexOf("tail.select-bootstrap3") === 0){
            file.readFile("./" + filename, "utf-8", (err, content) => {
                if(err) throw err;

                renderLess(content + `\n@color: default;`, 'bootstrap3', 'default');
                renderLess(content + `\n@color: primary;`, 'bootstrap3', 'primary');
                renderLess(content + `\n@color: info;`, 'bootstrap3', 'info');
                renderLess(content + `\n@color: success;`, 'bootstrap3', 'success');
                renderLess(content + `\n@color: warning;`, 'bootstrap3', 'warning');
                renderLess(content + `\n@color: danger;`, 'bootstrap3', 'danger');
                renderLess(content + `\n@color: invert;`, 'bootstrap3', 'invert');
            });
        }

        // Bootstrap4 Design
        if(filename.indexOf("tail.select-bootstrap4") === 0){
            file.readFile("./" + filename, "utf-8", (err, content) => {
                if(err) throw err;

                renderLess(content + `\n@color: default;`, 'bootstrap4', 'default');
                renderLess(content + `\n@color: primary;`, 'bootstrap4', 'primary');
                renderLess(content + `\n@color: secondary;`, 'bootstrap4', 'secondary');
                renderLess(content + `\n@color: info;`, 'bootstrap4', 'info');
                renderLess(content + `\n@color: success;`, 'bootstrap4', 'success');
                renderLess(content + `\n@color: warning;`, 'bootstrap4', 'warning');
                renderLess(content + `\n@color: danger;`, 'bootstrap4', 'danger');
                renderLess(content + `\n@color: funky;`, 'bootstrap4', 'funky');
                renderLess(content + `\n@color: mystery;`, 'bootstrap4', 'mystery');
                renderLess(content + `\n@color: indigo;`, 'bootstrap4', 'indigo');
                renderLess(content + `\n@color: teal;`, 'bootstrap4', 'teal');
                renderLess(content + `\n@color: orange;`, 'bootstrap4', 'orange');
                renderLess(content + `\n@color: invert;`, 'bootstrap4', 'invert');
            });
        }

        // Default Design
        if(filename.indexOf("tail.select-default") === 0){
            file.readFile("./" + filename, "utf-8", (err, content) => {
                if(err) throw err;

                renderLess(content + `\n@color: light;`, 'default', 'light');
                renderLess(content + `\n@color: light; @icons: feather;`, 'default', 'light-feather');
                renderLess(content + `\n@color: dark;`, 'default', 'dark');
                renderLess(content + `\n@color: dark; @icons: feather;`, 'default', 'dark-feather');
            });
        }

        // Modern Design
        if(filename.indexOf("tail.select-modern") === 0){
            file.readFile("./" + filename, "utf-8", (err, content) => {
                if(err) throw err;

                renderLess(content + `\n@color: light;`, 'modern', 'light');
                renderLess(content + `\n@color: light; @icons: feather;`, 'modern', 'light-feather');
                renderLess(content + `\n@color: dark;`, 'modern', 'dark');
                renderLess(content + `\n@color: dark; @icons: feather;`, 'modern', 'dark-feather');
            });
        }
    });

    console.log("\\owo\\ |owo| /owo/");
});
