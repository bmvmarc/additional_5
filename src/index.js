module.exports = function check(str, bracketsConfig) {

    const openClose = [], stack = [];
    let result = true, ind;

    if (str.length % 2 !== 0) {
        return false;
    }

    for (let i=0, len = bracketsConfig.length; i < len; i++){

        openClose.push(bracketsConfig[i][0]);
        openClose.push(bracketsConfig[i][1]);
    }

    for (let i=0, len = str.length; i < len; i++){

        ind = openClose.indexOf( str[i] );

        if (stack.length > 0){

            if (ind % 2 === 0) {

                if ( openClose[ind] !== openClose[ind + 1] ) {
                    stack.push(str[i]);
                }
                else {

                    if ( str[i] !== stack[stack.length - 1] ) {
                        stack.push(str[i]);
                    }
                    else {
                        stack.pop();
                    }
                }
            }
            else{

                elOpen = openClose[ind - 1];
                if ( elOpen !== stack.pop() ){

                    result = false;
                    break;
                }
            }
        }
        else {

            if ( (ind % 2 !== 0) && (openClose[ind-1] !== openClose[ind]) ) {
                result = false;
                break;
            }
            else {
                stack.push(str[i]);
            }
        }
    }

    if ( stack.length !== 0 )
        result = false;

    return result;

}
