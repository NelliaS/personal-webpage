export const ValidateEmail = (email: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email)
}

export const ValidatePhoneNumber = (phoneNumber: string) => {
   const reg =  /^(\+42[0-1])? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;
   return reg.test(phoneNumber)
}