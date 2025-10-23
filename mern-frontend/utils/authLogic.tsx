//just for test purposes
const from_db = "123456";
const email_from_db = "";

const authorizedAdminEmails = [
    "admin@korebusinessolutions.com",
    "superuser@korebusinessolutions.com",
];

export const OTP_LOGIC = (code:string):boolean => {
    return code === from_db;
}

export const RESET_Email_LOGIC = (email:string):boolean => {
    return email === email_from_db; 
}


export const IS_ADMIN_EMAIL = (email: string): boolean => {

    const lowerText = email.trim().toLowerCase();

     // Extract domain part of email
    const domain = lowerText.substring(lowerText.indexOf('@') + 1);

    // Check if domain starts with korebusinessolutions
    const hasValidDomain = domain.startsWith('korebusinessolutions');

    // Check if email is authorized (full email match)
    const isAuthorizedEmail = authorizedAdminEmails.includes(lowerText);

    return hasValidDomain && isAuthorizedEmail
};


export const IS_USER_EMAIL = (email: string): boolean => {

    const lowerText = email.trim().toLowerCase();

    // Extract domain part of email
    const domain = lowerText.substring(lowerText.indexOf('@') + 1);

    // Simple regex or basic check for valid user email
    const userEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

    // Check if domain starts with korebusinessolutions
    const hasValidDomain = !domain.startsWith('korebusinessolutions');

    return userEmailRegex && hasValidDomain;
};