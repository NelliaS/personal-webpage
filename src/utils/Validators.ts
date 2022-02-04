export const ValidateEmail = (email: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email)
}

export const ValidatePhoneNumber = (phoneNumber: string) => {
   const reg =  /^((\+|00)42[0-1])+ ?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/;
   return reg.test(phoneNumber)
}