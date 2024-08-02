"use client";

import { useSession, signOut, signIn } from 'next-auth/react';
import { PrimaryButton } from './Button';

export const Appbar = () => {
    const session = useSession();
    return (
        <div className='bg-white border-b px-2 py-2 flex justify-between mt-2 '>
            <div>
                <span className="self-center text-2xl font-semibold whitespace-nowrap items-center font-bold item-center">
                    coin
                </span>
                <span className="self-center text-2xl font-semibold whitespace-nowrap items-center font-bold item-center text-blue-500">
                    EXCNG
                </span>
            </div>
            <div className='font-medium'>
                {session.data?.user ? (
                    <PrimaryButton onClick={() => signOut()}>Logout</PrimaryButton>
                ) : (
                    <PrimaryButton onClick={() => signIn()}>SignIn</PrimaryButton>
                )}
            </div>
        </div>
    );
};
