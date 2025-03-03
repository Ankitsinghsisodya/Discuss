"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';

function AuthHeader() {
    const session = useSession();
    if(session.status==='loading')
        return null;
    let authContent: React.ReactNode;
    if (session.data?.user) {


        authContent = (
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        <AvatarImage src={session?.data?.user?.image || ""} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                    <h1 className='font-bold'>{session?.data?.user?.name}</h1>
                    <Separator className='my-2' />
                    <Button onClick={() => signOut()}> <LogOut />
                        Sign out
                    </Button>
                </PopoverContent>
            </Popover>
        )


    }
    else {
        authContent = (<>
            <form action={() => signIn()}>
                <Button type="submit" variant={'outline'}>Sign in</Button>
            </form>
            <form action={() => signIn()}>
                <Button type='submit'>Sign up</Button>
            </form>
        </>)
    }

    return authContent;

}

export default AuthHeader
