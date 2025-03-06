/**
 * @author Yaroslav Surilov <zhibirc.echo@gmail.com>
 */


(() => {
    // inputs may occur out of scope of document.forms
    const inputs = document.getElementsByTagName('input');

    let $input;
    let index;

    for ( index = 0; index < inputs.length ; index += 1 ) {
        $input = inputs[index];

        if ( $input.type.toLowerCase() === 'password') {
            $input.type = 'text';
        }
    }
})();
