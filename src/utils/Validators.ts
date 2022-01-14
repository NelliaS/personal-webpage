export const ValidateEmail = (email: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email)
}

export const ValidatePhoneNumber = (phoneNumber: string) => {
   const reg =  /([+]?\d{1,3}[. \s]?)?(\d{9}?)$/;
   return reg.test(phoneNumber)
}