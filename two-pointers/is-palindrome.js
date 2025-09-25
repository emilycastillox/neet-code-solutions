const isPalindrome = (s) => {
    let updatedS = s
        .toLowerCase()
        .split('')
        .filter(ch => {
            let code = ch.charCodeAt(0);
            return (
                (code >= 48 && code <= 57) || // 0-9
                (code >= 65 && code <= 90) || // A-Z
                (code >= 97 && code <= 122)   // a-z
            );
        })
        .join('');

    return updatedS === updatedS.split('').reverse().join('');
    }