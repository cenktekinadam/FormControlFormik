import * as yup from 'yup';
// VALİDASYON ŞEMASI 

//inputtaki değerlerin geçerli olması için gerekli koşullar
const regex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$'
export const schema = yup.object().shape({
    // Bir alan ismi ve o alanın geçerli olması için gerekli olan koşullar tanımlanmalı 

    // Bütün yup kontrol metotları parametre olarak hata mesajı alır 
    email: yup.string().email('Lütfen geçerli bir format giriniz').required('Email zorunlu alan'),

    //Yaş alanının geçerli olması için gerekli koşullar
    age: yup.number()
        .min(18, "Yaş 18'den küçük olamaz")
        .max(100, "Yaş !00den büyük olamaz")
        .integer("Lütfen tamsayı değeri giriniz")
        .required("Yaş zorunlu bir alan"),

    //Şifre Alanı Koşulu
    password: yup.string().min(5, 'Şifreniz en az 8 karakter olmalıdır.').matches(regex, 'Şifrenizde özel karakter ve rakam kullanın').required('Şifre zorunlu bir alan'),

    //Şifreonay Koşulu
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Şifreniz Eşleşmedi'),

    //Chekbox control
    terms: yup.boolean().oneOf([true], 'Üyelik sözleşmesini okudum onaylamalısınız')

})
