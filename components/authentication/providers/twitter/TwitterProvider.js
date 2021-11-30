import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { TwitterAuthProvider, signInWithPopup } from '@firebase/auth';
import {auth} from 'libs/firebase';
import { useAuth } from 'libs/hooks/useAuth';
import { ProviderButton } from "ui/buttons";
import twitter from "./twitter.png"



function TwitterProvider({ children, ...props }) {
 
  const [isValidUser, setIsValidUser] = useState(null)
  const user = useAuth();
  const router = useRouter();
  const provider = new TwitterAuthProvider();

  async function signIn(){
    setIsValidUser( await signInWithPopup(auth, provider))
  }

  function handleClick(){
      signIn()
  }

  if(isValidUser){
    router.push('/todo')
  }
  
  return (
    <ProviderButton onClick={ handleClick} {...props}>
      <div>
        <Image src={twitter} alt="Twitter Provider Logo" layout="fixed" width={24} height={24} quality={30} />
        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default TwitterProvider;
