// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import {
    faCog,
    faBarcode,
    faSearch,
    faHome,
    faCashRegister,
    faDollarSign,
    faStar,
    faCode,
    faWindowClose
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faHome,//casa
    faCashRegister,//ventas
    faDollarSign,//Oferta
    faSearch,//Busqueda
    faStar,//NuevoProducto
    faBarcode,//CambioDeCodigo
    faCog,//Config
    faWindowClose//EliminarProducto

);