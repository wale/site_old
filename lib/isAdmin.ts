// This is used for administrator checking (sorry, onlooker)
export function isAdmin(email: string): boolean {
    let admins = process.env.WL_SITE_ADMIN_EMAILS;
    let array = admins.split(',').map(e => e.trim());
    return array.includes(email);
}