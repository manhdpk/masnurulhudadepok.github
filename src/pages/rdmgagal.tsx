import { Link } from "react-router-dom";
import RDMImage from "@/assets/Mohon Maaf RDM Belum dapat di Akses.png";
import RDMsukses from "@/assets/RDM sukses.png";

//const UserPage = () => {
//  return (
//    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//      <img
//        src={RDMImage}
//        alt="RDM Belum dapat diakses"
//        className="rounded-lg shadow-md max-w-lg mb-6"
//      />
//      <p className="text-xl text-gray-700 mb-6">
//        Mohon Maaf, RDM Belum dapat diakses
//      </p>
//      <Link
 //       to="/"
 //       className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
  //    >
    //    ⬅️ Kembali ke Beranda
  //    </Link>
  //  </div>
//  );
//};

//export default UserPage;
const UserPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <img
        src={RDMsukses}
        alt="Klik Akses RDM Sekarang"
        className="rounded-lg shadow-md max-w-lg mb-6"
      />
      <p className="text-xl text-gray-700 mb-6">
        Akses RDM Sekarang
      </p>

      <a
        href="http://0.tcp.ap.ngrok.io:11955/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        ⬅️ Akses RDM Sekarang
      </a>
    </div>
  );
};

export default UserPage;

