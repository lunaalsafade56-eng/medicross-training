export const ROUTES ={
    // main pages
    HOME:"/",
    ABOUT:"/about",
    CONTACT:"/contact",
    PAGES:"/pages",
    // features pages
    DOCTORS:"/doctors",
    DOCTOR_DETAILS:(id:number|string)=>`/doctors/${id}`,

}