'use client';

import { SecondaryButton } from "./Button";
import { signIn } from 'next-auth/react';

export const Hero = () => {
    return (
        <div>
            <div className="text-6xl font-semibold">
                <span>Your crypto for tomorrow, </span>
                <span className="text-blue-500 pl-4">today</span>
            </div>
            <div className="text-2xl text-center pt-4 font-medium text-gray-600">
                Create a frictionless wallet with just a Google Account.
            </div>
            <div className="text-2xl text-center pt-2 font-medium text-gray-600">
                Convert your INR into Cryptocurrency
            </div>
            <div className="pt-4 flex justify-center mt-4">
                <SecondaryButton onClick={() => signIn("google")}>Login with Google</SecondaryButton>
            </div>
        </div>
    );
};
