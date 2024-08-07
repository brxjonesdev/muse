import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { SignUpForm } from '@/forms/AccountForms';
import SocialAuth from './SocialAuth';

export default function CreateAccount() {
  return (
    <Drawer>
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <DrawerTrigger className="font-medium underline underline-offset-4 hover:text-primary">
          Sign up
        </DrawerTrigger>
      </p>
      <DrawerContent className="md:w-[57vw] md:ml-auto">
        <div className="md:min-w-[600px] md:mx-auto">
          <DrawerHeader>
            <DrawerTitle>Create a new Account</DrawerTitle>
            <DrawerDescription>Let's get you started.</DrawerDescription>
          </DrawerHeader>
          <div className="mx-4 space-y-4">
            <SignUpForm />
            <SocialAuth mode="signup" />
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button className="w-full bg-app-primary hover:bg-app-secondary">
                Nah, I'm Good.
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
