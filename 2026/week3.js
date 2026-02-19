const isPalindrome = (s) => {
       let updatedString = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        let end = updatedString.length - 1;
       
       for (let i = 0; i < updatedString.length; i++){
         let endPointer = end - i
         if (updatedString[i] !== updatedString[endPointer]){
            return false
         } 
       }
       return true
    }