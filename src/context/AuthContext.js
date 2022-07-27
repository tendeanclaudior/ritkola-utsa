import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// import { setDoc, doc } from "firebase/firestore";
import { ref, set } from "firebase/database";
// import { v4 } from "uuid";
//import { uid } from "uid";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
//    const uuid = uid(); 
    createUserWithEmailAndPassword(auth, email, password);
    // set(ref(db, `/users/${uuid}`, email), {
    //   email: email,
    // });
  }

  // function sendData(name, nowa, city, sosmed, info, reason, once, image) {
  //   return setDoc(doc(db, "users", name), {
  //     nama: name,
  //     noWA: nowa,
  //     kota: city,
  //     medsos: sosmed,
  //     info: info,
  //     alasan: reason,
  //     pernah: once,
  //     foto: image,
  //   });
  // }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return <AuthContext.Provider value={{ signUp, logIn, user }}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
