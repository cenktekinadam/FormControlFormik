import { useFormik } from 'formik'
import { schema } from './schema'
import Input from './Input'
import { inputs } from './constans'

const App = () => {
  // formikin bütün özelliklerini kullanmamızı sağlayan hook 
  const formik = useFormik({
    //statede tutulacak form verilerinin ilk değeri
    initialValues: {
      email: '',
      age: '',
      pasword: '',
      paswordConfirm: '',
      terms: false,
    },
    //!Validasyon Şeması
    // Formik inpuutaki verileri tanımladıgımız validasyon şemasi ile kontrol mekanizmasına tabi tutar.Verilerin tanımladıgımız şemaya uymaması durumunda error state'ini günceller.

    validationSchema: schema,

    // Form submit oldugunda çalışccak fonksiyon otomatik olarak sayfa yenilemeyi engeller
    // 1. Parametre olarak formdaki verileri alır 
    // 2. Parametre olarak formda çalıştırılabilecek aksiyonları alır
    onSubmit: (values, actions) => {

    }
  })
  return (
    <div className='vh-100  bg-dark  vw-100 '>
      <div className='container py-5 text-white '>
        <h3 className='text-center '>Form Control Operations <span className='text-warning'>With Formik,Yup </span></h3>


        <form onSubmit={formik.handleSubmit} className='d-flex flex-column  gap-3  mt-4 '>
          {inputs.map((data, i) => (
            <Input key={i} formik={formik} data={data} />
          ))}
          <button className='btn btn-primary '>Gönder</button>
        </form>

      </div>


    </div>
  )
}

export default App