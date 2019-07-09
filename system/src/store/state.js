let admin = {
    phone: '',
    name: ''
};
try {
    let storageAdmin = window.sessionStorage.admin && JSON.parse(window.sessionStorage.admin);
    admin = storageAdmin || admin;
} catch (err) {
    console.log(err);
}
export default {
    admin
}
