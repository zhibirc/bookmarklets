/**
 *
 */


(() : void => {
    // inputs may occur out of scope of document.forms
    const inputs : HTMLCollection = document.getElementsByTagName('input');

    let $input : HTMLInputElement;
    let index : number;

    for ( index = 0; index < inputs.length ; index += 1 ) {
        $input = <HTMLInputElement>inputs[index];

        if ( $input.type.toLowerCase() === 'password') {
            $input.type = 'text';
        }
    }
})();
