// Type definitions for communicator-global.js
// Project: create-typescript-declaration-example
// Definitions by: Muzikayise Flynn Buthelezi (zuluCoda)
/*~ If this library is callable (e.g. can be invoked as myLib(3)),
 *~ include those call signatures here.
 *~ Otherwise, delete this section.
 */
// declare function communicatorGlobal(message: string): string;

/*~ If you want the name of this library to be a valid type name,
 *~ you can do so here.
 *~
 *~ For example, this allows us to write 'var x: myLib';
 *~ Be sure this actually makes sense! If it doesn't, just
 *~ delete this declaration and add types inside the namespace below.
 */
// interface communicatorGlobal {
//     [message: string]: string;
// }

/*~ If your library has properties exposed on a global variable,
 *~ place them here.
 *~ You should also place types (interfaces and type alias) here.
 */
declare namespace communicatorGlobal {
    function greet(): string;
    let settings: Settings;
    class Settings {
        constructor(message: string);
        message: string;
    }
}