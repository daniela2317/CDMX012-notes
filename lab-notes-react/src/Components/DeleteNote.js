import { deleteDoc, doc } from "firebase/firestore";
import { db } from './Lib/FirebaseConfig';
 import swal from 'sweetalert';
 // import withReactContent from 'sweetalert2-react-content';
// const MySwal = withReactContent(Swal);

export const deleteNote = async (id) => { 
    const userDoc = doc(db, 'myNotes', id);
    swal({
        title: "Are you sure you want to delete the note?",
        text: "Once deleted, you will not be able to recover your note!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(response =>{
        if(response){
           deleteDoc(userDoc) 
        }
      });
};


