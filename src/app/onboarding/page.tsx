'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Step1 from '@/components/onboarding_page/Step1';

{
  /*
  Objective of each step:
  Step 1: Collect username and name
  Step 2: Explain how Muse works
*/
}

const buttonStyling =
  'bg-app-primary text-white hover:bg-app-accent h-[50px] w-[150px]';

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStepValid, setIsStepValid] = useState(true);
  const [username, setUsername] = useState<string>('Irene');
  return (
    <div className="flex flex-col min-h-dvh bg-app-background ">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <Card className="max-w-[800px] mx-auto">
          <CardHeader>
            <CardTitle className="flex gap-2">
              <Sparkles />
              Welcome to Muse, {username}!
              <Sparkles />
            </CardTitle>
            <CardDescription>Let's do some stuff</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h2 className="text-lg">Step {currentStep} of 4</h2>
              <div className="w-full h-3 bg-white/10 rounded-full">
                <div
                  className={`h-full bg-app-primary rounded-full transition-all duration-300`}
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>
            {currentStep === 1 && <Step1 verifyStep={setIsStepValid} />}
            {currentStep === 2 && null}
            {currentStep === 3 && null}
            {currentStep === 4 && null}
          </CardContent>
          <CardFooter>
            <div className="flex justify-between  w-full">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className={buttonStyling}
                >
                  Previous
                </Button>
              )}
              {currentStep < 4 ? (
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className={buttonStyling}
                  disabled={!isStepValid}
                >
                  Next
                </Button>
              ) : (
                <Button type="submit" className={buttonStyling}>
                  Complete Onboarding
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
