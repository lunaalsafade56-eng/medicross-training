export const ROUTES ={
    // main pages
    HOME:"/",
    ABOUT:"/about",
    CONTACT:"/contact",
    // features pages
    DOCTORS:"/doctors",
    DOCTOR_DETAILS:(id:number|string)=>`/doctors/${id}`,

}